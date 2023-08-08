const express=require('express');
const router=express.Router();

router.get('/add-product', (req, res) => {
    console.log('In another middleware');
    res.send('<form action="/admin/product" method="POST"><label for="product">Product Name</label><input type="text" name="product"><label for="size">Product size</label><input type="number" name="size"><button type="submit">Add Product</button></form>')
});
router.post('/product', (req, res) => {
    console.log(req.body);
    res.redirect('/shop');
});

module.exports=router;