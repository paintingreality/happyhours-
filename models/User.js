//user model
const
  mongoose = require('mongoose'),
  bcrypt = require('bcrypt-nodejs'),
  userSchema = new mongoose.Schema({
    local: {
      name: String,
      email: String,
      password: String
    }
  })
  //generates user password.
  userSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  }
  // checks to see if password matches.
  userSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.local.password)
  }
  //makes model avail in other files.
  module.exports = mongoose.model('User', userSchema)
