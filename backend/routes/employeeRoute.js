const express = require("express");
const {
  createEmployee,
  getAllEmployees,
} = require("../controllers/employeeController");

const router = express.Router();

router.route("/new").post(createEmployee);
router.route("/employees").get(getAllEmployees);


module.exports = router;
