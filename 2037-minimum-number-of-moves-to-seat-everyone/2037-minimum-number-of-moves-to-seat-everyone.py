class Solution(object):
    def minMovesToSeat(self, seats, students):
        solution = 0
        seats.sort()
        students.sort()

        for num in range(len(seats)):
            solution += abs(seats[num] - students[num]) 

        return abs(solution)
        