const
  dotenv = require('dotenv').load({silent: true}),
  express = require('express'),
  app = express(),
  server = require('http').Server(app),
  ejs = require('ejs'),
  ejsLayouts = require('express-ejs-layouts'),
  mongoose = require('mongoose'),
  flash = require('connect-flash'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  session = require('express-session'),
  MongoDBSStore = require('connect-mongodb-session')(session),
  passport = require('passport'),
  passportConfig = require('./config/passport.js'),
  userRoutes = require('./routes/users.js'),
  Twit = require('twit')
  tweetsRoutes = require('./routes/tweets.js')



const
  port = process.env.PORT || 3000
  mongoConnectionString = process.env.MONGOD_URL || 'mongodb://localhost/passport-authentication'

mongoose.connect(mongoConnectionString, (err) => {
  console.log(err || "connected to MongoDB (passport-authentication)")
})

const store = new MongoDBSStore({
  uri: mongoConnectionString,
  collections: 'sessions'
});

// middleware

app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(flash())
//static images in public folder.
app.use(express.static(__dirname + '/public'))


// ejs configuration
app.set('view engine', 'ejs')
app.use(ejsLayouts)

app.use(session({
	secret: "boomchakalaka",
	cookie: {maxAge: 60000000},
	resave: true,
	saveUninitialized: false,
	store: store
}))
//passport 
app.use(passport.initialize())
app.use(passport.session())

app.use((req, res, next) => {
	app.locals.currentUser = req.user
	app.locals.isLoggedIn = !!req.user

	next()
})

//root route
app.get('/', (req,res) => {
	res.render('index')
})



app.use('/', userRoutes)
//tweets route
app.use('/api/tweets', tweetsRoutes)
//port (localhost:3000)
app.listen(port, (err) => {
	console.log(err || "Server running on port " + port)
})
