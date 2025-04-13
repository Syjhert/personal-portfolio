import React from "react";
import logo from "../assets/logo.png"
import darkModeIcon from "../assets/dark-mode.png"
import lightModeIcon from "../assets/light-mode.png"
import { Link } from "react-scroll";

const Navbar = ({theme, toggleTheme}) => {
    return (
        <nav
            id="navbar"
            className="h-20 w-3/4 max-w-[75rem] rounded-2xl flex items-center justify-between sticky z-10 top-0 mx-auto px-14 py-4 bg-bg dark:bg-bg-dark shadow-md">
            <img src={logo} alt="Logo" className="h-20 w-20"/>
            <div>
                <Link
                    to="about" smooth={true} duration={500} 
                    className="cursor-pointer mx-16 text-xl hover:text-hover dark:hover:text-hover-dark hover:pb-2 hover:border-b-[3px] hover:border-solid hover:border-b-hover dark:hover:border-b-hover-dark">
                    About</Link>
                <Link 
                    to="projects" smooth={true} duration={500} 
                    className="cursor-pointer mx-16 text-xl hover:text-hover dark:hover:text-hover-dark hover:pb-2 hover:border-b-[3px] hover:border-solid hover:border-b-hover dark:hover:border-b-hover-dark">
                    Project</Link>
                <Link
                    to="contact" smooth={true} duration={500}
                    className="cursor-pointer mx-16 text-xl hover:text-hover dark:hover:text-hover-dark hover:pb-2 hover:border-b-[3px] hover:border-solid hover:border-b-hover dark:hover:border-b-hover-dark">
                    Contact</Link>
            </div>
                <img
                    src={theme === "dark" ? lightModeIcon : darkModeIcon}
                    className="h-8 w-8 cursor-pointer"
                    onClick={toggleTheme} 
                />
        </nav>
    )
}

export default Navbar;