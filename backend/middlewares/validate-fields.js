const { validationResult } = require("express-validator");

const validateFields = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(401).json(error);
  }
  next();
};

module.exports = validateFields;
