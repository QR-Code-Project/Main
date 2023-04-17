const mongoose = require("mongoose");
const config = require("../config");

const teamModel = mongoose.Schema({
  teamName: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    default: 0,
  },
});

module.exports = new mongoose.model("Team", teamModel);
