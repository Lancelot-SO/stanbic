// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";
import formshield from '../../assets/hero/formshield.png'
import SuccessModal from "./SuccessModal";

const RegisterModal = ({ open, onClose }) => {
    const [showSuccessModal, setShowSuccessModal] = useState(false);


    if (!open) return null;

    const handleSubmit = (e) => {
        e.preventDefault();

        // TODO: Add your validation & form handling here

        // If successful:
        setShowSuccessModal(true);
    };


    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white w-[80%] max-w-[1100px] rounded-lg p-8 relative animate-fadeIn">

                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-gray-500 hover:text-gray-800 text-xl"
                >
                    ✕
                </button>

                <h2 className="text-[#0637A2] text-2xl font-bold mb-6">
                    CONFIRM YOUR DETAILS
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 h-[545px]">

                    {/* LEFT IMAGE */}
                    <div className="flex justify-center items-center">
                        <img
                            src={formshield}
                            alt="Golf players"
                            className="h-[350px] object-contain"
                        />
                    </div>

                    {/* RIGHT FORM */}
                    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6 text-[#2A2A2A]">

                        {/* First Name */}
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-2 text-custom-blue">
                                Full Name (As shown on your ID)
                            </label>
                            <input
                                type="text"
                                name="first_name"
                                placeholder="e.g. John"
                                required
                                className="border border-gray-300 rounded-lg px-4 py-3 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>



                        {/* Telephone */}
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-2 text-custom-blue">
                                Telephone Number
                            </label>
                            <input
                                type="tel"
                                name="tel"
                                placeholder="e.g. +233123456789"
                                required
                                className="border border-gray-300 rounded-lg px-4 py-3 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-2 text-custom-blue">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="e.g. john.doe@example.com"
                                required
                                className="border border-gray-300 rounded-lg px-4 py-3 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>

                        {/* T-shirt Size */}
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-2 text-custom-blue">
                                T-Shirt Size
                            </label>
                            <select
                                name="shirt_size"
                                required
                                className="border border-gray-300 bg-white rounded-lg px-4 py-3 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
                            >
                                <option value="">Select size</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                            </select>
                        </div>

                        {/* Dietary Needs */}
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-2 text-custom-blue">
                                Dietary Needs
                            </label>
                            <input
                                type="text"
                                name="dietary_needs"
                                placeholder="e.g. Vegetarian"
                                className="border border-gray-300 rounded-lg px-4 py-3 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>

                        {/* National Handicap ID */}
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-2 text-custom-blue">
                                National GGA Handicap ID
                            </label>
                            <input
                                type="text"
                                name="handicap_id"
                                placeholder="e.g. GGA12345"
                                className="border border-gray-300 rounded-lg px-4 py-3 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>

                        {/* Golf Club */}
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-2 text-custom-blue">
                                Golf Club
                            </label>
                            <input
                                type="text"
                                name="golf_club"
                                placeholder="e.g. Achimota Golf Club"
                                className="border border-gray-300 rounded-lg px-4 py-3 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>

                        {/* Handicap Index */}
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-2 text-custom-blue">
                                Handicap Index
                            </label>
                            <input
                                type="text"
                                name="handicap_index"
                                placeholder="e.g. 12.5"
                                className="border border-gray-300 rounded-lg px-4 py-3 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>

                        {/* Emergency Contact Name */}
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-2 text-custom-blue">
                                Emergency Contact Name
                            </label>
                            <input
                                type="text"
                                name="emergency_contact_name"
                                placeholder="e.g. Jane Doe"
                                className="border border-gray-300 rounded-lg px-4 py-3 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>

                        {/* Emergency Contact Number */}
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-2 text-custom-blue">
                                Emergency Contact Number
                            </label>
                            <input
                                type="tel"
                                name="emergency_contact"
                                placeholder="e.g. +233987654321"
                                required
                                className="border border-gray-300 rounded-lg px-4 py-3 text-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>

                        {/* ACTION BUTTONS */}
                        <div className="col-span-2 flex justify-end gap-3 pt-4">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-6 py-2 border border-gray-400 rounded-lg text-gray-700 bg-white hover:bg-gray-50"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="px-6 py-2 rounded-lg bg-[#0637A2] text-white hover:bg-blue-800"
                            >
                                Confirm
                            </button>

                            {showSuccessModal && (
                                <SuccessModal
                                    onClose={() => {
                                        setShowSuccessModal(false); // close success message
                                        onClose();                  // close registration modal
                                    }}
                                />
                            )}

                        </div>

                    </form>




                </div>
            </div>
        </div>
    )
};

RegisterModal.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
};

export default RegisterModal;
