class Solution(object):
    def createTargetArray(self, nums, index):
        solution = []

        for value in range(len(index)):
            solution.insert(index[value], nums[value])

        return solution
        