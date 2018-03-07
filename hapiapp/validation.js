var hapi= require('hapi');
var joi = require('joi');

var server= new hapi.Server();
server.connection({
    host:'localhost',
    port:8080
}); 
server.route({
    method:'GET',
    path:'/',
    config:{
        handler:function(req,rep){
            rep("your response is submitted successfully");
             }
    },
    validate:{
                payload:{
                    email:joi.string().email().required(),
                    password:joi.string().min(6).max(10).required()
                }
             }
});

server.start((err)=>{
    if(err)
    throw err;
    else
    console.log("server started ");
})