const path = require('path');

exports.getAddProduct = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'addProduct.html'));
};

exports.postAddProduct = (req, res) => {
    res.redirect('/shop');
}

exports.getProducts = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
}