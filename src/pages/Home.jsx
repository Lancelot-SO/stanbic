import React, { useCallback, useEffect, useState } from 'react'
import bgImg from "../assets/herobg.png"
import heromobile from "../assets/heromobile.png"
import ball from "../assets/golfball.png"
// import sponsor1 from "../assets/stanbic.png"
// import sponsor2 from "../assets/stanbicIL.png"
// import sponsor3 from "../assets/stanbicIM.png"
// import sponsor4 from "../assets/royal.png"
import kingbg from "../assets/kingbg.png"
import shield from "../assets/shield.png"
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import ban from "../assets/ban.png"

import gh1 from "../assets/gh1.png"
import gh2 from "../assets/gh2.png"
import gh3 from "../assets/gh3.png"
import gh4 from "../assets/gh4.png"
import gh5 from "../assets/gh5.png"

import line from "../assets/line.png"
import side1 from "../assets/side1.png"
import side2 from "../assets/side2.png"


// import { BsArrowRight } from "react-icons/bs";

import footerbanner from "../assets/footerbanner.png"
import sunny from "../assets/sunny.png";
import clearsky from "../assets/clearsky.png";
import rainy from "../assets/rainy.png";
import night_storm from "../assets/night_storm.png";

import { BiSearch } from "react-icons/bi";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import RegisterModal from '../components/RegisterModal'

import AOS from "aos";
import "aos/dist/aos.css";

import { Typewriter } from 'react-simple-typewriter'




