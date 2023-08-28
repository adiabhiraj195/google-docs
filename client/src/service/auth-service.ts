// import { stringify } from "querystring";
import API from "./api";

const AuthService = {
    register : (payload:{
        fName:string,
        email: string,
        password: string,
    }) =>{
        // const userDetail = JSON.stringify(payload);
        return API.post("/user", payload);
    },

    login :(payload:{
        email: string,
        password: string
    }) =>{
        return API.post("/auth/login", payload);
    }
}

export default AuthService;