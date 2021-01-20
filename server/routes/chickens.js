import express from 'express'; 
import Chicken from '../models/chickenSchema.js'
import { saveNewChicken, updateHunger, updateHealth, getUser } from '../core/chickenDB.js'

const router = express.Router();


// router.post('/createChicken', async (req, res) => {
//     // print database users
//     const chickenList = await Chicken.find()
//     console.log(chickenList)

//     let msg = "";
//     console.log(`Name : ${req.body.name}`);
//     // console.log(`Password : ${req.body.password}`);
//     const foundActIdx = chickenList.findIndex(item => item.name === req.body.name);
//     // const foundPwdIdx = chickenList.findIndex(item => item.password === req.body.password);
//     if (foundActIdx === -1) msg = "Name incorrect.";
//     // else if (foundPwdIdx === -1) msg = "Password incorrect.";
//     else msg = "Create Successfully!!";
//     res.status(200).send(msg);
//     console.log(msg);
// })
router.post('/updateHappiness', async (req, res) => {
    // print database users
    const msg = await updateHunger(req.body.name, req.body.happiness, req.body.updateTime)
    const chicken = await Chicken.find({name: req.body.name})
    console.log(chicken)

    console.log(`Name : ${req.body.name}`);
    // console.log(`Password : ${req.body.password}`);
    // const foundActIdx = chickenList.findIndex(item => item.name === req.body.name);
    // const foundPwdIdx = chickenList.findIndex(item => item.password === req.body.password);
    // if (foundActIdx === -1) msg = "Name incorrect.";
    // else if (foundPwdIdx === -1) msg = "Password incorrect.";
    // else msg = "Create Successfully!!";

    res.status(200).send(msg);
    console.log(msg);
})
//username hunger message health
//no return
//return
router.post('/updateHunger', async (req, res) => {
    // print database users
    // if(req.body.message === 'return')
    // console.log("hi", req.body.hunger)

    const msg = await updateHunger(req.body.account, req.body.hunger, req.body.message)
    const chicken = await Chicken.find({account: req.body.account})
    console.log("router hunger",msg)
    console.log("router hunger",chicken)

    console.log(`Name : ${req.body.name}`);
    // console.log(`Password : ${req.body.password}`);
    // const foundActIdx = chickenList.findIndex(item => item.name === req.body.name);
    // const foundPwdIdx = chickenList.findIndex(item => item.password === req.body.password);
    // if (foundActIdx === -1) msg = "Name incorrect.";
    // else if (foundPwdIdx === -1) msg = "Password incorrect.";
    // else msg = "Create Successfully!!";

    res.status(200).send(chicken);
    console.log(msg);
})
router.post('/updateHealth', async (req, res) => {
    // print database users
    // console.log('here', window.localStorage.getItem('account'))
    // const account = window.localStorage.getItem('account')
    const msg = await updateHealth("peter", req.body.name, req.body.health, req.body.updateTime)
    const chicken = await Chicken.find({name: req.body.name})
    console.log(chicken)

    console.log(`Name : ${req.body.name}`);
    // console.log(`Password : ${req.body.password}`);
    // const foundActIdx = chickenList.findIndex(item => item.name === req.body.name);
    // const foundPwdIdx = chickenList.findIndex(item => item.password === req.body.password);
    // if (foundActIdx === -1) msg = "Name incorrect.";
    // else if (foundPwdIdx === -1) msg = "Password incorrect.";
    // else msg = "Create Successfully!!";

    res.status(200).send(msg);
    console.log(msg);
})
router.post('/getUser', async (req, res) => {
    const message = await getUser(req.body.account);
    // print database users
    console.log("router: ", message)
    res.status(200).send(message);
    let msg = "";
    // if (message === `New Chicken ${req.body.name} saved`) {
    //     msg = "Create Successfully!!";
    //     res.status(200).send(message);
    // }
    // console.log(msg);
})
router.post('/createChicken', async (req, res) => {
    const message = await saveNewChicken(req.body.account, req.body.name, req.body.health, req.body.happiness, req.body.hunger, req.body.createTime, req.body.lifeTime, req.body.stage);
    // print database users
    console.log("here", req.body)
    const chickenList = await Chicken.find();
    console.log("router", message)
    res.status(200).send(message);
    let msg = "";
    if (message === `New Chicken ${req.body.name} saved`) {
        msg = "Create Successfully!!";
        
    }
    // else if (message === `Email \"${req.body.email}\" duplicate`) {
    //     msg = "Email duplicate.";
    //     res.status(200).send(msg);
    // }
    // else if (message === `Account \"${req.body.account}\" duplicate`) {
    //     msg = "Account duplicate.";
    //     res.status(200).send(msg);
    // }
    // else {
    //     msg = "Signup failed!!";
    //     res.status(500).send(msg)
    // }
    console.log(msg);
})
export default router