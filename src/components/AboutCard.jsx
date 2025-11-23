import React from "react";
import Button from "./Button";
import openCart from "../assets/opencart.svg";

const AboutCard = ({ containerStyles, title, shoeImg }) => {
    return (
        <div className = {`flexBetween gap-4 text-primary rounded-2xl p-3 shadow-sm hover-lift ${containerStyles}`}>
            <div className = "pl-2">
                <h4 className = "medium-16">
                    {title}
                </h4>
                <p className = "font-semibold !text-white">
                    S/. 149.00
                </p>
                <Button type = "submit" title = "Añadir al" icon = {openCart} variant = "btn-white text-xs mt-3 !px-3 !py-1" />
            </div>
            <div className = "">
                <img src = {shoeImg} alt = "shoeImgAboutCard" className = "rounded-xl w-24 h-24" />
            </div>
        </div>
    )
}

export default AboutCard;