var hapi = require('hapi');
var server= new hapi.Server();


//connection
server.connection({
    host:'localhost',
    port:8080
});

//create the routes
server.route({
    method:'GET',
    path:'/',
    handler:(request,reply)=>reply("Hello there...")
});

//start
server.start((error)=>{
if(error)
throw error;
else
console.log("Server started at port:8080");
});