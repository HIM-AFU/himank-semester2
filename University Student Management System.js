class Student {
  constructor(rollNo, name, marks) {
    this.rollNo = rollNo;
    this.name = name;
    this.marks = marks;
    Student.totalStudents++;
  }

  displayResult() {
    console.log("Roll No:", this.rollNo);
    console.log("Name:", this.name);
    console.log("Marks:", this.marks);
    console.log("Result:", this.marks >= 40 ? "Pass" : "Fail");
    console.log("----------------");
  }

  static displayTotalStudents() {
    console.log("Total Students:", Student.totalStudents);
  }
}

Student.totalStudents = 0;

var s1 = new Student(101, "Himank", 85);
var s2 = new Student(102, "Rahul", 35);
var s3 = new Student(103, "Aman", 72);

s1.displayResult();
s2.displayResult();
s3.displayResult();
Student.displayTotalStudents();