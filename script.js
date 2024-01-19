class School {
    constructor(name, address, zipcode, city) {
        this.name = name;
        this.address = address;
        this.zipcode = zipcode;
        this.city = city;
        this.students = [];
        this.teachers = [];
        this.grades = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    addTeacher(teacher) {
        this.teachers.push(teacher);
    }
    removeStudent(student){
        this.students = this.students.filter(x => x !== student)
    }
    addGrade(student, subject, grade){
        this.grades.push({
            student,
            subject,
            grade
        })
    }
};

class Subject {
    constructor(name) {
        this.name = name;
        this.students = [];
        this.teacher = {};
        this.grades = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    setTeacher(teacher) {
        this.teacher = teacher;
    }
    removeStudent(student) {
        this.students = this.students.filter((x) => x !== student);
    }
    addGrade(student, grade){
        this.grades.push({
            student,
            grade
        })
    }
};

class Student {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.subjects = [];
        this.grades = [];
    }
    addSubject(subject) {
        this.subjects.push(subject);
    }
    addGrade(subject, grade) {
        this.grades.push({
        subject,
        grade,
        });
    }
};

class Teacher{
    constructor(name){
        this.name = name;
        this.subjects = [];
    }
    addSubject(subject){
        this.subjects.push(subject)
    }
};


const codeSchool = new School('Code School', 'Center street 9', 99999, 'New York');
const html = new Subject('HTML');
const css = new Subject('CSS');
const javascript = new Subject('JAVASCRIPT');
const anders = new Student('Anders', 48, 'male');
const bosse = new Student('Bosse', 50, 'male');
const sofia = new Student('Sofia', 30, 'female');
const maya = new Student('Maya', 28, 'female');
const sarbast = new Student('Sarbast', 40, 'male');
const niklas = new Teacher('Niklas');
const thomas = new Teacher('Thomas');


// niklas.subjects.push(html);
// niklas.subjects.push(javascript);
// thomas.subjects.push(css);

// html.teacher = niklas;
// javascript.teacher = niklas;
// css.teacher = thomas;

// html.students.push(sarbast);
// html.students.push(bosse);
// html.students.push(maya);
// css.students.push(sarbast);
// css.students.push(anders);
// css.students.push(maya);
// javascript.students.push(sofia);
// javascript.students.push(bosse);
// javascript.students.push(sarbast);

// sarbast.subjects.push(html, css, javascript);
// bosse.subjects.push(html, javascript);
// maya.subjects.push(html, css);
// sofia.subjects.push(javascript);
// anders.subjects.push(css)


// const addSubjectToTeacher = (teacher, subject) => {
//     teacher.subjects.push(subject);
// }

// addSubjectToTeacher(niklas, html);
// addSubjectToTeacher(thomas, css);
// addSubjectToTeacher(niklas, javascript);

codeSchool.addStudent(anders);
codeSchool.addStudent(bosse);
codeSchool.addStudent(maya);
codeSchool.addStudent(sofia);
codeSchool.addStudent(sarbast);

codeSchool.addTeacher(niklas);
codeSchool.addTeacher(thomas);


niklas.addSubject(html);
niklas.addSubject(javascript);
thomas.addSubject(css);


html.setTeacher(niklas);
css.setTeacher(thomas);
javascript.setTeacher(niklas);

html.addStudent(anders);
html.addStudent(bosse);
html.addStudent(maya);
css.addStudent(maya);
css.addStudent(sofia);
css.addStudent(sarbast);
javascript.addStudent(anders);
javascript.addStudent(bosse);
javascript.addStudent(maya);
javascript.addStudent(sofia);
javascript.addStudent(sarbast);


sarbast.addSubject(css);
sarbast.addSubject(javascript);
anders.addSubject(html);
anders.addSubject(javascript);
sofia.addSubject(css);
sofia.addSubject(javascript);
maya.addSubject(html);
maya.addSubject(css);
maya.addSubject(javascript);
bosse.addSubject(html);
bosse.addSubject(javascript);

const addTecher = (teacher, subjects) => {
    codeSchool.addTeacher(teacher);
    subjects.forEach(subject => {
        subject.setTeacher(teacher);
        teacher.addSubject(subject);
    })
}
// const erik = new Teacher('Erik');
// addTecher(erik, [javascript]);

const addStudent = (student, subjects) => {
    codeSchool.addStudent(student);
    subjects.forEach(subject => {
        subject.addStudent(student);
        student.addSubject(subject);
    })
}
// const lucas = new Student("Lucas", 25, "male");
// addStudent(lucas, [html, css]);

const addSubject = (teacher, student, subject) => {
    teacher.addSubject(subject);
    subject.setTeacher(teacher);
    student.forEach(x => {
        x.addSubject(subject)
    })
    subject.addStudent(student);
}
// const react = new Subject('React');
// addSubject(thomas, [sarbast, bosse], react);

const removeStudent = (student) => {
    codeSchool.removeStudent(student);
    let subjects = [html, css, javascript];
    subjects.forEach (subject => {
        subject.students = subject.students.filter(x => x !== student)
    })
}

// removeStudent(sarbast);

const displayAllStudents = () => {
    let listOfStudents = [];
    for (let key in codeSchool.students) {
      listOfStudents.push(codeSchool.students[key]);
    }
    return listOfStudents
};
// console.log(displayAllStudents());


const dislayAllSaubjectsOfStudent = (student) => {
    let studentSubjects = [];
    for (let key in student.subjects){
        studentSubjects.push(student.subjects[key])
    }
    return studentSubjects;
}
// console.log(dislayAllSaubjectsOfStudent(sarbast));

const displayAllStudentsEnlistedToSubject = (subject) => {
    let subjectStudents = [];
    for (let key in subject.students){
        subjectStudents.push(subject.students[key])
    }
    return subjectStudents
}
// console.log(displayAllStudentsEnlistedToSubject(html));

const displayAllTeachers = () => {
    let allTeachers = [];
    for (let key in codeSchool.teachers){
        allTeachers.push(codeSchool.teachers[key]);
    }
    return allTeachers;
}
// console.log(displayAllTeachers());


class Grade {
    constructor (grade, subject, student){
        this.grade = grade;
        this.subject = subject;
        this.student = student;
    }
}

const createGrade = (grade, subject, student) => {
    let studentGrade = new Grade(grade, subject, student);
    subject.addGrade(student, grade);
    student.addGrade(subject, grade);
    codeSchool.addGrade(student, subject, grade)
}

createGrade(70, css, sarbast);
createGrade(85, html, bosse);
createGrade(95, javascript, maya);
createGrade(75, javascript, sofia);
createGrade(88, javascript, anders);


console.log(codeSchool);

const displayGrades = () => {
    let studentsGrades = [];
    for(let key in codeSchool.grades){
        studentsGrades.push(codeSchool.grades[key])
    }
    return studentsGrades;
}
console.log(displayGrades());

