const GameHistory  = require('../config/schema').GameHistory;
const User = require('../config/schema').User;

module.exports.progress = function(req, res){

const cookie = req.query.cookie
console.log('cookie' + cookie)
User.findOne({_id : cookie}, (err, user) => {
  if(err) throw err;

    GameHistory.find({username : user.username}, (err, history) => {
      if(err) throw err;

      var corr = [];
      var wron = [];
      var date = [];

      history.forEach((item, i) => {
        if(date.includes(item._id.getTimestamp().toString().slice(4,15))){
          corr[date.indexOf(item._id.getTimestamp().toString().slice(4,15))] += item.correct;
          wron[date.indexOf(item._id.getTimestamp().toString().slice(4,15))] += item.incorrect;
        } else{
          date.push(item._id.getTimestamp().toString().slice(4,15))
          corr.push(item.correct)
          wron.push(item.incorrect)
        }
        // console.log(item._id.getTimestamp().toString().slice(4,15))
        // console.log(item.correct)
        // console.log(item.incorrect)

      });

      // console.log(date, corr, wron)

      res.send(JSON.stringify({
        date      : date,
        correct   : corr,
        incorrect : wron,
      }))

    });
  });
}
