import UserModle from "../db/modle/user.mongo.js";
import { genSalt, hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";

class UserService {
    createUser = async (fName, email, password) => {
        const salt = await genSalt();
        const hashPassword = await hash(password, salt);
        const verificationToken = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET);
        await UserModle.create({
            fName: fName,
            email: email,
            password: hashPassword,
            verificationToken: verificationToken
        })
        console.log("userCreated");
    }

    findUserByEmail = async (email) => {
        const user = await UserModle.findOne({ email: email });
        // console.log(user);
        return user;
    }

    checkPassword = async (inputPassword, checkPassword) => {
        return await compare(inputPassword, checkPassword);
    }

    generateAuthResponse = async (user) => {
        // const requestUser = await this.getRequestUser(user);
        const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRATION,
        });
        console.log(accessToken)
        const refreshToken = jwt.sign({ user }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRATION,
        });
        //todo: Add code to update refresh token schema in database

        return { accessToken, refreshToken };
    }
}

const userService = new UserService();
export { userService };
