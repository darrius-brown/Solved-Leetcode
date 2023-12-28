/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    let res = [];
    
    for (let i = 0; i < points.length; i++) {
        res.push(points[i][0]);
    }

    res.sort((a, b) => a - b);

    let maxDif = 0;
    for (let i = 0; i < res.length - 1; i++) {
        if (res[i + 1] - res[i] > maxDif) maxDif = res[i + 1] - res[i];
    }

    return maxDif;
};