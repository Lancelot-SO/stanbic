// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { scrollToSection } from "../utils/scrollToSection";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const handleScrollItinerary = () => {
        if (location.pathname !== "/") {
            navigate("/");
            scrollToSection("itinerary-section");
        } else {
            scrollToSection("itinerary-section");
        }
    };

    const handleScrollWeather = () => {
        // Weather exists everywhere → just scroll
        scrollToSection("weather-section");
    };



    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5 text-white">

                {/* LEFT MENU */}
                <ul className="hidden md:flex gap-8 font-medium">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `hover:text-blue-300 pb-1 ${isActive ? "border-b-2 border-white" : ""}`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <button
                            onClick={handleScrollItinerary}
                            className="hover:text-blue-300 pb-1"
                        >
                            Itinerary
                        </button>
                    </li>
                    <li>
                        <NavLink
                            to="/gallery"
                            className={({ isActive }) =>
                                `hover:text-blue-300 pb-1 ${isActive ? "border-b-2 border-white" : ""}`
                            }
                        >
                            Gallery
                        </NavLink>
                    </li>
                    <li>
                        <button
                            onClick={handleScrollWeather}
                            className="hover:text-blue-300 pb-1"
                        >
                            Weather
                        </button>
                    </li>

                    <li>
                        <NavLink
                            to="/table"
                            className={({ isActive }) =>
                                `hover:text-blue-300 pb-1 ${isActive ? "border-b-2 border-white" : ""}`
                            }
                        >
                            Table
                        </NavLink>
                    </li>
                </ul>

                {/* HAMBURGER BUTTON (MOBILE) */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="md:hidden text-white text-3xl ml-auto"
                >
                    ☰
                </button>

            </div>

            {/* MOBILE SLIDE-IN MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: "0%" }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.4 }}
                        className="fixed top-0 right-0 w-full h-screen bg-[#0637A2] z-50 p-4 text-white flex flex-col"
                    >
                        {/* CLOSE BUTTON */}
                        <button
                            className="text-4xl self-end mb-10"
                            onClick={() => setIsOpen(false)}
                        >
                            ✕
                        </button>

                        <ul className="flex flex-col gap-6 text-2xl font-medium pl-4">
                            <li>
                                <NavLink
                                    to="/"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <button
                                    onClick={() => { handleScrollItinerary(); setIsOpen(false); }}
                                >
                                    Itinerary
                                </button>
                            </li>

                            <li>
                                <NavLink
                                    to="/gallery"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Gallery
                                </NavLink>
                            </li>

                            <li>
                                <button
                                    onClick={() => { handleScrollWeather(); setIsOpen(false); }}
                                >
                                    Weather
                                </button>
                            </li>

                            <li>
                                <NavLink
                                    to="/table"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Table
                                </NavLink>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
