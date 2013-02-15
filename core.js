var http = require('http'),
	log = [];

http.createServer(function (request, response) {
 	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('Start of List\n');
	
	for(var i = 0; i < log.length, i++) {
		response.write(log[i] + '\n');
	}
	
	response.end('End of List\n');
	
	//writeServerLog(request);
}).listen('getlist');