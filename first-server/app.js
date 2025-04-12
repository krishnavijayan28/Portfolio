const express=require("express")

const app=express()
const port=3000


app.get('/',(req,res)=>{
    res.send("from the server- its time to start doing")

})

app.listen(port,()=>{
    console.log("server has started...")
})