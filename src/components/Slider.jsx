import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from 'swiper/core'; // Import SwiperCore instead of specific modules
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
// import

import "./Swiper.css"

import Slider1 from "../assets/slider1.png";
import Slider2 from "../assets/slider2.png";
import Slider3 from "../assets/slider3.png";

// Import Navigation module separately
import { Navigation } from 'swiper/modules';

SwiperCore.use([Navigation]); // Use Navigation module in SwiperCore

const Slider = () => {
    return (
        <div className=''>
            <div className='absolute w-3/4 pl-[50px] flex h-[435px] top-[20%] left-[10%]'>
                <Swiper
                    freeMode={true}
                    grabCursor={true}
                    className=''
                    slidesPerView={3}
                    navigation={{  // Enable navigation
                        prevEl: '.prev', // Previous button selector
                        nextEl: '.next'  // Next button selector
                    }}
                >
                    <SwiperSlide>
                        <div className='clay w-[329px] h-[425px] bg-white flex items-center justify-center'>
                            <img src={Slider1} alt='slider' className='w-[287px] h-[369px]' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='clay w-[329px] h-[425px] bg-white flex items-center justify-center'>
                            <img src={Slider2} alt='slider' className='w-[287px] h-[369px]' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='clay w-[329px] h-[425px] bg-white flex items-center justify-center'>
                            <img src={Slider3} alt='slider' className='w-[287px] h-[369px]' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='clay w-[329px] h-[425px] bg-white flex items-center justify-center'>
                            <img src={Slider2} alt='slider' className='w-[287px] h-[369px]' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='clay w-[329px] h-[425px] bg-white flex items-center justify-center'>
                            <img src={Slider1} alt='slider' className='w-[287px] h-[369px]' />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            {/* Navigation buttons */}
            <div className='relative flex justify-between  items-center'>
                <div className="prev absolute text-custom-blue"><IoMdArrowDropleft size={24} /></div>
                <div className="next absolute text-custom-blue"><IoMdArrowDropright size={24} /></div>
            </div>

            <div className=''>
                <div className='absolute border border-green-600 p-5 bottom-[100px] left-[35%] w-[250px] items-center justify-center'>
                    20images
                </div>
                <div className='absolute border border-yellow-600 p-5 bottom-[100px] left-[43%] w-[350px] items-center justify-center'>
                    50activities
                </div>
            </div>

        </div>
    );
};

export default Slider;
