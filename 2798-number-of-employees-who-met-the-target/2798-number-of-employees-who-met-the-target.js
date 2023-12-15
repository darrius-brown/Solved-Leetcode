/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    const greaterThanTarget = (hour) => {
        return hour >= target
    }
    outputArray = hours.filter(greaterThanTarget)
return outputArray.length
};