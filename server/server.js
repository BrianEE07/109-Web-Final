import express from 'express';
const app = express();
const port = process.env.PORT || 4000
import cors from 'cors' 
import bodyParser from 'body-parser';
import homeRouter from './routes/home.js'; 
import usersRouter from './routes/users.js';
// 之後拿掉
import { saveNewUser, clearDB, printDB } from './core/userDB.js'
// 之後拿掉
app.use(cors())
app.use(bodyParser.json());
app.use('/', homeRouter);
app.use('/users', usersRouter);

import mongoose from 'mongoose' 
import dotenv from 'dotenv-defaults'
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
        
    await clearDB();
    // await saveNewUser("", "", "", []);
    await saveNewUser("brian_email", "brian", "brianpassword", []);
    await saveNewUser("ray_email", "ray", "raypassword", []);
    await saveNewUser("ric_email", "ric", "ricpassword", []);
    await saveNewUser("ric_email", "ric", "ricpassword", []);
    await printDB();
});
