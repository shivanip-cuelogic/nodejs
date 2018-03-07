var express= require('express');
var app=express();
var port=8000;

// routes
app.get('/',function(request,response){
response.send("Express js code");
});

//connection at port
app.listen(port, function(){
    console.log("Connection made at port no:"+port);
});