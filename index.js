const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Hello World!!!</h1>');
  res.end();
}).listen(80);

console.log('Server running at http://localhost:80/');
