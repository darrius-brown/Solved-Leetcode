class Solution:
    def interpret(self, command: str) -> str:
        
        output1 = command.replace("()", 'o')
        output2 = output1.replace("(al)", 'al')
        
        return output2
    
        