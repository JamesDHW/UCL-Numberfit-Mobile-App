const passport = require('passport');
const User     = require('../config/schema').User;
const Pupil    = require('../config/schema').Pupil;
const Teacher  = require('../config/schema').Teacher;

module.exports.login = function (req, res, next) {
  passport.authenticate('local', function(err, user){
    if(err){
      console.log("error: ", err)
      return res.status(400).json({ errors : err });
    }
    if(!user){
      console.log("error: ", err)
      return res.status(400).json({ errors : "No user found" });
    }
    // console.log(user)
    req.login(user, function(err){
      if(err){
        console.log("error: ", err)
        return res.status(400).json({ errors : err });
      }
      // user.id (cookie) is passed back on success along with user details
      if(!user.Teacher){
        Pupil.findOne({ username : user.username }, (err, pupil_info) => {
          if(err) throw err;
          console.log("Pupil: ", pupil_info);
          return res.status(200).json({
            cookie   : user.id,
            username : pupil_info.username,
            name     : pupil_info.name,
            school   : pupil_info.school,
            year     : pupil_info.year,
            teacher  : false,
          });

        })
      } else {
        Teacher.findOne({ username : user.username }, (err, teacher_info) => {
          if(err) throw err;
          // console.log("Teacher: ", teacher_info);
          return res.status(200).json({
            cookie   : user.id,
            username : teacher_info.username,
            name     : teacher_info.name,
            school   : teacher_info.school,
            teacher  : true,
          });
        })
      }
    });
  })(req, res, next);
};
