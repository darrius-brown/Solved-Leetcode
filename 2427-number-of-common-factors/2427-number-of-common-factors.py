class Solution(object):
    def commonFactors(self, a, b):
        solution = 0

        if a > b:
            maxVal = a
        else:
            maxVal = b

        while maxVal != 0:
            if a % maxVal == 0 and b % maxVal == 0:
                solution += 1
            maxVal -= 1

        return solution
        