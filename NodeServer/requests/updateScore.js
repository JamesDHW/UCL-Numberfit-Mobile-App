const User     = require('../config/schema').User;
const Pupil    = require('../config/schema').Pupil;

module.exports.updateScore = function(req, res){
  var cookie = req.body.cookie
  User.findOne({_id : cookie}, (err, user) => {
    if(err) throw err;
    console.log(typeof req.body.points)
    Pupil.findOneAndUpdate({ username : user.username },{$inc: {points: req.body.points}}, (err, details) => {
      if(err) throw err;
      // console.log("Pupil: ", details);
      res.send("done")

    })
  })
}
