import { Router } from "express";

const userRouter = Router();

userRouter.post("/user", userController.register);


export default userRouter;