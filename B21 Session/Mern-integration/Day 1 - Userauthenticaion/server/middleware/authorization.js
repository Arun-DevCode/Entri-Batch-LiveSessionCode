// Authorization middleware
const { permission } = require("../validators/authorization");

function authorization(requiredPermission) {
  return function (req, res, next) {
    try {
      // Get user role & Id from request (set by authenticate middleware)
      const userRole = req.user?.role?.toUpperCase();
      console.log("User Role:", userRole);
      console.log("Authenticate User : ", req.user.userId);

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
      // Pass userId to request
      req.user = req.user?.userId;
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
