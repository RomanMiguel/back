import { Router } from "express";
import { signup, login } from "../controllers/controllerUser";

const router = Router();

router.post("/login", login);

router.post("/signup", signup);

export default router;