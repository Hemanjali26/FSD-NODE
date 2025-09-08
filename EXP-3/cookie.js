const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: "mySecretKey",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 } 
}));
app.get("/", (req, res) => {
    if (req.session.username) {
        res.send(`
            <h2>Welcome back, ${req.session.username}!</h2>
            <p>Cookies: ${JSON.stringify(req.cookies || {})}</p>
            <a href='/logout'>Logout</a>
        `);
    } else {
        res.send(`
            <h2>Welcome Guest!</h2>
            <form method="POST" action="/login">
                <input type="text" name="username" placeholder="Enter username" required/>
                <button type="submit">Login</button>
            </form>
        `);
    }
});
app.post("/login", (req, res) => {
    const { username } = req.body;
    req.session.username = username;
    res.cookie("username", username, { maxAge: 60000, httpOnly: true });
    res.redirect("/");
});
app.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) return res.send("Error logging out");
        res.clearCookie("connect.sid"); 
        res.clearCookie("username");     
        res.redirect("/");
    });
});
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
