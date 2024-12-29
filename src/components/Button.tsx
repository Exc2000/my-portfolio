import React from 'react';

interface ButtonProps {
    onClick: () => void;
    label: string;
    disabled?: boolean;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, disabled = false, className = '' }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`p-6 bg-black text-white font-bold mt-2 w-60 rounded-md hover:shadow-lg transition-all ${className}`}
        >
            {label}
        </button>
    );
};

export default Button;