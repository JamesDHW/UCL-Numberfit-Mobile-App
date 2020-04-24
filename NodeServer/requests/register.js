const User  = require('../config/schema').User; // Mongoose model
const Pupil = require('../config/schema').Pupil; // Mongoose model
const Teacher = require('../config/schema').Teacher; // Mongoose model

module.exports.register = function (req, res) {
  User.find({ username : req.body.username }, function(err, users){
    if (err) throw err;
    if(users.length == 0){
      // Create new user and pupil
      var user = new User({
        username : req.body.username,
        password : req.body.password,
        teacher  : req.body.teacher,
      });
      if(req.body.teacher) {
        var teacher = new Teacher({
          username : req.body.username,
          name     : req.body.name,
          school   : req.body.school,
        });
      } else {
        var pupil = new Pupil({
          username : req.body.username,
          name     : req.body.name,
          school   : req.body.school,
          year     : req.body.year,
        });
      }
      // Save user and pupil objects
      user.save((err) => {
        if (err) throw err;

        if(req.body.teacher) {
          teacher.save((err) => {
            if (err) throw err;
            require('./login').login(req, res);
          });
        } else {
          pupil.save((err) => {
            if (err) throw err;
            require('./login').login(req, res);
          });
        };
      });
    } else {
      // User already exists
      res.send('User already exists.')
    }
  })
};
