import express from "express";
import Category from "../models/typeModel.js";

const typeRouter = express.Router();

typeRouter.get("/", async (req, res) => {
  const category = await Category.find();
  res.send(category);
});

export default typeRouter;
