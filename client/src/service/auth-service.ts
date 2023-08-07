import API from "./api";

const AuthService = {
    register : (payload:{
        fName:string,
        email: string,
        password: string,
    }) =>{
        return API.post("register", payload);
    }
}

export default AuthService;