const
  mongoose = require('mongoose')

  tweetSchema = new mongoose.Schema({
    text: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  })

  module.exports = mongoose.model('Tweet', tweetSchema)
