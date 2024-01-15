const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const User = require("./User");

const app = express();
app.use(cors());
app.use(bodyParser.json());
const dbUrl = "mongodb://localhost:27017/tutorial_db";
mongoose
  .connect(dbUrl)
  .then(() => {
    app.listen(3000, () => console.log("Server is listening on port 3000"));
  })
  .catch((err) => console.log("Unable to connect to the database"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: "success" });
  } catch (error) {
    res.json({ message: error.message });
  }
});
