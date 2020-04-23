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
        // console.log(user)
        if(!user){
          return done(null, false, { message : 'Incorrect username.' });
        }
        if (user.password != password) {
          return done(null, false, { message : 'Incorrect password.' });
        }
        return done(null, user)
      })
      .catch((err) => {
        return done(null, false, { message : err })
      })
    }
  )
)
