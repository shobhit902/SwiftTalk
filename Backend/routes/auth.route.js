import express from "express";
import {
  checkAuth,
  login,
  logout,
  register,
  updateProfile,
} from "../controller/auth.controller.js";
import { protectRoute } from "../middelware/auth.middleware.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

router.put("/update-profile", protectRoute, updateProfile);

router.get("/checkAuth", protectRoute, checkAuth);

export default router;
