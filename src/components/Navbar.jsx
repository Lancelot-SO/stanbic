import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/logo.png";
import { FaTimes } from 'react-icons/fa';
import { RiMenu4Fill } from 'react-icons/ri';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <nav className="flex items-center justify-between bg-gradient-to-b from-skybg to-blue-300 px-4 md:px-8 lg:px-20 py-4 text-white">
            <div className="flex items-center lg:opacity-0">
                <Link to="/" className="">
                    <img src={logo} alt="Logo" className="h-8" />
                </Link>
            </div>
            <ul className="hidden md:flex items-center gap-10 lg:gap-16">
                <li>
                    <Link to="/" className={`text-black font-bold hover:underline ${currentPath === '/' ? 'underline' : ''}`}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/gallery" className={`text-black font-bold hover:underline ${currentPath === '/gallery' ? 'underline' : ''}`}>
                        Gallery
                    </Link>
                </li>
            </ul>
            <div onClick={() => setNav(!nav)} className="md:hidden cursor-pointer text-white z-20">
                {nav ? <FaTimes size={30} /> : <RiMenu4Fill size={30} />}
            </div>
            {nav && (
                <div className="absolute top-0 left-0 w-full h-[100%] bg-gradient-to-b from-blue-400 to-blue-200 bg-opacity-90 flex flex-col items-center justify-center md:hidden z-10">
                    <ul className="text-center space-y-8">
                        <li>
                            <Link to="/" className={`text-black font-bold text-2xl ${currentPath === '/' ? 'underline' : ''}`} onClick={() => setNav(false)}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/gallery" className={`text-black font-bold text-2xl ${currentPath === '/gallery' ? 'underline' : ''}`} onClick={() => setNav(false)}>
                                Gallery
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