const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);


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

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
        AOS.refresh();
    }, []);

    return (
        <div className='overflow-hidden'>
            <div className=''>
                <div className='relative'>
                    <img src={bgImg} alt='bg' className='object-cover w-full h-[577px] md:h-[600px] hidden md:flex' />
                    <img src={heromobile} alt='hero' className='object-cover w-full h-[576px] md:hidden flex' />
                    <div className='absolute md:top-[20%] top-[55%] left-4 small:left-10 md:left-[10%] md:w-[558px] md:h-[427px] flex flex-col justify-center gap-1'>
                        <h3 className='w-[330px] h-[26px] text-[16px] leading-[26px] font-bold text-white md:text-[25px]'>
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
                        <h1 data-aos="fade-right" className='w-full md:w-[483px] h-auto md:h-[95px] leading-[25px] md:leading-[47px] text-[20px] md:text-[45px] font-black text-white'>
                            INVITATIONAL <br /> G
                            <img src={ball} alt='golf ball' className='inline w-[25px] h-[25px] md:w-[38px] md:h-[36px]' />LF TOURNAMENT
                        </h1>
                        <p data-aos="fade-right" className='w-[290px] md:w-[429px] h-auto md:h-[69px] text-[12px] md:text-[15px] leading-[20px] md:leading-[23px] font-normal text-white'>
                            Honouring tradition, building connections and <br />exemplifying excellence.<br />
                            <b>The Royal Golf Course, Kumasi</b>
                        </p>
                        <span className='text-white font-bold'>Saturday, August 31st, 2024</span>
                        <div className='w-[200px] h-[40px] md:w-[233px] md:h-[43px] bg-[#0033A1] flex items-center justify-center shadow-md'>
                            <button onClick={() => setIsModalOpen(true)} className='text-white cursor-pointer'>REGISTER HERE</button>
                        </div>
                        {isModalOpen && <RegisterModal onClose={() => setIsModalOpen(false)} />}
                    </div>
                </div>
            </div>

            {/* <section>
                <div className='bg-[#00164E] w-full h-[225px] md:h-[174px] flex flex-col items-center justify-center gap-3'>
                    <p className='w-[471px] h-[29px] font-bold md:text-[24px] text-[22px] leading-[32px] text-white text-center'>
                        OUR PROUD SPONSORS
                    </p>
                    <div className='grid grid-cols-2 gap-4 px-2 md:px-0 md:flex md:gap-6'>
                        <img src={sponsor1} alt='sponsor' className=' md:max-w-none' />
                        <img src={sponsor2} alt='sponsor' className=' md:max-w-none' />
                        <img src={sponsor3} alt='sponsor' className=' md:max-w-none' />
                        <img src={sponsor4} alt='sponsor' className=' md:max-w-none' />
                    </div>
                </div>

            </section> */}

            <section id='about'>
                <div>
                    <div className='relative flex flex-col md:flex-row items-center'>
                        <img src={kingbg} alt='king' className='object-cover w-full h-[651px] md:h-auto' />
                        <div data-aos="zoom-out-down" className='absolute md:top-[4%] lg:top-[14%] top-[4%] md:left-[10%] w-[400px] h-auto md:h-[240px] flex flex-col gap-4 items-center md:items-start'>
                            <h2 className='w-full md:w-[630px] h-[70px] md:h-[105px] lg:h-[120px] small:pl-[24px] lg:pl-0 md:pl-0 font-black text-[20px] md:text-[30px] leading-[25px] md:leading-[41px] text-white text-left lg:text-left'>
                                Welcome to the 2nd Stanbic-Asantehene Invitational Golf Tournament
                            </h2>
                            <p className='w-[90%] md:mb-10 md:w-[670px] h-[176px] md:h-[231px] font-normal leading-[22px] md:leading-[29px] text-[14px] md:text-[17px] text-white text-left'>
                                The 2nd edition of the Stanbic-Asantehene Invitational Golf Tournament is back,
                                This event marks 25 years of collaboration between Stanbic Bank and His Royal Majesty,
                                Otumfuo Osei Tutu II. Come Saturday, 31st August, the one-day tournament presents the
                                perfect opportunity for golfing enthusiasts and their families to tee up, network, and
                                unwind. The Royal Golf Course boasts 93 acres of greenery, with 72 pars.
                            </p>
                            <div className='hidden w-[150px] md:w-[198px] h-[40px] md:p-4 bg-transparent border border-white items-center justify-center shadow-md'>
                                <button onClick={() => setIsModalOpen(true)} className='text-white cursor-pointer'>Register</button>
                            </div>
                            {isModalOpen && <RegisterModal onClose={() => setIsModalOpen(false)} />}
                        </div>
                        <img src={shield} alt='shield' data-aos="zoom-in" className='absolute lg:top-[14%] top-[50%] lg:left-[64%] w-[200px] h-[240px] lg:w-[404px] lg:h-[482px] mt-4 lg:mt-0 md:hidden lg:flex' />
                    </div>

                </div>
            </section>


            <section id='itinerary'>
                <div className='flex flex-col items-center justify-center pt-6 md:pt-0'>
                    <div className='flex flex-col items-center w-[1168px] md:h-[1745px] h-[1900px] bg-[#EBF0FF] gap-6'>
                        <div className='flex flex-col items-center'>
                            <p className='w-[520px] md:h-[89px] text-left font-bold text-[20px] md:text-[60px] text-[#0033AA] pl-[77px] lg:pl-0 md:pl-0'>
                                OUR ITINERARY
                            </p>
                            <p className='w-[361px] md:w-[760px] md:h-[130px] h-[178px] text-[14px] keading-[22px] md:leading-[32px] text-left'>
                                Join us on
                                31st August 2024, as we showcase top talent.
                                The day will feature exciting rounds of play, networking opportunities,
                                and evening festivities. Prepare for an exhilarating experience that combines skill,
                                strategy, and sportsmanship. Let the games begin!.
                            </p>
                        </div>

                        <div className="relative mt-[50px]">
                            <div className="flex md:flex-row flex-col">
                                <img src={img1} alt="itinerary" className="md:w-[484px] rounded-lg md:rounded-none md:h-[323px] w-[321px] h-[241px]" />
                                <div className="relative md:w-[570px]">
                                    <div className="absolute top-[-30px] md:top-[20px] rounded-lg md:rounded-none md:left-[-5%] left-[10%] bg-[#0033AA] shadow-md w-[260px] md:w-[600px] h-[200px] md:h-[333px] flex flex-col pl-[20px] md:pl-[60px] md:items-center md:pt-20 pt-6">
                                        <div className='w-[85%] md:w-[386px] h-auto'>
                                            <p className='font-bold text-[12px] md:text-[20px] leading-[24px] md:leading-[39px] text-white'>
                                                FRIDAY,
                                            </p>
                                            <div className='mb-4 md:mb-6'>
                                                <div className='flex items-center mb-2 h-auto md:h-[20px]'>
                                                    <h3 className='font-bold text-[20px] md:text-[39px] leading-[30px] md:leading-[39px] text-white'>30TH</h3>
                                                    <p className='text-[12px] md:text-[16px] font-bold pt-2 md:pt-4 text-white'>-DEPARTURE TO KUMASI</p>
                                                </div>
                                            </div>
                                            <ul className="text-white list-disc list-inside mb-2 md:mb-8 w-full md:w-[400px]">
                                                <li className='text-[10px] md:text-[15px] leading-[22px] md:leading-[26px] opacity-65'>FLIGHT TO KUMASI</li>
                                                <li className='text-[10px] md:text-[15px] leading-[22px] md:leading-[26px] opacity-65'>HOTEL TRANSPORTATION PROVIDED</li>
                                                {/* <li className='text-[10px] md:text-[15px] leading-[22px] md:leading-[26px] opacity-65'>DINNER AT DEPARTURE</li> */}
                                            </ul>
                                            {/* <p className='text-[10px] md:text-[15px] leading-[22px] md:leading-[26px] text-white'>Transporting...</p> */}
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div className="relative md:mt-[150px] mt-[200px]">
                            <div className="flex md:flex-row flex-col-reverse">
                                <div className="relative md:w-[570px]">
                                    <div className="absolute top-[-30px] md:top-[20px] rounded-lg md:rounded-none md:left-[-5%] left-[5%] bg-[#0033AA] shadow-md w-[90%] md:w-[600px] h-auto md:h-[333px] flex flex-col items-center pt-8 md:pt-12 pl-[30px] md:pl-0">
                                        <div className='w-[90%] md:w-[386px] h-auto'>
                                            <div className='font-bold text-[14px] md:text-[20px] leading-[16px] md:leading-[39px] text-white'>
                                                Saturday,
                                            </div>
                                            <div className='mb-6 md:mb-10'>
                                                <div className='flex items-center mb-2 h-auto md:h-[30px]'>
                                                    <h3 className='font-bold text-[20px] md:text-[39px] leading-[30px] md:leading-[39px] text-white'>31ST</h3>
                                                    <p className='text-[12px] md:text-[16px] font-bold pt-4 md:pt-8 text-white'>
                                                        -Ceremonial Tee Off and <br />Tournament Day
                                                    </p>
                                                </div>
                                            </div>
                                            <ul className="text-white list-disc list-inside mb-6 md:mb-8 w-full md:w-[400px]">
                                                <li className='text-[10px] md:text-[15px] leading-[20px] md:leading-[26px] opacity-65'>6:30AM - HOLES ONE AND SEVEN</li>
                                                <li className='text-[10px] md:text-[15px] leading-[20px] md:leading-[26px] opacity-65'>BREAKFAST AND LUNCH WILL BE PROVIDED</li>
                                                <li className='text-[10px] md:text-[15px] leading-[20px] md:leading-[26px] opacity-65'>AWARDS CEREMONY</li>
                                                <hr className='w-[200px] md:w-[302px] h-[1px] bg-[#CDCDCD] my-1'></hr>
                                                <li className='text-[10px] md:text-[15px] leading-[20px] md:leading-[26px] opacity-65'>7:30PM - DINNER (DRESS CODE: SMART CASUAL)</li>
                                                <li className='text-[10px] md:text-[15px] leading-[20px] md:leading-[26px] opacity-65'>LANCASTER HOTEL</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                                <img src={img2} alt="itinerary" className="md:w-[484px] rounded-lg md:rounded-none md:h-[323px] w-[321px] h-[241px]" />

                            </div>
                        </div>

                        <div className="relative md:mt-[150px] mt-[280px]">
                            <div className="flex md:flex-row flex-col">
                                <img src={img3} alt="itinerary" className="md:w-[484px] rounded-lg md:rounded-none md:h-[323px] w-[321px] h-[241px]" />
                                <div className="relative md:w-[570px]">
                                    <div className="absolute top-[-20px] md:top-[20px] rounded-lg md:rounded-none md:left-[-5%] left-[5%] bg-[#0033AA] shadow-md w-[90%] md:w-[600px] h-auto md:h-[333px] flex flex-col items-center pt-8 md:pt-20 pb-2 md:pb-0">
                                        <div className='w-[90%] md:w-[386px] h-auto'>
                                            <p className='font-bold text-[14px] md:text-[20px] leading-[26px] md:leading-[39px] text-white'>
                                                SUNDAY,
                                            </p>
                                            <div className='mb-4 md:mb-6'>
                                                <div className='flex items-center mb-2 h-auto md:h-[20px]'>
                                                    <h3 className='font-bold text-[20px] md:text-[39px] leading-[30px] md:leading-[39px] text-white'>1ST</h3>
                                                    <p className='text-[12px] md:text-[16px] font-bold pt-4 md:pt-4 text-white'>-DEPARTURE TO Accra</p>
                                                </div>
                                            </div>
                                            <ul className="text-white list-disc list-inside mb-6 md:mb-8 w-full md:w-[400px]">
                                                <li className='text-[10px] md:text-[15px] leading-[20px] md:leading-[26px] opacity-65'>
                                                    BASED ON YOUR FLIGHT SCHEDULE, PICKUPS FROM THE HOTEL WILL BE ARRANGED 2.5 HOURS BEFORE DEPARTURE
                                                </li>
                                            </ul>
                                            {/* <p className='text-white text-[10px] md:text-[15px]'>Transporting ...</p> */}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div className='flex items-center justify-center'>
                    <div className='w-[1168px] md:h-[1130px]'>
                        <div className='md:py-[100px] py-[50px]'>
                            <img src={line} alt='line' />
                        </div>
                        <div>
                            <div className='flex md:flex-row flex-col gap-10 items-center'>
                                <img src={side1} alt='side' className='w-[361px] md:w-full mx-4 md:mx-0 rounded-lg' />
                                <div className='pl-[200px] md:pl-0'>
                                    <h2 className='w-[241px] lg:h-[82px] md:h-[82px] font-bold lg:leading-[41px] leading-6 md:text-[34px] text-[20px] lg:text-[34px] mb-2'>Don't forget the Essentials</h2>
                                    <ul className='text-[#666C89] list-decimal w-[477px] h-[126px] font-medium leading-[21px] text-[14px] pl-3'>
                                        <li>Golf Kit</li>
                                        <li>⁠Sun glasses</li>
                                        <li>Sunscreen</li>
                                        <li>phone chargers/ power bank</li>
                                        <li>⁠Smart casual clothing</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='flex md:flex-row flex-col-reverse gap-10 items-center mb-12'>
                                <div className='pl-[10px] md:pl-[20px]'>
                                    <h2 className='w-[241px] lg:h-[72px] font-bold leading-[41px] lg:text-[34px] text-[20px] mb-2'>6 Fun Facts</h2>
                                    <ul className="text-[#1C1F35] list-disc list-inside  lg:w-[477px] w-[400px] md:h-[160px] font-medium leading-[21px] md:text-[14px]">
                                        <li className="mb-4">
                                            Ghana has a rich golf history: Golf was introduced to Ghana in 1905, making it one of the oldest golfing countries in Africa.
                                        </li>
                                        <li className="mb-4">
                                            Unique hazards: Ghanaian golf courses feature unique hazards like mango trees, tropical flowers, and even monkeys!
                                        </li>
                                        <li className="mb-4">
                                            Ghana has produced talented local golf heroes like Kojo Kyei, who won the 2019 Ghana Open, inspiring a new generation of local golfers.
                                        </li>
                                        <li className="mb-4">
                                            Golf was the first sport played on the moon.
                                        </li>
                                        <li className="mb-4">
                                            Women’s golf began on New Year’s Day of 1811 in Musselburgh, Scotland.
                                        </li>
                                        <li className="">
                                            The golf term "caddie" comes from the word Cadet.
                                        </li>
                                    </ul>


                                </div>

                                <img src={side2} alt='side' className='mt-[115px]' />

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='relative'>
                    <img src={ban} alt='banner' className='object-cover h-[310px] md:h-full w-full mt-8' />
                    <div className='w-[344px] h-[94px] absolute top-[45%] left-[12%] text-white'>
                        <p className='md:text-[45px] text-[28px] h-[65px] md:leading-[47px] leading-[30px] font-black'>
                            NOT <br /> C<img src={ball} alt='golf ball' className='inline w-[38px] h-[36px]' />MPETING?
                        </p>
                        <p className='md:text-[16px] text-[14px] md:leading-[99px] md:font-bold'>Come and explore our tourist destinations.</p>
                    </div>
                </div>
            </section>


            <section>
                <div className="flex flex-col md:flex-row gap-8 lg:px-[220px] px-0 bg-[#F4F4F4] py-4">
                    <div className="relative rounded-lg overflow-hidden md:w-[100%] lg:w-[50%] lg:flex-row">
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

                    <div className="px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative rounded-lg overflow-hidden bg-white shadow-lg md:w-[100%]">
                            <img
                                src={gh2}
                                alt="Zoological Gardens"
                                className=" w-full h-[202px] object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-normal lg:font-bold md:font-bold">Zoological Gardens</h3>
                            </div>
                        </div>

                        <div className="relative rounded-lg overflow-hidden bg-white shadow-lg">
                            <img
                                src={gh3}
                                alt="Okomfo Anokye Sword"
                                className=" w-full h-[202px] object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-normal lg:font-bold md:font-bold">Okomfo Anokye Sword</h3>
                            </div>
                        </div>

                        <div className="relative rounded-lg overflow-hidden bg-white shadow-lg">
                            <img
                                src={gh4}
                                alt="Kejetia Market"
                                className=" w-full h-[202px] object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-normal lg:font-bold md:font-bold">Kejetia Market</h3>
                            </div>
                        </div>

                        <div className="relative rounded-lg overflow-hidden bg-white shadow-lg">
                            <img
                                src={gh5}
                                alt="Bonwire Kente"
                                className=" w-full h-[202px] object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-normal lg:font-bold md:font-bold">Bonwire Kente</h3>
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