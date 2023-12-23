
var allPossibleFBT = function (number) {

  if (number % 2 == 0) {
    return [];
  }
  
  var memo = new Array(number + 1).fill(null).map((i) => []);

  let helper = (n) => {
    
    if (memo[n].length > 0) {
      return memo[n];
    }

    if (n == 1) {
      return [new TreeNode(0)];
    }

    var trees = [];

    for (let i = 1; i < n - 1; i += 2) {
      let lt = helper(i);
      let rt = helper(n - 1 - i);

      lt.forEach((ltr) => {
        rt.forEach((rtr) => {
          // Make a new tree
          trees.push(new TreeNode(0, ltr, rtr));
        });
      });
    }

    memo[n] = trees;
    return memo[n];
  };

  return helper(number);
};
