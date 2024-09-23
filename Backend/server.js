const express = require("express");
const cors = require("cors");
const app = express()

const Port = 4000;

app.get("/", (req, res) => {
  res.send("Successfully set");
});

app.use(express.json());

app.listen(Port, () => {
  console.log(`Serve running on port ${Port}`);
});
