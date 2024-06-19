import http from 'http';

//create our server
const server = http.createServer((req,res)=>{
   
    if(req.url ==='/'){
    res.end("<h1>Hello from Node.js Home</h1>");
    }
    else if(req.url ==='/About'){
        res.end("<h1> Node.js About</h1>");
    }
   
});

//our server is listening on port 8000 
server.listen(8000,()=>console.log("Server up"));