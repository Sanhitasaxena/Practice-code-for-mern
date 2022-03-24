const mongoose = require('mongoose')
const { Schema, model } = mongoose

const userSchema = new Schema({
    userName: {
        type: String,
        maxlength: 10
    },
    userEmail: {
        type: String
    },
    userPhone: {
        type: Number
    },
    userAge:{
        type: Number
    }
  });


const userModel = model("userModel", userSchema)

module.exports = userModel