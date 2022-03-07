//UC3
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
let empHRS =0;
let empcheck=Math.floor(Math.random() *10)% 3;
empHRS=getWorkingHours(empcheck);
let empWage=empHRS*WAGE_PER_HOUR;
console.log("Emp Wage:" + empWage);
