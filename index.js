const express=require("express");
const users=require("./MOCK_DATA(1).json");
const app=express();
const fs=require("fs");
const PORT=process.env.PORT;
const mongoose=require("mongoose");
const dotenv=require("dotenv");
require("dotenv").config();
const conn=require("./conn");
//Middleware
app.use(express.urlencoded({extended:false}));
app.get("/users",(req,res)=>{
    const html=`
    <ul>
    ${users.map((users)=>`<li>${users.first_name}</li>`).join("")}</ul>`;
    res.send(html);
})

app.get("/api/users",(req,res)=>{
    return res.json(users);
})

app.get("/api/users/:id",(req,res)=>{
    const id=Number(req.params.id);
    const user=users.find((user)=>user.id===id);
    return res.json(user);
}).patch("/api/users/:id",(req,res)=>{
    //edit users with id
    return res.json({status:pending});
})
app.delete("/api/users/:id",(req,res)=>{
    //delete user with id
    const userId=parseInt(req.params.id);
    const userIndex=users.findIndex(user=>user.id===userId);
    users.splice(userIndex,1);
    fs.writeFile("./MOCK_DATA(1).json",JSON.stringify(users,null,2),(err,data)=>{
        return res.json({status:"successfully delete",id:users.length});
            })
})
app.post("/api/users",(req,res)=>{
    //create new users
    const body=req.body;
    users.push({...body,id:users.length+1});
    fs.writeFile("./MOCK_DATA(1).json",JSON.stringify(users),(err,data)=>{
return res.json({status:"successfully added",id:users.length});
    })
});


app.listen(PORT,()=>console.log(`Server started at PORT: ${PORT}`));