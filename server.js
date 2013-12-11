// adapted from http://nodejs.org/api/synopsis.html

var http = require("http")

var portString = process.env.PORT || "3000"
var port       = parseInt(portString, 10)

http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"})
  response.end("Hello World\n")
}).listen(port)

console.log("Server running at http://127.0.0.1:" + port + "/")
