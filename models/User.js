const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      // length
    },
    // lastName: {
    //   type: String,
    //   required: true,
    //   trim: true,
    //   // length min/max
    // },
    gender: {
      type: String,
      //enum ['male', "female","not to prefer"]
    },
    roles: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Role',
    },
    mobile: {
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

    isEmailVerify: { type: 'boolean', default: false },
    _isDeleted: { type: 'boolean', default: false }, //soft delete
    token: {
      type: String,
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model("user", userSchema)
