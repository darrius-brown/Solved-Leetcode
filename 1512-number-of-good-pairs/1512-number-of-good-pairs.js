/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    output = {}
    count = 0

    function factorialize(num) {
        if (num < 0) 
              return -1;
        else if (num == 0) 
            return 1;

          else {
              return (num * factorialize(num - 1));
          }
      }

      function findPairs(num) {
        if(num <= 1) {
            return 0
        }
        return factorialize(num) / (factorialize(2) * (factorialize(num-2)))
      }

    for (const i in nums){
        if (nums[i] in output) {
            output[nums[i]] += 1  
        }
        else {
            output[nums[i]] = 1   
        }    
    }

    for (const i in Object.values(output)) {
        count += findPairs(parseInt(Object.values(output)[i]))
    }

    return count
    
};