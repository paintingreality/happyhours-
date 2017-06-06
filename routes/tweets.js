const
  express = require('express'),
  passport = require('passport'),
  tweetsRouter = new express.Router(),
  twitterClient = require('../config/tweets.js')

  tweetsRouter.get('/', (req, res) => {
    twitterClient.get('search/tweets', { q: 'happyhour', count: 10 }, function(err, data, response) {
      if(err) return console.log(err)
     console.log('twitter data', data)
    })
    res.render('profile', {data: data})
  })

module.exports = tweetsRouter
