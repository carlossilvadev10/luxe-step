import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";
import footer from "../assets/footer.jpg";
import { footerContactInfo, footerLinks, socials } from "../constant/data";

const footerContainerVariant = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.6,
            duration: 0.5,
            ease: "linear",
        }
    },
}

const footerItem = {
    hidden: {
        y: 20,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.6, 0.3, 0.8],
        }
    },
}

const FooterColumn = ({ title, children }) => {
    return (
        <motion.div variants = {footerItem} className = "flex flex-col gap-4">
            <h4 className = "bold-18 whitespace-nowrap">
                {title}
            </h4>
            {children}
        </motion.div>
    )
}

const Footer = () => {
    return (
        <footer className = "max-padd-container flexCenter pt-14 pb-20 bg-pattern bg-cover bg-no-repeat">
            <div className = "flex flex-col">
                <motion.div variants = {footerContainerVariant} initial = "hidden" whileInView = "show" viewport = {{ once: true, amount: 0.2 }} className = "flex flex-col items-start justify-center gap-[10%] md:flex-row p-8 rounded-t-xl">
                    <div className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-16">
                        <motion.div variants = {footerItem} className = "max-w-80">
                            <a href = "/" className = "bold-24">
                                <span className = "text-secondary bold-36">L</span>uxeStep
                            </a>
                            <div>
                                <p className = "mt-3">
                                    Impulsamos a quienes nunca dejan de moverse. Calidad y estilo para cada aventura.
                                </p>
                                <img src = {footer} alt = "imgFooter" className = "rounded-md mt-3 w-44 shadow-md" />
                            </div>
                        </motion.div>
                        {
                            footerLinks.map((col, i) => (
                                <FooterColumn key = {i} title = {col.title}>
                                    <ul className = "flex flex-col gap-4">
                                        {col.links.map((link, j) => (
                                            <a href = "/" key = {j} className = "regular-14 text-gray-20 hover:text-gray-40 transition-all duration-300">
                                                {link}
                                            </a>
                                        ))}
                                    </ul>
                                </FooterColumn>
                            ))
                        }
                        <motion.div variants = {footerItem} className = "flex flex-col gap-4">
                            <FooterColumn title = {footerContactInfo.title}>
                                {
                                    footerContactInfo.links.map((link, i) => (
                                        <a href = "/" key = {i} className = "flex md:flex-col lg:flex-row gap-4">
                                            <p>
                                                {link.label}: <span className = "bold-15">{link.value}</span>
                                            </p>
                                        </a>
                                    ))
                                }
                            </FooterColumn>
                        </motion.div>
                        <motion.div variants = {footerItem} className = "flex">
                            <FooterColumn title = {socials.title}>
                                <ul className = "flex gap-4">
                                    {
                                        socials.links.map((link, i) => (
                                            <a href = "/" key = {i} className = "text-xl hover:text-secondary transition-all duration-300">
                                                {link}
                                            </a>
                                        ))
                                    }
                                </ul>
                            </FooterColumn>
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div variants = {fadeIn("center", 1)} initial = "hidden" whileInView = "show" viewport = {{ once: true, amount: 0.2 }} className = "font-ace text-white text-center bg-tertiary/90 medium-14 py-2 px-8 mt-4 lg:mt-10 rounded-b-xl">
                    <span>© {new Date().getFullYear()} LuxeStep. Todos los derechos reservados.</span>
                    <a href = "https://github.com/carlozzsilva10" target = "_blank" rel = "noopener noreferrer" className = "font-semibold ml-1 hover:underline">carlozzsilva10</a>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer;