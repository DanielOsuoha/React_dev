class Calculator:
    def binary_to_decimal(self, binary):
        return int(binary, 2)
    def decimal_to_binary(self, decimal):
        return bin(decimal)[2:]
    def binary_to_hex(self, binary):
        integer = int(binary, 2)
        return hex(integer)[2:]
    def hex_to_binary(self, hex):
        integer = int(hex, 16)
        return bin(integer)[2:]
    def decimal_to_hex(self, decimal):
        return hex(decimal)[2:]
    def hex_to_decimal(self, hex):
        return int(hex, 16)
    def decimal_to_octal(self, decimal):
        return oct(decimal)[2:]
    def octal_to_decimal(self, octal):
        return int(octal, 8)
    
if __name__ == "__main__":
    calculator = Calculator()
    print(calculator.binary_to_decimal("1101"))
    print(calculator.decimal_to_binary(101))
    print(calculator.binary_to_hex("1101"))
    print(calculator.hex_to_binary("A"))
    print(calculator.decimal_to_hex(101))
    print(calculator.hex_to_decimal("A"))
    print(calculator.decimal_to_octal(101))
    print(calculator.octal_to_decimal("101"))
    