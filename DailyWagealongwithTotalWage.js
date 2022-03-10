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
let totalEmpWage=30;
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

    
    //UC7
    //Array Helper Functions
    //UC7A-Calculate total Wage using Array forEach traversal or reduce method
    let EMPWage=0;
    function sum(dailyWage){
        totalEmpWage += dailyWage;
    }
    empDailyWageArr.forEach(sum);
    console.log("UC7A-Total Days:"+totalWorkingDays+"Total Hrs:"+totalEmpHrs+"Emp Wage:" +totalEmpWage );
    function totalEmpWages(totalWage,dailyWage){
        return totalWage+dailyWage;
    }
    console.log("UC7A-Emp Wage with reduce:"+empDailyWageArr.reduce(totalWages,0));

    //UC7B-show the Day along with Daily Wage using Array map helper function
    let dailycntr=0;
    function mapDayWithWage(dailyWage){
        dailycntr++;
        return dailycntr + "="+ dailyWage;
    }
    let mapDayWithWageArr=empDailyWageArr.map(mapDayWithWage);
    console.log("UC7B-Daily Wage Map");
    console.log(mapDayWithWageArr);

    //UC7C-show Days when Full time of 160 were earned
    function fulltimeWage(dailyWage) {
        return dailyWage.includes("160");
    }
    let fullDayWageArr=mapDayWithWageArr.filter(fulltimeWage);
    console.log("UC7C-Daily Wage Filter When Fulltime Wage Earned");
    console.log(fullDayWageArr);

    //UC7D-Find the first occurrence when Full Time Wage was earned using find function
    function findFulltimeWage(dailyWage) {
        return dailyWage.includes("160");
    }
    console.log("UC7D-First time Fulltime wage was earned on Day:"+ mapDayWithWageArr.find(findFulltimeWage));

    //UC7E-Check if Every Element of Full Time wage is truely holding Full time wage 
    function isAllFulltimewage(dailyWage) {
        return dailyWage.includes("160");
    }
    console.log("UC7E-Check All Elements have Full Time wage:"+fullDayWageArr.every(isAllFulltimewage));

    //UC7F-Check if there is any part Time Wage
    function isAnyPartTimeWage(dailyWage) {
        return dailyWage.includes("80");
    }
    console.log("UC7F-Check If Any Part Time Wage:"+mapDayWithWageArr.some(isAnyPartTimeWage));

    //UC7G- Find the number of days the Employee Worked
    function totalDayWorked(numofDays,dailyWage) {
        if (dailyWage>0)return numofDays+1;
        return numofDays;
    }
    console.log("UC7G-Number of Days Emp Worked:"+empDailyWageArr.reduce(totalDayWorked,0));