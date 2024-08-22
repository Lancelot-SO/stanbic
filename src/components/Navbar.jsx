import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import logo from "../assets/stanLogo.png";
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className='relative flex items-center justify-center shadow-sm'>
            <nav className='flex items-center h-[70px] w-[1216px] justify-between'>
                <Link to="/">
                    <img src={logo} alt='logo' className='md:w-[216px] w-[190px] h-[51px] md:h-[61px] pl-2 md:pl-0' />
                </Link>
                <div className='hidden md:flex'>
                    <ul className='flex w-[455px] justify-between pr-4'>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => isActive ? "border-b-2 border-blue-700" : ""}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <HashLink
                                to="#itinerary"
                                smooth
                                className={({ isActive }) => isActive ? "border-b-2 border-blue-700" : ""}
                            >
                                Itinerary
                            </HashLink>
                        </li>
                        <li>
                            <HashLink
                                to="#about"
                                smooth
                                className={({ isActive }) => isActive ? "border-b-2 border-blue-700" : ""}
                            >
                                About
                            </HashLink>
                        </li>
                        <li>
                            <NavLink
                                to="/gallery"
                                className={({ isActive }) => isActive ? "border-b-2 border-blue-700" : ""}
                            >
                                Gallery
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/table"
                                className={({ isActive }) => isActive ? "border-b-2 border-blue-700" : ""}
                            >
                                Table
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className='md:hidden flex items-center pr-4'>
                    <button onClick={toggleMenu} className='text-2xl z-50'>
                        {isMenuOpen ? <FaTimes className='text-white' /> : <FaBars />}
                    </button>
                </div>
            </nav>

            {isMenuOpen && (
                <div className='fixed top-0 right-0 h-full w-full bg-blue-700 z-10 flex flex-col items-center justify-center'>
                    <ul className='space-y-6 text-white text-lg'>
                        <li>
                            <NavLink
                                to="/"
                                onClick={toggleMenu}
                                className={({ isActive }) => isActive ? "border-b-2 border-white" : ""}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <HashLink
                                to="#itinerary"
                                smooth
                                onClick={toggleMenu}
                                className={({ isActive }) => isActive ? "border-b-2 border-white" : ""}
                            >
                                Itinerary
                            </HashLink>
                        </li>
                        <li>
                            <HashLink
                                to="#about"
                                smooth
                                onClick={toggleMenu}
                                className={({ isActive }) => isActive ? "border-b-2 border-white" : ""}
                            >
                                About
                            </HashLink>
                        </li>
                        <li>
                            <NavLink
                                to="/gallery"
                                onClick={toggleMenu}
                                className={({ isActive }) => isActive ? "border-b-2 border-white" : ""}
                            >
                                Gallery
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/table"
                                onClick={toggleMenu}
                                className={({ isActive }) => isActive ? "border-b-2 border-white" : ""}
                            >
                                Table
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
