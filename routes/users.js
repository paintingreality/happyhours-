//user routes

const
  express = require('express'),
  passport = require('passport'),
  userRouter = express.Router(),
  usersCtrl = require('../controllers/users.js'),
  User = require('../models/User.js'),
  Tweet = require('../models/Tweet.js')

userRouter.route('/login')
  .get((req, res) => {
    res.render('login', {message: req.flash('loginMessage')})
  })
  .post(passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/login'
  }))

userRouter.route('/signup')
  .get((req, res) => {
    res.render('signup', {message: req.flash('signupMessage')})
  })
  .post(passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup'
  }))

userRouter.get('/profile', isLoggedIn, (req, res) => {
  //Tweet find for all favorites who's user property is req.user._id,THEN:
  Tweet.findById(req.user._id, function(err, tweet){
    res.render('profile', {user: req.user, tweets: tweet})
  })
})



userRouter.post('/profile', isLoggedIn, (req,res) => {
  res.render('profile', {user: req.user})
})

userRouter.get('/logout', isLoggedIn, (req, res) => {
  req.logout()
  res.redirect('/')
})

function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()) return next()
  res.redirect('/')
}

userRouter.route('/users/:id')
  .get(usersCtrl.show)
  .patch(usersCtrl.update)
  .delete(usersCtrl.destroy)

module.exports = userRouter
