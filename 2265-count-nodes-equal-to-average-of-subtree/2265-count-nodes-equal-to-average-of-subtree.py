# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    output = 0

    def averageOfSubtree(self, root: Optional[TreeNode]) -> int:

        def dfs(root) -> []:
            if root == None:
                return [0, 0]
            
            left = dfs(root.left)
            right = dfs(root.right)
        
            sum = left[0] + right[0] + root.val
            cnt = left[1] + right[1] + 1        
        
            if floor(sum / cnt) == root.val:
                self.output+=1
        
            return [sum, cnt]
            
        dfs(root)
        return self.output
        