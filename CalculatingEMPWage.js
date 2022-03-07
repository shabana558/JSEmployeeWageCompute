//UC4
const NUM_OF_WORKING_DAYS =2;
let empHrs =0;
for (let day=0;day<NUM_OF_WORKING_DAYS;day++) {
    let empCheck=Math.floor(Math.random()*10) % 3;
    empHrs += getWorkingHours(empCheck);
}
let empWage=empHrs*WAGE_PER_HOUR;
console.log("Total Hrs:"+empHrs+"empWage:"+ empWage);