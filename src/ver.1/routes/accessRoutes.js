"use strick";

import express from "express";
import accessControllers from "../controllers/accessContrllers.js";

const router = express.Router();

router.post("/register", accessControllers.register)

export default router;
