import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import navbg from "../assets/navbg.png"

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-[200px] py-[20px] text-white overflow-x-hidden " style={{
            backgroundImage: `url(${navbg})`,
            backgroundSize: '100% auto',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="flex items-center opacity-0">
                <Link to="/" className="">
                    <img src={logo} alt="Logo" className="h-8" />
                </Link>
            </div>
            <ul className="flex items-center gap-[60px]">
                <li>
                    <Link to="/" className="text-white hover:underline">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/gallery" className="text-white hover:underline">
                        Gallery
                    </Link>
                </li>
            </ul>
        </nav>


    )
}

export default Navbar