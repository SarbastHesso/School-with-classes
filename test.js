class Grade {
  constructor(student, course, score) {
    this.student = student;
    this.course = course;
    this.score = score;
  }

  displayInfo() {
    console.log(
      `Grade for ${this.student.name} in ${this.course.name}: ${this.score}`
    );
  }
}

class GradeManager {
  constructor() {
    this.grades = [];
  }

  addGrade(grade) {
    this.grades.push(grade);
  }

  getAverageGrade(course) {
    const courseGrades = this.grades.filter((grade) => grade.course === course);
    if (courseGrades.length === 0) {
      return null;
    }
    const totalScore = courseGrades.reduce(
      (sum, grade) => sum + grade.score,
      0
    );
    return totalScore / courseGrades.length;
  }

  displayGrades() {
    console.log("All Grades:");
    this.grades.forEach((grade) => grade.displayInfo());
  }
}

// Update Student class to include grades
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.courses = [];
  }

  enroll(course) {
    this.courses.push(course);
    course.addStudent(this);
  }

  displayInfo() {
    console.log(`Student: ${this.name}, Age: ${this.age}`);
  }
}

// Update Teacher class to include grades
class Teacher {
  constructor(name, expertise) {
    this.name = name;
    this.expertise = expertise;
    this.courses = [];
  }

  assignCourse(course) {
    this.courses.push(course);
    course.assignTeacher(this);
  }

  displayInfo() {
    console.log(`Teacher: ${this.name}, Expertise: ${this.expertise}`);
  }
}

// Update Course class to include grades
class Course {
  constructor(name) {
    this.name = name;
    this.teacher = null;
    this.students = [];
    this.grades = [];
  }

  assignTeacher(teacher) {
    this.teacher = teacher;
  }

  addStudent(student) {
    this.students.push(student);
  }

  addGrade(grade) {
    this.grades.push(grade);
  }

  displayInfo() {
    console.log(`Course: ${this.name}`);
  }
}

// Update School class to include grades
class School {
  constructor(name) {
    this.name = name;
    this.teachers = [];
    this.students = [];
    this.courses = [];
    this.gradeManager = new GradeManager();
  }

  admitStudent(student) {
    this.students.push(student);
  }

  hireTeacher(teacher) {
    this.teachers.push(teacher);
  }

  offerCourse(course) {
    this.courses.push(course);
  }

  assignGrade(student, course, score) {
    const grade = new Grade(student, course, score);
    this.gradeManager.addGrade(grade);
    course.addGrade(grade);
    return grade;
  }

  displaySchoolInfo() {
    console.log(`School: ${this.name}`);
    console.log("Teachers:");
    this.teachers.forEach((teacher) => teacher.displayInfo());
    console.log("Students:");
    this.students.forEach((student) => student.displayInfo());
    console.log("Courses:");
    this.courses.forEach((course) => course.displayInfo());
    console.log("Grades:");
    this.gradeManager.displayGrades();
  }
}

// Example Usage:
const mySchool = new School("Coding Academy");

const mathTeacher = new Teacher("Mr. Smith", "Mathematics");
const physicsTeacher = new Teacher("Mrs. Johnson", "Physics");

const mathCourse = new Course("Math 101");
const physicsCourse = new Course("Physics 101");

const alice = new Student("Alice", 18);
const bob = new Student("Bob", 19);

mySchool.hireTeacher(mathTeacher);
mySchool.hireTeacher(physicsTeacher);

mySchool.offerCourse(mathCourse);
mySchool.offerCourse(physicsCourse);

mySchool.admitStudent(alice);
mySchool.admitStudent(bob);

mathTeacher.assignCourse(mathCourse);
physicsTeacher.assignCourse(physicsCourse);

alice.enroll(mathCourse);
bob.enroll(physicsCourse);

// Assign grades
mySchool.assignGrade(alice, mathCourse, 90);
mySchool.assignGrade(alice, physicsCourse, 85);
mySchool.assignGrade(bob, mathCourse, 78);
mySchool.assignGrade(bob, physicsCourse, 92);

// Display grades
mySchool.displaySchoolInfo();

// Display average grade for each course
console.log(
  `Average Grade for ${
    mathCourse.name
  }: ${mySchool.gradeManager.getAverageGrade(mathCourse)}`
);
console.log(
  `Average Grade for ${
    physicsCourse.name
  }: ${mySchool.gradeManager.getAverageGrade(physicsCourse)}`
);
