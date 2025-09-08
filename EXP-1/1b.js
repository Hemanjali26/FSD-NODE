const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.json());
let storage = [];
let idCounter = 1;
app.post("/data", (req, res) => {
    const { name } = req.body;
    const newData = { id: idCounter++, name };
  storage.push(newData);
  res.status(201).json({ message: "Data posted", Data: newData , regNo: "23B01A4540"});
});
app.get("/data", (req, res) => {
  res.json({storage , regNo: "23B01A4540"});
});
app.delete("/data/:id", (req, res) => {
  const dataId = parseInt(req.params.id);
  const index = storage.findIndex((r) => r.id === dataId);
  if (index === -1) {
    return res.status(404).json({ message: "Data not found" });
  }
  const deleted = storage.splice(index, 1);
  res.json({ message: "Data deleted", resource: deleted[0] , regNo: "23B01A4540" });
});
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});