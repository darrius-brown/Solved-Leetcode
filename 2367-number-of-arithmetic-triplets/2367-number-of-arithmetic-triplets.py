class Solution:
    def arithmeticTriplets(self, nums: List[int], diff: int) -> int:
        
        solution = 0
        for x in range(len(nums)):

            i = nums[x] 
            for y in range(1, len(nums)- 1):
                if nums[y] - i == diff:
                    j = nums[y]
                    for z in range(y + 1,len(nums)):
                        if nums[z] - j == diff:
                            solution += 1

        return solution
            
            