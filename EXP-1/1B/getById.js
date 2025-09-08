const express = require("express");
function getItemById(items) {
  const router = express.Router();
  router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find((it) => it.id === id);

    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.json(item);
  });

  return router;
}

module.exports = getItemById;
