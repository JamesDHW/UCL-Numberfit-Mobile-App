// Require mongoose to create schema
const mongoose = require('mongoose');

// Base schema
const Schema = mongoose.Schema;

// User schema
const Users = new Schema({
  username : String,
  password : String,
  teacher  : Boolean,
});

// Pupil schema
const Pupils = new Schema({
  name     : String,
  school   : String,
  year     : String,
});

// Teacher schema
const Teachers = new Schema({
  name     : String,
  school   : String,
});

const User    = mongoose.model('users', Users, 'users')
const Pupil   = mongoose.model('pupils', Pupils, 'pupils')
const Teacher = mongoose.model('teachers', Teachers, 'teachers')

// Include all models required to export here!!!
module.exports = {
  User,
  Pupil,
  Teacher
};
