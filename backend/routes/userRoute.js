import express from "express";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

const userRouter = express.Router();

//login
userRouter.post("/login", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  // if user exist
  if (user) {
    if (bcrypt.compareSync(req.body.password, user.password)) {
      res.send({
        _id: user._id,
        username: user.username,
      });
      return;
    }
  }
  res.send(401).send({ message: "Invalid Username  or Password" });
});

//register
userRouter.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password),
  });
  const user = await newUser.save();
  res.send({
    _id: user._id,
    username: user.username,
  });
});

export default userRouter;
