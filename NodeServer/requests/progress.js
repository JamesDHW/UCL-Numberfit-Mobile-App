const GameHistory  = require('../config/schema').GameHistory;
const User = require('../config/schema').User;
var LIMIT = 20; // Limit the number of datapoints which come back

module.exports.progress = function(req, res){

  const cookie = req.query.cookie
  // console.log('cookie' + cookie)
  User.findOne({_id : cookie}, (err, user) => {
    if(err) throw err;

    if(req.query.topic == "-" || !req.query.topic){
      // This will be the initial query
      var query = {username : user.username}
    } else {
      var query = {username : user.username, topic : req.query.topic }
    }

    console.log(query)

    GameHistory.find(query, (err, history) => {
      if(err) throw err;

      var corr = [];
      var wron = [];
      var date = [];
      var out  = {};

      // console.log(history)

      history.forEach((item, i) => {

        if(!out[item.topic]){
          out[item.topic] = 1;
        } else {
          out[item.topic] = out[item.topic] + 1;
        }



        if(i+1 < LIMIT){
          if(date.includes(item._id.getTimestamp().toString().slice(4,15))){
            corr[date.indexOf(item._id.getTimestamp().toString().slice(4,15))] += item.correct;
            wron[date.indexOf(item._id.getTimestamp().toString().slice(4,15))] += item.incorrect;
          } else{
            date.push(item._id.getTimestamp().toString().slice(4,15))
            corr.push(item.correct)
            wron.push(item.incorrect)
          }
        }
        // console.log(item._id.getTimestamp().toString().slice(4,15))
        // console.log(item.correct)
        // console.log(item.incorrect)

      });

      var data = [];
      date.forEach((item, i) => { data.push(10*(corr[i]/wron[i])+(0.1*i)) });

      out["date"] = date;
      out["data"] = data;

      res.send(JSON.stringify(out));

    });
    }
  );
}
