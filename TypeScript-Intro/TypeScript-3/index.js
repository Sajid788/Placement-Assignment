var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Base class for common properties
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    // Method to display basic information
    Person.prototype.displayBasicInfo = function () {
        console.log("Name: ".concat(this.name, ", Age: ").concat(this.age));
    };
    return Person;
}());
// Student class extends Person class
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, studentId, course, semester) {
        var _this = _super.call(this, name, age) || this; // Calls the constructor of the base class
        _this.studentId = studentId;
        _this.course = course;
        _this.semester = semester;
        return _this;
    }
    // Method to display student-specific information
    Student.prototype.displayStudentInfo = function () {
        this.displayBasicInfo();
        console.log("Student ID: ".concat(this.studentId, ", Course: ").concat(this.course, ", Semester: ").concat(this.semester));
    };
    return Student;
}(Person));
// Staff class extends Person class
var Staff = /** @class */ (function (_super) {
    __extends(Staff, _super);
    function Staff(name, age, staffId, department, position) {
        var _this = _super.call(this, name, age) || this; // Calls the constructor of the base class
        _this.staffId = staffId;
        _this.department = department;
        _this.position = position;
        return _this;
    }
    // Method to display staff-specific information
    Staff.prototype.displayStaffInfo = function () {
        this.displayBasicInfo();
        console.log("Staff ID: ".concat(this.staffId, ", Department: ").concat(this.department, ", Position: ").concat(this.position));
    };
    return Staff;
}(Person));
// Creating instances of Student and Staff classes
var student1 = new Student("John Doe", 20, "S12345", "Computer Science", 3);
var staff1 = new Staff("Jane Smith", 40, "ST001", "Engineering", "Professor");
// Displaying their information
console.log("Student Details:");
student1.displayStudentInfo();
console.log("\nStaff Details:");
staff1.displayStaffInfo();
