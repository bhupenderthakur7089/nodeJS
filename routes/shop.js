const express = require('express');
const router = express.Router();
const path = require('path');
router.get('/', (req, res, next) => {
    console.log('In the middleware');
    // res.send('<h1>This is express framework</h1>')
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
});

module.exports = router;