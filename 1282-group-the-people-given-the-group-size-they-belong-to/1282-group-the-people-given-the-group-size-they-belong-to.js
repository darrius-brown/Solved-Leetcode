/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let output = {}
    let output2 = []

    for (const i in groupSizes) {
      if (groupSizes[i] in output) {
        output[groupSizes[i]].push(parseInt(i))
        if(output[groupSizes[i]].length == groupSizes[i]) {
          output2.push(output[groupSizes[i]])
          delete output[groupSizes[i]]
        }
      }
      else {
        output[groupSizes[i]] = [parseInt(i)]
        if(output[groupSizes[i]].length == groupSizes[i]) {
          output2.push(output[groupSizes[i]])
          delete output[groupSizes[i]]
        }
      }
    }
    return output2 
};