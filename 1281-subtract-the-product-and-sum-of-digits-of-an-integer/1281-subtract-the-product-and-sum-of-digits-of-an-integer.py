class Solution(object):
    def subtractProductAndSum(self, n):
        product = 1
        added = 0

        for num in str(n):
            product = product * int(num)
            added += int(num)

        return product - added
