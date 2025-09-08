const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const users = [
  { username: '23B01A4539', password: 'hema' },
  { username: 'navya', password: '1234567' },
  { username: 'jyothi', password: '98236754' }
];
app.get('/', (req, res) => {
  if (req.cookies.user) {
    return res.send(`
      <h2>Welcome ${req.cookies.user}!</h2>
      <a href="/dashboard">Dashboard</a> |
      <a href="/logout">Logout</a>
    `);
  }
  res.send(`
    <h2>Home Page</h2>
    <a href="/login">Login</a> |
    <a href="/register">Register</a>
  `);
});
app.get('/login', (req, res) => {
  res.send(`
    <h2>Login</h2>
    <form method="POST" action="/login">
      <input type="text" name="username" placeholder="Username" required><br>
      <input type="password" name="password" placeholder="Password" required><br>
      <button type="submit">Login</button>
    </form>
    <a href="/">Home</a>
  `);
});
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    res.cookie('user', username, { maxAge: 900000, httpOnly: true });
    res.redirect('/dashboard');
  } else {
    res.send('Invalid credentials! <a href="/login">Try again</a>');
  }
});
app.get('/dashboard', (req, res) => {
  if (!req.cookies.user) {
    return res.redirect('/login');
  }
  res.send(`
    <h2>Dashboard</h2>
    <p>Hello ${req.cookies.user} , you are logged in!</p>
    <a href="/logout">Logout</a>
  `);
});
app.get('/logout', (req, res) => {
  res.clearCookie('user');
  res.redirect('/');
});
app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});