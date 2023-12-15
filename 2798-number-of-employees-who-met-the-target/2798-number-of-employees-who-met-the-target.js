/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
   let counter = 0
   for (const i in hours) {
       if (hours[i] >= target) {
           counter++
       }
   }

    return counter
};