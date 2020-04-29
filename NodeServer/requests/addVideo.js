const Video  = require('../config/schema').Video; // Mongoose model


module.exports.addVideo = function (req, res) {
  // CODE TO ADD NEW SCHOOL SET IN /config/verif-codes.json
  var code = require('../config/verif-codes.json').add_video;
  if(req.query.code == code){
    var school = new Video({
      url : req.query.url
    })

    school.save((err) => {
      if (err) throw err;
      return res.redirect('./success.html');
    });
  }
};
