const
  express = require('express'),
  passport = require('passport'),
  tweetsRouter = new express.Router(),
  twitterClient = require('../config/tweets.js'),
  Tweet = require('../models/Tweet.js')

//searches for happy hour (this will search by happyhour and query of city, displaying only those two items)
  tweetsRouter.get('/', (req, res) => {
    twitterClient.get('search/tweets', { q: `happyhour ${req.query.city}`, count: 10 }, function(err, data, response) {
      if(err) return console.log(err)
     res.json( {data: data})
    })
  })


  tweetsRouter.post('/', (req, res) => {
    console.log(req.body)
    var newTweet = new Tweet(req.body)
    newTweet.user = req.user
    newTweet.save((err, tweet) => {
      res.json({success: true, message: "Favorite added...", tweet})
    })



  })
  //route for deleting
  tweetsRouter.delete('/:id', (req,res) => {
    Tweet.findByIdAndRemove(req.params.id, (err, tweet) => {
      res.json({success: true, message: "Deleted favorite...", tweet})
    })
  })
module.exports = tweetsRouter
