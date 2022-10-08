import express from "express";
import Cars from "../models/carsModel.js";
import Rent from "../models/rentModel.js";

const rentRouter = express.Router();

rentRouter.post("/rentcar", async (req, res) => {
  try {
    const newRent = new Rent(req.body);
    await newRent.save();

    const car = await Cars.findById({ _id: req.body.car });
    car.bookedTimeSlots.push(req.body.bookedTimeSlots);
    await car.save();

    res.send("Your rent is successfull");
  } catch (error) {
    return res.send(400).json(error);
  }
});

export default rentRouter;
