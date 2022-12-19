class Solution:
    def mostWordsFound(self, sentences: List[str]) -> int:
        return max(map(lambda s: s.count(" ") + 1, sentences))