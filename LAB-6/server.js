const http = require('http');
const fs = require('fs');
const port = 3000;
const hostname = '127.0.0.1';

const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  
  fs.readFile('index.html', function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write('Error: File not found');
    } else {
      res.write(data);
    }
    res.end(); // You should end the response inside the callback.
  });
  
  // This line was outside the fs.readFile callback, so I moved it inside.
  // You should end the response after reading the file.
  // Also, I removed the extra message since it would always be sent.
  // res.write('Hello Everyone this is your server 007 responding');
});

server.listen(port, function (error) {
  if (error) {
    console.log('Some error has occurred', error);
  } else {
    console.log('Server is active and is listening on port: ' + port);
  }
});
