const team = require("../models/team.model");

exports.findAll = (req, res) => {
  team.find()
    .then((teams) => {
      res.send(teams);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

exports.findOne = (req, res) => {
  team.findById(req.params.id)
    .then((team) => {
      if (!team) {
        return res.status(404).send({
          message: "team not found",
        });
      }
      res.send(team);
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message,
      });
    });
};

exports.update = (req, res) => {
  // Find and update the team
  team.findByIdAndUpdate(req.params.id, {
    teamName: req.body.teamName || undefined,
    score: req.body.score || undefined,
  })
    .then((team) => {
      if (!team) {
        return res.status(404).send({
          message: "team not found",
        });
      }
      res.send({ message: "team updated successfully" });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message,
      });
    });
};

exports.delete = (req, res) => {
  team.findByIdAndRemove(req.params.id)
    .then((team) => {
      if (!team) {
        return res.status(404).send({
          message: "team not found",
        });
      }
      res.send({ message: "team deleted successfully" });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message,
      });
    });
};
