// adapted from http://nodejs.org/api/synopsis.html

http  = require("http")
cfenv = require("cfenv")

// get environmentall information for this app
appEnv = cfenv.getAppEnv()

// create a server with a simple request handler
server = http.createServer(onRequest)

// start the server on the calculated port and host
server.listen(appEnv.port, appEnv.bind, function() {
    console.log("server starting on " + appEnv.url)
})

//-----------------------------------------------
function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"})
  response.end("Hello World\n")
}
