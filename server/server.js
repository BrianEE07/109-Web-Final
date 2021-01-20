import express from 'express';

import cors from 'cors' 
import bodyParser from 'body-parser';
import homeRouter from './routes/chickens.js'; 
import usersRouter from './routes/users.js';
import mongoose from 'mongoose' 
import dotenv from 'dotenv-defaults'
// 之後拿掉
import { saveNewUser, clearDB, printDB } from './core/userDB.js'
import { saveNewChicken, printChDB, updateHunger, clearChDB, updateHealth, updateHappiness, getUser , updateLifeTime, updateStage, } from './core/chickenDB.js'
// 之後拿掉
const app = express();
const port = process.env.PORT || 4000
app.use(cors())
app.use(bodyParser.json());
app.use('/chickens', homeRouter);
app.use('/users', usersRouter);


dotenv.config()

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
    
    // await clearChDB();
    const chick = await saveNewChicken(account, "fat", 100, 100, 180, t, 0, 0);
    // await getUser(account)
    // var t1 = today.getTime()
    // await printChDB();
    // await updateHunger(account);
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
});
