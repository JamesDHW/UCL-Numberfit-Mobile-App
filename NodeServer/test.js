const express       = require('express');
const session       = require('express-session');
const cors          = require('cors')

const app = express();

// Express Session
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  // store: new MongoStore({ mongooseConnection : mongoose.connection})
}));

// CORS
app.use(cors())

// Abstracted Request
app.get('/test', require('./requests/test').test);

// Set and Listen on PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('server listening on port ', PORT)
});

// test.js
module.exports.test = function (req, res) {
      return res.send('Test Success!');
};
