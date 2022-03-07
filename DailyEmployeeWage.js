//UC2
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const Full_TIME_HOURS=8;
const WAGE_PER_HOUR=20;

let empHRS=0;
empcheck =Math.floor(Math.random() * 10) % 3;
switch (empcheck){
    case IS_PART_TIME:
        empHRS=PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHRS=Full_TIME_HOURS;
        break;
        default:
            empHRS=0;    
}
let empWage=empHRS *WAGE_PER_HOUR;
console.log("Emp Wage"+empWage);