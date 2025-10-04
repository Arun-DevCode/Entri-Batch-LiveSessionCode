const permission = require("../validators/authorization");

function authorization(req, res, next) {
  console.log(permission);
  next();
}

module.exports = authorization;
