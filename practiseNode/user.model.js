// creating a user schema

// const { default: mongoose } = require("mongoose");
const mongoose = require('mongoose')
const { Schema, model } = mongoose

const userSchema = new Schema({
   userName:{
       type: String,
       maxlength: 10
   },
   userAge:{
     type: Number
   },
   userPhone:{
       type: Number
   }    
})

const userModel = mongoose.model("userModel", userSchema)

module.exports = userModel