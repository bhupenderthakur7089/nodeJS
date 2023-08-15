const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
const error = require('./controller/error');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin', adminRoute);
app.use('/shop', shopRoute);
app.use(error.notFound);
app.listen(3000);