import app from "./app.js";
import dotenv from "dotenv";
import authroute from "./routes/auth.route.js";
import messageroute from "./routes/message.route.js";
import connectDb from "./databse/connectDb.js";
import express from "express";
import cookieParser from "cookie-parser";

dotenv.config();

const port = process.env.PORT;
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authroute);
app.use("/api/messages", messageroute);

app.listen(port, () => {
  console.log("Server is running on port 3000");
  connectDb();
});
