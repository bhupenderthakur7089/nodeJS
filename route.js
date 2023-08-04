const fs = require('fs');
const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>Enter Message</title><head>');
        res.write(
            '<body><form action="/messages" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
        );
        res.write('</html>');
        return res.end();
    } else if (url === '/messages' && method === 'POST') {
        const data = [];
        req.on('data', (dataChunk) => {
            data.push(dataChunk);
        });
        return req.on('end', () => {
            const parseData = Buffer.concat(data).toString();
            const message = parseData.split('=');
            fs.writeFileSync('messages.txt', message[1]);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        })
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
}

// module.exports = requestHandler;
// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some text';

exports.handler = requestHandler;
exports.someText = 'Manual Module Export Demo';