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

import { WiRefresh } from "react-icons/wi";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'
import Slider from '../components/Slider'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import RegisterModal from '../components/RegisterModal'


const Home = () => {

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
        <div>
            <div className='relative'>
                <img src={hero} alt='hero' className='w-full h-[657px]' />

                <div className='absolute flex top-[20%] left-[180px] flex-row '>
                    <div className=''>
                        <img src={logo} alt='hero' className='' />

                        <h1 className='text-4xl font-extrabold mt-4 w-[812px] h-[136px] text-custom-blue text-[65px] leading-[68px]'>
                            INVITATION <br /> G<img src={ball} alt='ball' className='inline w-[63px] h-[61px]' />LF TOURNAMENT
                        </h1>
                        <h3 className='text-lg mt-2 mb-10 w-[334px] h-[31px] text-custom-blue font-normal leading-[32px]'>STANBIC-ASANTEHENE</h3>

                        <Link to="/">
                            <button type='button' onClick={() => setshowCallModal(true)} className='bg-white font-semibold text-blue-900 px-4 py-2 text-[17px] w-[271px] h-[58px] hover:bg-blue-900 hover:text-white transition duration-300'>Register Now</button>
                        </Link>
                        {showCallModal && <RegisterModal onClose={() => setshowCallModal(false)} />}

                    </div>
                </div>

                <div className='absolute mt-8 bottom-[5px] right-[180px] text-white flex flex-row'>
                    <div className='flex flex-col'>
                        <div className='flex items-center gap-2 mt-4'>
                            <span className='w-[89px] h-[34px] leading-[16px] font-semibold text-[16px]'>Stockholm, Sweden</span>
                            <img src={rectangle} alt='rect' className='mt-4' />
                        </div>
                        <div className='flex items-center gap-2'>
                            <small>Tue, Jun 30, 2024</small>
                            <img src={rectangle} alt='rect' />
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <img src={cloud} alt='rect' />
                        <div className='flex flex-col pt-4'>
                            <div className='flex'>
                                <span className='text-custom-blue w-[41px] h-[43px] leading-[16px] font-semibold text-[35px]'>19</span>
                                <img src={degree} alt='rect' className='w-[6px] h-[6px]' />
                            </div>
                            <small>Rainy</small>
                        </div>

                    </div>
                </div>
            </div>


            <section>
                <div className="w-full h-[141px] top-[657px] px-[160px] pt-[42px] gap-8 bg-custom-blue">
                    <div className='flex flex-col'>
                        <h3 className='items-center flex justify-center font-semibold mb-4 text-white'>OUR  PROUD SPONSORS</h3>
                        <div className='flex justify-between'>
                            <img src={coinbase} alt='sponsor' />
                            <img src={spotify} alt='sponsor' />
                            <img src={slack} alt='sponsor' />
                            <img src={adobe} alt='sponsor' />
                            <img src={webflow} alt='sponsor' />
                            <img src={zoom} alt='sponsor' />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='h-[873px] mb-[40px] relative'>
                    <img src={ballhole} alt='sponsor' className='w-full' />
                    <Slider />

                </div>
            </section>
            <section className='relative'>
                <img src={golfrack} alt='rack' className='w-[221px] h-[320px] absolute right-[100px] top-[-140px]' />

                <div className='w-full h-[759px] flex flex-col bg-blue-50 pl-[20px]'>
                    <h2 className='text-custom-blue mt-[20px] w-[446px] h-[90px] pl-[70px] mb-[150px] text-[32px] font-bold'>Our Excellence Event <br />in images </h2>
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
                    <img src={golfers} alt='golfers' className='w-full' />
                </div>
                <div className='absolute top-[150px] right-[250px] p-8 text-white'>
                    <h2 className="text-3xl font-bold mb-8">OTUMFOUR</h2>
                    <p className='mb-8 w-[378px] h-141px] text-[20px] leading-[30px] font-normal'>Lustrous yet understated. The new evening
                        wear collection exclusively offered at the
                        reopened Giorgio Armani boutique in Los
                        Angeles.</p>
                    <Link to="/">
                        <button type='button' className='bg-white font-semibold text-blue-900 px-4 py-2 text-[17px] w-[200px] h-[58px] hover:bg-blue-900 hover:text-white transition duration-300'>Register Here</button>
                    </Link>
                </div>
            </section>
            <section className="relative">
                <div className="relative">
                    <img src={badgegolf} alt='golfers' className='w-full' />
                </div>
                <div className='absolute top-20 left-40 w-[343px] rounded-md h-[193px] bg-gradient-to-r from-blue-500 to-indigo-500'>
                    <div className='flex flex-col justify-center h-full px-4'>
                        <div className='mb-2 flex justify-between'>
                            <h4 className="text-white">Thứ 2, 20 tháng 11, 2022</h4>
                            <h4 className="text-white">3.30 PM</h4>
                        </div>
                        <div className='flex items-center mb-2'>
                            <img src={sunny} alt='sunny' className="mr-2" />
                            <div>
                                <h4 className="text-white">28º C</h4>
                                <h4 className="text-white">Đồ Sơn - Hải Phòng</h4>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <small className='text-white text-[14px]'>Update gần nhất 3.00 PM</small>
                            <WiRefresh size={24} className='text-white' />
                        </div>
                    </div>
                    <div className='w-[343px] h-[127px] mt-4 flex flex-row gap-2'>
                        <div className='bg-yellow-100 w-[78px] items-center justify-center flex-col flex'>
                            <img src={clearsky} alt='cloud' />
                            <strong className='font-bold'>20º</strong>
                            <small className='text-[12px] text-zinc-700'>4.00 PM</small>
                        </div>
                        <div className='bg-yellow-100 w-[78px] items-center justify-center flex-col flex'>
                            <img src={rainy} alt='cloud' />
                            <strong className='font-bold'>20º</strong>
                            <small className='text-[12px] text-zinc-700'>5.00 PM</small>
                        </div>
                        <div className='bg-yellow-100 w-[78px] items-center justify-center flex-col flex'>
                            <img src={night_storm} alt='cloud' />
                            <strong className='font-bold'>19º</strong>
                            <small className='text-[12px] text-zinc-700'>5.00 PM</small>
                        </div>
                        <div className='bg-yellow-100 w-[78px] items-center justify-center flex-col flex'>
                            <img src={clearsky} alt='cloud' />
                            <strong className='font-bold'>18º</strong>
                            <small className='text-[12px] text-zinc-700'>7.00 PM</small>
                        </div>
                    </div>

                    <div className='w-[160px] h-[32px] flex mt-4 justify-evenly'>
                        <BsFacebook size={24} className='text-purple-900' />
                        <BsTwitter size={24} className='text-purple-900' />
                        <BsInstagram size={24} className='text-purple-900' />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home