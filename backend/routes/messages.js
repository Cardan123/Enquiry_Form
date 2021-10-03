const { Router } = require("express");
const { postMessages } = require("../controllers/messages"); // import messages controllers
const { check } = require("express-validator");
const validateFields = require("../middlewares/validate-fields");

const router = Router(); // create of a router

router.post(
  "/",
  [check("email", "email is not valid").isEmail(), validateFields],
  postMessages
); // post request

module.exports = router;
