// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import herobg from '../../assets/hero/stanbichero.png'
import shieldhero from '../../assets/hero/shieldhero.png'
import RegisterModal from './RegisterModal';

const Hero = () => {

    const [openModal, setOpenModal] = useState(false);

    return (
        <section
            className="relative w-full h-[944px] bg-cover bg-center text-white"
            style={{ backgroundImage: `url(${herobg})` }}
        >

            {/* Content container locked at your exact coordinates */}
            <div className="absolute left-[75px] top-[279px] -translate-y-1/2 h-[200px] flex flex-col items-center">

                {/* Shield image */}
                <img
                    src={shieldhero}
                    alt="shield"
                    className="w-[459px] h-[282px] mb-6"
                />

                {/* Subtext */}
                <p className="text-lg font-medium">
                    December 12th–14th, 2025 <br />
                    <span className="font-bold">
                        Royal Golf Club, Kumasi
                    </span>
                </p>

                {/* Button */}
                <button
                    onClick={() => setOpenModal(true)}
                    className="mt-8 px-8 py-3 bg-white text-[#0637A2] font-semibold rounded-[3px] hover:bg-gray-200 transition">
                    Confirm Your Details
                </button>
            </div>
            {/* Modal */}
            <RegisterModal
                open={openModal}
                onClose={() => setOpenModal(false)}
            />
        </section>
    )
}

export default Hero
