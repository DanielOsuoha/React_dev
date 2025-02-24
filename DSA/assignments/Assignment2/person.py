def find_difference(month, day):
    from datetime import datetime

    today = datetime.today()
    months_left = month - today.month
    if month < today.month:
        months_left += 12
    
    days_left = day - today.day
    if day < today.day:
        months_left -= 1
        days_left += 30
    
    return months_left, days_left


GENDERS = {'m': 'Male', 'f': 'Female'}

# Accept the name
while True:
    try:
        name = input("Enter your name: ")
        if not name:
            raise ValueError
        break
    except ValueError:
        print("Name cannot be empty.")

# Accept the date of birth
while True:
    try:
        year = int(input("Enter the year as a four-digit number [ex 2004]: "))
        if not len(str(year)) == 4:
            raise ValueError
        month = int(input("Enter the month as a number between 1 and 12: "))
        if not 1 <= month <= 12:
            raise ValueError
        day = int(input("Enter the day as a number between 1 and 31: "))
        if not 1 <= day <= 31:
            raise ValueError
        break
    except ValueError:
        print("Year-> a four-digit number, Month-> a number between 1 and 12, Day-> a number between 1 and 31")

while True:
    try:
        gender = input("Enter your gender. [m -> male, f -> female]: ").lower()
        if gender not in {"m", "f"}:
            raise ValueError
        break
    except ValueError:
        print("Enter either m [male] or f [female]")

# Print welcome statement
months_left, days_left = find_difference(month, day)
print(f"Welcome {name}!\nYour date of birth is {day}/{month}/{year} and you are {GENDERS[gender]}.")
print(f"Your birthday is in {months_left} months and {days_left} days.")
