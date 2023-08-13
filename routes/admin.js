const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/addProduct', (req, res) => {
    // console.log('In another middleware');
    res.sendFile(path.join(__dirname, '../', 'views', 'addProduct.html'));
});

router.post('/product', (req, res) => {
    console.log(req.body);
    res.redirect('/shop');
});

module.exports = router;