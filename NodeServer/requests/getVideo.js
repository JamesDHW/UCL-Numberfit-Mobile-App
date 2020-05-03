const Video  = require('../config/schema').Video; // Mongoose model

module.exports.getVideo = function (req, res) {
  // Get the count of all users
  Video.count().exec(function (err, count) {

    // Get a random entry
    var random = Math.floor(Math.random() * count/3)

    // Again query all videos but only fetch one offset by our random #
    Video.find({}, null, {skip : random, limit : 3}, (err, docs) => {
      // console.log(docs)
      return res.status(200).json({ videos : docs });

    })
  })
};
