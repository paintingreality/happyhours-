const
  express = require('express'),
  passport = require('passport'),
  tweetsRouter = new express.Router(),
  twitterClient = require('../config/tweets.js')

//searches for happy hour (this will need to search by hppyhr and city, displaying only those two items)
  tweetsRouter.get('/', (req, res) => {
    twitterClient.get('search/tweets', { q: `happyhour ${req.query.city}`, count: 10 }, function(err, data, response) {
      if(err) return console.log(err)
    //  console.log('twitter data', data)
     res.json( {data: data})

    })
  })
//route for saving tweets by current user id
  tweetsRouter.post('/profile/$favList', (req, res) => {
    res.render('profile', {user: req.user})
  })
  tweetsRouter.delete('/profile/$favList', (req,res) => {
  //
    res.render('profile', {user: req.user})

  })
//route for deleting
module.exports = tweetsRouter
