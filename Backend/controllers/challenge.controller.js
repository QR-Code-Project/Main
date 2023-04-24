const challenge = require('../models/challenge.model.js');

// Create and Save a new challenge
exports.create = (req, res) => {
    // Validate request
    if (!req.body.content) {
        return res.status(400).send({
            message: "challenge content can not be empty"
        });
    }

    // Create a challenge
    const challenge = new challenge({
        title: req.body.title || "Untitled challenge",
        content: req.body.content,
        email: req.team
    });

    // Save challenge in the database
    challenge.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the challenge."
            });
        });
};

// Retrieve and return all challenges from the database.
exports.findAll = (req, res) => {
    challenge.find()
        .then(challenges => {
            res.send(challenges);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving challenges."
            });
        });
};

// Find a single challenge with a challengeId
exports.findOne = (req, res) => {
    challenge.findById(req.params.challengeId)
        .then(challenge => {
            if (!challenge) {
                return res.status(404).send({
                    message: "Challenge not found with id " + req.params.challengeId
                });
            }
            if (challenge.email == req.team) {
                res.send(challenge);
            }
            else {
                res.send({});
            }

        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Challenge not found with id " + req.params.challengeId
                });
            }
            return res.status(500).send({
                message: "Error retrieving challenge with id " + req.params.challengeId
            });
        });
};

// Update a challenge identified by the challengeId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body.content) {
        return res.status(400).send({
            message: "Challenge content can not be empty"
        });
    }

    // Find challenge and update it with the request body
    challenge.findByIdAndUpdate(req.params.challengeId, {
        title: req.body.title || "Untitled Challenge",
        content: req.body.content
    }, { new: true })
        .then(challenge => {
            if (!challenge) {
                return res.status(404).send({
                    message: "Challenge not found with id " + req.params.challengeId
                });
            }
            res.send(challenge);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "challenge not found with id " + req.params.challengeId
                });
            }
            return res.status(500).send({
                message: "Error updating challenge with id " + req.params.challengeId
            });
        });
};

// Delete a challenge with the specified challengeId in the request
exports.delete = (req, res) => {
    challenge.findByIdAndRemove(req.params.challengeId)
        .then(challenge => {
            if (!challenge) {
                return res.status(404).send({
                    message: "Challenge not found with id " + req.params.challengeId
                });
            }
            res.send({ message: "Challenge deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Challenge not found with id " + req.params.challengeId
                });
            }
            return res.status(500).send({
                message: "Could not delete challenge with id " + req.params.challengeId
            });
        });
};
