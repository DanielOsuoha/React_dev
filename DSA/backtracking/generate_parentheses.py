"""
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Understand:

if the number of openParenthesis is less than n, add an openParenthesis and recurse
if the number of openParenthesis is less than the number of closeParenthesis, add a closeParenthesis and recurse
if they are equal, add the current combination

Implement:

"""

def generateParenthesis(n):
    """
    :type n: int
    :rtype: List[str]
    """
    ans = []
    result = []
    def recurse(openParenthesis, closeParenthesis):
        if openParenthesis < n:
            ans.append('(')
            # print(''.join(ans))
            recurse(openParenthesis + 1, closeParenthesis)
            ans.pop()
        if closeParenthesis < openParenthesis:
            ans.append(')')
            # print(''.join(ans))
            recurse(openParenthesis, closeParenthesis + 1)
            ans.pop()
        if openParenthesis == n and closeParenthesis == n:
            # print()
            result.append(''.join(ans))
            # print(result)

    recurse(0, 0)
    return result

if __name__ == '__main__':
    print(generateParenthesis(3))
