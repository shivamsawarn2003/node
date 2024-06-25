//database
const mongoose=require("mongoose");

main().catch(err=>console.log(err));

async function main(){
    const uri=process.env.MONGO_URI;
    await mongoose.connect(uri,{
    });
    console.log("Successfully connected to MongoDB");
}