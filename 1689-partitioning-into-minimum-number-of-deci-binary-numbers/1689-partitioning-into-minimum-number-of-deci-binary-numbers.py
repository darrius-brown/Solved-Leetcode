class Solution:
    def minPartitions(self, n: str) -> int:
        
        highest = 0
        for char in n:
            if int(char) > highest:
                highest = int(char)
        return highest
            
        