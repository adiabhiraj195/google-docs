import React, { FC, useState } from 'react';
import validator from 'validator';
import { useNavigate } from 'react-router-dom';
import TextField from '../../components/atom/text-field/text-field';
import AuthService from "../../service/auth-service"

const Register = () => {
  const [fName, setFName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const navigate = useNavigate();

  const validate = () => {
    let isValid: boolean = true;

    if (!validator.isEmail(email)) {
      isValid = false;
    }
    if (!(password.length >= 8 && password.length <= 25)) {
      isValid = false;
    }
    if (password !== confirmPassword) {
      isValid = false;
    }

    return isValid;
  }

  const registerUser = async (e: any) => {
    e.preventDefault();
    // if (!validate()) return;

    try {
      await AuthService.register({
        fName,
        email,
        password,
      });
      console.log("register clicked");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  const handleInputName = (value: string) => {
    setFName(value);
  }
  const handleInputPassword = (value: string) => {
    setPassword(value);
  }
  const handleInputEmail = (value: string) => {
    setEmail(value);
  }
  const handleInputConfirmPassword = (value: string) => {
    setConfirmPassword(value);
  }
  return (
    <div className='register-container'>
      <div className='register-form-container'>
        <form >
          <TextField
            type='text'
            value={fName}
            placeholder='Full Name'
            onInput={handleInputName}
          />
          <TextField
            type='email'
            value={email}
            placeholder='Email'
            onInput={handleInputEmail}
          />
          <TextField
            type='password'
            value={password}
            placeholder='Password'
            onInput={handleInputPassword}
          />
          <TextField
            type='password'
            value={confirmPassword}
            placeholder='Confirm Password'
            onInput={handleInputConfirmPassword}
          />
          <button className='register-button' type='submit' onClick={registerUser}>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register;
