import express from "express";
import Cars from "../models/carsModel.js";

const carsRouter = express.Router();

carsRouter.get("/getall", async (req, res) => {
  const cars = await Cars.find();
  res.send(cars);
});

export default carsRouter;
