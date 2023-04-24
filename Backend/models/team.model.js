const mongoose = require("mongoose");
const config = require("../config");

const teamModel = mongoose.Schema({
  password: {
    type: String,
    required: true,
  },
  teamName: {
    type: String,
    required: true,
  }
});

module.exports = new mongoose.model("Team", teamModel);
