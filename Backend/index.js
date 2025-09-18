import app from "./app.js";
import dotenv from "dotenv";
import authroute from "./routes/auth.route.js";
import connectDb from "./databse/connectDb.js";
import express from "express";

dotenv.config();

const port = process.env.PORT;
app.use(express.json());
app.use("/api/auth", authroute);


app.listen(port, () => {
  console.log("Server is running on port 3000");
  connectDb();
});
