const express       = require('express');
const session       = require('express-session');
const mongoose      = require('mongoose');
const passport      = require('passport');
const MongoStore    = require('connect-mongo')(session);
const bodyParser    = require('body-parser');

const app = express();
const PORT = 3000;
const mongoURI = "mongodb+srv://Numberfitmain:numberfit1234@COMP0067G12-16fzq.azure.mongodb.net/NumberfitDB?retryWrites=true&w=majority";

// const CORS = require('cors');
// app.use(CORS());

// Use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Add headers
app.use(require('./config/headers').headers);

//
// // First bits
// const Schema = new mongoose.Schema({
//   username: String,
//   password: String,
// });
//
// const User = mongoose.model('users', Schema, 'users')

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

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// })
//
// passport.deserializeUser((id, done) => {
//   User.findById(id, (err, user) => {
//     done(err, user);
//   });
// });

require('./config/passport')
app.use(passport.initialize());
app.use(passport.session());


// Create and use Express session
const expressSession = require('express-session')({
  secret: 'tifrebmuN',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection : mongoose.connection})
});
app.use(expressSession);

// console.log(passport)
// app.use(passport.initialize());
// app.use(passport.session());


app.post('/login', require('./requests/login').login)

app.listen(PORT, () => {
  console.log('server listening on port ', PORT)
});
