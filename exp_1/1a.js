const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});
app.get('/about', (req, res) => {
  res.send('This is the About Page.');
});
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User profile for ID: ${userId}`);
});
app.get('/search', (req, res) => {
  const { term, limit } = req.query;
  res.send(`Search results for term="${term}" with limit=${limit}`);
});
app.get('/urlinfo', (req, res) => {
  res.json({
    baseUrl: req.baseUrl,
    path: req.path,
    originalUrl: req.originalUrl
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
