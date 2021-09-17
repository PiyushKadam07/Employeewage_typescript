import { employee } from './constants';  

//uc7 using class
class Employee {

    constructor() {
        //welcome message
        console.log("Welcome to Employee Wage computation");
    }

    employeecheck(): void {
        //uc1 check user is present or not
        var emp_check = Math.floor(Math.random() * 10) % 2;
        var check_attendance = ( emp_check == employee.is_Absent ? 'Employee is absent' : 'Employee is present' );
        console.log(check_attendance);
    }

    employeewage(): void {
        // //uc2 employee wage full time
        // var empwage = employee.fulltime * employee.wageperhr;
        // console.log("Employee fulltime wage is",empwage);

        // //uc3 employee wage part time
        // var empwage = employee.parttime * employee.wageperhr;
        // console.log("Employee parttime wage is",empwage);

        // //uc4 switch case
        // var empwage = 0;
        // const empcheck = Math.floor(Math.random() * 10) % 3;
        // let emphr = 0;
        // switch(empcheck){
        //     case 0: emphr = employee.fulltime;   //fulltime
        //             break;
        //     case 1: emphr = employee.parttime;   //partime
        //             break;
        //     default: emphr = 0;
        //             break;
        // }
        // empwage += emphr * employee.wageperhr; //time * wage per hr
        // console.log("Employee wage is",empwage);

        // //uc5 employee monthly wage
        // var empwage = 0;
        // var day = 0;
        // while(day < employee.days){
        //     const empcheck = Math.floor(Math.random() * 10) % 3;
        //     let emphr = 0;

        //     switch(empcheck){
        //         case 0: emphr = employee.fulltime;   //fulltime
        //                 break;
        //         case 1: emphr = employee.parttime;   //partime
        //                 break;
        //         default: emphr = 0;
        //                 break;
        //     }
        //     day++;
        //     empwage += emphr * employee.wageperhr; //time * wage per hr
        // }
        // console.log("Employee monthly wage is",empwage);

        //uc6 max working hrs
        var empwage = 0;
        let empWage: number[] = new Array();   //uc8 monthly wage using array
        // var empwage1 = 0;
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
            // empwage1 += empwage;
            empWage.push(empwage);
        }
        console.log("Employee wage is",empWage);
        // console.log("DAY:",day,"EmpHr:",time,"EmpWage:",empwage);

        // uc9 using array methods
        let empwage1 = empWage.reduce((sum, current) => sum + current, 0);   // total Wage using Array forEach or reduce method
        console.log("DAY:", day, "EmpHr:", time, "EmpWage:", empwage1);

        let lengths = empWage.map( function(val, index) {                    // Day along with Daily Wage using Array map helper function            
            return {Day:index + 1, Wage:val};
        })
        console.log("Day along with Daily Wage", lengths);

        let Wages = lengths.filter(item => item.Wage == 160);  // Days when Full time wage of 160 were earned using filter function
        console.log("Days when Full time wage of 160 were earned", Wages);

        // let findfulltime = lengths.find( function(val, index) {         // first occurrence when Full Time Wage was earned using find function             
        //     if ( val.Wage == 160 ) {
        //     return index 
        //     }
        // })
        // console.log("First occurrence when Full Time Wage was earned", findfulltime);

        let checkfulltime = Wages.some(item => item.Wage == 160)     //  Every Element of Full Time Wage is truly holding Full time wage
        console.log("Every Element of Full Time Wage is truly holding Full time wage:", checkfulltime);

        let checkparttime = lengths.some(item => item.Wage == 80)         //check if there is any Part Time Wage
        console.log("Checking if there is any Part Time Wage:", checkparttime);

        let checkempworked = lengths.filter(item => item.Wage == 0);      // number of days the Employee Worked  
        console.log("Employee worked for", employee.days-checkempworked.length, "days"); 
    }

}

let emp = new Employee();
emp.employeecheck();
emp.employeewage(); 