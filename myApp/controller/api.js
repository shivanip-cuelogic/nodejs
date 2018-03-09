var express= require('express');
var jsonwebtoken= require('jsonwebtoken');
var app= express();
var bodyparser = require('body-parser');
// app.get('/api',function(req,res){
// res.json({
//     message:"hey there"
// })
// });

app.post('/api',function(req,res){
res.status(200).json({
    message:"post request created.."
});
}).listen(8080);    

// app.listen(8000,function(req,res){
// console.log("server created at port 8000");

// });

