const passport = require('passport');
const User     = require('../config/schema').User;
const Pupil    = require('../config/schema').Pupil;
const Teacher  = require('../config/schema').Teacher;

module.exports.myDetails = function(req, res){
  const cookie = req.query.cookie
  User.findOne({_id : cookie}, (err, user) => {
    if(err) throw err;
    console.log(user);
    if(!user.Teacher){
      Pupil.findOne({ username : user.username }, (err, details) => {
        if(err) throw err;
        console.log("Pupil: ", details);
        return res.status(200).json({
          username : details.username,
          name     : details.name,
          school   : details.school,
          year     : details.year,
        });

      })
    } else {
      Teacher.findOne({ username : user.username }, (err, details) => {
        if(err) throw err;
        console.log("Teacher: ", details);
        return res.status(200).json({
          username : details.username,
          name     : details.name,
          school   : details.school,
        });
      })
    }
  })
}
