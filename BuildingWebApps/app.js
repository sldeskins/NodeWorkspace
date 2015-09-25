var http = require('http');

http.createServer(function(request, response){
	response.writeHead({
		'Content-Type':'text/plain'
	})
	response.end('hello world from the build a node app demo :-)');
}).listen(3000);