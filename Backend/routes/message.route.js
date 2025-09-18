import express from "express";
import { protectRoute } from "../middelware/auth.middleware.js";
import { getMessages, getUserForSideBar, sendMessages } from "../controller/message.controller.js";

const router = express.Router()

router.get("/user", protectRoute, getUserForSideBar)

router.get("/:id", protectRoute, getMessages)

router.post("/send/:id", protectRoute, sendMessages)


export default router