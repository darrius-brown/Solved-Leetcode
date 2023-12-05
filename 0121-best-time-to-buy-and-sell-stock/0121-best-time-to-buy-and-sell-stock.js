/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let minValue = prices[0];
    
    for(let i=1; i<prices.length;i++){
    	if(prices[i] < minValue){
            minValue = prices[i];
		}

		if((prices[i] - minValue) > profit){
      	    profit = prices[i] - minValue;
        }
    }
    
    return profit;
};