const User     = require('../config/schema').User;
const Pupil    = require('../config/schema').Pupil;

module.exports.modifyDetails = function(req, res){
  var cookie = req.body.cookie
  var user = {
    username : req.body.username,
    password : req.body.password,
    teacher  : false
  }
  var pupil = {
    username : req.body.username,
    name: req.body.name,
    school: req.body.school,
    year: req.body.year,
    teacher : req.body.teacher,
    points : req.body.points
  }
  User.findOneAndUpdate({_id : cookie},user, (err, details) => {
    if(err) throw err;
    Pupil.findOneAndUpdate({ username : details.username },pupil, (err, details) => {
      if(err) throw err;
      // console.log("Pupil: ", details);
      res.send("done")

    })
  })
}
