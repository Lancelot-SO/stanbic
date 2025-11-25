// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import herobg from '../../assets/hero/stanbichero.png';
import mobilebg from '../../assets/hero/heromobile.png';
import shieldhero from '../../assets/hero/shieldhero.png';
import RegisterModal from './RegisterModal';

const Hero = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <section className="relative w-full h-[677px] lg:h-[944px] text-white z-10 overflow-hidden">
            {/* Background images */}
            <img
                src={mobilebg}
                alt="Hero Background Mobile"
                className="w-full h-full object-cover lg:hidden"
            />
            <img
                src={herobg}
                alt="Hero Background Desktop"
                className="hidden lg:block w-full h-full object-cover"
            />

            {/* Content container */}
            <div
                className="
          absolute
          lg:left-[95px] 4xl:left-[250px] left-[20%]
          lg:top-[379px] 4xl:top-[400px] top-[31%]
          -translate-y-1/2
          lg:h-[500px] lg:w-[459px]
          flex flex-col items-center justify-center
          px-4
        "
            >
                <img
                    src={shieldhero}
                    alt="shield"
                    className="lg:w-[459px] w-[219px] lg:h-[282px] h-[135px] lg:mb-6 mb-2"
                />

                <p className="text-lg font-medium text-center lg:text-left">
                    December 12th–14th, 2025 <br />
                    <span className="font-bold">Royal Golf Club, Kumasi</span>
                </p>

                <button
                    onClick={() => setOpenModal(true)}
                    className="
            lg:mt-8 mt-4 px-8 py-3
            bg-white text-[#0637A2]
            font-semibold rounded-[3px]
            hover:bg-gray-200 transition
          "
                >
                    Confirm Your Details
                </button>
            </div>

            <RegisterModal open={openModal} onClose={() => setOpenModal(false)} />
        </section>
    );
};

export default Hero;
