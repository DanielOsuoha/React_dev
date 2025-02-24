def find_poly(first, second):
    m = len(first)
    n = len(second)
    first = first[::-1]
    second = second[::-1]
    polynomial = [0]*(m+n-1)

    for i in range(m):
        for j in range(n):
            polynomial[i+j] += first[i] * second[j]

    return polynomial
def print_poly(poly):
    for i in range(len(poly)):
        print(poly[i], end="")
        if i!= 0:
            print(f"x^{i}", end=" ")
        if i < len(poly) - 1:
            print("+", end=" ")
    print()

if __name__ == "__main__":
    first = list(map(int, input().split()))
    second = list(map(int, input().split()))
    print_poly(find_poly(first, second))