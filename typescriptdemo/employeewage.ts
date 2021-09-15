import { employee } from './constants';  

//welcome message
console.log("Welcome to Employee Wage computation");

//uc1 check user is present or not
var emp_check = Math.floor(Math.random() * 10) % 2;
var check_attendance = ( emp_check == employee.is_Absent ? 'Employee is absent' : 'Employee is present' );
console.log(check_attendance);

//uc2 employee wage
var empwage = employee.fulltime * employee.wageperhr;
console.log("Employee fulltime wage is",empwage);