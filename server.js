const express = require('express');
const bodyParser= require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));


app.use('/add-product', (req, res) => {
    console.log('In another middleware');
    res.send('<form action="/product" method="POST"><label for="product">Product Name</label><input type="text" name="product"><label for="size">Product size</label><input type="number" name="size"><button type="submit">Add Product</button></form>')
});
app.post('/product', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});
app.use('/', (req, res, next) => {
    console.log('In the middleware');
    res.send('<h1>This is express framework</h1>')
});

app.listen(3000);