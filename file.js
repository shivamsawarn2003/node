const fs=require("fs");
//sync/blocking
fs.writeFileSync("./test.txt","Hello");

//async//non-blocking
fs.writeFile("./test.txt","Hello async",(err)=>{});

//const result=fs.readFileSync("./contacts.txt","utf-8");
//console.log(result)
/* const result=fs.readFile("./contacts.txt","utf-8",(err,result)=>{
    if(err){
        console.log("error",err)
    }
    else{
        console.log(result);
    }
}) */
fs.appendFileSync("./test.txt",`${Date.now()} Hey there\n`);

fs.cpSync("./test.txt","./copy/txt");
fs.unlinkSync("./copy/txt");
console.log(fs.statSync("./test.txt"));
fs.mkdirSync("my-docs/a/b",{recursive:true});