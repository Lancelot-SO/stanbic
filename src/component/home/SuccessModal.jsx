// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";
import icon from "../../assets/hero/doneshield.png"

const SuccessModal = ({ onClose }) => {
    const [closing, setClosing] = useState(false);

    const handleDone = () => {
        setClosing(true);

        setTimeout(() => {
            onClose(); // trigger close after animation
        }, 250); // matches animation duration
    };
    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
            <div className={`bg-white rounded-lg p-5 w-[589px] text-center shadow-lg 
                    ${closing ? "animate-fade-out" : "animate-fade-in"}
                `}>

                {/* Icon */}
                <div className="flex justify-center mb-4">
                    <img src={icon} alt="Success Icon" loading="lazy" />
                </div>

                {/* Heading */}
                <h2 className="text-[40px] font-bold text-[#0637A2] mb-2">
                    Thank you for registering!
                </h2>

                {/* Subtext */}
                <p className="text-[#0637A2] text-[40px] mb-6">
                    Your account has been created successfully.
                </p>

                {/* Button */}
                <button
                    onClick={handleDone}
                    className="bg-[#0637A2] text-white px-8 py-2 rounded hover:bg-blue-700"
                >
                    Done
                </button>
            </div>
        </div>
    );
};

SuccessModal.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default SuccessModal;
