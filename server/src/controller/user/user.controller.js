import { validationResult } from "express-validator";
import { userService } from "../../service/user-service.js";

class UserController {
    register = async (req, res) => {
        const err = validationResult(req);
        if (!(err.isEmpty())) {
            console.log(err)
            return res.status(400).json(err);
        };

        const { fName, email, password } = req.body;

        await userService.createUser(fName, email, password);

        return res.status(201).json({
            status: "ok"
        });
    }


}

const userController = new UserController();
export { userController };