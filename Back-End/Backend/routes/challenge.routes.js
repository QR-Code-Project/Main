const express = require('express');
const router = express.Router();
const challengeController = require("../controllers/challenge.controller");
const middleware = require("../middlewares");
const config = require("../config");

router.post(
    "/challenges",
    middleware.verify,
    middleware.restrictToRoleOrSelf(config.ROLES.ADMIN),
    challengeController.create
);
router.get("/challenges", middleware.verify, challengeController.findAll);

router.get(
    "/challenges/team",
    middleware.verify,
    middleware.restrictToRoleOrSelf(config.ROLES.ADMIN),
    challengeController.findAll
);

router.get(
    "/challenges/:challengeId",
    middleware.verify,
    middleware.restrictToRoleOrSelf(config.ROLES.ADMIN),
    challengeController.findOne
);

router.put(
    "/challenges/:challengeId",
    middleware.verify,
    middleware.restrictToRoleOrSelf(config.ROLES.ADMIN),
    challengeController.update
);

router.delete(
    "/challenges/:challengeId",
    middleware.verify,
    middleware.restrictToRoleOrSelf(config.ROLES.ADMIN),
    challengeController.delete
);

module.exports = router;
