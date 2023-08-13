const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin', adminRoute);
app.use('/shop', shopRoute);
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'pageNotFound.html'));
})
app.listen(3000);