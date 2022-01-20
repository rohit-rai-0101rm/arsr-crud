const express = require("express");
const {
  createEmployee,
  getAllEmployees,
  getEmployeeDetails,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");

const router = express.Router();

router.route("/new").post(createEmployee);
router.route("/employees").get(getAllEmployees);
router.route("/employees/:id").get(getEmployeeDetails);
router.route("/employee/edit/:id").put(updateEmployee);
router.route("/employee/:id").delete(deleteEmployee);





module.exports = router;
