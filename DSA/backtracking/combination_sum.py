"""

Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

Example:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
Leetcode: 

Understand:
You want to use a particular index till it equals or is greater than the target.

Implement:
"""
def combinationSum(candidates, target):
    res = []
    def recurse(i, cur, total):
        if total == target:
            res.append(cur.copy())
            return
        # print(cur)
        if total > target or i >= len(candidates):
            return

        cur.append(candidates[i])
        recurse(i, cur, total+candidates[i])
        cur.pop()
        recurse(i+1, cur, total)

    recurse(0, [], 0)
    return res
if __name__ == '__main__':
    print(combinationSum([2,3,6,7], 7))
    print(combinationSum([2,3,5], 8))