var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        username:"shivani.potdukhe@cuelogic.com",
        password:"Cuelogic"
    }
});                                                                

var mailOptions = {
    from :'shivani.potdukhe@cuelogic.com',
    to :'shivani.potdukhe@cuelogic.com',
    subject :'trial mail',
    text :'hii',
    html :'<p>hii</p>'

};

transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });


//momemt module use:------------------>

// var http = require("http");
// var moment = require("moment");

// var server = http.createServer(function(req, res) {

//   var now = moment(new Date());

//   var date = now.format("D MMM YYYY");
//   var year = now.format("YYYY");
//   var month = now.format("MMMM");
//   var time = now.format("HH:mm");

//   res.write("<p>Today's date is " + date + "</p>");
//   res.write("<p>The year is " + year + "</p>");
//   res.write("<p>The month is " + month + "</p>");
//   res.write("<p>The time is " + time + "</p>");

//   res.end();

// }).listen(8080);