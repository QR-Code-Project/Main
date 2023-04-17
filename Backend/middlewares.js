const jwt = require("jsonwebtoken");
const config = require("./config");

exports.verify = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) res.status(403).json({ error: "please provide a token" });
  else {
    jwt.verify(token.split(" ")[1], config.JWT.SECRET, (err, value) => {
      if (err) res.status(500).json({ error: "failed to authenticate token" });
      req.team = value.data;
      next();
    });
  }
};

exports.restrictToRoleOrSelf = (role) => {
  return (req, res, next) => {
    // Get team id from request
    let teamId;
    if (req.route.path === "/teams/:id") {
      teamId = req.params.id;
    } else if (req.query) {
      teamId = req.query.teamId;
    }

    if (req.team.role === role || req.team._id === teamId) {
      next();
    } else {
      res
        .status(403)
        .json({ error: "you are not authorized to perform this action" });
    }
  };
};
