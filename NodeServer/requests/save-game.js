const User        = require('../config/schema').User; // Mongoose model
const GameHistory = require('../config/schema').GameHistory; // Mongoose model

module.exports.save_game = function (req, res) {
  const cookie = req.body.cookie
  User.findOne({_id : cookie}, (err, user) => {
    if(err) throw err;

    var game = new GameHistory({
      username  : user.username,
      correct   : req.body.correct,
      incorrect : req.body.incorrect,
    });

    game.save((err) => {
      if (err) throw err;
      res.send("Saved!")
    });
  });
};
