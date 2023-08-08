import { Router } from "express";
import { userController } from "../controller/user/user.controller.js";

const userRouter = Router();

userRouter.post("/", userController.register);


export default userRouter;