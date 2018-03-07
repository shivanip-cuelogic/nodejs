var express = require('express');
var app= express();
var path = require('path');
// var 

app.set('view engine','ejs');
// app.use(express.static(path.resolve(__dirname+ '/views')));
app.get('/',function(req,res){
res.send("hello");
});

app.get('/profile',function(req,res){
res.send("my profile");
});

app.get('/profile/:name',function(req,res){
    //res.send("You are visiting profile of:"+req.params.name);
    res.render('profile',{name:req.params.name});
});

app.listen(3000,function(err){
    console.log("server started at port 3000");
});