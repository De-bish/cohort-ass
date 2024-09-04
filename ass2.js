// Array of student objects
const students = [
    { name: 'Adeleke', age: 20, grade: 'A' },
    { name: 'Bunmi', age: 22, grade: 'B' },
    { name: 'Collins', age: 21, grade: 'A' },
    { name: 'Dominion', age: 23, grade: 'C' },
    { name: 'Evelyn', age: 20, grade: 'B' },
];

// Function to filter students by grade
const filterByGrade = (studentsArray, grade) => {
    return studentsArray.filter(student => student.grade === grade);
};

// Function to calculate the average age of students
const averageAge = (studentsArray) => {
    const totalAge = studentsArray.reduce((acc, student) => acc + student.age, 0);
    return totalAge / studentsArray.length;
};

// Example 
const gradeAStudents = filterByGrade(students, 'A');
console.log('Students with grade A:', gradeAStudents);

const avgAge = averageAge(students);
console.log('Average age of students:', avgAge);
