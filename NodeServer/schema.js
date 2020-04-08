// Require mongoose to create schema
const mongoose = require('mongoose');

// Base schema
const Schema = mongoose.Schema;

// User schema
const User = new Schema({
  username: String,
  password: String
});

// Pupil schema
const Pupil = new Schema({
  name:     String,
  school:   String,
  year:     String,
});

// Teacher schema
const Teacher = new Schema({
  name:     String,
  school:   String,
});

// Include all schema required to export here!!!
module.exports = {
  User
};
