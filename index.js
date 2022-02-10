const users = require("./routes/users");
const config = require("config");
const auth = require("./routes/auth");
const mongoose = require("mongoose");
const crud =require("./routes/crud");
const Joi = require("joi");
const express = require("express");
const app = express();

if (!config.get("jwttokenkey")) {
  console.error("FATAL ERROR: jwttokenkey is not defined.");
  process.exit(1);
}
mongoose
  .connect("mongodb://localhost/Users-info")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.use(express.json());
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/crud",crud);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
