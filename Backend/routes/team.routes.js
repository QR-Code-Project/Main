const express = require("express");
const router = express.Router();
const teamController = require("../controllers/team.controller");
const middleware = require("../middlewares");
const config = require("../config");

router.get(
  "/teams",
  middleware.verify,
  middleware.restrictToRoleOrSelf(config.ROLES.ADMIN),
  teamController.findAll
);

router.get(
  "/teams/:id",
  middleware.verify,
  middleware.restrictToRoleOrSelf(config.ROLES.ADMIN),
  teamController.findOne
);

router.put(
  "/teams/:id",
  middleware.verify,
  middleware.restrictToRoleOrSelf(config.ROLES.ADMIN),
  teamController.update
);

router.delete(
  "/teams/:id",
  middleware.verify,
  middleware.restrictToRoleOrSelf(config.ROLES.ADMIN),
  teamController.delete
);

module.exports = router;
