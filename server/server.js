import express from 'express';
const app = express();
const port = process.env.PORT || 4000
import homeRouter from './routes/home.js'; 
import usersRouter from './routes/users.js';
import cors from 'cors' 
app.use(cors())


import mongoose from 'mongoose' 
import User from './models/user.js'
// require('dotenv-defaults').config();
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
mongoose.connect(process.env.MONGO_URL, dbOptions) .then(res => {
console.log('mongo db connection created') })
const db = mongoose.connection;


const saveUser = (id, name) => { User.countDocuments({name}, (err, count) => {
    if (count)
        console.log(`data ${name} exists!!`);
    else {
        const user = new User({id, name}); user.save((err) => {
        if (err) console.error(err);
        console.log(`data ${name} saved!!!`); 
        });
     };
    })
};
db.once('open', () => { 
    saveUser(57, "Ric");
    saveUser(57, "Ric");
    saveUser(56, "pig");
    saveUser(55, "goose"); 
    app.listen(port, () =>
// 把 Express server 放在這邊啟動 
        console.log(`Example app listening on port ${port}!`)
 ); });



import bodyParser from 'body-parser';
// Parses the text as JSON and exposes the resulting // object on req.body.
app.use(bodyParser.json());
app.use('/', homeRouter);
app.use('/users', usersRouter);

// app.listen(port, () =>
//     console.log(`Example app listening on port ${port}!`),
// );