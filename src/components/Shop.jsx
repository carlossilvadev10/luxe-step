import React from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { shop } from "../constant/data";
import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";
import openCartWhite from "../assets/opencartwhite.svg";
import Button from "./Button";

const Shop = () => {
    return (
        <section className = "max-padd-container pb-16 xl:pb-32" id = "shop">
            <motion.div variants = {fadeIn("right", 1)} initial = "hidden" whileInView = "show" viewport = {{ once: true, amount: 0.2 }} className = "flexBetween">
                <h4 className = "flex flex-col items-start capitalize text-4xl leading-none font-ace pb-12">
                    Nuestra <span className = "medium-16">tienda</span>
                </h4>
                <a href = "/">
                    <GiSettingsKnobs className = "flexCenter w-10 h-10 p-2 text-white text-3xl bg-tertiary rounded-md relative bottom-7" />
                </a>
            </motion.div>
            <motion.div variants = {fadeIn("left", 2)} initial = "hidden" whileInView = "show" viewport = {{ once: true, amount: 0.2 }} className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                {
                    shop.map((product, i) => (
                        <div key = {i} className = "">
                            <div className = "overflow-hidden rounded-3xl group">
                                <div className = "overflow-hidden relative">
                                    <img src = {product.shoe} alt = {product.title} className = "w-[32rem] h-auto rounded-3xl group-hover:scale-105 transition-all duration-500" />
                                    <h4 className = "medium-16 capitalize absolute top-3 left-6">
                                        {product.title}
                                    </h4>
                                    <div className = "flexBetween w-full px-6 py-2 absolute bottom-2  gap-x-4">
                                        <p className = "medium-20">
                                            <span className = "regular-14">S/.</span> {product.price}
                                        </p>
                                        <Button type = "submit" title = "Añadir al" icon = {openCartWhite} variant = "btn-secondary !py-2 !px-4 text-xs" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </motion.div>
        </section>
    )
}

export default Shop;