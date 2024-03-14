import express from "express";
import { signUpUser } from "../controller/usercontroller.js";

const router = express.Router();

router.post("/signup", signUpUser);

export default router;
