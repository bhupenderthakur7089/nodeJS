const Product = require('../models/product');
const path = require('path');

exports.getAddProduct = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'addProduct.html'));
};

exports.postAddProduct = (req, res) => {
    const product = new Product(req.body.productName, req.body.productSize);
    product.save();
    res.redirect('/shop');
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    });

}