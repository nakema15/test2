var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!!! (from Dockerfile!)\n');
}).listen(80, '0.0.0.0');
console.log('Server running at http://0.0.0.0:80/');
