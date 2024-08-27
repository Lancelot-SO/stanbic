import React, { useCallback, useEffect, useState } from 'react'
import "./Table.css"

import DataTable from 'react-data-table-component'

import { GiGolfFlag } from "react-icons/gi";
import { IoMdStarOutline } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { GiPin } from "react-icons/gi";


import footerbanner from "../assets/footerbanner.png"
import sunny from "../assets/sunny.png";
import clearsky from "../assets/clearsky.png";
import rainy from "../assets/rainy.png";
import night_storm from "../assets/night_storm.png";

import { BiSearch } from "react-icons/bi";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";



import tablebanner from "../assets/tablebanner.png"
import field from "../assets/golfField.png"
import DatePickerComponent from '../components/DatePicker';

const Table = () => {

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

    const columns = [
        {
            name: "#",
            selector: row => row.position,
            sortable: true,
        },
        {
            name: "PLAYER",
            selector: row => row.player,
            sortable: true,
            width: '15%'
        },
        {
            name: "PAR",
            selector: row => row.par,
            sortable: true,
            cell: row => (
                <div style={{ color: row.par > 3 ? 'red' : 'black' }}>
                    {row.par}
                </div>
            ),
        },
        {
            name: "THRU",
            selector: row => row.thru,
            sortable: true,
        },
        {
            name: "TODAY",
            selector: row => row.today,
            sortable: true,
        },
        {
            name: "1",
            selector: row => row.one,
            sortable: true,
        },
        {
            name: "2",
            selector: row => row.second,
            sortable: true,
        },
        {
            name: "3",
            selector: row => row.three,
            sortable: true,
        },
        {
            name: "4",
            selector: row => row.four,
            sortable: true,
        },
        {
            name: "TOTAL",
            selector: row => row.total,
            sortable: true,
        },
    ];

    const data = [
        {
            id: 1,
            position: 1,
            player: "Jerry Sam",
            par: 4,
            thru: 2,
            today: 3,
            one: 11,
            second: 12,
            three: 13,
            four: 14,
            total: 70,
        },
        {
            id: 2,
            position: 2,
            player: "Blaise",
            par: 4,
            thru: 2,
            today: 3,
            one: 11,
            second: 12,
            three: 13,
            four: 14,
            total: 70,
        },
        {
            id: 3,
            position: 3,
            player: "Lancelot Hans",
            par: 4,
            thru: 2,
            today: 3,
            one: 11,
            second: 12,
            three: 13,
            four: 14,
            total: 70,
        },
        {
            id: 4,
            position: 4,
            player: "Legolas Shu",
            par: 4,
            thru: 2,
            today: 3,
            one: 11,
            second: 12,
            three: 13,
            four: 14,
            total: 70,
        },
        {
            id: 5,
            position: 5,
            player: "Jack Nicklaus",
            par: 4,
            thru: 2,
            today: 3,
            one: 11,
            second: 12,
            three: 13,
            four: 14,
            total: 70,
        },
        {
            id: 6,
            position: 6,
            player: "Arnold Palmer",
            par: 4,
            thru: 2,
            today: 3,
            one: 11,
            second: 12,
            three: 13,
            four: 14,
            total: 70,
        },
        {
            id: 7,
            position: 7,
            player: "Rory McIlroy",
            par: 4,
            thru: 2,
            today: 3,
            one: 11,
            second: 12,
            three: 13,
            four: 14,
            total: 70,
        },
        {
            id: 8,
            position: 8,
            player: "Jon Rahm",
            par: 4,
            thru: 2,
            today: 3,
            one: 11,
            second: 12,
            three: 13,
            four: 14,
            total: 70,
        },
        {
            id: 9,
            position: 9,
            player: "Jordan Spieth",
            par: 4,
            thru: 2,
            today: 3,
            one: 11,
            second: 12,
            three: 13,
            four: 14,
            total: 70,
        },
        {
            id: 10,
            position: 10,
            player: "Tiger Woods",
            par: 4,
            thru: 2,
            today: 3,
            one: 11,
            second: 12,
            three: 13,
            four: 14,
            total: 70,
        },
        {
            id: 11,
            position: 11,
            player: "Brooks Koepka",
            par: 4,
            thru: 2,
            today: 3,
            one: 11,
            second: 12,
            three: 13,
            four: 14,
            total: 70,
        },
        {
            id: 12,
            position: 12,
            player: "Yoomo Korku",
            par: 4,
            thru: 2,
            today: 3,
            one: 11,
            second: 12,
            three: 13,
            four: 14,
            total: 70,
        },
    ]

    const [records, setRecords] = useState(data);

    const handleFilter = (event) => {
        const newData = data.filter(row => {
            return row.player.toLowerCase().includes(event.target.value.toLowerCase());
        })
        setRecords(newData)
    }
    return (
        <div className='overflow-hidden'>
            <div className='overflow-hidden'>
                <div className='relative'>
                    <img src={tablebanner} alt='hero' className='object-cover h-[497px] md:h-full w-full' />
                    <div>
                        <p className='absolute top-[70%] left-[5%] md:top-[40%] md:left-[10%] w-[559px] h-[165px] font-bold text-[45px] leading-[55px] text-white'>
                            OUR TABLE
                        </p>
                    </div>
                </div>
            </div>

            <section>
                <div className="bg-green-700 w-full flex relative h-screen">
                    <div className="absolute top-0 right-0 h-full">
                        <img src={field} alt="field" className="h-full object-cover" />
                    </div>
                    <div className="glass__effect m-auto z-10 flex justify-center">
                        <div className='w-[1100px] max-h-[800px] bg-white overflow-y-scroll rounded-lg p-4'>
                            <div className='flex items-center justify-between mb-4'>
                                <div className='flex items-center gap-2 '>
                                    <GiGolfFlag /> GOLF
                                </div>
                                <DatePickerComponent />
                            </div>

                            <div className='md:w-[1000px] h-[100px] gap-[4px] flex flex-col items-center justify-center pl-10'>
                                <div className='hidden md:flex bg-[#eee] items-center justify-between w-full h-[44px] rounded-3xl px-4'>
                                    <IoMdStarOutline size={24} />
                                    <div className='w-[746px] h-[42px] flex items-center px-2 gap-2'>
                                        <BsFillPersonFill size={24} className='text-[#2F5491]' />
                                        <span>
                                            STANBIC ASANTEHENE GOLF TOURNAMENT
                                        </span>
                                        <GiPin size={24} className='text-[#2F5491]' />

                                    </div>
                                    <div>
                                        <span>Latest Edition</span>
                                    </div>
                                </div>
                                <div className='hidden md:flex bg-[#eee] items-center justify-between w-full h-[44px] rounded-3xl px-10'>
                                    <div className='flex gap-4'>
                                        <span>Prize money: $20,000,000</span>
                                        <span>Par: 70</span>
                                    </div>
                                    <div>
                                        <input
                                            type='text'
                                            onChange={handleFilter}
                                            placeholder='Search player...'
                                            className='p-[4px] rounded-3xl' />
                                    </div>
                                </div>
                                <div className='md:hidden flex'>
                                    <input
                                        type='text'
                                        onChange={handleFilter}
                                        placeholder='Search player...'
                                        className='p-[4px] rounded-3xl bg-slate-100' />
                                </div>
                            </div>

                            <div>
                                <DataTable
                                    columns={columns}
                                    data={records}
                                    fixedHeader
                                    pagination
                                >

                                </DataTable>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="relative mt-[150px] md:mt-0">
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

                </div>
            </section>

        </div>
    )
}

export default Table