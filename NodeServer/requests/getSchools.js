const School  = require('../config/schema').School; // Mongoose model

module.exports.getSchools = function (req, res, next) {

  School.find({}, null, {}, (err, docs) => {
    if(err){ throw err }
    return res.status(200).json({ schools : docs });
  })
};
