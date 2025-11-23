import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";
import Button from "./Button";

const Subscription = () => {
    return (
        <div className = "" id = "contact">
            <div className = "max-padd-container flexCenter flex-col lg:flex-row gap-8 py-8 bg-tertiary">
                <motion.h3 variants = {fadeIn("right", 1)} initial = "hidden" whileInView = "show" viewport = {{ once: true, amount: 0.2 }} className = "medium-32 leading-none font-ace text-primary text-center ">
                    Sé el primero en enterarte
                </motion.h3>
                <motion.div variants = {fadeIn("left", 1)} initial = "hidden" whileInView = "show" viewport = {{ once: true, amount: 0.2 }} className = "flexBetween bg-white px-1 py-1 rounded-full">
                    <input type = "email" name = "email" id = "email" placeholder = "Ingresa tu email" className = "w-56 xl:w-80 pl-4 bg-transparent border-none outline-none" />
                    <Button type = "submit" title = "Suscribirse" variant = "btn-dark" />
                </motion.div>
            </div>
        </div>
    )
}

export default Subscription;