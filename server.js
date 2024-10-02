

//create a server in js

// const http = require('http');


// const serve = http.createServer((request, response) => {console.log('a new request has been recieved ')})

// server.listen(8000, '127.0.0.1', () => {console.log('Server has started')})


//create a web server in node js
const http = require('http');

const server = http.createServer((request, response) => {
    response.end('Hello from the server');
    console.log('a new request has been received');
    //console.log(response);
});

server.listen(8000, '127.0.0.1', () => {
    console.log('a new server has started');
});
