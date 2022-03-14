let totalEmpHrs=0;
let totalWorkingDays=0;
const MAX_HRS_IN_MONTH=20;
const NUM_OF_WORKING_DAYS=15;

let empDailyHrsAndWageArr=new Array();
while(totalEmpHrs<=MAX_HRS_IN_MONTH  &&
    totalWorkingDays<NUM_OF_WORKING_DAYS) {
        totalWorkingDays++;
        let empCheck=Math.floor(Math.random()* 10) % 3;
        let empHrs=getWorkingHours(empCheck);
        totalEmpHrs += empHrs;
        empDailyHrsAndWageArr.push(
            {
                dayNum:totalWorkingDays,
                dailyHours:empHrs,
                dailyWage:calcDailyWage(empHrs),
                toString() {
                    return '\nDay'+this.dayNum +'=> Working Hours is '+this.dailyHours+'And wage Earned= '+this.dailyWage
                },
            });
    }
    console.log("UC 10 showing Daily Hours Worked and Wage Earned: "+ empDailyHrsAndWageArr);
    