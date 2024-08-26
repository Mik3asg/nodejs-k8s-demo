// Import the http module
const http = require('http');

// Define the port to listen on
const port = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Send the response body "Hello World"
  res.end('Version 1 of my simple app!\n');
});

// Make the server listen on the specified port
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

