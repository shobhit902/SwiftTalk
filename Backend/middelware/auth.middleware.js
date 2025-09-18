import jwt from "jsonwebtoken";
import { User } from "../model/user.model.js";

export const protectRoute = async (req, res, next) => {
  const token = req.cookies.token;
  try {
    if (!token) {
      res.status(401).json({ message: "Unauthorized- NO token Provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      res.status(401).json({ message: "Unauthorized- NO token Provided" });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      res.staus(401).json({ message: "User Not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("Error in Protectroute middleware", error);
    res.status(401).json({ message: "Internal server error" });
  }
};
