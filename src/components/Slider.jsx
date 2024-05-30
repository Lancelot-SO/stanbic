import React, { useEffect, useRef } from 'react';
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import 'react-multi-carousel/lib/styles.css';
import "./Swiper.css";

import Slider1 from "../assets/golfer1.png";
import Slider2 from "../assets/golfer2.png";
import Slider3 from "../assets/golfer3.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

import AOS from "aos";
import "aos/dist/aos.css";

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

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
        AOS.refresh();
    }, []);

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
            <div className='absolute w-full lg:w-3/4 lg:pl-[50px] h-[435px] lg:top-[-160px] top-[-40px] md:top-[-50px] lg:left-[152px] ml-8 lg:ml-4'>
                <Carousel
                    ref={carouselRef}
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // Server-side rendering
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    containerClass="carousel-container"
                    itemClass="carousel-item-padding-40-px"
                    arrows={false} // Disable default arrows to use custom ones
                >
                    <div data-aos="fade-up" className='clay w-[329px] h-[425px] bg-white flex items-center justify-center'>
                        <img src={Slider1} alt='slider1' className="w-[287px] h-[369px]" />
                    </div>
                    <div data-aos="fade-up" className='clay w-[329px] h-[425px] bg-white flex items-center justify-center'>
                        <img src={Slider2} alt='slider2' className="w-[287px] h-[369px]" />
                    </div>
                    <div data-aos="fade-up" className='clay w-[329px] h-[425px] bg-white flex items-center justify-center'>
                        <img src={Slider3} alt='slider3' className="w-[287px] h-[369px]" />
                    </div>
                    <div data-aos="fade-up" className='clay w-[329px] h-[425px] bg-white flex items-center justify-center'>
                        <img src={Slider1} alt='slider1' className="w-[287px] h-[369px]" />
                    </div>
                </Carousel>
            </div>

            {/* Navigation buttons */}
            <div className='relative flex justify-between md:top-[140px] lg:top-0 items-center'>
                <div className="prev absolute text-custom-blue left-4 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={goToPrev}>
                    <IoMdArrowDropleft size={24} />
                </div>
                <div className="next absolute text-custom-blue right-4 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={goToNext}>
                    <IoMdArrowDropright size={24} />
                </div>
            </div>


            <div className=''>
                <Link to="/gallery" className='absolute font-normal border border-custom-blue p-5 lg:top-[350px] top-[450px] lg:left-[43%] md:left-[250px] md:w-[200px] tablet:left-[130px] flex
                left-[35%] items-center justify-center bg-custom-blue text-white px-4 py-1 text-sm sm:text-base rounded-[12px] md:h-[40px] md:text-lg lg:text-xl lg:w-[200px] w-[150px] h-[30px] lg:h-[58px] hover:bg-white hover:text-custom-blue transition duration-300'>
                    <button>Click to see more</button>
                </Link>
            </div>


        </div>
    );
};

export default Slider;
