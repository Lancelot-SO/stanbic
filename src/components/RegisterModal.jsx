import React, { useRef, useState } from 'react'
import axios from 'axios';
import "../App.css"
import ohene from "../assets/ohene.png"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const RegisterModal = ({ onClose }) => {
    const modalRef = useRef();

    const url = "https://stanbic.interactivedigital.com.gh/api/register"
    const [formData, setFormData] = useState({
        full_name: '',
        club_name: 'Achimota',
        shirt_size: 'M',
        dietary_needs: 'Achimota',
        golf_handicap: '',
        preferred_travel_time: 'Achimota',
        emergency_contact: '+233'
    });

    const handleChange = (e) => {
        const newdata = { ...formData }
        newdata[e.target.name] = e.target.value
        setFormData(newdata)
        // console.log(newdata)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(url, formData);
            if (response.status === 200) {
                toast('Submitted successfully');
                setTimeout(() => {
                    window.location.reload();
                }, 5000);
            }
        } catch (error) {
            console.error('There was an error!', error);
            toast('There was an error submitting the form.');
        }
    };

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    }
    return (
        <div>
            <div ref={modalRef} onClick={closeModal} className='call-modal'>
                <div className='call__modal-content'>
                    <ToastContainer />
                    <div className='call-left'>
                        <img src={ohene} alt='caller' loading='lazy' />
                    </div>

                    <div className='call-right'>
                        <button type="button" onClick={onClose} className="call-close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="callmodal">
                            <p className='text-custom-blue'>Request a call back</p>
                            <form className='' onSubmit={(e) => handleSubmit(e)}>
                                <div className='flex flex-col mb-2'>
                                    <label>Full Name</label>
                                    <input type='text' name='full_name' placeholder='e.g. John Doe' value={formData.full_name} onChange={(e) => handleChange(e)} required />
                                </div>
                                <div className='mb-2'>
                                    <label>Club Name</label>
                                    <select id="clubname" name='club_name' value={formData.club_name} onChange={(e) => handleChange(e)} required className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 dark:text-gray-300 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                        <option>Ohene Fun Club</option>
                                        <option>Greatness Club</option>
                                        <option>Stanbic Club</option>

                                    </select>
                                </div>
                                <div className='mb-2'>
                                    <label>T-Shirt Size</label>
                                    <select id="clubname" name='shirt_size' value={formData.shirt_size} onChange={(e) => handleChange(e)} required className="block appearance-none w-full bg-white border border-gray-200  text-gray-700 dark:text-gray-300 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                        <option>S</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                    </select>
                                </div>
                                <div className='mb-2'>
                                    <label>Dietary Need</label>
                                    <select id="clubname" name='dietary_needs' value={formData.dietary_needs} onChange={(e) => handleChange(e)} required className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 dark:text-gray-300 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                        <option>Achimota</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className='flex flex-col mb-2'>
                                    <label>Golf Handicap</label>
                                    <input type='text' name='golf_handicap' value={formData.golf_handicap} onChange={(e) => handleChange(e)} placeholder='e.g. golf' required />
                                </div>
                                <div className='mb-2'>
                                    <label>Preferred Travel Time</label>
                                    <select id="clubname" name='preferred_travel_time' value={formData.preferred_travel_time} onChange={(e) => handleChange(e)} required className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 dark:text-gray-300 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                        <option>Achimota</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className='flex flex-col mb-2'>
                                    <label>Emergency Contact</label>
                                    <input type='tel' name='emergency_contact' required value={formData.emergency_contact} onChange={(e) => handleChange(e)} placeholder='e.g. +233' />
                                </div>
                                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    Register
                                </button>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterModal
