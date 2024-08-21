import React, { useCallback, useEffect, useState } from 'react'
import bgImg from "../assets/herobg.png"
import ball from "../assets/golfball.png"
import sponsor1 from "../assets/stanbic.png"
import sponsor2 from "../assets/stanbicIL.png"
import sponsor3 from "../assets/stanbicIM.png"
import sponsor4 from "../assets/royal.png"
import kingbg from "../assets/kingbg.png"
import shield from "../assets/shield.png"
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import ban from "../assets/ban.png"

import gh1 from "../assets/gh1.png"
import gh2 from "../assets/gh2.png"
import gh3 from "../assets/gh3.png"
import gh4 from "../assets/gh4.png"
import gh5 from "../assets/gh5.png"

import line from "../assets/line.png"
import side1 from "../assets/side1.png"
import side2 from "../assets/side2.png"


import { BsArrowRight } from "react-icons/bs";

import footerbanner from "../assets/footerbanner.png"
import sunny from "../assets/sunny.png";
import clearsky from "../assets/clearsky.png";
import rainy from "../assets/rainy.png";
import night_storm from "../assets/night_storm.png";

import { BiSearch } from "react-icons/bi";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";





const Home = () => {

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
        <div>
            <div className=''>
                <div className='relative'>
                    <img src={bgImg} alt='bg' className='object-cover w-full h-[600px]' />
                    <div className='absolute top-[20%] left-[10%] w-[558px] h-[427px] flex flex-col justify-center gap-3'>
                        <h3 className='w-[295px] h-[26px] text-[25px] leading-[26px] font-bold text-white'>
                            STANBIC-ASANTEHENE
                        </h3>
                        <h1 className='w-[483px] h-[95px] leading-[47px] text-[45px] font-black text-white'>
                            INVITATIONAL <br /> G<img src={ball} alt='golf ball' className='inline w-[38px] h-[36px]' />LF TOURNAMENT
                        </h1>
                        <p className='w-[429px] h-[69px] text-[15px] leading-[23px] font-normal text-white'>
                            From savings to checking accounts and innovative mobile apps, Stanbic bank helps you build a solid financial future.
                        </p>
                        <div className='w-[233px] h-[43px] bg-[#0033A1] flex items-center justify-center shadow-md'>
                            <button className='text-white cursor-pointer'>REGISTER HERE</button>
                        </div>
                    </div>
                </div>

            </div>

            <section>
                <div className='bg-[#00164E] w-full h-[174px] flex flex-col items-center justify-center gap-3'>
                    <p className='w-[471px] h-[29px] font-bold text-[24px] leading-[32px] text-white text-center'>OUR PROUD SPONSORS</p>
                    <div className='flex gap-6'>
                        <img src={sponsor1} alt='sponsor' />
                        <img src={sponsor2} alt='sponsor' />
                        <img src={sponsor3} alt='sponsor' />
                        <img src={sponsor4} alt='sponsor' />
                    </div>
                </div>
            </section>

            <section id='about'>
                <div>
                    <div className='relative'>
                        <img src={kingbg} alt='king' className='object-cover w-full' />
                        <div className='absolute top-[14%] left-[10%] w-[678px] h-[393px] flex flex-col gap-4'>
                            <h2 className='w-[555px] h-[82px] font-bold text-[30px] leading-[41px] text-white'>
                                Welcome to the 6th edition of the Otumfuo Golf Tournament
                            </h2>
                            <p className='w-[670px] h-[231px] font-normal leading-[29px] text-[17px] text-white'>
                                The 6th edition of the Otumfuo Invitational Golf Tournament Championship is back,
                                marking 25 years of collaboration between Stanbic Bank and His Royal Majesty,
                                Otumfuo Osei Tutu II. Come Saturday, 31st August, the one day tournament,
                                presents the perfect opportunity for golfing enthusiasts and their families to tee up,
                                network, and unwind.The Royal Golf Course boasts 93 acres of greenery, with 72 pars.
                            </p>
                            <div className='w-[198px] h-[43px] bg-transparent border border-white flex items-center justify-center shadow-md'>
                                <button className='text-white cursor-pointer'>Register</button>
                            </div>
                        </div>
                        <img src={shield} alt='shield' className='absolute top-[14%] left-[64%] w-[404px] h-[482px]' />
                    </div>
                </div>
            </section>


            <section id='itinerary'>
                <div className='flex flex-col items-center justify-center '>
                    <div className='flex flex-col items-center w-[1168px] h-[1745px] bg-[#EBF0FF] gap-6'>
                        <div className='flex flex-col items-center'>
                            <p className='w-[499px] h-[89px] text-center font-bold text-[60px] text-[#0033AA]'>
                                OUR ITINERARY
                            </p>
                            <p className='w-[760px] h-[130px] text-[14px] leading-[32px] font-bold text-center'>
                                Welcome to the Annual Golf Championship, a thrilling three-day event filled with
                                competition, camaraderie, and unforgettable moments on the green! Join us from
                                August 30 to September 1, 2024, as we showcase top talent.
                                Each day will feature exciting rounds of play, networking opportunities,
                                and evening festivities. Prepare for an exhilarating experience that combines skill,
                                strategy, and sportsmanship. Let the games begin!.
                            </p>
                        </div>

                        <div className="relative mt-[50px]">
                            <div className="flex">
                                <img src={img1} alt="itinerary" className="w-[484px] h-[323px]" />
                                <div className="relative w-[570px]">
                                    <div className="absolute top-[20px] left-[-5%] bg-[#0033AA] shadow-md w-[600px] h-[333px] flex flex-col items-center pt-12">
                                        <div className='w-[386px] h-[75px]'>
                                            <p className='font-bold text-[20px] leading-[39px] text-white'>
                                                FRIDAY,
                                            </p>
                                            <div className='mb-6'>
                                                <div className='flex items-center mb-2 h-[20px]'>
                                                    <h3 className='font-bold text-[39px] leading-[39px] text-white'>30TH</h3>
                                                    <p className='text-[16px] font-bold pt-4 text-white'>-DEPARTURE TO KUMASI</p>
                                                </div>
                                            </div>
                                            <ul className="text-white list-disc list-inside mb-8 w-[400px]">
                                                <li className=' text-[15px] leading-[26px] opacity-65'>FLIGHT FROM ACCRA TO KUMASI</li>
                                                <li className=' text-[15px] leading-[26px] opacity-65'>TRANSPORTATION TO YOUR HOTEL WILL BE PROVIDED</li>
                                                <li className=' text-[15px] leading-[26px] opacity-65'>DINNER IS AT YOUR DEPARTURE</li>
                                            </ul>


                                            <p className='text-white'>Transporting ...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative mt-[150px]">
                            <div className="flex">
                                <div className="relative w-[570px]">
                                    <div className="absolute top-[20px] left-0 bg-[#0033AA] shadow-md w-[600px] h-[333px] flex flex-col items-center pt-12">
                                        <div className='w-[386px] h-[73px]'>
                                            <div className='font-bold text-[20px] leading-[39px] text-white'>
                                                Saturday,
                                            </div>
                                            <div className='mb-10'>
                                                <div className='flex items-center mb-2 h-[30px]'>
                                                    <h3 className='font-bold text-[39px] leading-[39px] text-white'>31ST</h3>
                                                    <p className='text-[16px] font-bold pt-8 text-white'>-Ceremonial Tee Off and <br />Tournament Day</p>
                                                </div>
                                            </div>
                                            <ul className="text-white list-disc list-inside mb-8 w-[400px]">
                                                <li className=' text-[15px] leading-[26px] opacity-65'>6:30AM - HOLES ONE AND SEVEN</li>
                                                <li className=' text-[15px] leading-[26px] opacity-65'>BREAKFAST AND LUNCH WILL BE PROVIDED</li>
                                                <li className=' text-[15px] leading-[26px] opacity-65'>AWARDS CEREMONY</li>
                                                <hr className='w-[302px] h-[1px] bg-[#CDCDCD] my-1'></hr>
                                                <li className=' text-[15px] leading-[26px] opacity-65'>7: 30PM - DINNER(DRESS CODE :SMART CASUAL)</li>
                                                <li className=' text-[15px] leading-[26px] opacity-65'>LANCASTER HOTEL</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <img src={img2} alt="itinerary" className="w-[484px] h-[323px]" />

                            </div>
                        </div>

                        <div className="relative mt-[150px]">
                            <div className="flex">
                                <img src={img1} alt="itinerary" className="w-[484px] h-[323px]" />
                                <div className="relative w-[570px]">
                                    <div className="absolute top-[20px] left-[-5%] bg-[#0033AA] shadow-md w-[600px] h-[333px] flex flex-col items-center pt-12">
                                        <div className='w-[386px] h-[75px]'>
                                            <p className='font-bold text-[20px] leading-[39px] text-white'>
                                                SUNDAY,
                                            </p>
                                            <div className='mb-6'>
                                                <div className='flex items-center mb-2 h-[20px]'>
                                                    <h3 className='font-bold text-[39px] leading-[39px] text-white'>1ST</h3>
                                                    <p className='text-[16px] font-bold pt-4 text-white'>-DEPARTURE TO Accra</p>
                                                </div>
                                            </div>
                                            <ul className="text-white list-disc list-inside mb-8 w-[400px]">
                                                <li className=' text-[15px] leading-[26px] opacity-65'>BASED ON YOUR FLIGHT SCHEDULE,PICKUPS FROM THE HOTEL WILL BE arranged 2.5 before departure</li>
                                            </ul>

                                            <p className='text-white'>Transporting ...</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div className='relative'>
                    <img src={ban} alt='banner' className='object-cover w-full' />
                    <div className='w-[344px] h-[94px] absolute top-[50%] left-[12%] text-white'>
                        <p className='text-[45px] h-[70px] leading-[47px] font-black'>
                            NOT <br /> C<img src={ball} alt='golf ball' className='inline w-[38px] h-[36px]' />MPETING
                        </p>
                        <p className='text-[16px] leading-[99px] font-bold'>Come and explore our tourist destinations.</p>
                    </div>
                </div>
            </section>


            <section>
                <div className="flex flex-wrap gap-8 px-[220px] bg-[#F4F4F4] py-[100px]">
                    <div className="relative rounded-lg overflow-hidden w-[40%]">
                        <img
                            src={gh1}
                            alt="Owabi Wildlife Sanctuary"
                            className="w-full h-[500px] object-cover"
                        />
                        <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black via-black to-transparent bg-opacity-50 text-white">
                            <h2 className="text-2xl font-bold">Owabi Wildlife Sanctuary</h2>
                            <p className="text-lg">
                                Its unique 47 holes layout, comprising of a trio of testing nine hole
                                circuit
                            </p>
                        </div>
                    </div>

                    <div className="w-[55%] grid grid-cols-2 gap-4">
                        <div className="relative rounded-lg overflow-hidden bg-white shadow-lg">
                            <img
                                src={gh2}
                                alt="Zoological Gardens"
                                className="w-[304px] h-[202px] object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold">Zoological Gardens</h3>
                            </div>
                        </div>

                        <div className="relative rounded-lg overflow-hidden bg-white shadow-lg">
                            <img
                                src={gh3}
                                alt="Okomfo Anokye Sword"
                                className="w-[304px] h-[202px] object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold">Okomfo Anokye Sword</h3>
                            </div>
                        </div>

                        <div className="relative rounded-lg overflow-hidden bg-white shadow-lg">
                            <img
                                src={gh4}
                                alt="Kejetia Market"
                                className="w-[304px] h-[202px] object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold">Kejetia Market</h3>
                            </div>
                        </div>

                        <div className="relative rounded-lg overflow-hidden bg-white shadow-lg">
                            <img
                                src={gh5}
                                alt="Bonwire Kente"
                                className="w-[304px] h-[202px] object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold">Bonwire Kente</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section>
                <div className='flex items-center justify-center'>
                    <div className='w-[1168px] h-[1130px]'>
                        <div className='py-[100px]'>
                            <img src={line} alt='line' />
                        </div>
                        <div>
                            <div className='flex gap-10 items-center'>
                                <img src={side1} alt='side' />
                                <div>
                                    <h2 className='w-[241px] h-[82px] font-bold leading-[41px] text-[34px] mb-2'>Don't forget the Essentials</h2>
                                    <ul className='text-[#666C89] list-decimal w-[477px] h-[126px] font-medium leading-[21px] text-[14px] pl-3'>
                                        <li>Sun protection - hats, shades, fans</li>
                                        <li>Power bank/Charger</li>
                                        <li>Healthy Snacks - granola, trail mix, etc</li>
                                        <li>First Aid Materials</li>
                                        <li>Comfortable shoes (for non-players)</li>
                                        <li>Golf equipment - clubs, balls, tees.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='flex gap-10 items-center mt-10'>
                                <div>
                                    <h2 className='w-[241px] h-[82px] font-bold leading-[41px] text-[34px] mb-2'>6 Fun Facts</h2>
                                    <ul className='text-[#1C1F35] w-[477px] h-[126px] font-medium leading-[21px] text-[14px]'>
                                        <li className='mb-2 flex items-center gap-2'>
                                            <BsArrowRight size={20} />
                                            Golf courses used to have anywhere from 5 to 22 holes
                                            per game!
                                        </li>
                                        <li className='mb-2 flex items-center gap-2'>
                                            <BsArrowRight size={40} />
                                            Golf is largely believed to have originated in Scotland, but some
                                            historians believe it takes influence from similar ancient Roman and
                                            Chinese games
                                        </li>
                                        <li className='mb-2 flex items-center gap-2'>
                                            <BsArrowRight size={40} />
                                            The word golf originated from the Dutch word “kolf” or “kolve”, which
                                            then became the Scottish word “gouff” and “goff”
                                        </li>
                                        <li className='mb-2 flex items-center gap-2'>
                                            <BsArrowRight size={20} />
                                            Golf was originally played by shepherds to pass the time.</li>
                                        <li className='mb-2 flex items-center gap-2'>
                                            <BsArrowRight size={36} />
                                            Golf holes do not stay in one place. But are moved regularly to keep
                                            the greens in good condition.</li>
                                        <li className='flex items-center gap-2'>
                                            <BsArrowRight size={20} />
                                            The chances of an average golfer to sink a hole-in-one are 1 in 12,000.</li>
                                    </ul>
                                </div>

                                <img src={side2} alt='side' className='mt-[115px]' />

                            </div>
                        </div>
                    </div>
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

export default Home