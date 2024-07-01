import React, { useState, useEffect, useCallback } from 'react';
import hero from "../assets/footerbanner.png";
import logo from "../assets/logo.png";
import ball from "../assets/golfball.png";
import rectangle from "../assets/rectangle.png";
import cloud from "../assets/cloud.png";
import degree from "../assets/degree.png";

import stanbic from "../assets/stanbic.png";
// import stanbicIL from "../assets/stanbicIL.png";
import stanbicIM from "../assets/stanbicIM.png";
import royal from "../assets/royal.png";
import ballhole from "../assets/ballhole.jpg";
// import golfrack from "../assets/golfrack.png";
import golfers from "../assets/middlebannerbg.png";
import badge from "../assets/middlebadge.png"
import footerbanner from "../assets/stanbicfooter.png";
import sunny from "../assets/sunny.png";
import clearsky from "../assets/clearsky.png";
import rainy from "../assets/rainy.png";
import night_storm from "../assets/night_storm.png";

// import Slider1 from "../assets/3men.png";
// import Slider2 from "../assets/2men.png";
// import Slider3 from "../assets/golfer6.png";

import { BiSearch } from "react-icons/bi";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

import "./Home.css";

import { Typewriter } from 'react-simple-typewriter'

import AOS from "aos";
import "aos/dist/aos.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Slider from '../components/Slider';
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import RegisterModal from '../components/RegisterModal';

