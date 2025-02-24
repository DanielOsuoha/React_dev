def is_prime(number):
    for i in range(2, number):
        if number % i == 0:
            return False
    return True

X = {9,7,21,99,5, 8, 11, 6, 96, 35, 22, 78, 99, 105, 4, 2}
for number in X:
    if is_prime(number):
        print(f"The number {number} is prime.")
    