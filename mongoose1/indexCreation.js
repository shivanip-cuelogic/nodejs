var express = require('express');
var app= express();

app.serverCreate()
/////////////////////index creation//////////////////////
var mongoIndex = function(db,callback){
    var collection= db.collection('userinfo');
    collection.createIndex(
        {name:1},function(err,result){
            if(err)
            throw err;
            else
            console.log("Index created successfully");
        }
    );

};