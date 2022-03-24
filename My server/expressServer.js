const express = require('express')
const mongoose = require('mongoose')
const userModel = require('./user.modal')

const app = express()

app.use(express.json())

// mongoose.connect('mongodb+srv://sanhita:Sanhita11@cluster0.ol2n5.mongodb.net/BookStore?retryWrites=true&w=majority', ()=>{
//     console.log('Database connected cheers!')
// }) 

const connectToDB = async () => {
    try {
        await mongoose.connect
            ('mongodb+srv://sanhita:Sanhita11@cluster0.ol2n5.mongodb.net/BookStore?retryWrites=true&w=majority'
            );
        console.log("databse connected cheers!")
    }

    catch (error) {
        console.log(error)
    }

}

connectToDB()

app.post('/add-user', async (request, response)=>{
   try {
    //    creating userModel instance
       const user = new userModel({
           userName: request.body.userName,
           userEmail: request.body.userEmail, 
           userPhone: request.body.userPhone,
           userAge: request.body.userAge 
       })
    //    saving to db, as it is an asynchronous call, we need to use the await keyword
    // user.save method is given by mongoose
      await user.save()

      response.json({data: user})
      

   }
   catch (error) {
       console.log(error)
       response.json({error : "something went wrong"})
   }
})

app.get('/', (resquest, response)=>{
    console.log(resquest.url)
    response.send('This is your get request from express')
    response.end()
})
app.get('/books', (resquest, response)=>{
    console.log(resquest.url)
    response.send('This is your books request')
    response.end()
})
app.get('/books/authors', (resquest, response)=>{
    console.log(resquest.url)
    response.send('This is your author request')
    response.end()
})




app.listen(3000, ()=>{
    console.log("this is an express server")
})



