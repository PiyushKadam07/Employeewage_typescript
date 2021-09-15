"use strict";
exports.__esModule = true;
var constants_1 = require("./constants");
//welcome message
console.log("Welcome to Employee Wage computation");
//uc1 check user is present or not
var emp_check = Math.floor(Math.random() * 10) % 2;
var check_attendance = (emp_check == constants_1.employee.is_Absent ? 'Employee is absent' : 'Employee is present');
console.log(check_attendance);
//uc2 employee wage full time
var empwage = constants_1.employee.fulltime * constants_1.employee.wageperhr;
console.log("Employee fulltime wage is", empwage);
//uc3 employee wage part time
var empwage = constants_1.employee.parttime * constants_1.employee.wageperhr;
console.log("Employee parttime wage is", empwage);
