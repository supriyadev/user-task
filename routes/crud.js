const mongoose = require("mongoose");
const Joi = require("joi");
const express = require("express");
const { User, validate } = require("../models/user");
const auth = require("../middleware/auth");
const routes = express.Router();
// const login=require("../middleware/login");

//update user data
routes.put("/:id", auth, async (req, res) => {
    users = await User.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        reg_email: req.body.email,
        password: req.body.password,
      },
      { new: true }
    );
  
    if (!users)
      return res.status(404).send("The users with the given ID was not found.");
  
    res.send(users);
  });
  
routes.delete("/:id", async (req, res) => {
  const users = await User.findByIdAndRemove(req.params.id);

  if (!users)
    return res.status(404).send("The users with the given ID was not found.");

  res.send(users);
});

module.exports = routes;
