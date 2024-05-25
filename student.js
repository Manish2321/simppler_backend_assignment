const fs = require('fs');

const DATA_FILE = 'students.json';

// Initial empty array for students
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}

class Student {
    constructor(fullName, age, dateOfBirth, className, subjects = {}) {
        this.fullName = fullName;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
        this.className = className;
        this.subjects = subjects;
        this.calculatePercentageAndGrade();
    }

    calculatePercentageAndGrade() {
        const totalMarks = Object.values(this.subjects).reduce((sum, mark) => sum + mark, 0);
        const subjectCount = Object.keys(this.subjects).length;
        this.percentage = totalMarks / subjectCount;

        if (this.percentage >= 90) {
            this.grade = 'A+';
        } else if (this.percentage >= 80) {
            this.grade = 'A';
        } else if (this.percentage >= 70) {
            this.grade = 'B';
        } else if (this.percentage >= 60) {
            this.grade = 'C';
        } else if (this.percentage >= 50) {
            this.grade = 'D';
        } else {
            this.grade = 'F';
        }
    }

    static saveStudents(students) {
        fs.writeFileSync(DATA_FILE, JSON.stringify(students, null, 2));
    }

    static loadStudents() {
        const data = fs.readFileSync(DATA_FILE);
        return JSON.parse(data).map(student => new Student(student.fullName, student.age, student.dateOfBirth, student.className, student.subjects));
    }
}

module.exports = Student;
