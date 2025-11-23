import React from "react";

const Button = ({ type, title, icon, variant }) => {
    return (
        <button type = {type} className = {`flexCenter gap-2 border rounded-full cursor-pointer ${variant}`}>
            <span>{title}</span>
            {
                icon && (
                    <img src = {icon} alt = {title} width = {20} height = {20} />
                )
            }
        </button>
    )
}

export default Button;