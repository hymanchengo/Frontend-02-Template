const http = require('http');
http.createServer((request, response) => {
  let body = [];
  request.on('error', (err) => {
    console.log(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    console.log("body:", body.toString());
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<html>');
  })
  }).listen(8888);
console.log('server started')
