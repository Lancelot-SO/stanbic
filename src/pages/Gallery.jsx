import React, { useCallback, useEffect, useState } from 'react'

import galleryhero from "../assets/galleryhero.png"

import ghana from "../assets/ghana.png"


import gh1 from "../assets/card3.png"
import gh2 from "../assets/mainCard.png"
import gh3 from "../assets/product2.png"
import gh4 from "../assets/golfer2.png"
import gh5 from "../assets/product5.png"
import PhotoGrid from '../components/PhotoGrid'

import footerbanner from "../assets/footerbanner.png"
import sunny from "../assets/sunny.png";
import clearsky from "../assets/clearsky.png";
import rainy from "../assets/rainy.png";
import night_storm from "../assets/night_storm.png";

import { BiSearch } from "react-icons/bi";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Gallery = () => {

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

    return (
        <div className='overflow-hidden'>
            <div>
                <div className='relative'>
                    <img src={galleryhero} alt='hero' className='object-cover h-[497px] md:h-full w-full' />
                    <div>
                        <p className='absolute top-[70%] left-[5%] md:top-[40%] md:left-[10%] w-[559px] h-[165px] font-bold md:text-[45px] text-[27px] leading-[28px] md:leading-[55px] text-white'>
                            ENJOY THE <br />HIGHLIGHTS OF <br />THE DAY
                        </p>
                    </div>
                </div>
            </div>

            <section>
                <div className='bg-[#F4F4F4] h-[900px] w-full relative'>
                    <img src={ghana} alt='ghana' />
                    <div className='absolute top-[50px] md:left-[11%] px-4 md:px-0'>

                        <div className="flex flex-col md:flex-row flex-wrap gap-8 w-full md:w-[1168px] h-auto md:h-[600px]">
                            <div className="relative rounded-lg overflow-hidden md:w-[40%]">
                                <img
                                    src={gh1}
                                    alt="Owabi Wildlife Sanctuary"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="md:w-[55%] grid grid-cols-2 gap-4">
                                <div className="relative rounded-lg overflow-hidden bg-white shadow-lg">
                                    <img
                                        src={gh2}
                                        alt="Zoological Gardens"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="relative rounded-lg overflow-hidden bg-white shadow-lg">
                                    <img
                                        src={gh3}
                                        alt="Okomfo Anokye Sword"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="relative rounded-lg overflow-hidden bg-white shadow-lg">
                                    <img
                                        src={gh4}
                                        alt="Kejetia Market"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="relative rounded-lg overflow-hidden bg-white shadow-lg">
                                    <img
                                        src={gh5}
                                        alt="Bonwire Kente"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

            <section>
                <div>
                    <PhotoGrid />
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
                        <BsFacebook size={24} className='text-[#5D50C6]' />
                        <BsTwitter size={24} className='text-[#5D50C6]' />
                        <BsInstagram size={24} className='text-[#5D50C6]' />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Gallery