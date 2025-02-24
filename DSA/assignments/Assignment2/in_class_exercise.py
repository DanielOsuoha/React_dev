class GramFam:
    def __init__(self, first, last, g_number, phone):
        self.first = first
        self.last = last
        self.g_number = g_number
        self.phone = phone
        self.email = f"{self.last.lower()}{self.first[0].lower()}{str(self.g_number)[-3:]}@gram.edu"

class Student(GramFam): 
    def __init__(self, first, last, g_number, phone, major, classification):
        super().__init__(first, last, g_number, phone)
        self.major = major
        self.classification = classification

    def get_full_name(self):
        return f"{self.first} {self.last}"

    def get_email_address(self):
        return self.email
class Faculty(GramFam):
    def __init__(self, first, last, g_number, phone, salary, classification, years_of_experience, advisees):
        super().__init__(first, last, g_number, phone)
        self.salary = salary
        self.classification = classification
        self.years_of_experience = years_of_experience
        self.advisees = advisees

    def get_full_name(self):
        return f"{self.first} {self.last}"
    def add_advisee(self, advisee):
        self.advisees.append(advisee)

    def remove_advisee(self, advisee):
        self.advisees.remove(advisee)
    
    def get_advisees(self):
        return self.advisees



if __name__ == '__main__':
    student1 = Student("John", "Pete", 123456, "555-123-4567", "Computer Science", "Freshman")
    student2 = Student("Dan", "Meyer", 345678, "321-123-6567", "Marketting", "Sophomore")
    student3 = Student("Cam", "Doe", 543210, "565-436-4567", "Business Management", "Freshman")
    student4 = Student("James", "Canon", 987654, "955-153-4867", "Computer Science", "Sophomore")

    faculty1 = Faculty("Jane", "Smith", 789012, "555-987-6543", 73000, "Professor", 18, [student1, student4])
    faculty2 = Faculty("Alice", "Martin", 654321, "321-287-7543", 51000, "Lecturer", 12, [student2, student3])
    faculty1.remove_advisee(student4)
    faculty1.add_advisee(student3)
    faculty2.remove_advisee(student3)
    faculty2.add_advisee(student4)

    print(faculty1.get_full_name())
    print("--------------------")
    for advisee in faculty1.get_advisees():
        print(advisee.get_full_name() + " " + advisee.get_email_address())
   
    print()
   
    print(faculty2.get_full_name())
    print("--------------------")
    for advisee in faculty2.get_advisees():
        print(advisee.get_full_name() + " " + advisee.get_email_address())
    