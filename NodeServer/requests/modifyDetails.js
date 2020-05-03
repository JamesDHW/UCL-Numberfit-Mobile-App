const User     = require('../config/schema').User;
const Pupil    = require('../config/schema').Pupil;

module.exports.modifyDetails = function(req, res){
  var cookie = req.body.cookie
  var user = {
    password : req.body.password,
  }
  var pupil = {
    year: req.body.year,
    teacher : req.body.mTeacher,
  }
  if(!req.body.password){ delete user["password"]}
  if(!req.body.year){ delete pupil["year"]}
  if(!req.body.mTeacher){ delete pupil["teacher"]}

  // console.log("user",user)
  // console.log("pupil",pupil)

  User.findOneAndUpdate({_id : cookie}, {$set:user},{new : true}, (err, details) => {
    if(err) throw err;
    if(!details) res.send("no user found")
    Pupil.findOneAndUpdate({ username : details.username }, {$set:pupil}, {new : true}, (err, details) => {
      if(err) throw err;
      // console.log("Pupil: ", details);
      res.send("done")

    })
  })
}
