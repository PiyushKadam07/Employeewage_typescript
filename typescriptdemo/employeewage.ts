import { employee } from './constants';  

//welcome message
console.log("Welcome to Employee Wage computation");

//uc1 check user is present or not
var emp_check = Math.floor(Math.random() * 10) % 2;
var check_attendance = ( emp_check == employee.is_Absent ? 'Employee is absent' : 'Employee is present' );
console.log(check_attendance);

//uc2 employee wage full time
var empwage = employee.fulltime * employee.wageperhr;
console.log("Employee fulltime wage is",empwage);

//uc3 employee wage part time
var empwage = employee.parttime * employee.wageperhr;
console.log("Employee parttime wage is",empwage);

//uc4 switch case
var empwage = 0;
const empcheck = Math.floor(Math.random() * 10) % 3;
let emphr = 0;
switch(empcheck){
    case 0: emphr = employee.fulltime;   //fulltime
            break;
    case 1: emphr = employee.parttime;   //partime
            break;
    default: emphr = 0;
            break;
}
empwage += emphr * employee.wageperhr; //time * wage per hr
console.log("Employee wage is",empwage);

//uc5 employee monthly wage
var empwage = 0;
var day = 0;
while(day < employee.days){
    const empcheck = Math.floor(Math.random() * 10) % 3;
    let emphr = 0;

    switch(empcheck){
        case 0: emphr = employee.fulltime;   //fulltime
                break;
        case 1: emphr = employee.parttime;   //partime
                break;
        default: emphr = 0;
                break;
    }
    day++;
    empwage += emphr * employee.wageperhr; //time * wage per hr
}
console.log("Employee monthly wage is",empwage);

//uc6 max working hrs
var empwage = 0;
var time = 0;
var day = 0;
while( time <= employee.time && day < employee.days ) {
    const empcheck = Math.floor(Math.random() * 10) % 3;
    let emphr = 0;

    switch(empcheck){
        case 0: emphr = employee.fulltime;   //fulltime
                break;
        case 1: emphr = employee.parttime;   //partime
                break;
        default: emphr = 0;
                break;
    }
    day++;
    time += emphr;
    empwage += emphr * employee.wageperhr; //time * wage per hr
}
console.log("DAY:",day,"EmpHr:",time,"EmpWage:",empwage);