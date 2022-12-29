import { Router } from "express";
import authControllers from "../controllers/auth.controllers";

const router = Router();

router.post("/", authControllers.login); // login

export default router;