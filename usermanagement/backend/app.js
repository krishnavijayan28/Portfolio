const express= require('express')
const mongoose = require('mongoose')
const User = require('./models/User.js')
const cors=require('cors')

const app=express()
const port=3000

app.use(cors())
app.use(express.json())
main()
    .then(()=>console.log("DB Connected"))
    .catch(err=>console.log(err))


async function main(){
await mongoose.connect('mongodb+srv://KrishnaVijayan:iWX-D2-qcbUwSJ9@cluster0.jfrzgjs.mongodb.net/Marian_2025?retryWrites=true&w=majority&appName=Cluster0')
}

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.post('/users',async(req,res)=>{

    try {
        var userItem={
            name:req.body.name,
            email:req.body.email,
            username:req.body.username,
            password:req.body.password
        }

        var user= new User(userItem)
        await user.save()
        res.status(201).json(user)
        
    } catch (error) {
        console.error(error)
        res.status(500).json({error:error})
        
    }
})

app.get('/users',async(req,res)=>{
    try {
        const users=await User.find({})
        res.status(200).json(users)
    } catch (error) {
        console.error(error)
        res.status(500).json({error:error})
        
    }
})

app.patch('/users/:id', async(req,res)=>{
    try{
        const id=req.params.id
        console.log(id)
        console.log(req.body)
        const updatedUser=await User.findByIdAndUpdate(id,req.body,{new:true})
        console.log(updatedUser)
        if(!updatedUser) return res.status(404).json({message:"User not found"})
        res.status(200).json(updatedUser)

    }
    catch (error){
        console.error(error)
        res.status(500).json({error:error})
        
    }
})

app.delete('/users/:id', async(req,res)=>{
    try {
        const deletedUser= await User.findOneAndDelete(req.params.id)
        if(!deletedUser) return res.status(404).json({message:"User not found"})
            res.status(200).json({message:"User has been deleted!"})
        
    } catch (error) {
        console.error(error)
        res.status(500).json({error:error})
        
    }
})
// Login
app.post('/users/login',async(req,res)=>{
    try {
        const {email,password}=req.body
        const user= await User.findOne({email:email})
        if(!user){
            return res.status(400).json({message:"User not found"})
        }
        if(user.password==password){
            return res.status(200).json({message:"Login successful"})
        
        }
        else{
            return res.status(200).json({message:"Invalid password"})
        }
        

    } catch (error) {
        console.error(error)
        res.status(500).json({error:error.message})
    }
})

app.listen(port,()=>{
    console.log("server started...")
})