const Home = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
        AOS.refresh();
    }, []);

    // const [selectedImage, setSelectedImage] = useState(null);
    // const [isModalOpen, setIsModalOpen] = useState(false);


    // const handleImageClick = (image) => {
    //     setSelectedImage(image);
    //     setIsModalOpen(true);
    // };

    // const closeModal = () => {
    //     setIsModalOpen(false);
    //     setSelectedImage(null);
    // };

    // const images = [Slider1, Slider2, Slider3, Slider1, Slider3];


    const api = {
        key: "e51a99ba5449d1c13ee0227cdc604c58",
        baseUrl: "https://api.openweathermap.org/data/2.5/",
    };

    const [search, setSearch] = useState('');
    const [weather, setWeather] = useState({});

    const fetchWeather = useCallback((city) => {
        fetch(`${api.baseUrl}weather?q=${city}&units=metric&APPID=${api.key}`)
            .then((res) => res.json())
            .then((result) => {
                setWeather(result);
            });
    }, [api.baseUrl, api.key]);

    useEffect(() => {
        fetchWeather('Kumasi');
    }, [fetchWeather]);

    const searchPressed = () => {
        fetchWeather(search);
    };
    const [showCallModal, setShowCallModal] = useState(false);

    // const responsive = {
    //     superLargeDesktop: {
    //         breakpoint: { max: 4000, min: 3000 },
    //         items: 5
    //     },
    //     desktop: {
    //         breakpoint: { max: 3000, min: 1024 },
    //         items: 4
    //     },
    //     tablet: {
    //         breakpoint: { max: 1024, min: 464 },
    //         items: 2
    //     },
    //     mobile: {
    //         breakpoint: { max: 464, min: 0 },
    //         items: 1
    //     }
    // };

    return (
        <div className='overflow-hidden'>
            <div className='relative'>
                <img src={hero} alt='hero' className='w-full md:h-[400px] lg:h-full h-[200px] object-cover' />

                <div className='absolute flex flex-col top-[30%] lg:left-[130px] left-[5px]'>
                    <div className=''>
                        <img src={logo} alt='logo' data-aos="fade-down" className='hidden w-[30px] lg:w-[108px] md:w-[90px] md:h-[80px] lg:h-[100px] h-[30px]' />

                        <h3 className='text-[12px] md:text-lg lg:text-3xl mt-2 small:mb-0 md:mb-1 lg:mb-2 md:w-[300px] lg:w-[410px] text-white font-bold leading-tight sm:leading-[24px] md:leading-[28px] lg:leading-[32px]'>

                            <Typewriter
                                words={["STANBIC-ASANTEHENE"]}
                                loop
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </h3>
                        <h1 data-aos="fade-right" className='md:text-3xl text-[22px] msm:text-[15px] lg:text-[50px] font-extrabold w-full md:w-[600px] lg:w-[812px] text-white leading-tight sm:leading-[40px] md:leading-[55px] lg:leading-[68px] mb-2 lg:mb-8'>
                            INVITATIONAL <br /> G<img src={ball} alt='ball' className='inline w-[30px] sm:w-[40px] md:w-[50px] lg:w-[63px] h-[30px] sm:h-[40px] md:h-[50px] lg:h-[61px]' />LF TOURNAMENT
                        </h1>

                        <Link to="/">
                            <button type='button' onClick={() => setShowCallModal(true)} className='bg-white font-semibold text-custom-blue px-4 py-1 text-sm sm:text-base rounded-[12px] md:h-[40px] md:text-lg lg:text-xl lg:w-[200px] w-[150px] h-[30px] lg:h-[58px] sm:bg-custom-blue sm:text-white small:text-white small:bg-custom-blue
                            xsm:bg-custom-blue xsm:text-white msm:bg-custom-blue msm:text-white hover:bg-custom-blue hover:text-white transition duration-300'>Register Now</button>
                        </Link>
                        {showCallModal && <RegisterModal onClose={() => setShowCallModal(false)} />}
                    </div>
                </div>

                <div className='absolute bottom-[20px] md:bottom-[10px] lg:bottom-[5px] right-[20px] sm:right-[60px] md:right-[100px] lg:right-[180px] text-white hidden md:hidden flex-col md:flex-row'>
                    <div className='flex flex-col mb-2 md:mb-0'>
                        <div className='flex items-center gap-2 mt-4'>
                            <span className='text-sm sm:text-base md:text-lg lg:text-xl font-semibold leading-tight sm:leading-[16px] md:leading-[16px] lg:leading-[16px]'>Stockholm, Sweden</span>
                            <img src={rectangle} alt='rect' className='hidden md:block' />
                        </div>
                        <div className='flex items-center gap-2'>
                            <small className='text-xs sm:text-sm md:text-base lg:text-lg'>Tue, Jun 30, 2024</small>
                            <img src={rectangle} alt='rect' className='hidden md:block' />
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img src={cloud} alt='rect' className='w-[30px] sm:w-[40px] md:w-[50px] lg:w-[60px]' />
                        <div className='flex flex-col pt-4 md:pt-0'>
                            <div className='flex items-baseline'>
                                <span className='text-custom-blue text-2xl sm:text-3xl md:text-[35px] lg:text-[40px] font-semibold'>19</span>
                                <img src={degree} alt='rect' className='w-[4px] sm:w-[5px] md:w-[6px] lg:w-[7px] h-[4px] sm:h-[5px] md:h-[6px] lg:h-[7px]' />
                            </div>
                            <small className='text-xs sm:text-sm md:text-base lg:text-lg'>Rainy</small>
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <div className="w-full lg:h-[151px] h-[100px] top-[657px] px-0 lg:px-[160px] pt-[20px] lg:pt-[22px] gap-8 bg-custom-blue">
                    <div className='flex flex-col'>
                        <h3 className='lg:items-center md:items-center w-[300px] md:flex md:ml-[200px] lg:w-full flex justify-center xsm:ml-8 ml-16 lg:ml-0 font-semibold lg:mb-4 mb-2 text-white'>OUR PROUD SPONSORS</h3>
                        <div className="overflow-x-scroll sponsor flex items-center justify-center">
                            <div className="w-[370px] flex justify-center lg:justify-evenly lg:w-full md:items-center md:w-full">
                                <img src={stanbic} alt="sponsor" className="xsm:w-[120px] xsm:h-[30px] msm:w-[110px] msm:h-[30px] tablet:mr-10 mr-2 small:w-[100px] tablet:w-[120px] md:w-[130px] w-[150px] small:h-[30px] tablet:h-[40px] md:h-[45px] h-[50px] lg:mr-0" />
                                <img src={stanbicIM} alt="sponsor" className="xsm:w-[150px] xsm:h-[30px] msm:w-[110px] msm:h-[30px] tablet:mr-10 mr-2 small:w-[120px] tablet:w-[140px] md:w-[150px] w-[200px] small:h-[30px] tablet:h-[40px] md:h-[45px] h-[50px] lg:mr-0" />
                                <img src={royal} alt="sponsor" className="xsm:w-[30px] xsm:h-[30px] small:w-[40px] msm:w-[40px] msm:h-[30px] tablet:w-[120px] md:w-[50px] w-[150px] lg:w-[50px] small:h-[30px] tablet:h-[40px] md:h-[45px] h-[50px]" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div className='lg:h-[873px] h-[673px] mb-[40px] relative'>
                    <img src={ballhole} alt='sponsor' className='relative w-full h-[150px] lg:h-[350px]' />
                    <h2 className='absolute top-0 lg:left-[29%] text-white mt-[20px] lg:mt-0 lg:w-[700px] w-[446px] h-[90px] lg:pl-[70px] pl-1 vsm:pl-2 xsm:pl-1 small:pl-2 md:pl-2 mb-[100px] lg:mb-12 md:w-[600px] md:ml-8 flex items-center justify-center lg:text-[32px] md:text-[28px] text-[20px] font-bold'>SEE MORE PHOTOS IN OUR GALLERY</h2>
                    <Slider />
                </div>
            </section>

            {/*<section className='relative'>
                <img src={golfrack} alt='rack' data-aos="zoom-in-left" className='w-[221px] h-[320px] absolute lg:right-[100px] right-[10px] top-[-140px]' />

                <div className='w-full h-[659px] lg:h-[759px] flex flex-col bg-blue-50 lg:pl-[0] pl-[20px]'>
                    <h2 className='text-custom-blue mt-[20px] w-[446px] h-[90px] lg:pl-[70px] pl-4 mb-[100px] lg:mb-12 lg:text-[32px] md:text-[28px] text-[20px] font-extrabold'>SEE MORE PHOTOS IN <br />OUR GALLERY</h2>
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        className=''
                        responsive={responsive}
                        autoPlay={true}
                        autoPlaySpeed={3000} // Adjust the speed as needed
                        infinite={true}
                    >
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className='relative transition-transform duration-300 h-[500px] flex items-center'
                                onClick={() => handleImageClick(image)}
                            >
                                <img
                                    src={image}
                                    alt='rack'
                                    className='w-[450px] lg:w-[360px] h-[353px] cursor-pointer transform'
                                />
                            </div>
                        ))}
                    </Carousel>
                    {isModalOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                            <div className="relative bg-white w-[550px] h-[550px] p-4 rounded-lg">
                                <button onClick={closeModal} className="absolute mb-4 text-custom-blue font-bold bg-white bg-opacity-50 right-5 top-5 text-[20px] w-[30px] h-[30px] pb-1 flex mt-1 rounded-full items-center justify-center">x</button>
                                <img src={selectedImage} alt="Selected" className="w-full h-[520px] max-h-screen max-w-full" />
                            </div>
                        </div>
                    )}
                </div>
                </section>*/}

            <section className="relative">
                <div className="relative">
                    <img src={golfers} alt="golfers" className="w-full h-[200px] md:h-[300px] lg:h-full" />
                </div>
                <img src={badge} alt='badge' className='absolute top-[50px] vl:top-[100px] vl:left-[200px] left-[150px] w-[300px] xsm:w-[120px] xsm:top-[30px] xsm:left-[10px]
                msm:w-[100px] msm:left-4 md:w-[200px] md:left-[50px] xl:w-[250px] xl:left-[100px]' />
                <div className="absolute w-[90%] max-w-[900px] small:top-[15px] small:left-[150px] vl:left-[600px] vl:top-[80px] 3xl:left-[700px] msm:left-[120px] top-[30px] lg:top-[5px] right-[-105px] md:left-[280px] xsm:left-[130px] lg:left-[250px] xl:left-[400px] lg:p-4 text-white">
                    <h2 className="font-bold lg:text-[32px] xl:mb-2 md:text-[18px] vl:text-[40px] vl:leading-[40px] 2xl:leading-8 3xl:leading-10 lg:leading-[40px] small:leading-4 text-[12px] msm:text-[11px] leading-none 3xl:mb-4 lg:mb-2 small:ml-0 small:mb-2 ml-2 lg:ml-0 text-transparent md:ml-6" style={{ WebkitTextStroke: '1px white' }}>
                        WELCOME TO THE 6TH EDITION
                        <br />
                        OF THE OTUMFUO GOLF TOURNAMENT
                    </h2>

                    <div className="p-2 tablet:p-4 md:p-6 small:p-0 lg:p-0 text-[8px] small:text-[10px] tablet:text-sm md:text-[12px] vl:text-[14px] lg:text-[14px] leading-tight md:leading-normal lg:leading-loose lg:mb-8 xl:mb-0">
                        <div className='lg:w-full w-[200px] md:w-full md:h-[180px]'>
                            <p className="md:w-[400px] lg:w-full small:w-[280px]">
                                Stanbic Bank is the title sponsor of the 6th Otumfuor Invitational Golf Tournament Championship 2024, celebrating the 25th anniversary of the Asantehene and the bank. The event aims to connect with clients, and the golfing community, and foster growth opportunities. It also includes side activities for non-players and families, promoting community bonding and the sport of golf.                            </p>
                            <p className="md:w-[400px] lg:w-full small:w-[280px]">
                                Join us in honouring tradition, building lasting connections, and exemplifying our commitment to exceptional experiences and unparalleled excellence.
                            </p>
                        </div>
                    </div>
                    <Link data-aos="zoom-out-up" to="/">
                        <button
                            type="button"
                            onClick={() => setShowCallModal(true)}
                            className="bg-white hidden lg:block font-semibold text-blue-900 px-4 py-2 mt-2 xl:mt-0 text-xs rounded-[12px] small:text-sm md:text-base lg:w-[200px] lg:h-[58px] hover:bg-blue-900 hover:text-white transition duration-300"
                        >
                            Register Here
                        </button>
                    </Link>
                    {showCallModal && <RegisterModal onClose={() => setShowCallModal(false)} />}
                </div>

            </section>


            <section className="relative">
                <div className="relative">
                    <img src={footerbanner} alt='golfers' className='w-full lg:h-full h-[350px] object-cover' />
                </div>
                <div className='absolute lg:top-[200px] top-[10px] left-[15px] lg:left-40 w-[343px] rounded-md h-[150px] lg:h-[193px] bg-gradient-to-r from-blue-500 to-indigo-500'>
                    <div className='flex gap-2 items-center mt-6 ml-4 mb-2'>
                        <input type='text' placeholder='Enter city/town' onChange={(e) => setSearch(e.target.value)} className='bg-transparent text-white' />
                        <button onClick={searchPressed}><BiSearch size={24} className='text-white' /></button>
                    </div>
                    {
                        typeof weather.main !== "undefined" ? (
                            <div>
                                <div className='flex flex-col justify-center h-full px-4'>
                                    <div className='mb-2 flex justify-between'>
                                        <h4 className="text-white font-bold">{weather.name}</h4>
                                        <h4 className="text-white">{weather.timezone}</h4>
                                    </div>
                                    <div className='flex items-center mb-2'>
                                        <img src={sunny} alt='sunny' className="mr-2" />
                                        <div>
                                            <h4 className="text-white">{weather.main.temp}°C</h4>
                                            <h4 className="text-white">{weather.weather[0].description}</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[343px] h-[127px] mt-4 xsm:mt-2 small:mt-2 md:mt-2 flex flex-row gap-2'>
                                    <div className='backdrop-blur-16 backdrop-saturate-180 bg-custom-bg rounded-xl border border-custom-border w-[78px] items-center justify-center flex-col flex'>
                                        <img src={clearsky} alt='cloud' />
                                        <strong className='font-bold'>{weather.main.temp_min}°C</strong>
                                        <small className='text-[12px] text-zinc-700'>Temp Min</small>
                                    </div>
                                    <div className='backdrop-blur-16 backdrop-saturate-180 bg-custom-bg rounded-xl border border-custom-border w-[78px] items-center justify-center flex-col flex'>
                                        <img src={rainy} alt='cloud' />
                                        <strong className='font-bold'>{weather.main.temp_max}°C</strong>
                                        <small className='text-[12px] text-zinc-700'>Temp Max</small>
                                    </div>
                                    <div className='backdrop-blur-16 backdrop-saturate-180 bg-custom-bg rounded-xl border border-custom-border w-[78px] items-center justify-center flex-col flex'>
                                        <img src={night_storm} alt='cloud' />
                                        <strong className='font-bold'>{weather.main.pressure} hPa</strong>
                                        <small className='text-[12px] text-zinc-700'>Pressure</small>
                                    </div>
                                    <div className='backdrop-blur-16 backdrop-saturate-180 bg-custom-bg rounded-xl border border-custom-border w-[78px] items-center justify-center flex-col flex'>
                                        <img src={clearsky} alt='cloud' />
                                        <strong className='font-bold'>{weather.main.humidity}%</strong>
                                        <small className='text-[12px] text-zinc-700'>Humidity</small>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className='flex gap-2 items-center mt-6 ml-4'>
                                <input type='text' placeholder='Enter city/town' onChange={(e) => setSearch(e.target.value)} className='text-white' />
                                <button onClick={searchPressed}><BiSearch size={24} className='text-white' /></button>
                            </div>
                        )
                    }
                    <div className='w-[160px] h-[32px] flex mt-4 justify-evenly'>
                        <BsFacebook size={24} className='text-white' />
                        <BsTwitter size={24} className='text-white' />
                        <BsInstagram size={24} className='text-white' />
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Home;
