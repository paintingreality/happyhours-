const
  mongoose = require('mongoose'),
  bcrypt = require('bcrypt-nodejs'),
  tweetSchema = new mongoose.Schema({
    local: {
      text: String,
    }
  })

  // checks to see if password matches.
  tweetSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.local.password)
  }

  module.exports = mongoose.model('Tweet', tweetSchema)
