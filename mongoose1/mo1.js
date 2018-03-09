
//dependencies
var mongoose = require('mongoose');
var http=require('http');
var Schema = require('./moschema');
var bodyparser= require('body-parser');
var path  = require('path');
var express = require('express');
var app = express();
var port= 8080;
//check if connected or error
//var db = mongoose.connection();
mongoose.connect('mongodb://localhost/userinfo');
mongoose.connection.on('connected',function(error,res){
    if(error)
    console.log("Error...");
    else
    console.log("Connected");
});

// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/index.html');
//  });

app.use(express.static(path.resolve(__dirname+ '/public')));

//construct the document

// var newdata = new Schema({name:request.body.name, age:request.body.age, city:request.body.age});
// newdata.save(function(error,res){
//     if(error)
//     throw error;
//     else
//     {
//         console.log(res);
//     }
// });


app.use(bodyparser.urlencoded({extended:false}));

  

    app.post('/test/submit', function (req, res) {
        // var name1= req.body.name1;
        // var age1=req.body.age;
        // var city1=req.body.city;
        var newdata = new Schema({name:req.body.username, age:req.body.age, city:req.body.city});
        //insert data
        newdata.save(function(error,result){
            if(error)
            throw error;
            else
            {
                console.log("current entry is saved successfully.. :",result);
            }
            res.send("Current user:"+result);
        });

      
        
    });


    app.post('/search',function(req,res){

    //  var finduser=req.body.name;
    //     //search data
    //     Schema.find((err,mydata)=>{
    //         if (err) 
    //         console.log("Error in the code.");
    //         else
    //         console.log("Data found");
            
    //         });

    Schema.find({name:req.body.username},{_id:1},function(err,result){
        if(err) throw err;
        else if(!result)
        {
        res.send("user not found....");     
        // console.log(result);
        }
        else{

            // ////
            // var newdata = new Schema({name:req.body.username, age:req.body.age, city:req.body.city});
            // //insert data
            // newdata.save(function(error,result){
            //     if(error)
            //     throw error;
            //     else
            //     {
            //         console.log("current entry is updated successfully.. :",result);
            //     }
            //     res.send("Current user:"+result);
            // });
    
            ///
            //res.send(result);
            //res.sendFile(__dirname + '/public/update.html');
            // res.send(result);
            Schema.findById(result,function(error,value){
                if(error)
                throw error;
                else
                res.send(value);
            });







            //////...
            // app.post('/update',function(err,res){
            //     if(err)
            //     throw err;
            //     else
            //     res.send("data for updating...");

            // });
            
            //////...
        }

    });

});

//delete user
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
app.post('/delete',function(req,res){
    Schema.remove({name:req.body.username},function(err,result){
        if(err)
        throw err;
        else if(!result)
        {
            console.log("record not found");
            res.send("record not found");
        }
        else{
            res.send(req.body.username+" is deleted");
        }


    });
});







// }
//find data in database and collection
// Schema.find((err,mydata)=>{
// if (err) 
// console.log("Error in the code.");
// else
// console.log("Data found");

// });


//remove opreation

// Schema.remove({name:"shivaniP"},function(err,res){
//     if(err)
//     console.log("Error:",err);
//     else
//     console.log("deleted successfully:",res);
// })

app.listen(port);


