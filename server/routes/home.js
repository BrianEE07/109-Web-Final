import express from 'express'; 
const router = express.Router();

router.get('/', (req, res) => {
    console.log("GET is evoked!");
    res.send('Hello, World!'); 
});

router.post('/', (req, res) => { 
    // console.log(req.body.text);
    res.send('Received a POST HTTP method');
    
});
router.post('/users', (req, res) => { 
    // console.log(req.body.text);
    res.send('Received');
    
});
router.put('/', (req, res) => { 
    // console.log(req)
    res.send('Received a PUT HTTP method');
});
router.delete('/', (req, res) => { 
    res.send('Received a DELETE HTTP method');
});

export default router