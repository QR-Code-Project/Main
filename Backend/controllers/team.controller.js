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
    email: req.body.email || undefined,
    firstName: req.body.firstName || undefined,
    lastName: req.body.lastName || undefined,
    address: req.body.address || undefined,
    phone: req.body.phone || undefined,
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
