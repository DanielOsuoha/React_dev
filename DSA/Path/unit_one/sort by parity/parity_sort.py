"""
Problem 4: Sort Array by Parity
Given an integer array nums, write a function sort_by_parity() that moves all the even integers at the beginning of the array followed by all the odd integers.

Return any array that satisfies this condition.

def sort_by_parity(nums):
    pass
Example Usage

nums = [3, 1, 2, 4]
sort_by_parity(nums)

nums = [0]
sort_by_parity(nums)
Example Output:

[2, 4, 3, 1]
[0]

Use two pointers to move odd numbers to the end of the array.
"""

def sort_by_parity(nums):
    first = 0
    for sec in range(len(nums)):
        if not nums[sec] & 1:
            nums[first], nums[sec] = nums[sec], nums[first]
            first += 1
    return nums


nums = [3, 1, 2, 4]
print(sort_by_parity(nums))

nums = [0]
print(sort_by_parity(nums))