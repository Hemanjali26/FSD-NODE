const { Router } = require("express");
const router = Router();
router.get("/home", (req, res) => {
  res.send(`23B01A4539 <br> Welcome to the Home Page`);
});
router.get("/user/:id", (req, res) => {
  const { id } = req.params;
  res.send(`23B01A4539 <br> User ID received: ${id}`);
});
router.get("/search", (req, res) => {
  const { keyword = "none", limit = 0 } = req.query;
  res.send(`23B01A4539 <br> Search keyword: ${keyword}, Limit: ${limit}`);
});
router.get("/google", (req, res) => {
  res.redirect("https://www.google.com");
});
module.exports = router;



