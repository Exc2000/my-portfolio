import React from 'react';

interface InputProps {
    type: string;
    placeholder?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange, className = '' }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`p-6 bg-black text-white font-bold mt-2 w-80 outline-none rounded-md  ${className}`}
        />
    );
};

export default Input;
