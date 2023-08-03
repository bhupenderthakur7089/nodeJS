// const fs=require('fs');
// fs.writeFileSync('hello.txt','This is the first text file created using node JS');
const http = require('http');

const server = http.createServer(function reqListener(req, res) {
    // console.log('Bhupender');
    if (req.url == '/') {
        res.write('<html>');
        res.write('<head><title>Print Name</title></head>');
        res.write('<body><h1>Welcome to my Node Js project</h1></body>');
        res.write('</html>');
        res.end();
    } else if (req.url == '/home') {
        res.write('<html>');
        res.write('<head><title>Print Name</title></head>');
        res.write('<body><h1>Welcome home</h1></body>');
        res.write('</html>');
        res.end();
    } else if (req.url == '/about') {
        res.write('<html>');
        res.write('<head><title>Print Name</title></head>');
        res.write('<body><h1>Welcome to about us page</h1></body>');
        res.write('</html>');
        res.end();
    } else if (req.url == '/node') {
        res.write('<html>');
        res.write('<head><title>Print Name</title></head>');
        res.write('<body><h1>Welcome to my Node Js project</h1></body>');
        res.write('</html>');
        res.end();
    }
});

server.listen(4000);
