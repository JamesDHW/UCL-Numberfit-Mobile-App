const User     = require('../config/schema').User;
const Pupil    = require('../config/schema').Pupil;

module.exports.updateScore = function(req, res){
  var userIn = req.body
  User.findOne({_id : userIn.cookie}, (err, user) => {
    if(err) throw err;
    delete userIn["cookie"]
    Pupil.findOneAndUpdate({ username : user.username },{$inc: {points: req.body.points}}, (err, details) => {
      if(err) throw err;
      // console.log("Pupil: ", details);
      res.send("done")

    })
  })
}
