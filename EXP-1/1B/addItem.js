const { Router } = require("express");

function addItem(items) {
  const router = Router();
  router.use("/add/:name", (req, res, next) => {
    if (!req.params.name) {
      return res.status(400).json({ error: "Item name is required" });
    }
    next();
  });

  router.get("/add/:name", (req, res) => {
    const name = req.params.name;
    const newItem = { id: items.length + 1, name };

    items.push(newItem);
    res.json(newItem);
  });

  return router;
}

module.exports = addItem;
