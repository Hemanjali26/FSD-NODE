const { Router } = require("express");

function deleteItem(items) {
  const router = Router();

  router.delete("/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = items.findIndex((item) => item.id === id);

    if (index === -1) {
      return res.status(404).json({ error: "Item not found" });
    }

    const removed = items.splice(index, 1);
    res.json({ message: "Item deleted", item: removed[0] });
  });

  return router;
}

module.exports = deleteItem;
