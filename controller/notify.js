const path = require('path');

exports.contact = (req, res) => {
    // console.log(req.body);
    res.sendFile(path.join(__dirname, '../', 'views', 'contactUs.html'));
}

exports.success = (req, res) => {
    // console.log(req.body);
    res.sendFile(path.join(__dirname, '../', 'views', 'success.html'));
}