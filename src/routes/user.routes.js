import { Router } from "express";
import { users } from "../controller/user.controller.js";

const router = Router()


router.get('/', users)

export default router