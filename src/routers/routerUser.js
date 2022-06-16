import { Router } from "express";
import { signup, login } from "../controllers/controllerUser";

export const routerUser = Router();

routerUser.post("/login", login);

routerUser.post("/signup", signup);