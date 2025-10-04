// Role
const ROLE = ["admin", "users", "Manager"];

// Permission
// GET , POST , PUT , PATCH , DELETE

const permission = {
  ADMIN: ["Create:blog", "View:blog", "Delete:blog"],
  USERS: ["View:blog"],
  MANAGER: ["Create:blog", "View:blog"],
};

module.exports = { ROLE, permission };
