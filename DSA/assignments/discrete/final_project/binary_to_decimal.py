def decimal_to_binary(decimal):
    binary_digits = []
    while decimal > 0:
        decimal, remainder = divmod(decimal, 2)
        binary_digits.append(str(remainder))
    return ''.join(reversed(binary_digits))


decimal = int(input("Input the decimal number: "))
print(decimal_to_binary(decimal))
