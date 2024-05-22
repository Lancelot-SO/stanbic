import React, { useState } from 'react'
import hero from "../assets/golfer.png"
import logo from "../assets/logo.png"
import ball from "../assets/golfball.png"
import rectangle from "../assets/rectangle.png"
import cloud from "../assets/cloud.png"
import degree from "../assets/degree.png"
import coinbase from "../assets/coinbase.png"
import spotify from "../assets/spotify.png"
import slack from "../assets/slack.png"
import adobe from "../assets/adobe.png"
import webflow from "../assets/webflow.png"
import zoom from "../assets/zoom.png"
import ballhole from "../assets/ballhole.png"
import golfrack from "../assets/golfrack.png"
import golfers from "../assets/bgGolfers.png"
import badgegolf from "../assets/badgegolf.png"
import sunny from "../assets/sunny.png"
import clearsky from "../assets/clearsky.png"
import rainy from "../assets/rainy.png"
import night_storm from "../assets/night_storm.png"

import Slider1 from "../assets/slider1.png";
import Slider2 from "../assets/slider2.png";
import Slider3 from "../assets/slider3.png";

import { BiSearch } from "react-icons/bi";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

import "./Home.css"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'
import Slider from '../components/Slider'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import RegisterModal from '../components/RegisterModal'


