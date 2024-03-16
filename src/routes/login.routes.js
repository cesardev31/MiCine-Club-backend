import { Router } from "express";
import authenticationController from "../controller/authentication.controller.js";
const router = Router();

router.post("/", authenticationController.loginUser);

export default router;
