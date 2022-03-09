//UC6 Arrays
function calcDailyWage(empHrs) {
    return empHrs*WAGE_PER_HOUR;
}

const MAX_HRS_IN_MONTH=160;
const NUM_OF_WORKING_DAYS=20;
const IS_PART_TIME=0;
const IS_FULL_TIME=1;
const Full_TIME_HOURS=8;
const PART_TIME_HOURS=4;
const WAGE_PER_HOUR=20;
let empHrs=0;
let totalWorkingDays=0;
let totalEmpHrs=0;

let empDailyWageArr=new Array();
function getWorkingHours(empcheck) {
    switch (empcheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            case IS_FULL_TIME:
                return Full_TIME_HOURS;
                default:
                    return 0;
    }
}
while(totalEmpHrs<=MAX_HRS_IN_MONTH &&
    totalWorkingDays <NUM_OF_WORKING_DAYS) {
        totalWorkingDays++;
        let empCheck=Math.floor(Math.random()*10) % 3;
        let empHrs=getWorkingHours(empCheck);
        totalEmpHrs += empHrs;
        empDailyWageArr.push(calcDailyWage(empHrs));
    }
    let empWage=calcDailyWage(totalEmpHrs);
    console.log("UC6-Total Days:"+totalWorkingDays+"Total Hrs:"+ totalEmpHrs +"Emp Wage:"+empWage);