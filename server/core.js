var http = require('http'),
	WebSocket = require('ws'),		// npm install ws
	ws = new WebSocket('ws://localhost'),
	port = 1337,
	log = [];

ws.on('open', function () {
	ws.send('welcome');
});

ws.on('message', function (data, flags){
	switch (data.action) {
		case 'get':
			ws.send(log);
			break;
		case 'send':
			log.push(data.text)
			break;
		default:
			ws.send(log[log.length - 1]);
	}
});

http.createServer(function (request, response) {
 	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('Start of List\n');
	
	for(var i = 0; i < log.length, i++) {
		response.write(log[i] + '\n');
	}
	
	response.end('End of List\n');
	
	//writeServerLog(request);
}).listen(port);