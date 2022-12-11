class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        
        dictionary = {}
        output = [0] * len(nums)
        last = -1
        repeat = 0

        for i in sorted(nums):
            if last == -1:
                dictionary[i]= 0
            elif i != last:
                dictionary[i] = dictionary[last] + repeat + 1
                repeat = 0
            elif i == last:
                repeat += 1
            last = i
        for i in range(len(nums)):
            output[i] = dictionary[nums[i]]
        
        return output
        