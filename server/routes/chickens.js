import express from 'express'; 
import Chicken from '../models/chickenSchema.js'
import { saveNewChicken, updateHunger, updateHP } from '../core/chickenDB.js'

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
router.post('/updateHunger', async (req, res) => {
    // print database users
    const msg = await updateHunger(req.body.name, req.body.hunger, req.body.updateTime)
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
router.post('/updateHP', async (req, res) => {
    // print database users
    const msg = await updateHP(req.body.name, req.body.hp, req.body.updateTime)
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
router.post('/createChicken', async (req, res) => {
    const message = await saveNewChicken(req.body.name, req.body.hp, req.body.hunger, req.body.createTime);
    // print database users
    const chickenList = await Chicken.find();
    console.log(chickenList)

    let msg = "";
    if (message === `New Chicken ${req.body.name} saved`) {
        msg = "Create Successfully!!";
        res.status(200).send(msg);
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