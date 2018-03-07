var app = require('express')();
var http = require('http').Server(app);
var socket = require('socket.io')(http);

//console.log(io, "io");

app.get('/', function(req, res) {
   res.sendFile(__dirname + '/views/index.html');
});

//Whenever someone connects this gets executed
socket.on('connection', function() {
    var id=socket.id;
   console.log('A user connected with socket id:'+id);

   //Whenever someone disconnects this piece of code executed
   socket.on('disconnect', function () {
      console.log('A user disconnected',socket.id);
   });
});

http.listen(8000, function() {
   console.log('listening on port:8000');
});
