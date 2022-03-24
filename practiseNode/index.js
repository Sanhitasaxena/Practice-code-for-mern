const express = require('express')
const mongoose = require('mongoose')
const userModel = require('./user.model')

const app = express()
app.use(express.json())

const connectToDB = async()=>{
    try {
        await mongoose.connect("mongodb+srv://Sanhita:practice@cluster0.3yu2p.mongodb.net/Practise?retryWrites=true&w=majority",()=>{
            console.log("database got connected!")
        })
            
    } catch (error) {
        console.log(error)
    }
}

connectToDB()

app.get("/", (request, response)=>{
    response.send("This is your get request")
    console.log("Get request hitted")
})

app.post("/add-user", async(request,response)=>{
    try {
         const user = new userModel({
            userName: request.body.userName,
            userAge: request.body.userAge,
            userPhone: request.body.userPhone 
        })
        await user.save()
        response.json({data: user})
    } catch (error) {
        console.log(error)
    }
    // console.log(request)
//    response.send("we are adding user")
})
app.listen(3000, ()=>{
    console.log("Server on port!")
})