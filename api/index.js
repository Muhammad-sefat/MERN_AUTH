import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routerUser from "./routes/user.routes.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connect to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server is runing from 3000 !");
});

app.use("/api/user", routerUser);
