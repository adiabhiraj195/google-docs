import React, { useState } from 'react'
import validator from 'validator';
import TextField from '../../components/atom/text-field/text-field';
import AuthService from '../../service/auth-service';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const validateData = ()=>{
        let isValid: boolean = true;
        if(!(validator.isEmail(email))){
            isValid = false;
        };
        if(!(password.length >=8 && password.length <=24)){
            isValid = false;
        };
        return isValid;
    }

    const userLogin = async()=>{
        if(!validateData()){
            console.log("Details are not valid");
            return;
        }
        try {
            await AuthService.login({
                email, 
                password
            });
            navigate("/main");
            console.log("loged in");
        } catch (error) {
            console.log(error)
        }

    }

    const handleEmailInput = (value: string)=>{
        setEmail(value);
    };
    const handelPasswordInput = (value:string)=>{
        setPassword(value);
    }
    return (
        <div>
            <TextField
                value={email}
                onInput={handleEmailInput}
                type='email'
                placeholder='Email'
            />
            <TextField
                value={password}
                onInput={handelPasswordInput}
                type='password'
                placeholder='Password'
            />
            <button onClick={userLogin}>Login</button>
        </div>
    )
}

export default Login;
