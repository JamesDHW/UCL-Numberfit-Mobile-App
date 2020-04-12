const User  = require('../config/schema').User; // Mongoose model
const Pupil = require('../config/schema').Pupil; // Mongoose model

const register = function (req, res) {
  User.find({ username : req.body.username }, function(err, users){
    if (err) throw err;
    if(users.length == 0){
      // Create new user and pupil
      var user = new User({
        username : req.body.username,
        password : req.body.password,
      });
      var pupil = new Pupil({
        name   : req.body.name,
        school : req.body.school,
        year   : req.body.year,
      });

      // Save user and pupil objects
      user.save((err) => {
        if (err) throw err;
        pupil.save((err) => {
          if (err) throw err;
          // Login req
          require('./login').login(req, res);
        })
      })
    } else {
      // User already exists
      res.send('User already exists.')
    }
  })
}


module.exports = {
  register
}
