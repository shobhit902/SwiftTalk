import app from "./app.js";
import dotenv from "dotenv";
import authroute from "./routes/auth.route.js"

dotenv.config();

const port = process.env.PORT;
app.use("/api/",authroute)

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
