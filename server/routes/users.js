import express from 'express'; 
const router = express.Router();
import User from '../models/user.js'

router.get('/', async (req, res) => { const userList = await User.find();
    if (userList.length) res.status(200).send({contents:userList});
    else res.status(500).send([]);
    });

router.post('/', (req, res) => {
    res.send('POST HTTP method on users resource');
});
router.put('/:userId',(req, res) => {
    return res.send(
    `PUT HTTP method on users/ ${req.params.userId} resource`,
    );
})


export default router