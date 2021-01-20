import express from 'express';
import cors from 'cors' 
import bodyParser from 'body-parser';
import homeRouter from './routes/chickens.js'; 
import usersRouter from './routes/users.js';
import mongoose from 'mongoose' 
import dotenv from 'dotenv-defaults'
import http from 'http';
import WebSocket from 'ws';
import GG from './game.js';
// 之後拿掉
import { saveNewUser, clearDB, printDB } from './core/userDB.js'
import { saveNewChicken, printChDB, updateHunger, clearChDB, updateHealth, updateHappiness, getUser , updateLifeTime, updateStage, } from './core/chickenDB.js'
// 之後拿掉
const app = express();
const server = http.createServer(app)
const port = process.env.PORT || 4000
const WSport = 4001
app.use(cors())
app.use(bodyParser.json());
app.use('/chickens', homeRouter);
app.use('/users', usersRouter);
dotenv.config()

const wss = new WebSocket.Server({ server });

if (!process.env.MONGO_URL) { 
    console.error('Missing MONGO_URL!!!') 
    process.exit(1)
}

const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(process.env.MONGO_URL, dbOptions) 

const db = mongoose.connection;

db.on('error', (error) => {
    console.error(error)
})

db.once('open', async () => { 
    console.log('MongoDB connected!');
    app.listen(port, () =>
        console.log(`Web Final app listening on port ${port}!`));
    
    var today = new Date();
    const month = today.getMonth()+1
    const date = today.getDate()
    const hour = today.getHours()
    const minute = today.getMinutes()
    const second = today.getSeconds()
    var time = month+'-'+ date+'-'+ hour+ ":" + minute + ":" + second;
    var t = today.getTime()
    // const account = localStorage.getItem('')
    const account = "peter"
    const name = 0
    // await clearChDB();
    // const chick = await saveNewChicken(account, name, 100, 100, 180, t, 0, 0);
    // await getUser(account)
    // var t1 = today.getTime()
    // await printChDB();
    // await updateHunger(account, 20, "no return");
    // await updateLifeTime(account, 3);
    // await saveNewUser("", "", "", []);
    // await saveNewUser("brian_email", "brian", "brianpassword", []);
    // await saveNewUser("ray_email", "ray", "raypassword", []);
    // await saveNewUser("ric_email", "ric", "ricpassword", []);
    // await saveNewUser("ric_email", "ric", "ricpassword", []);
    // await printChDB();
    // await updateHP("peter", 40, t1);
    // await printChDB();
    // await updateHappiness("peter", 3000, t1);

    await printChDB();
    
    // await printDB();


    // console.log(t)
    // console.log(t1)
    // WebSocket
    wss.on('connection', (ws) => {
        const sendData = (data) => {
          ws.send(JSON.stringify(data))
          console.log("data sent")
        }
        sendData({type: "welcome", value: 0})

        ws.onmessage = async (mes) => {
          const { data } = mes;
          const { message, account } = JSON.parse(data);
          if (message === 'Login') {
            const userdata = await getUser( { account: account } );
            console.log(`User: ${userdata[0].account} login, getting chicken...`);
            console.log(`Initial data: lifetime: ${userdata[0].lifeTime}, stage: ${userdata[0].stage}, health: ${userdata[0].health}, hunger: ${userdata[0].hunger}, happiness: ${userdata[0].happiness}`);
            const chicken = new GG(
                // get all DB data of user 
                userdata[0].account,
                userdata[0].lifeTime,
                userdata[0].stage,
                userdata[0].health,
                userdata[0].hunger,
                userdata[0].happiness
            )
            if (chicken.stage !== 3) { // chicken is still alive.
                chicken.growUp(1, true, sendData);
                chicken.gettingHungry(1, true, sendData);
                // chicken.gettingSad(1, true, sendData);
                chicken.recoverHealth(false, sendData);
            }
            // if connection close or logout, update slowly and store to db without send to frontend 
            ws.onmessage = (m) => {
                const { data: d } = m;
                const { mess , acc} = JSON.parse(d);
                if (mess === 'Logout') {
                    console.log(`User: ${userdata[0].account} logout...`);
                    chicken.clearInterval();
                    chicken.growUp(10, false, sendData);
                    chicken.gettingHungry(10, false, sendData);
                    // chicken.gettingSad(10, false, sendData);
                    chicken.recoverHealth(false, sendData);
                }
            }
            ws.onclose = () => {
                console.log(`User: ${userdata[0].account} lost connection...`);
                chicken.clearInterval();
                chicken.growUp(10, false, sendData);
                chicken.gettingHungry(10, false, sendData);
                // chicken.gettingSad(10, false, sendData);
                chicken.recoverHealth(false, sendData);
            } 
          }
        }
    })
    server.listen(WSport, () => {
        console.log(`Websocket Listening on http://localhost:${WSport}`)
      })
});
