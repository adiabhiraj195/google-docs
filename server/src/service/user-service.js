import UserModle from "../db/modle/user.mongo.js";
import {genSalt, hash, compare} from "bcrypt";
import jwt from "jsonwebtoken";

const jwtSecrete = "dfbsdilkjbgvlscshnfvsdhvbs;cjsbdfvjscjshabchsbdvdshgfgbsdhvb";
class UserService {
    createUser = async (fName,email, password)=>{
        const salt = await genSalt();
        const hashPassword = await hash(password,salt);
        const verificationToken = jwt.sign({email}, jwtSecrete);
        await UserModle.create({
            fName:fName,
            email: email,
            password: hashPassword,
            verificationToken: verificationToken
        })
        console.log("userCreated");
    }

    hasUser = async (email)=>{
        const user = await UserModle.findOne({email});
        if(user){
            return true;
        } else{
            return false;
        }
    }
    
}

const userService = new UserService();
export { userService };
