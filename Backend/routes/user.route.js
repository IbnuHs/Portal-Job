import { Router } from "express";
import { register } from "../controller/user.controller.js";
import user from "../models/user.model.js";

const userRoute = Router();
userRoute.post("/api/auth/register", register);

export default userRoute;
