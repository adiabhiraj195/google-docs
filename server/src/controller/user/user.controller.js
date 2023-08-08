import {validationResult} from "express-validator";
import { userService } from "../../service/user-service.js";

class UserController {
    register = async(req, res)=>{
        const err = validationResult(req);
        if(!(err.isEmpty())){
            return res.status(400).json(err);
        };

        const {fName,email, password} = req.body;
        if(userService.hasUser(email)){
            return res.status(400).json({
                status: "user allready exists",
            })
        }
        await userService.createUser(fName, email, password);
        
        return res.status(200).json({
            status: "created"
        });
    }
    
    
}

const userController = new UserController();
export {userController};