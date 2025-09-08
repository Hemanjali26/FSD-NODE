const express = require('express');
const app = express();
const port = 3000;

let items = [];

app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Welcome to Middleware Demo!');
});

app.get('/items', (req, res) => {
  res.json(items);
});

app.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(i => i.id === id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

app.post('/items', (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex(i => i.id === id);
  if (index !== -1) {
    const deletedItem = items.splice(index, 1);
    res.json(deletedItem[0]);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

app.listen(port, () => {
console.log("23B01A4539");
console.log(`Server running at http://localhost:${port}`);
});
