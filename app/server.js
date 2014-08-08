var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
    //console.log("Starting Node Server");
}).listen(1337, '127.0.0.1');