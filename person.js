// Base Person class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to display basic information
    displayInfo() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }

    // Method to get a greeting
    greet() {
        return `Hello, I'm ${this.name}`;
    }
}

// Student class extending Person
class Student extends Person {
    constructor(name, age, grade, course) {
        super(name, age); // Call parent constructor
        this.grade = grade;
        this.course = course;
    }

    // Override displayInfo method to include student-specific information
    displayInfo() {
        return `${super.displayInfo()}, Grade: ${this.grade}, Course: ${this.course}`;
    }

    // Additional method specific to students
    study() {
        return `${this.name} is studying ${this.course}`;
    }

    // Override greet method for students
    greet() {
        return `Hi! I'm ${this.name}, a student in grade ${this.grade}`;
    }
}

// Teacher class extending Person
class Teacher extends Person {
    constructor(name, age, subject, department) {
        super(name, age); // Call parent constructor
        this.subject = subject;
        this.department = department;
    }

    // Override displayInfo method to include teacher-specific information
    displayInfo() {
        return `${super.displayInfo()}, Subject: ${this.subject}, Department: ${this.department}`;
    }

    // Additional method specific to teachers
    teach() {
        return `${this.name} teaches ${this.subject} in the ${this.department} department`;
    }

    // Override greet method for teachers
    greet() {
        return `Hello, I'm ${this.name}, a ${this.subject} teacher`;
    }
}

// Create instances and demonstrate inheritance
console.log("=== Person Class Hierarchy Demo ===\n");

// Create a Person instance
const person = new Person("John Doe", 30);
console.log("Person instance:");
console.log(person.displayInfo());
console.log(person.greet());
console.log();

// Create Student instances
const student1 = new Student("Alice Johnson", 16, "A", "Computer Science");
const student2 = new Student("Bob Smith", 17, "B+", "Mathematics");

console.log("Student instances:");
console.log("Student 1:", student1.displayInfo());
console.log("Student 1 greeting:", student1.greet());
console.log("Student 1 studying:", student1.study());
console.log();

console.log("Student 2:", student2.displayInfo());
console.log("Student 2 greeting:", student2.greet());
console.log("Student 2 studying:", student2.study());
console.log();

// Create Teacher instances
const teacher1 = new Teacher("Dr. Sarah Wilson", 45, "Computer Science", "Engineering");
const teacher2 = new Teacher("Prof. Michael Brown", 52, "Mathematics", "Science");

console.log("Teacher instances:");
console.log("Teacher 1:", teacher1.displayInfo());
console.log("Teacher 1 greeting:", teacher1.greet());
console.log("Teacher 1 teaching:", teacher1.teach());
console.log();

console.log("Teacher 2:", teacher2.displayInfo());
console.log("Teacher 2 greeting:", teacher2.greet());
console.log("Teacher 2 teaching:", teacher2.teach());
console.log();

// Demonstrate polymorphism
console.log("=== Polymorphism Demo ===");
const people = [person, student1, student2, teacher1, teacher2];

people.forEach((person, index) => {
    console.log(`Person ${index + 1} info:`, person.displayInfo());
    console.log(`Person ${index + 1} greeting:`, person.greet());
    console.log();
});

// Export classes for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Person, Student, Teacher };
}

