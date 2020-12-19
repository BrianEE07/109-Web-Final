import express from 'express'; 
const router = express.Router();
import User from '../models/userSchema.js'

router.post('/users', async (req, res) => {
    const userList = await User.find().exec((err, data) => {
        if (err) throw err;
        console.log("UserList");
        console.log(data);
        return data;
    });
    // const userList = [{account: "pp", password: "gg"}];
    if (userList.length) {
        console.log(`Account : ${req.body.account}`);
        console.log(`Password : ${req.body.password}`);
        const foundActIdx = userList.findIndex(item => item.account === req.body.account);
        const foundPwdIdx = userList.findIndex(item => item.password === req.body.password);
        let msg = [];
        if (foundActIdx === -1) msg = "Account incorrect!!";
        else if (foundPwdIdx === -1) msg = "Password incorrect!!";
        else msg = "Login Successfully!!";
        console.log(msg);
        res.status(200).send(msg);
    }
    else {
        msg = "userList is empty!!"
        res.status(500).send(msg)
    }
})


// router.get('/', async (req, res) => { const userList = await User.find();
//     if (userList.length) res.status(200).send({contents:userList});
//     else res.status(500).send([]);
//     });

// router.post('/', (req, res) => {
//     res.send('POST HTTP method on users resource');
// });
// router.put('/:userId',(req, res) => {
//     return res.send(
//     `PUT HTTP method on users/ ${req.params.userId} resource`,
//     );
// })
export default router