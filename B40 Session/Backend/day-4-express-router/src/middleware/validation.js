function validateUserRole(req, res, next) {
  const role = "user";

  // Role validation
  if (role === "admin") {
    next(); // forward req
  }

  res.json({ message: "Access Denied. Please Contact admin" });
}

export default validateUserRole;
