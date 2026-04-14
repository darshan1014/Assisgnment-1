const express = require("express");
const app = express();

const PORT = 3000;

// Students data
const students = [
  { name: "Amit", course: "AI" },
  { name: "Riya", course: "FullStack" },
  { name: "Rahul", course: "DataScience" }
];

// Courses data
const courses = [
  { id: 1, name: "AI" },
  { id: 2, name: "FullStack" },
  { id: 3, name: "DataScience" }
];

// Route 1: /students
app.get("/students", (req, res) => {
  res.json(students);
});

// Route 2: /courses
app.get("/courses", (req, res) => {
  res.json(courses);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});