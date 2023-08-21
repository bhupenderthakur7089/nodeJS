const fs = require('fs');
const pathModule = require('path');

module.exports = class Product {
    constructor(name, size) {
        this.productName = name;
        this.productSize = size;
    }
    save() {
        const path = pathModule.join(__dirname, '../', 'data', 'products.json');
        fs.readFile(path, (err, fileContent) => {
            let items = [];
            if (!err) {
                items = JSON.parse(fileContent);
            }
            items.push(this);
            fs.writeFile(path, JSON.stringify(items), err => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {
        const path = pathModule.join(__dirname, '../', 'data', 'products.json');
        fs.readFile(path, (err, fileContent) => {
            if (err) {
                cb([]);
            }
            cb(JSON.parse(fileContent));
        });
    }
}