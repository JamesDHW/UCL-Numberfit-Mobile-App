const GameHistory  = require('../config/schema').GameHistory;
const User = require('../config/schema').User;
const Pupil = require('../config/schema').Pupil;
var LIMIT = 20; // Limit the number of datapoints which come back

module.exports.progress = function(req, res){

  const cookie = req.body.cookie
  // if(req.body.topic == "-" || !req.body.topic){
  //   // This will be the initial query
  //   var query = {username : user.username}
  // } else {
  //   var query = {username : user.username, topic : req.body.topic }
  // }
  User.findOne({_id : cookie}, (err, user) => {
    if(err) throw err;
    if(user.teacher){
      var query = {username : req.body.username};
    } else{
      var query = {username : user.username};
    }

    // console.log(query)

    GameHistory.find(query, (err, history) => {
      if(err) throw err;

      var corr = [];
      var wron = [];
      var date = [];
      var out  = {};

      // console.log(history)

      history.forEach((item) => {
        // console.log("time",item._id.getTimestamp().toString().slice(4,15))

        // If topic played isn't in output add to output else add 1 to the number of games played of that topic
        if(!out[item.topic]){
          out[item.topic] = 1;
        } else {
          out[item.topic] = out[item.topic] + 1;
        }

        if(date.length < LIMIT){
          if(date.includes(item._id.getTimestamp().toString().slice(4,15))){
            // console.log("already there")
            corr[date.indexOf(item._id.getTimestamp().toString().slice(4,15))] += item.correct;
            wron[date.indexOf(item._id.getTimestamp().toString().slice(4,15))] += item.incorrect;
          } else{
            // console.log("new one")
            date.push(item._id.getTimestamp().toString().slice(4,15))
            corr.push(item.correct)
            wron.push(item.incorrect)
          }
        }
        // console.log(item._id.getTimestamp().toString().slice(4,15))
        // console.log(item.correct)
        // console.log(item.incorrect)

      });

      // console.log(corr)
      // console.log(wron)

      var data = [];
      date.forEach((item, i) => { data.push(150*10**(-(wron[i]/(corr[i]+1)))) }); // +1 to avoid %0 --> this should probably be exp

      out["date"] = date;
      out["data"] = data;

      res.send(JSON.stringify(out));

    });
    }
  );
}
