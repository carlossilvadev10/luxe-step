import React from "react";
import AboutCard from "./AboutCard";
import product1 from "../assets/product-1.jpg";
import product2 from "../assets/product-2.jpg";
import AboutStats from "./AboutStats";
import Button from "./Button";
import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";
import about from "../assets/about.jpg";
import arrowRight from "../assets/arrow-right.svg";

const About = () => {
    return (
        <section className = "max-padd-container pb-16 xl:pb-32" id = "about">
            <motion.div variants = {fadeIn("left", 1)} initial = "hidden" whileInView = "show" viewport = {{ once: true, amount: 0.2 }} className = "flexBetween">
                <h4 className = "flex flex-col items-start capitalize text-4xl leading-none font-ace pb-10">
                    Sobre <span className = "medium-16">nosotros</span>
                </h4>
            </motion.div>
            <div className = "flex flex-col xl:flex-row gap-10">
                <motion.div variants = {fadeIn("left", 1)} initial = "hidden" whileInView = "show" viewport = {{ once: true, amount: 0.2 }} className = "flex flex-1 overflow-hidden rounded-3xl shadow-xl">
                    <img src = {about} alt = "aboutImg" className = "w-full h-full object-cover hover:scale-105 duration-300" />
                </motion.div>
                <motion.div variants = {fadeIn("right", 1)} initial = "hidden" whileInView = "show" viewport = {{ once: true, amount: 0.2 }} className = "flex flex-1 items-center">
                    <div className = "w-full">
                        <div className = "grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <AboutCard containerStyles = "bg-secondaryBlue" title = "Nike Air Zoom Pegasus" shoeImg = {product1} />
                            <AboutCard containerStyles = "bg-secondaryBlueDark" title = "Nike React Infinity" shoeImg = {product2} />
                        </div>
                        <div className = "mt-6">
                            <h4 className = "medium-28 !font-[700]">
                                Más que zapatillas, acompañamos a quienes convierten cada paso en una oportunidad.
                            </h4>
                            <AboutStats />
                            <div className = "flex flex-col sm:flex-row items-center gap-4 mt-6">
                                <Button type = "submit" title = "Explorar" icon = {arrowRight} variant = "btn-dark w-full sm:w-48 !px-2" />
                                <p className = "text-center sm:text-left">
                                    Descubre nuestra colección y encuentra el par perfecto para tu estilo y objetivos.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About;