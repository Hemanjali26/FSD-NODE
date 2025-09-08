const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON body
app.use(express.json());

// In-memory data store
let items = [];

// --- ROUTES ---

// 1. GET all items
app.get("/items", (req, res) => {
  res.json(items);
});

// 2. GET item by ID
app.get("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find((it) => it.id === id);

  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }

  res.json(item);
});

// 3. POST new item
app.post("/items", (req, res) => {
  const { id, name, price } = req.body;

  if (!id || !name || !price) {
    return res.status(400).json({ error: "Please provide id, name, and price" });
  }

  // Check if item with same ID already exists
  if (items.find((it) => it.id === id)) {
    return res.status(400).json({ error: "Item with this ID already exists" });
  }

  const newItem = { id, name, price };
  items.push(newItem);
  res.status(201).json(newItem);
});

// 4. DELETE item by ID
app.delete("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex((it) => it.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Item not found" });
  }

  const deletedItem = items.splice(index, 1);
  res.json({ message: "Item deleted", item: deletedItem[0] });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
