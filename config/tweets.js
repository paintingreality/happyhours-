const
  Twit = require('twit')

const twitterClient = new Twit({
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  timeout_ms: 60*1000
})

module.exports = twitterClient
