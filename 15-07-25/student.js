// Step 1: Define the array of students
const students = [
  {
    id: 1,
    name: "Rama",
    age: 20,
    branch: "CSE",
    isActive: true
  },
  {
    id: 2,
    name: "Sita",
    age: 21,
    branch: "ECE",
    isActive: false
  },
  {
    id: 3,
    name: "Lakshmana",
    age: 22,
    branch: "IT",
    isActive: true
  }
];
console.log("🔹 Printing students:");
students.forEach(student => {
  console.log(`ID: ${student.id}, Name: ${student.name}, Age: ${student.age}, Branch: ${student.branch}, Active: ${student.isActive}`);
});
const jsonString = JSON.stringify(students);
console.log("\n🔹 JSON Stringified:\n", jsonString);
const parsedStudents = JSON.parse(jsonString);
console.log("\n🔹 Parsed Students:");
parsedStudents.forEach(student => {
  console.log(`${student.name} is in ${student.branch} branch.`);
});
