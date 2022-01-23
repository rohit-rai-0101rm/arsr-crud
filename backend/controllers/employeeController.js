const Employee = require("../models/employeeModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
exports.createEmployee = catchAsyncErrors(async (req, res, next) => {

  const employee = await Employee.create(req.body);
  res.status(201).json({
    success: true,
    employee,
    
  });
});

exports.getAllEmployees = catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = 5;
  const employeeCount = await Employee.countDocuments();

  const apiFeature = new ApiFeatures(Employee.find().sort({"createdAt": -1}), req.query)
    .search()
    .filter();

  let employees = await apiFeature.query.clone();

  let filteredEmployeesCount = employees.length;

  apiFeature.pagination(resultPerPage);

  employees = await apiFeature.query;

  res.status(200).json({
    success: true,
    employees,
    employeeCount,
    resultPerPage,
    filteredEmployeesCount,
  });
});



exports.getEmployeeDetails = catchAsyncErrors(async (req, res, next) => {
  const employee = await Employee.findById(req.params.id);

  if (!employee) {
    return next(new ErrorHander("Employee not found", 404));
  }

  res.status(200).json({
    success: true,
    employee,
  });
});


exports.updateEmployee = catchAsyncErrors(async (req, res, next) => {
  let employee = await Employee.findById(req.params.id);

  if (!employee) {
    return next(new ErrorHander("Employee not found", 404));
  }
  employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    employee,
  });
});


exports.deleteEmployee = catchAsyncErrors(async (req, res, next) => {
  const employee = await Employee.findById(req.params.id);

  if (!employee) {
    return next(new ErrorHander("Employee not found", 404));
  }

 
  await employee.remove();

  res.status(200).json({
    success: true,
    message: "one Employee Deleted Successfully",
  });
});

