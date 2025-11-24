// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5 text-white">

                {/* Menu */}
                <ul className="flex gap-8 font-medium">

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

                    {/* <li>
                        <NavLink
                            to="/itinerary"
                            className={({ isActive }) =>
                                `hover:text-blue-300 pb-1 ${isActive ? "border-b-2 border-white" : ""}`
                            }
                        >
                            Itinerary
                        </NavLink>
                    </li> */}

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
            </div>
        </nav>
    );
};

export default Navbar;
