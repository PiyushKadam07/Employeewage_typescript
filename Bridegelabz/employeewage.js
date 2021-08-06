console.log("Welcome to Employee Wage computation");

const is_Absent = 0;

let emp_check = Math.floor(Math.random() * 10) % 2;

if (emp_check == is_Absent){
    console.log("Employee is absent");
}
else{
    console.log("Employee is present");
}

var empwage = 0;
const empcheck = Math.floor(Math.random() * 10) % 2;
let emphr = 0;

switch(empcheck){
    case 0: emphr = 8;   //fulltime
            break;
    case 1: emphr = 4;   //partime
            break;
    default:
            break;
}
empwage = emphr * 20; //time * wage per hr
console.log("Employee wage is ",empwage);