import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import jwtDecode from "jwt-decode";
import { Token } from "../types/interface/token";

const useAuth = () => {
    const {
        setAccessToken,
        setUserId,
        setEmail,
        setIsAuthenticated,
        email,
        userId,
        accessToken

    } = useContext(AuthContext);

    const login = async (accessToken: string) => {
        const userData: any= await jwtDecode(accessToken);
        setAccessToken(accessToken);
        localStorage.setItem('Token', accessToken);
        setUserId(userData.user.id);
        setEmail(userData.user.email);
        setIsAuthenticated(true);
        // console.log(userId, email);
        // console.log(userData)
    }

    const logout = ()=>{
        console.log('click logout')
    }

    return {
        login,
        email,
        userId,
        logout,
        accessToken,
    }
}

export default useAuth;