import React, { useRef } from 'react';
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import 'react-multi-carousel/lib/styles.css';
import "./Swiper.css";

import Slider1 from "../assets/slider1.png";
import Slider2 from "../assets/slider2.png";
import Slider3 from "../assets/slider3.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Slider = () => {
    const carouselRef = useRef(null);

    const goToNext = () => {
        if (carouselRef.current) {
            carouselRef.current.next();
        }
    };

    const goToPrev = () => {
        if (carouselRef.current) {
            carouselRef.current.previous();
        }
    };

    return (
        <div className='relative'>
            <div className='absolute w-full lg:w-3/4 lg:pl-[50px] h-[435px] lg:top-[-160px] top-[-40px] lg:left-[152px] ml-4'>
                <Carousel
                    ref={carouselRef}
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // Server-side rendering
                    infinite={true}
                    autoPlay={false}
                    containerClass="carousel-container"
                    itemClass="carousel-item-padding-40-px"
                    arrows={false} // Disable default arrows to use custom ones
                >
                    <div className='clay w-[329px] h-[425px] bg-white flex items-center justify-center'>
                        <img src={Slider1} alt='slider1' className="w-[287px] h-[369px]" />
                    </div>
                    <div className='clay w-[329px] h-[425px] bg-white flex items-center justify-center'>
                        <img src={Slider2} alt='slider2' className="w-[287px] h-[369px]" />
                    </div>
                    <div className='clay w-[329px] h-[425px] bg-white flex items-center justify-center'>
                        <img src={Slider3} alt='slider3' className="w-[287px] h-[369px]" />
                    </div>
                    <div className='clay w-[329px] h-[425px] bg-white flex items-center justify-center'>
                        <img src={Slider1} alt='slider1' className="w-[287px] h-[369px]" />
                    </div>
                </Carousel>
            </div>

            {/* Navigation buttons */}
            <div className='relative flex justify-between items-center'>
                <div className="prev absolute text-custom-blue left-4 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={goToPrev}>
                    <IoMdArrowDropleft size={24} />
                </div>
                <div className="next absolute text-custom-blue right-4 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={goToNext}>
                    <IoMdArrowDropright size={24} />
                </div>
            </div>

            <div className=''>
                <div className='absolute border-r border-t border-b p-5 lg:top-[350px] top-[450px] lg:left-[40%] left-[50px] w-[150px] items-center justify-center'>
                    20 images
                </div>
                <div className='absolute border border-r-0 border-l-0 py-5 pl-10 lg:top-[350px] top-[450px] left-[49%] w-[150px] items-center justify-center'>
                    50 activities
                </div>
            </div>

        </div>
    );
};

export default Slider;
