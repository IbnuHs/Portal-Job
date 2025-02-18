import { Router } from "express";
import { login, register } from "../controller/user.controller.js";
import user from "../models/user.model.js";

const userRoute = Router();
userRoute.post("/api/auth/register", register);
userRoute.post("/api/auth/login", login);

export default userRoute;
