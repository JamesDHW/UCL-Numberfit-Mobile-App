const passport      = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const User          = require('./schema').User; // Mongoose model

passport.serializeUser((user, done) => {
  done(null, user.id);
})

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(
  new LocalStrategy(
    (username, password, done) => {
      User.findOne({ username : username }).then((user) => {
        // console.log("user:",user)
        if(!user){
          // console.log("one")
          return done(null, false, { message : 'Incorrect username.' });
        }
        if (user.password != password) {
          // console.log(user.password,"==",password)
          return done(null, false, { message : 'Incorrect password.' });
        }
        // console.log("three")
        return done(null, user)
      })
      .catch((err) => {
        // console.log("four")
        return done(null, false, { message : err })
      })
    }
  )
)
