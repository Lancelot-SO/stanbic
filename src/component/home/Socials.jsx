// eslint-disable-next-line no-unused-vars
import React from "react";
import shield from "../../assets/hero/shieldend.png";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Socials() {
    return (
        <div className="w-full h-[315px] bg-[#00008A] flex items-center justify-center relative overflow-hidden">
            {/* Background Image */}
            <img
                src={shield}
                alt="background"
                className="absolute w-[475px] h-full object-cover opacity-100"
            />


            {/* Social Icons */}
            <div className="flex gap-6 relative z-10">
                <div className="w-[36px] h-[36px] bg-[#0637A2] text-white rounded-full flex items-center justify-center">
                    <FaLinkedinIn />
                </div>
                <div className="w-[36px] h-[36px] bg-[#0637A2] text-white rounded-full flex items-center justify-center">
                    <FaFacebookF />
                </div>
                <div className="w-[36px] h-[36px] bg-[#0637A2] text-white rounded-full flex items-center justify-center">
                    <FaInstagram />
                </div>
                <div className="w-[36px] h-[36px] bg-[#0637A2] text-white rounded-full flex items-center justify-center">
                    <FaXTwitter />
                </div>
            </div>
        </div>
    );
}
