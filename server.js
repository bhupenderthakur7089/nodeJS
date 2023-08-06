const http = require('http');
const route1 = require('./route')
console.log(route1.someText);
const server = http.createServer(route1.handler);

server.listen(3000);