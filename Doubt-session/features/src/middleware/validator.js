import { validationResult } from "express-validator";

function ValidationHandler(req, res, next) {
  const errors = validationResult(req); // failure errors
  if (!errors.isEmpty()) {
    return res.json({
      error: true,
      message: "Failed to create account.",
      reasons: errors.array().map((err) => {
        return { field: err.path, message: err.msg };
      }),
    });
  }
  // forward request to responder
  next();
}

export default ValidationHandler;
