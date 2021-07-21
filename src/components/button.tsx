import React from 'react';

interface Props {
    title: string,
    icon?: any,
    onClick?: () => void,
    className?: string,
    formID?: string
}

const Button: React.FC<Props> = ({ title, icon, onClick, className, formID }) => {
    return (
        <button form={formID} className={`button ${className}`} onClick={onClick} >
            {icon}
            {title}
        </button>
    );
}

export default Button;