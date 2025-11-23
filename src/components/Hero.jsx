import React, { useState } from "react";
import { BsFire } from "react-icons/bs";
import { shoes } from "../constant/data";
import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";
import Button from "./Button";
import ShoeCard from "./ShoeCard";
import arrowRight from "../assets/arrow-right.svg";
import shoe1 from "../assets/shoe1.png";

const Hero = () => {
    const [shoeImg, setShoeImg] = useState(shoe1);

    return (
        <section className = "max-padd-container xl:h-screen py-16 xl:py-32 max-xs:overflow-hidden" id = "home">
            <div className = "flex flex-col xl:flex-row gap-6 relative top-16 sm:top-28 xl:top-20">
                <motion.div variants = {fadeIn("left", 1)} initial = "hidden" whileInView = "show" viewport = {{ once: true, amount: 0.2 }} className = "flex flex-1 flex-col max-w-[680px]">
                    <h4 className = "flex items-baseline gap-x-2 uppercase text-secondary medium-18">
                        Colección moderna <BsFire />
                    </h4>
                    <h1 className = "h1 uppercase">
                        {new Date().getFullYear()} Colección para caballeros
                    </h1>
                    <p className = "border-l-4 border-secondary pl-3 my-2">
                        Descubre el estilo que te define, con zapatillas diseñadas para quienes marcan tendencia y no siguen el camino de nadie.
                    </p>
                    <div className = "mt-4 z-10">
                        <Button type = "submit" title = "Explorar tienda" icon = {arrowRight} variant = "btn-secondary" />
                    </div>
                </motion.div>
                <motion.div initial = {{ scale: 0.2 }} whileInView = {{ scale: 1 }} transition = {{ type: "tween", stiffness: 260, damping: 20, duration: 1, ease: "easeInOut" }} viewport = {{ once: true, amount: 0.2 }} className = "flex flex-1 justify-center">
                    <img src = {shoeImg} alt = "shoeImg" className = "h-[20rem] xl:h-[27rem] w-auto drop-shadow-2xl" />
                </motion.div>
            </div>
            <motion.div variants = {fadeIn("center", 1)} initial = "hidden" whileInView = "show" viewport = {{ once: true, amount: 0.2 }} className = "relative">
                <div className = "flex flex-col sm:flex-row items-center justify-center md:justify-between gap-4 xl:gap-x-4 w-full relative top-24 bg-primary/50 z-30">
                    {
                        shoes.map((shoe, i) => (
                            <div key = {i} className = "">
                                <ShoeCard imgURL = {shoe} changeShoeImg = {(shoe) => setShoeImg(shoe)} shoeImg = {shoeImg} />
                            </div>
                        ))
                    }
                </div>
            </motion.div>
        </section>
    )
}

export default Hero;