const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());
const routes = require("./route");
app.use("/", routes);
app.listen(PORT, () => {
  console.log(`Server is up and running at http://localhost:${PORT}`);
});