const Home = () => {

    const api = {
        key: "e51a99ba5449d1c13ee0227cdc604c58",
        baseUrl: "https://api.openweathermap.org/data/2.5/",
    }

    const [search, setSearch] = useState('');
    const [weather, setWeather] = useState({});

    const searchPressed = () => {
        fetch(`${api.baseUrl}weather?q=${search}&units=metric&APPID=${api.key}`)
            .then((res) => res.json())
            .then((result) => {
                setWeather(result)
            })
    }


    const [showCallModal, setshowCallModal] = useState(false);


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

    // const renderButtonGroupOutside = ({ currentSlide, totalItems, goToSlide }) => {
    //     return (
    //         <ul className="flex justify-center">
    //             {[...Array(totalItems)].map((_, index) => (
    //                 <li
    //                     key={index}
    //                     onClick={() => goToSlide(index)}
    //                     className={`w-3 h-3 rounded-full mx-1 ${currentSlide === index ? 'bg-black' : 'bg-gray-300'}`}
    //                 ></li>
    //             ))}
    //         </ul>
    //     );
    // };


    return (
        <div className='overflow-hidden'>
            <div className='relative'>
                <img src={hero} alt='hero' className='w-full lg:h-[657px] h-[200px]' />

                <div className='absolute flex flex-col top-[20%] lg:left-[180px] left-[5px]'>
                    <div className=''>
                        <img src={logo} alt='logo' className='w-[30px] lg:w-[128px] md:w-[150px] lg:h-[94px] h-[20px]' />

                        <h1 className='md:text-3xl text-[22px] lg:text-[65px] font-extrabold w-full md:w-[600px] lg:w-[812px] text-custom-blue leading-tight sm:leading-[40px] md:leading-[55px] lg:leading-[68px]'>
                            INVITATION <br /> G<img src={ball} alt='ball' className='inline w-[30px] sm:w-[40px] md:w-[50px] lg:w-[63px] h-[30px] sm:h-[40px] md:h-[50px] lg:h-[61px]' />LF TOURNAMENT
                        </h1>
                        <h3 className='text-[12px] md:text-lg lg:text-2xl mt-2 mb-4 md:mb-6 lg:mb-6 md:w-[300px] lg:w-[334px] text-custom-blue font-normal leading-tight sm:leading-[24px] md:leading-[28px] lg:leading-[32px]'>STANBIC-ASANTEHENE</h3>

                        <Link to="/">
                            <button type='button' onClick={() => setshowCallModal(true)} className='bg-white font-semibold text-blue-900 px-4 py-1 text-sm sm:text-base md:text-lg lg:text-xl lg:w-[200px] w-[150px] h-[30px] lg:h-[58px] hover:bg-blue-900 hover:text-white transition duration-300'>Register Now</button>
                        </Link>
                        {showCallModal && <RegisterModal onClose={() => setshowCallModal(false)} />}
                    </div>
                </div>

                <div className='absolute bottom-[20px] md:bottom-[10px] lg:bottom-[5px] right-[20px] sm:right-[60px] md:right-[100px] lg:right-[180px] text-white lg:flex hidden flex-col md:flex-row'>
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
                <div className="w-full lg:h-[141px] top-[657px] px-0 lg:px-[160px] pt-[22px] lg:pt-[42px] gap-8 bg-custom-blue">
                    <div className='flex flex-col'>
                        <h3 className='lg:items-center w-[300px] lg:w-full flex justify-center ml-8 lg:ml-0 font-semibold mb-4 text-white'>OUR  PROUD SPONSORS</h3>
                        <div className="overflow-x-scroll sponsor">
                            <div className="flex justify-evenly lg:justify-between lg:w-full w-[55px]">
                                <img src={coinbase} alt="sponsor" className="mr-4 lg:mr-0" />
                                <img src={spotify} alt="sponsor" className="mr-4 lg:mr-0" />
                                <img src={slack} alt="sponsor" className="mr-4 lg:mr-0" />
                                <img src={adobe} alt="sponsor" className="mr-4 lg:mr-0" />
                                <img src={webflow} alt="sponsor" className="mr-4 lg:mr-0" />
                                <img src={zoom} alt="sponsor" className="" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section>
                <div className='lg:h-[873px] h-[773px] mb-[40px] relative'>
                    <img src={ballhole} alt='sponsor' className='w-full' />
                    <Slider />
                </div>
            </section>
            <section className='relative'>
                <img src={golfrack} alt='rack' className='w-[221px] h-[320px] absolute lg:right-[100px] right-[10px] top-[-140px]' />

                <div className='w-full h-[659px] lg:h-[759px] flex flex-col bg-blue-50 lg:pl-[20px] pl-[20px]'>
                    <h2 className='text-custom-blue mt-[20px] w-[446px] h-[90px] lg:pl-[70px] pl-4 mb-[150px] lg:text-[32px] text-[20px] font-bold'>Our Excellence Event <br />in images </h2>
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        responsive={responsive}>
                        <div className='mr-4'>
                            <img src={Slider1} alt='rack' className="w-[568px] h-[353px]" />
                        </div>
                        <div className='mr-4'>
                            <img src={Slider2} alt='rack' className="w-[568px] h-[353px]" />
                        </div>
                        <div className='mr-4'>
                            <img src={Slider3} alt='rack' className="w-[568px] h-[353px]" />
                        </div>
                        <div className='mr-4'>
                            <img src={Slider1} alt='rack' className="w-[568px] h-[353px]" />
                        </div>
                    </Carousel>

                </div>
            </section>

            <section className="relative">
                <div className="relative">
                    <img src={golfers} alt='golfers' className='w-full h-[200px] lg:h-full' />
                </div>
                <div className='absolute lg:top-[150px] top-[40px] right-[10px] lg:right-[250px] lg:p-8 text-white'>
                    <h2 className="lg:text-3xl font-bold lg:mb-8">OTUMFUO</h2>
                    <p className='lg:mb-8 lg:w-[378px] w-[230px] h-[80px] lg:h-[141px] lg:text-[20px] text-[12px] lg:leading-[30px] font-normal'>Lustrous yet understated. The new evening
                        wear collection exclusively offered at the
                        reopened Giorgio Armani boutique in Los
                        Angeles.</p>
                    <Link to="/">
                        <button type='button' onClick={() => setshowCallModal(true)} className='bg-white font-semibold text-blue-900 px-4 py-2 text-[12px] lg:text-[17px] lg:w-[200px] lg:h-[58px] hover:bg-blue-900 hover:text-white transition duration-300'>Register Here</button>
                    </Link>
                    {showCallModal && <RegisterModal onClose={() => setshowCallModal(false)} />}
                </div>
            </section>
            <section className="relative">
                <div className="relative">
                    <img src={badgegolf} alt='golfers' className='w-full lg:h-auto h-[400px]' />
                </div>
                <div className='absolute lg:top-20 top-[10px] left-[15px] lg:left-40 w-[343px] rounded-md h-[150px] lg:h-[193px] bg-gradient-to-r from-blue-500 to-indigo-500'>
                    {
                        typeof weather.main !== "undefined" ? (
                            <div>
                                <div className='flex flex-col justify-center h-full px-4'>
                                    <div className='mb-2 flex justify-between'>
                                        <h4 className="text-white">{weather.name}</h4>
                                        <h4 className="text-white">{weather.timezone}</h4>
                                    </div>
                                    <div className='flex items-center mb-2'>
                                        <img src={sunny} alt='sunny' className="mr-2" />
                                        <div>
                                            <h4 className="text-white">{weather.main.temp}</h4>
                                            <h4 className="text-white">{weather.weather[0].description}</h4>
                                        </div>
                                    </div>

                                </div>
                                <div className='w-[343px] h-[127px] mt-4 flex flex-row gap-2'>
                                    <div className='bg-yellow-100 w-[78px] items-center justify-center flex-col flex'>
                                        <img src={clearsky} alt='cloud' />
                                        <strong className='font-bold'>{weather.main.temp_min}</strong>
                                        <small className='text-[12px] text-zinc-700'>temp_min</small>
                                    </div>
                                    <div className='bg-yellow-100 w-[78px] items-center justify-center flex-col flex'>
                                        <img src={rainy} alt='cloud' />
                                        <strong className='font-bold'>{weather.main.temp_max}</strong>
                                        <small className='text-[12px] text-zinc-700'>temp_max</small>
                                    </div>
                                    <div className='bg-yellow-100 w-[78px] items-center justify-center flex-col flex'>
                                        <img src={night_storm} alt='cloud' />
                                        <strong className='font-bold'>{weather.main.pressure}</strong>
                                        <small className='text-[12px] text-zinc-700'>pressure</small>
                                    </div>
                                    <div className='bg-yellow-100 w-[78px] items-center justify-center flex-col flex'>
                                        <img src={clearsky} alt='cloud' />
                                        <strong className='font-bold'>{weather.main.humidity}</strong>
                                        <small className='text-[12px] text-zinc-700'>humidity</small>
                                    </div>
                                </div>
                            </div>

                        ) : (
                            <div className='flex gap-2 items-center mt-6 ml-4'>
                                <input type='text' placeholder='Enter city/town' onChange={(e) => setSearch(e.target.value)} className='bg-transparent text-white' />
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
    )
}

export default Home