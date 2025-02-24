"""

Problem 6: Merge Intervals
Write a function merge_intervals() that accepts an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

def merge_intervals(intervals):
	pass
Example Usage

intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
merge_intervals(intervals)

intervals = [[1, 4], [4, 5]]
merge_intervals(intervals)
Example Output:

[[1, 6], [8, 10], [15, 18]]
[[1, 5]]

"""
def merge_intervals(intervals):
    n = len(intervals)
    intervals.sort()
    result = []
    prev = intervals[0]
    for i in range(1, n):
        cur = intervals[i]
        if cur[0] <= prev[1]:
            prev[1] = max(prev[1], cur[1])
        else:
            result.append(prev)
            prev = cur
    result.append(prev)
    return result

print(merge_intervals([[1, 3], [2, 6], [8, 10], [15, 18]]))
print(merge_intervals([[1, 4], [4, 5]]))