const User        = require('../config/schema').User; // Mongoose model
const GameHistory = require('../config/schema').GameHistory; // Mongoose model

module.exports.saveGame = function (req, res) {
  const cookie = req.body.cookie
  User.findOne({_id : cookie}, (err, user) => {
    if(err) throw err;
    if(user==null) {
      return res.status(400);
    }

    var game = new GameHistory({
      username  : user.username,
      correct   : req.body.correct,
      incorrect : req.body.incorrect,
      topic     : req.body.topic,
    });

    game.save((err) => {
      if (err) throw err;
      res.status(200)
    });
  });
};
