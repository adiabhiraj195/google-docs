import { useState } from 'react';
import validator from 'validator';
import TextField from '../../components/atom/text-field/text-field';
import AuthService from '../../service/auth-service';
import { useNavigate, Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './login.css';
import logoImage from '../../assets/black-logo.png';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth();

    const validateData = () => {
        let isValid: boolean = true;
        if (!(validator.isEmail(email))) {
            isValid = false;
        };
        if (!(password.length >= 8 && password.length <= 24)) {
            isValid = false;
        };
        return isValid;
    }

    const userLogin = async () => {
        if (!validateData()) {
            console.log("Details are not valid");
            return;
        }
        try {
            const response = await AuthService.login({
                email,
                password
            });
            // console.log(response);
            await login(response.data.accessToken);
            localStorage.setItem('Token', response.data.accessToken);

            navigate("/document/create");
        } catch (error) {
            console.log(error)
        }

    }
    const createAccount = () => {
        navigate('/register');
    }

    const handleEmailInput = (value: string) => {
        setEmail(value);
    };
    const handelPasswordInput = (value: string) => {
        setPassword(value);
    }
    return (
        <div className='auth-page'>
            <div className='auth-container'>
                <div className='auth-logo'>
                    <img src={logoImage}></img>
                </div>
                <h3 className='auth-heading'>Sign in!</h3>
                <TextField
                    value={email}
                    onInput={handleEmailInput}
                    type='email'
                    placeholder='Email'
                />
                <div className='password-input-container'>
                    <TextField
                        value={password}
                        onInput={handelPasswordInput}
                        type='password'
                        placeholder='Password'
                    />
                    <a href='#' className='forgot-pass-link'>Forgot password?</a>
                </div>
                <div className='auth-btn-container'>
                    <button className='auth-btn base-bg-btn' onClick={createAccount}>Create account</button>
                    <button className='auth-btn blue-bg-btn' onClick={userLogin}>Sign in</button>
                </div>
            </div>
        </div>
    )
}

export default Login;
