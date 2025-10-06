// Role
const ROLE = ["admin", "users", "Manager"];

// Permission
// E.G : GET , POST , PUT , PATCH , DELETE
const permission = {
  ADMIN: ["Create:blog", "View:blog", "Delete:blog"],
  MANAGER: ["View:blog"],
  USER: ["Create:blog", "View:blog"],
};

module.exports = { ROLE, permission };
