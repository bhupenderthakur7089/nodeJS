const path = require('path')
exports.notFound = (req, res) => {
    res.status(404).sendFile(path.join(__dirname, '../', 'views', 'pageNotFound.html'));
}
