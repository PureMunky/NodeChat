var http = require('http'),
	WebSocketServer = require('ws').Server,		// npm install ws
	wss = new WebSocketServer({port: 8080});

wss.broadcast = function (data) {
	for(var i = 0; i < this.clients.length; i++)
		this.clients[i].send(data);
};

wss.on('connection', function (ws) {
	console.log('connected');

	ws.on('open', function () {
		console.log('connected');
		ws.send('welcome');
	});

	ws.on('close', function () {
		console.log('disconnected');
	});

	ws.on('message', function (data, flags){
		try {
			var jsonData = JSON.parse(data);
			console.log('message recieved ' + jsonData.test);
			wss.broadcast(jsonData.test);
		} catch (e) {
			console.log('message recieved ' + data);
			wss.broadcast(data);
		}
	});
});


