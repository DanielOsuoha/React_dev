import sys

lines = []

# Read input line by line
while True:
    line = input()  # Read one line of input from the user
    if line.strip().lower() == "end":  # If the line is 'END', stop taking input
        break
    lines.append(line)
all_numbers = []
positions = []
# Loop through each line
for line in lines:
    numbers = line.split()

    positions.append(len(all_numbers)+len(numbers))
    all_numbers.extend(numbers)


sorted_numbers = sorted(all_numbers, key=lambda x: float(x))
j = 0
for i in range(len(sorted_numbers)):
    if i+1 == positions[j]:
        if j > 0:
            print(' '.join(sorted_numbers[positions[j]-1:i+1]))
        elif i+1 == positions[j]:
            print(' '.join(sorted_numbers[:i+1]))
        j += 1


