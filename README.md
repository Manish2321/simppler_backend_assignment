# Student Management Application

A console-based student management system built with Node.js that allows users to manage student records. The application supports various operations such as showing all students, filtering students based on criteria, searching for a student, updating a student's record, deleting a student, and calculating average marks and percentages.

## Features

- **Show all Students**: Display the list of all students.
- **Filter Students based on criteria**: Filter students by class name.
- **Search for a Student**: Search for a student by their full name.
- **Update a Student's Record**: Update the details of a student.
- **Delete a Student**: Remove a student's record.
- **Add a New Student**: Add a new student to the list.
- **Get Average Percentage of a Class**: Calculate and display the average percentage of students in a specified class.
- **Calculate Average Marks of a Student**: Calculate and display the average marks of a specific student.

## Student Record Format

Each student's record includes:

- Full Name
- Age
- Date of Birth
- Class
- Subjects List
- Marks in each subject
- Percentage and Grade of Student (A+: 90+, A: 90-80, B: 80-70, C: 70-60, D: 60-50, F: below 50)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/student-management.git
    cd student-management
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Usage

1. Run the application:
    ```sh
    node app.js
    ```

2. Follow the on-screen prompts to interact with the student management system.

## File Structure

- `app.js`: Main application file that handles user interactions.
- `student.js`: Defines the `Student` class and utility functions for loading and saving students.
- `students.json`: File used to store student records.

## Example Usage

### Adding a New Student

- Select option `8` from the menu.
- Enter the student's details as prompted (full name, age, date of birth, class name, subjects, and marks).

### Viewing All Students

- Select option `1` from the menu to view all students.

### Updating a Student's Record

- Select option `4` from the menu.
- Enter the full name of the student whose record you want to update.
- Update the student's details as prompted.

### Deleting a Student

- Select option `5` from the menu.
- Enter the full name of the student whose record you want to delete.

### Calculating Average Percentage of a Class

- Select option `6` from the menu.
- Enter the class name to calculate the average percentage of students in that class.

### Calculating Average Marks of a Student

- Select option `7` from the menu.
- Enter the full name of the student to calculate their average marks.
