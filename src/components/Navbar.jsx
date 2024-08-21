import React from 'react';
import { HashLink } from 'react-router-hash-link';
import logo from "../assets/stanLogo.png";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex items-center justify-center shadow-sm'>
            <nav className='flex items-center h-[70px] w-[1216px] justify-between'>
                <Link to="/">
                    <img src={logo} alt='logo' className='w-[216px] h-[61px]' />
                </Link>
                <ul className='flex w-[555px] justify-between pr-4'>
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
            </nav>
        </div>
    );
};

export default Navbar;
