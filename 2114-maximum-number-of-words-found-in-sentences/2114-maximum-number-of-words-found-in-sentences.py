class Solution:
    def mostWordsFound(self, sentences: List[str]) -> int:
        highest = 1
        count = 1
        for sentence in sentences:
            for char in sentence:
                if char == ' ':
                    count += 1
                if count > highest:
                    highest = count
            count = 1
        return highest