const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  gender:{
    type: String,
  },
  roles:{
    type: mongoose.Schema.Types.ObjectId,
    ref : 'Roles'
  },
  mobile:{
     type: String,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  token: {
    type: String,
  },    
}, { timestamps: true })

module.exports = mongoose.model(user, userSchema)
