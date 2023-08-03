// const fs=require('fs');
// fs.writeFileSync('hello.txt','This is the first text file created using node JS');
const http = require('http');

const server = http.createServer(function reqListener(req, res) {
    // console.log('Bhupender');
    res.write('<html>');
    res.write('<head><title>Print Name</title></head>');
    res.write('<body><h1>Bhupender</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(4000);
