var nChat = (function () {
	var that = this,
    		server = 'ws://localhost:8080';
	if ("WebSocket" in window)
	{
		console.log("WebSocket is supported by your Browser!");
		// Let us open a web socket
		var ws = new WebSocket(server);

		ws.onopen = function()
		{
			// Web Socket is connected, send data using send()
			ws.send("Message to send");
			console.log("Message is sent...");
		};

		ws.onmessage = function (evt) 
		{ 
			var received_msg = evt.data;
			console.log("Message is received..." + received_msg);
		};
		ws.onclose = function()
		{ 
			// websocket is closed.
			console.log("Connection is closed..."); 
		};
	}
	else
	{
		// The browser doesn't support WebSocket
		console.log("WebSocket NOT supported by your Browser!");
	}
	
	that.send = function (msg) {
		if(typeof msg === 'object') {
			ws.send(JSON.stringify(msg));
		} else {
			ws.send(msg);
		}
	};

	return that;
})();
