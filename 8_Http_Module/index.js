import http from 'http';

//create our server
const server = http.createServer((req,res)=>{
   
    res.write("<h1>Hello from Node.js server</h1>");
   // res.end("end ");
   res.setHeader("Content-Type","text/html");
   res.statuscode = 404;
   res.statusmessage ="BAD";
   res.writeHead(202,"Good",{"Content-Type":"text/html"});

});

//our server is listening on port 8000 
server.listen(8000,()=>console.log("Server up"));