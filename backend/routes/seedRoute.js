import express from "express";
import data from "../data.js";
import Cars from "../models/carsModel.js";
import Category from "../models/typeModel.js";

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  await Cars.remove({});
  const createdCars = await Cars.insertMany(data.cars);

  res.send({ createdCars });
});

seedRouter.get("/", async (req, res) => {
  await Category.remove({});
  const createdCategory = await Category.insertMany(data.category);

  res.send({ createdCategory });
});

export default seedRouter;
