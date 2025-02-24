def p(x):
    return x**2 - (2*x) >= x/2*4

def implication(x, y):
    if not p(x):
        return True
    else:
        if not p(y):
            return True
    return False 

print(implication(52, 640))
