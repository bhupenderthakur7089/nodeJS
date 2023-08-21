const fs = require('fs');
const pathModule = require('path');
const path = pathModule.join(__dirname, '../', 'data', 'products.json');

const getFileContent = (cb => {
    fs.readFile(path, (err, fileContent) => {
        if (err) {
            return cb([]);
        }
        return cb(JSON.parse(fileContent));
    });
});

module.exports = class Product {
    constructor(name, size) {
        this.productName = name;
        this.productSize = size;
    }

    save() {
        getFileContent(items => {
            items.push(this);
            fs.writeFile(path, JSON.stringify(items), err => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {
        getFileContent(cb);
    }
}