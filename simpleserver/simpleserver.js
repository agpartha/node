const http = require('http');
const os = require('os');

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url + ', from ' + request.connection.remoteAddress);
  response.writeHead(200);
  response.end('Hello ' + request.connection.remoteAddress + ', I am a hello server(' + os.hostname() + ')\n');
}
var www = http.createServer(handleRequest);
www.listen(8080);