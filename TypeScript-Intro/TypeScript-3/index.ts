// Base class for common properties
class Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    // Method to display basic information
    displayBasicInfo(): void {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
  }
  
  // Student class extends Person class
  class Student extends Person {
    studentId: string;
    course: string;
    semester: number;
  
    constructor(name: string, age: number, studentId: string, course: string, semester: number) {
      super(name, age); // Calls the constructor of the base class
      this.studentId = studentId;
      this.course = course;
      this.semester = semester;
    }
  
    // Method to display student-specific information
    displayStudentInfo(): void {
      this.displayBasicInfo();
      console.log(`Student ID: ${this.studentId}, Course: ${this.course}, Semester: ${this.semester}`);
    }
  }
  
  // Staff class extends Person class
  class Staff extends Person {
    staffId: string;
    department: string;
    position: string;
  
    constructor(name: string, age: number, staffId: string, department: string, position: string) {
      super(name, age); // Calls the constructor of the base class
      this.staffId = staffId;
      this.department = department;
      this.position = position;
    }
  
    // Method to display staff-specific information
    displayStaffInfo(): void {
      this.displayBasicInfo();
      console.log(`Staff ID: ${this.staffId}, Department: ${this.department}, Position: ${this.position}`);
    }
  }
  
  // Creating instances of Student and Staff classes
  const student1 = new Student("John Doe", 20, "S12345", "Computer Science", 3);
  const staff1 = new Staff("Jane Smith", 40, "ST001", "Engineering", "Professor");
  
  // Displaying their information
  console.log("Student Details:");
  student1.displayStudentInfo();
  
  console.log("\nStaff Details:");
  staff1.displayStaffInfo();
  