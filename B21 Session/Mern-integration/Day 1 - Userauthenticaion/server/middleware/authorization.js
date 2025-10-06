// Authorization middleware
const { permission } = require("../validators/authorization");

function authorization(requiredPermission) {
  return function (req, res, next) {
    try {
      // Get user role from request (set by authenticate middleware)
      const userRole = req.user?.toUpperCase();
      console.log("User Role:",userRole);

      if (!userRole) {
        return res.status(401).json({
          success: false,
          message: "User role not found",
        });
      }

      // Check if role exists in permission object
      if (!permission[userRole]) {
        // permission["USERS"]
        return res.status(403).json({
          success: false,
          message: "Invalid role",
        });
      }

      // Check if user has required permission
      const hasPermission = permission[userRole].includes(requiredPermission);

      if (!hasPermission) {
        return res.status(403).json({
          success: false,
          message: `Insufficient permissions. Please contact admin`,
        });
      }

      next(); // Forwared Request
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Authorization check failed",
      });
    }
  };
}

module.exports = authorization;
