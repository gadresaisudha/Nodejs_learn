Routing in NodeJs:
First create a server and then listen on that server
with port 8000
use req.url to get the path or url from browser
console.log(req.url)
Based on condition of the path give appropriate response
 if(req.url ==='/'){
    res.end("<h1>Hello from Node.js Home</h1>");
    }
    else if(req.url ==='/About'){
        res.end("<h1> Node.js About</h1>");
    }
put this inside the createserver method
