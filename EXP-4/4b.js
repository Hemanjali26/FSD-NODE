const express = require("express");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

let students = [];

app.get("/students", (req, res) => {
    res.json(students);
});

app.post("/students", (req, res) => {
    const { name, regno, className } = req.body;
    if (!name || !regno || !className) return res.status(400).json({ error: "All fields required" });

    const student = { _id: uuidv4(), name, regno, className };
    students.push(student);
    res.status(201).json(student);
});

app.delete("/students/:id", (req, res) => {
    const { id } = req.params;
    students = students.filter(s => s._id !== id);
    res.sendStatus(204);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
