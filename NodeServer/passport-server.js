const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const MongoStore = require('connect-mongo')(session);

const app = express();
const CORS = require('cors');
app.use(CORS());
const PORT = 3000;
const mongoURI = "mongodb+srv://Numberfitmain:numberfit1234@COMP0067G12-16fzq.azure.mongodb.net/NumberfitDB?retryWrites=true&w=majority";

// Create and use body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
      next();
  });

// First bits
const Schema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model('users', Schema, 'users')

// Putting it all together
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('mongoDB connected to ', mongoURI);
    // const user = new User({username:"james", password:"James"})
    // User.findOne().then((user) => {
    //   console.log('saved ', user);
    // })
  }
)
.catch(err => console.log(err))

passport.serializeUser((user, done) => {
  done(null, user.id);
})

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(new LocalStrategy((username, password, done) => {
  User.findOne()
  .then((user) => {
    console.log(user)
    if(!user){
      console.log("err")
      return done(null, false, { message : "User Not Found" })
    } else{
      return done(null, user)
    }
  })
  .catch((err) => {
    return done(null, false, { message : err })
  })
}))



app.use(express.json());

// Create and use Express session
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection : mongoose.connection})
});
app.use(expressSession);

// console.log(passport)
app.use(passport.initialize());
app.use(passport.session());


app.post('/login', (req, res, next) => {
  passport.authenticate('local', function(err, user, info){
    console.log("err 1")
    if(err){
      console.log("err 2")
      return res.status(400).json({ errors:err });
    }
    if(!user){
      console.log("err 3")
      return res.status(400).json({ errors:"No user found" });
    }
    console.log(user)
    req.login(user, function(err){
      if(err){
        console.log("err 4: ", err)
        return res.status(400).json({ errors:err });
      }
      console.log("err 5")
      return res.status(200).json({ success:"logged in as " + user.id });
    });
  })(req, res, next);
})

app.listen(PORT, () => {
  console.log('server listening on port ', PORT)
});
