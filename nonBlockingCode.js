const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write(
            '<body><form action="/messages" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
        );
        res.write('</html>');
        return res.end();
    } else if (url === '/messages' && method === 'POST') {
        const data = [];
        req.on('data', (dataChunk) => {
            // console.log(dataChunk);
            data.push(dataChunk);
        });
        return req.on('end', () => {
            const parsedData = Buffer.concat(data).toString();
            const message = parsedData.split('=');
            console.log(message);
            fs.writeFileSync('messages.txt', message[1]);
            res.statusCode = 302;
            res.setHeader('location', '/');
            return res.end();
        });
    }
});

server.listen(4000);