import express from 'express'; 

import User from '../models/userSchema.js'
import { saveNewUser } from '../core/userDB.js'
const router = express.Router();
router.post('/login', async (req, res) => {
    // print database users
    const userList = await User.find()
    console.log(userList)
    // MONGO_URL=mongodb+srv://peter:aabbccv@cluster0.4teca.mongodb.net/Cluster0?retryWrites=true&w=majority

    let msg = "";
    console.log(`Account : ${req.body.account}`);
    console.log(`Password : ${req.body.password}`);
    const foundActIdx = userList.findIndex(item => item.account === req.body.account);
    const foundPwdIdx = userList.findIndex(item => item.password === req.body.password);
    if (foundActIdx === -1) msg = "Account incorrect.";
    else if (foundPwdIdx === -1) msg = "Password incorrect.";
    else msg = "Login Successfully!!";
    res.status(200).send(msg);
    console.log(msg);
})

router.post('/signup', async (req, res) => {
    const message = await saveNewUser(req.body.email, req.body.account, req.body.password, req.body.chicken);
    // print database users
    const userList = await User.find();
    console.log(userList)

    let msg = "";
    if (message === `User ${req.body.account} saved`) {
        msg = "Signup Successfully!!";
        res.status(200).send(msg);
    }
    else if (message === `Email \"${req.body.email}\" duplicate`) {
        msg = "Email duplicate.";
        res.status(200).send(msg);
    }
    else if (message === `Account \"${req.body.account}\" duplicate`) {
        msg = "Account duplicate.";
        res.status(200).send(msg);
    }
    else {
        msg = "Signup failed!!";
        res.status(500).send(msg)
    }
    console.log(msg);
})
export default router