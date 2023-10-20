const express=require('express');

const {Router1}=require('./Router1')
const app=express();
const port=3500

app.use((req,res,next)=>{
    console.log("i am using middleware")
    next();
})
app.get('/',(req,res)=>{
    res.send("home page")
})
app.use('/api',Router1)
app.listen(port,()=>{
    try{
        console.log("my server is running on 3500 port")
    }
    catch(err){
        console.log(err)

    }
})