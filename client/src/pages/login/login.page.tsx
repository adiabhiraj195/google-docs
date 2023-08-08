import React, { useState } from 'react'
import validator from 'validator';
import TextField from '../../components/atom/text-field/text-field';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validate = ()=>{
        let isValid: boolean = true;
        if(!(validator.isEmail(email))){
            isValid = false;
        };
        if(!(password.length >=8 && password.length <=24)){
            isValid = false;
        };
        return isValid;
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
            <button>Login</button>
        </div>
    )
}

export default Login;
