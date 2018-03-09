var https = require('https');
var fs = require('fs');
var express = require('express');
var app = express(); 
var options = {
    key: fs.readFileSync('./key.pem', 'utf8'),
    cert: fs.readFileSync('./server.crt', 'utf8')
    };



https.createServer(options,function(request,response){
    //response.send("hello");

}).listen(3000);

app.post('/about',function(req,res){
    res.send("hello");
}
);

console.log("listening to port 3000");


