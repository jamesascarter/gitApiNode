var server = require('express')();
var http = require('http').createServer(server);


server.set('views', __dirname + '/views');
server.set('view engine', 'ejs');

server.get('/', function(request, response){
	response.send('<h1>Hello Mate!</h1>')
});

http.listen(3000, function(){
	console.log('Listening on port 3000')
});