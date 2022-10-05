import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import seedRouter from "./routes/seedRoute.js";
import carsRouter from "./routes/carsRoute.js";
import userRouter from "./routes/userRoute.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/seed/", seedRouter);
app.use("/api/cars/", carsRouter);
app.use("/api/users/", userRouter);

//Connect to DB

dotenv.config();
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err.message);
  });

//create port

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server at: http://localhost:${port}`);
});
