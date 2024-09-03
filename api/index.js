import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routerUser from "./routes/user.routes.js";
import authRouter from "./routes/auth.user.js";
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

app.use(express.json());

app.listen(3000, () => {
  console.log("Server is runing from 3000 !");
});

app.use("/api/user", routerUser);
app.use("/api/auth", authRouter);
