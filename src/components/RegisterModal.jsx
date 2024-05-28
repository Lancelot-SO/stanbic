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
        first_name: '',
        surname: '',
        tel: '',
        email: '',
        shirt_size: 'S',
        dietary_needs: '',
        handicap_id: '',
        golf_club: '',
        handicap_index: '',
        emergency_contact_name: '',
        emergency_contact: '+233'
    });

    const handleChange = (e) => {
        const newdata = { ...formData }
        newdata[e.target.name] = e.target.value
        setFormData(newdata)
        console.log(newdata)
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
                            <p className='text-custom-blue font-bold'>Register Your Account</p>
                            <form className='overflow-y-scroll lg:overflow-hidden h-[590px]' onSubmit={(e) => handleSubmit(e)}>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                    <div className='flex flex-col gap-4'>
                                        <div className='flex flex-col mb-2'>
                                            <label className='text-custom-blue'>First Name(s) (As shown on your ID)</label>
                                            <input type='text' name='first_name' placeholder='e.g. John' value={formData.first_name} onChange={(e) => handleChange(e)} className='text-black' required />
                                        </div>
                                        <div className='flex flex-col mb-2'>
                                            <label className='text-custom-blue'>Surname</label>
                                            <input type='text' name='surname' placeholder='e.g. Doe' value={formData.surname} onChange={(e) => handleChange(e)} className='text-black' required />
                                        </div>
                                        <div className='flex flex-col mb-2'>
                                            <label className='text-custom-blue'>Telephone Number</label>
                                            <input type='tel' name='tel' placeholder='e.g. +233123456789' value={formData.tel} onChange={(e) => handleChange(e)} className='text-black' required />
                                        </div>
                                        <div className='flex flex-col mb-2'>
                                            <label className='text-custom-blue'>Email Address</label>
                                            <input type='email' name='email' placeholder='e.g. john.doe@example.com' value={formData.email} onChange={(e) => handleChange(e)} className='text-black' required />
                                        </div>
                                        <div className='mb-2'>
                                            <label className='text-custom-blue'>T-Shirt Size</label>
                                            <select name='shirt_size' value={formData.shirt_size} onChange={(e) => handleChange(e)} required className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                                <option value=''>Select size</option>
                                                <option value='S'>S</option>
                                                <option value='M'>M</option>
                                                <option value='L'>L</option>
                                                <option value='XL'>XL</option>
                                                <option value='XXL'>XXL</option>
                                            </select>
                                        </div>
                                        <div className='mb-2 flex flex-col'>
                                            <label className='text-custom-blue'>Dietary Needs</label>
                                            <input type='text' name='dietary_needs' placeholder='e.g. Vegetarian' value={formData.dietary_needs} onChange={(e) => handleChange(e)} className='text-black' />
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <div className='flex flex-col mb-4'>
                                            <label className='text-custom-blue'>National GGA Handicap ID</label>
                                            <input type='text' name='handicap_id' placeholder='e.g. GGA12345' value={formData.handicap_id} onChange={(e) => handleChange(e)} className='text-black' />
                                        </div>
                                        <div className='flex flex-col mb-4'>
                                            <label className='text-custom-blue'>Golf Club</label>
                                            <input type='text' name='golf_club' placeholder='e.g. Achimota Golf Club' value={formData.golf_club} onChange={(e) => handleChange(e)} className='text-black' />
                                        </div>
                                        <div className='flex flex-col mb-4'>
                                            <label className='text-custom-blue'>Handicap Index</label>
                                            <input type='text' name='handicap_index' placeholder='e.g. 12.5' value={formData.handicap_index} onChange={(e) => handleChange(e)} className='text-black' />
                                        </div>
                                        <div className='flex flex-col mb-4'>
                                            <label className='text-custom-blue'>Emergency Contact Name</label>
                                            <input type='text' name='emergency_contact_name' placeholder='e.g. Jane Doe' value={formData.emergency_contact_name} onChange={(e) => handleChange(e)} className='text-black' />
                                        </div>
                                        <div className='flex flex-col mb-4'>
                                            <label className='text-custom-blue'>Emergency Contact Number</label>
                                            <input type='tel' name='emergency_contact' placeholder='e.g. +233987654321' value={formData.emergency_contact} onChange={(e) => handleChange(e)} className='text-black' required />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-center mt-4'>
                                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                        Register
                                    </button>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterModal
