const express = require('express');
const router = express.Router();
const path = require('path');
const products = require('../controller/products');
const notify = require('../controller/notify');

router.get('/addProduct', products.getAddProduct);

router.post('/product', products.postAddProduct);

router.get('/contact', notify.contact);

router.get('/success', notify.success);

module.exports = router;