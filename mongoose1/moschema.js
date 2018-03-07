var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var mydata = new Schema({
    name:String,
    age:Number,
    city:String
});

module.exports=mongoose.model('Schema',mydata);