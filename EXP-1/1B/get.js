const { Router } = require("express");

function getItems(items) {
  const router = Router();

  router.get("/", (req, res) => {
    res.json(items);
  });

  return router;
}

module.exports = getItems;
