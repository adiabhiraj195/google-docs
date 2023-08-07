import React, { } from 'react'

interface TextFieldProps {
    value: string;
    onInput: Function;
    type: 'text' | 'password' | 'email';
    placeholder?: string;
}

const TextField = ({
    value,
    onInput,
    type,
    placeholder
}: TextFieldProps) => {
    return (
        <div>
            {type !== "password" ? (

                <input
                    type={type}
                    value={value}
                    className='register-input full-name'
                    placeholder={placeholder}
                    onInput={(e) => onInput((e.target as HTMLTextAreaElement).value)}
                />) :
                <input
                    type='password'
                    value={value}
                    className='register-input full-name'
                    placeholder={placeholder}
                    onInput={(e) => onInput((e.target as HTMLTextAreaElement).value)}
                />
            }
        </div>
    )
}

export default TextField;
