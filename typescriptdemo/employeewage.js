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
//uc4 switch case
var empwage = 0;
var empcheck = Math.floor(Math.random() * 10) % 3;
var emphr = 0;
switch (empcheck) {
    case 0:
        emphr = constants_1.employee.fulltime; //fulltime
        break;
    case 1:
        emphr = constants_1.employee.parttime; //partime
        break;
    default:
        emphr = 0;
        break;
}
empwage += emphr * constants_1.employee.wageperhr; //time * wage per hr
console.log("Employee wage is", empwage);
//uc5 employee monthly wage
var empwage = 0;
var day = 0;
while (day < constants_1.employee.days) {
    var empcheck_1 = Math.floor(Math.random() * 10) % 3;
    var emphr_1 = 0;
    switch (empcheck_1) {
        case 0:
            emphr_1 = constants_1.employee.fulltime; //fulltime
            break;
        case 1:
            emphr_1 = constants_1.employee.parttime; //partime
            break;
        default:
            emphr_1 = 0;
            break;
    }
    day++;
    empwage += emphr_1 * constants_1.employee.wageperhr; //time * wage per hr
}
console.log("Employee monthly wage is", empwage);
