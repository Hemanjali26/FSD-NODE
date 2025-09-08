const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Import modular routes
const getAllItems = require("./get");
const getItemById = require("./getbyId");
const addItem = require("./addItem");
const deleteItem = require("./delete");

// In-memory items array
const items = [];

// Mount routes
app.use("/items", getAllItems(items));
app.use("/items", getItemById(items));
app.use("/items", addItem(items));
app.use("/items", deleteItem(items));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
