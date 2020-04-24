const Teacher  = require('../config/schema').Teacher; // Mongoose model

module.exports.getSTeachers = function (req, res, next) {

  Teacher.find({name : req.query.school}, null, {}, (err, docs) => {
    if(err){ throw err }
    console.log(docs)
    return res.status(200).json({ schools : docs });
  })
};
