const { Schema } = require("mongoose");

const CreateProject = new Schema({
  name: String,
  emailAddress: String,
  title: String,
  category: String,
  imageLink: String,
  goal: Number,
  details: String,
  date: { type: Date, default: Date.now },
});

module.exports = { CreateProject };
