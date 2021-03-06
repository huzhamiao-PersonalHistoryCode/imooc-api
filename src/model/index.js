const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    id: Number,
    username: String,
    password: {
      type: String,
      select: false,
    },
  },
  { versionKey: false },
)
const User = mongoose.model('User', userSchema)

module.exports = {
  User,
}
