var http = require("http");
http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('Hello,World\n');
}).listen(9527,'localhost');
console.log('Server Running!');
