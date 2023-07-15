const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please Enter Your Name'],
      maxLength: [30, 'Name cannot exceed 30 characters'],
      minLength: [4, 'Name should have more than 4 characters'],
    },
    email: {
      type: String,
      required: [true, 'Please Enter Your Email'],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please Enter a valid Email'],

      // validate(value) {
      //   if (!validator.isEmail(value)) {
      //     throw new Error('Email is invalid')
      //   }
      // },
    },
    password: {
      type: String,
      required: [true, 'Please Enter Your Password'],
      minLength: [8, 'Password should be greater than 8 characters'],
      select: false,
      // validate(value) {
      //   if (value.toLowerCase().includes('password')) {
      //     throw new Error('Password cannot contain "password"')
      //   }
      // },
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'notToPrefer'],
    },
    roles: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Role',
    },
    mobile: {
      type: String,
    },

    isEmailVerify: { type: 'boolean', default: false },
    _isDeleted: { type: 'boolean', default: false }, //soft delete
    token: {
      type: String,
    },
  },
  { timestamps: true },
)

// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) {
//     next()
//   }
//   this.password = await bcrypt.hash(this.password, 10) // salt =10
// })

module.exports = mongoose.model('user', userSchema)
