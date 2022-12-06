// app.js

const http = require("http");
const fs = require('fs')

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, response) => {
  // Set a response type of plain text for the response
  response.writeHead(200, { "Content-Type": "text/plain" });

  // Send back a response and end the connection
  fs.readFile("./index.html", function (err, html) {
    if (err) {
      throw err;
    }
    response.writeHeader(200, { "Content-Type": "text/html" });
    response.write(html);
    response.end();
  });
});

// Start the server on port 3000
app.listen(3000, "127.0.0.1");
console.log("Node server running on port 3000");
