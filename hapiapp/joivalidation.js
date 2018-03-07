var joi = require('joi');
var hapi= require('hapi');

var server=new hapi.Server();

server.connection({
    host:'localhost',
    port:8080
});

var schema = joi.object().keys({
    username:joi.string().min(3).max(30).required(),
    password:joi.string().min(6).max(20),
    email:joi.string().email(),
    birthyear:joi.number()
});

joi.validate({username:"shivani",birthyear:878},schema,function(err,res){
 if(err)
 throw err;
 else
 console.log("welcome..");
});



server.start((error)=>{
if(error)
throw error;
else
console.log("Server started");
});