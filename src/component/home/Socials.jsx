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
                className="absolute lg:w-[475px] w-[400px] h-full object-cover opacity-100"
            />


            {/* Social Icons */}
            <div className="flex gap-6 relative z-10">
                <a
                    href="https://www.linkedin.com/company/stanbicbankgh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[36px] h-[36px] bg-[#0637A2] text-white rounded-full flex items-center justify-center"
                >
                    <FaLinkedinIn />
                </a>

                <a
                    href="https://www.facebook.com/share/1DErT3E4c2/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[36px] h-[36px] bg-[#0637A2] text-white rounded-full flex items-center justify-center"
                >
                    <FaFacebookF />
                </a>

                <a
                    href="https://www.instagram.com/stanbicbankgh/?igsh=MWhqZ2pvMTJzMnY3dw%3D%3D#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[36px] h-[36px] bg-[#0637A2] text-white rounded-full flex items-center justify-center"
                >
                    <FaInstagram />
                </a>

                <a
                    href="https://x.com/stanbicbankgh?s=21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[36px] h-[36px] bg-[#0637A2] text-white rounded-full flex items-center justify-center"
                >
                    <FaXTwitter />
                </a>
            </div>

        </div>
    );
}
