const readlineSync = require('readline-sync');
const Student = require('./student');

function showMenu() {
    console.log('\n1. Show all Students');
    console.log('2. Filter Students based on criteria');
    console.log('3. Search for a Student');
    console.log('4. Update a Student\'s Record');
    console.log('5. Delete a Student');
    console.log('6. Get Average Percentage of a Class');
    console.log('7. Calculate Average Marks of a Student');
    console.log('8. Add a New Student');
    console.log('9. Exit');
}

function showAllStudents(students) {
    console.log('\nAll Students:');
    students.forEach(student => console.log(student));
}

function filterStudents(students) {
    const className = readlineSync.question('Enter class name to filter by: ');
    const filtered = students.filter(student => student.className === className);
    console.log(`\nStudents in class ${className}:`);
    filtered.forEach(student => console.log(student));
}

function searchStudent(students) {
    const fullName = readlineSync.question('Enter full name of the student: ');
    const student = students.find(student => student.fullName === fullName);
    if (student) {
        console.log('\nStudent found:');
        console.log(student);
    } else {
        console.log('Student not found.');
    }
}

function updateStudent(students) {
    const fullName = readlineSync.question('Enter full name of the student to update: ');
    const student = students.find(student => student.fullName === fullName);
    if (student) {
        student.age = readlineSync.questionInt('Enter new age: ');
        student.dateOfBirth = readlineSync.question('Enter new date of birth (YYYY-MM-DD): ');
        student.className = readlineSync.question('Enter new class name: ');
        
        const subjectCount = readlineSync.questionInt('Enter number of subjects: ');
        student.subjects = {};
        for (let i = 0; i < subjectCount; i++) {
            const subjectName = readlineSync.question(`Enter subject ${i+1} name: `);
            const marks = readlineSync.questionInt(`Enter marks for ${subjectName}: `);
            student.subjects[subjectName] = marks;
        }
        student.calculatePercentageAndGrade();
        Student.saveStudents(students);
        console.log('Student record updated.');
    } else {
        console.log('Student not found.');
    }
}

function deleteStudent(students) {
    const fullName = readlineSync.question('Enter full name of the student to delete: ');
    const index = students.findIndex(student => student.fullName === fullName);
    if (index !== -1) {
        students.splice(index, 1);
        Student.saveStudents(students);
        console.log('Student record deleted.');
    } else {
        console.log('Student not found.');
    }
}

function getAveragePercentageOfClass(students) {
    const className = readlineSync.question('Enter class name: ');
    const classStudents = students.filter(student => student.className === className);
    if (classStudents.length > 0) {
        const totalPercentage = classStudents.reduce((sum, student) => sum + student.percentage, 0);
        const averagePercentage = totalPercentage / classStudents.length;
        console.log(`Average percentage of class ${className}: ${averagePercentage.toFixed(2)}%`);
    } else {
        console.log(`No students found in class ${className}.`);
    }
}

function calculateAverageMarksOfStudent(students) {
    const fullName = readlineSync.question('Enter full name of the student: ');
    const student = students.find(student => student.fullName === fullName);
    if (student) {
        console.log(`Average marks of ${student.fullName}: ${student.percentage.toFixed(2)}`);
    } else {
        console.log('Student not found.');
    }
}

function addNewStudent() {
    const newStudent = collectStudentInfo();
    const students = Student.loadStudents();
    students.push(newStudent);
    Student.saveStudents(students);
    console.log('New student added successfully.');
}

function collectStudentInfo() {
    const fullName = readlineSync.question('Enter full name: ');
    const age = readlineSync.questionInt('Enter age: ');
    const dateOfBirth = readlineSync.question('Enter date of birth (YYYY-MM-DD): ');
    const className = readlineSync.question('Enter class name: ');

    const subjectCount = readlineSync.questionInt('Enter number of subjects: ');
    const subjects = {};
    for (let i = 0; i < subjectCount; i++) {
        const subjectName = readlineSync.question(`Enter subject ${i + 1} name: `);
        const marks = readlineSync.questionInt(`Enter marks for ${subjectName}: `);
        subjects[subjectName] = marks;
    }

    return new Student(fullName, age, dateOfBirth, className, subjects);
}


function main() {
    let exit = false;

    while (!exit) {
        showMenu();
        const choice = readlineSync.questionInt('\nChoose an option: ');

        let students = Student.loadStudents();
        switch (choice) {
            case 1:
                showAllStudents(students);
                break;
            case 2:
                filterStudents(students);
                break;
            case 3:
                searchStudent(students);
                break;
            case 4:
                updateStudent(students);
                break;
            case 5:
                deleteStudent(students);
                break;
            case 6:
                getAveragePercentageOfClass(students);
                break;
            case 7:
                calculateAverageMarksOfStudent(students);
                break;
            case 8:
                addNewStudent();
                break;
            case 9:
                exit = true;
                break;
            default:
                console.log('Invalid choice. Please try again.');
        }
    }
}

main();
