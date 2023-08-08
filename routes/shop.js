const express=require('express');
const router=express.Router();

router.get('/', (req, res, next) => {
    console.log('In the middleware');
    res.send('<h1>This is express framework</h1>')
});

module.exports=router;