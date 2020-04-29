const passport = require('passport');
const Pupil    = require('../config/schema').Pupil;
const Teacher  = require('../config/schema').Pupil;
const User     = require('../config/schema').User;

var getLeaderboard = function(school){
  Pupil.find({school : school}, null, {limit : 30, sort : {points : -1}}, (err, details) => {
    if(err) throw err;
    // console.log("Pupil: ", details);
    var scores = [];
    details.forEach((item, i) => {
      scores.push({
        name  : item.name,
        score : item.points,
      })
    });
    return res.send({scores : scores});

  })
};

module.exports.leaderboard = function(req, res){
  const cookie = req.query.cookie

  User.findOne({_id:cookie},{},{}, (err, user) => {
    if(err) throw err;
    if(user.teacher){
      Teacher.findOne({username : user.username}, {}, {}, (err, details) => {
        if(err) throw err;
        return getLeaderboard(details.school);
      })
    } else {
      Pupil.findOne({username : user.username}, {}, {}, (err, details) => {
        if(err) throw err;
        return getLeaderboard(details.school);
      })
    }
  })
}
