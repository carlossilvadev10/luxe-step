import React from "react";
import { links } from "../constant/data";
import { Link } from "react-scroll";
import { FaSearch } from "react-icons/fa";

const Nav = ({ menuOpen, setMenuOpen }) => {
    return (
        <nav className = "fixed top-16 xl:top-10 w-full mx-auto z-40">
            {/* Nav desktop */}
            <div className = "hidden sm:flexCenter bg-white w-full xl:w-[640px] mx-auto shadow-sm rounded-lg">
                <ul className = "flex gap-x-4 sm:gap-x-14 items-center">
                    {
                        links.map((link, i) => (
                            <Link key = {i} to = {link.path} spy = {true} smooth = {true} offset = {link.offset} duration = {500} activeClass = "active" className = "capitalize py-3 medium-15 xs:medium-16 cursor-pointer">
                                {link.title}
                            </Link>
                        ))
                    }
                </ul>
            </div>
            {/* Nav móvil (menú desplegable) */}
            <div className = {`sm:hidden bg-white mx-4 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 py-4" : "max-h-0"}`}>
                <ul className = "flex flex-col items-center gap-y-2">
                    {
                        links.map((link, i) => (
                            <Link key = {i} to = {link.path} spy = {true} smooth = {true} offset = {link.offset} duration = {500} activeClass = "active" onClick = {() => setMenuOpen(false)} className = "capitalize py-2 medium-16 cursor-pointer">
                                {link.title}
                            </Link>
                        ))
                    }
                </ul>
                {/* Buscador en móvil */}
                <div className = "flexCenter mt-4">
                    <div className = "flexBetween bg-gray-10 py-2 px-3 rounded-full">
                        <input type = "search" name = "search-mobile" id = "search-mobile" placeholder = "Buscar..." className = "border-none outline-none bg-transparent w-48 text-sm" />
                        <a href = "/">
                            <FaSearch className = "hover:text-secondary transition-all duration-200" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;