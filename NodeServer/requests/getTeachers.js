const Teacher  = require('../config/schema').Teacher; // Mongoose model

module.exports.getTeachers = function (req, res) {

  Teacher.find({school : req.query.school}, null, {}, (err, docs) => {
    if(err){ throw err }
    // console.log(req.query.school)
    return res.status(200).json({ teachers : docs });
  })
};
