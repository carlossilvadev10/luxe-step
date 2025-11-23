import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header = ({ menuOpen, setMenuOpen }) => {
    return (
        <header className = "flexBetween max-padd-container py-3 bg-primary fixed top-0 w-full z-40">
            <a href = "/" className = "bold-24">
                <span className = "text-secondary bold-36">L</span>uxeStep
            </a>
            <div className = "flexBetween gap-x-4">
                <div className = "hidden sm:flexBetween bg-white py-2 px-3 rounded-full z-50">
                    <input type = "search" name = "search" id = "search" placeholder = "Buscar..." className = "border-none outline-none w-44 hover:w-52 transition-all duration-200" />
                    <div className = "bg-white">
                        <a href = "/">
                            <FaSearch className = "hover:text-secondary transition-all duration-200" />
                        </a>
                    </div>
                </div>
                <a href = "/" className = "flexBetween gap-x-1 text-white bg-secondary px-3 py-2 rounded-full group w-10 hover:w-24 transition-all duration-200 z-50">
                    <span className = "regular-16 hidden group-hover:flex">Carrito</span>
                    <FaCartShopping />
                </a>
                <button onClick = {() => setMenuOpen(!menuOpen)} className = "sm:hidden text-2xl">
                    {menuOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>
        </header>
    )
}

export default Header;