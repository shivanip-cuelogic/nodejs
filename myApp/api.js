var express= require('express');
var jsonwebtoken= require('jsonwebtoken');
var app= express();

app.get('/api',function(req,res){
res.json({
    message:"hey there"
})
});

app.post('/api/posts',function(req,res){
    res.json({
        message:"post request created.."
    });
});

app.listen(8000,function(req,res){
console.log("server created at port 8000");

});

   


