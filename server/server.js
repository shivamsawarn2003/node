const http=require("http");
const fs=require("fs");
const url=require("url");
const myServer=http.createServer((req,res)=>{
    if(req.url==="/favicon.ico") return res.end();
    const log=`${Date.now()}: ${req.url} New request recieved\n`;
    const myUrl=url.parse(req.url);
    console.log(myUrl);
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(req.url){
            case "/":res.end("Home page");
            break;
            case "/about":res.end("about page");
            break;
            default:
res.end("404 not found");
        }
    })
   
})
myServer.listen(8000,()=>console.log("Server Started"));