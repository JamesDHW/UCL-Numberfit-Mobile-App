const express               = require('express');
const CORS                  = require('cors');
const bodyParser            = require('body-parser');
const expressSession        = require('express-session');
const passport              = require('passport');
const mongoose              = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

var app = express();

app.use(CORS());// Allow croos origin requests
app.use(bodyParser.json());// Support parsing of json type post data
// app.use(bodyParser.urlencoded({ extended: true })); //maybe won't need this

// Create and use Express session
app.use(expressSession({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


// Connect to mongoDB via mongoose
const mongoUrl = "mongodb+srv://Numberfitmain:numberfit1234@COMP0067G12-16fzq.azure.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

// Get mongoose schema 'user' and create model
const Schema = require("./config/schema")
Schema.User.plugin(passportLocalMongoose)
const Users = mongoose.model('users', Schema.User, 'users')

var MongoClient = require('mongodb').MongoClient;


passport.use(Users.createStrategy());

passport.serializeUser(Users.serializeUser());
passport.deserializeUser(Users.deserializeUser());

app.get('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect('/users/' + user.username);
    });
  })(req, res, next);
});


// GET request to call when registering
app.get('/register', (getReq, getRes) => {
  MongoClient.connect(mongoUrl, function(err, db) {
    if (err) { throw err } //else{ console.log("success") };
    var dbObj = db.db("NumberfitDB");
    var user = {
      email:    getReq.query.email,
      name:     getReq.query.name,
      school:   getReq.query.school,
      year:     getReq.query.year,
      //teacher:  getReq.query.teacher
    };

    // check if user email provided already exists
    dbObj.collection("users").find({ email: getReq.query.email }, {$exists: true})
    .toArray(function(err, result) {
      if (err) throw err;
      if (result.length == 0){
        // If there is no user with a matching email
        dbObj.collection("users").insertOne(user, function(err) {
          if (err) { throw err } //else{ console.log("success") };
          // TODO: sign user in using passport.js
          // Send back response to GET request saying that the user is registered
          getRes.send("OK")
        });
      } else { getRes.send("alreadyExists") }
      db.close();
    });
  });
})

// Define port and listen on it
const PORT = process.env.port || 3000;
var server = app.listen(PORT, () => {
  console.log('server listening on port ', server.address().port)
});
