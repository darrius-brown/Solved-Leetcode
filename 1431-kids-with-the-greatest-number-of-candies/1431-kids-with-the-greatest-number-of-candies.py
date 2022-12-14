class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        highest = sorted(candies)[-1]
        output = [0] * len(candies)
        for i in range(len(candies)):
            if candies[i] + extraCandies >= highest:
                output[i] = True
            else:
                output[i] = False
        return output
        