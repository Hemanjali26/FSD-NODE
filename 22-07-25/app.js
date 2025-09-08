const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.get("/", (req, res) => {
 const student = { name: "Hemanjali", regno: "23B01A4539", class: "CSE - AI & DS-A" };
 res.render("index", { student });
});
app.listen(3000, () => {
 console.log("Server running at http://localhost:3000");
});