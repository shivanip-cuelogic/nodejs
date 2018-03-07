var https = require('https');
var fs = require('fs');
 
var options=({
    key:fs.readFileSync('domain.key').toString(),
    cert:fs.readFileSync('domain.csr').toString()
})



https.createServer(options,function(request,response){
    response.writeHead(200);
    response.write("bfshddjksfhkdj");
    response.end("hello");

}).listen(8080);

console.log("listening to port 8080");


