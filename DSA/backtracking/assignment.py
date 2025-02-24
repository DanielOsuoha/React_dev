set_a = {1, 2, 3, 4, 5}
set_b = {4, 5, 6, 7, 8}
intersection = set()

for element in set_a:
    if element in set_b:
        intersection.add(element)

print("Intersection:", intersection)