const passport = require('passport');
const Pupil    = require('../config/schema').Pupil;

module.exports.leaderboard = function(req, res){
  const school = req.query.school
  var scores = [];
  // console.log(school)
  Pupil.find({school : school}, null, {limit : 30, sort : {points : -1}}, (err, details) => {
    if(err) throw err;
    // console.log("Pupil: ", details);
    details.forEach((item, i) => {
      scores.push({
        name  : item.name,
        score : item.points,
      })
    });

    return res.send({scores : scores});

  })
}
