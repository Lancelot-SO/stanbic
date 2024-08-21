import React, { useState } from 'react'
import "./Table.css"

import DataTable from 'react-data-table-component'

import { GiGolfFlag } from "react-icons/gi";
import { IoMdStarOutline } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { GiPin } from "react-icons/gi";





import tablebanner from "../assets/tablebanner.png"
import field from "../assets/golfField.png"
import DatePickerComponent from '../components/DatePicker';

const Table = () => {

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
            player: "Legolas",
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
            player: "Player 1",
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
            player: "Player 1",
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
            player: "Player 1",
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
            player: "Player 1",
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
            player: "Player 1",
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
            player: "Player 1",
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
            player: "Player 1",
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
            player: "Player 1",
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
        <div>
            <div>
                <div className='relative'>
                    <img src={tablebanner} alt='hero' className='object-cover w-full' />
                    <div>
                        <p className='absolute top-[40%] left-[10%] w-[559px] h-[165px] font-bold text-[45px] leading-[55px] text-white'>
                            Our Table
                        </p>
                    </div>
                </div>
            </div>

            <section>
                <div className="bg-green-700 flex relative h-screen">
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

                            <div className='w-[1000px] h-[100px] gap-[4px] flex flex-col items-center justify-center pl-10'>
                                <div className='flex bg-[#eee] items-center justify-between w-full h-[44px] rounded-3xl px-4'>
                                    <IoMdStarOutline size={24} />
                                    <div className='w-[746px] h-[42px] flex items-center px-2 gap-2'>
                                        <BsFillPersonFill size={24} className='text-[#2F5491]' />
                                        <span>
                                            PGA TOUR FedEx St. Jude Championship (USA)
                                        </span>
                                        <GiPin size={24} className='text-[#2F5491]' />

                                    </div>
                                    <div>
                                        <span>Round 4</span>
                                    </div>
                                </div>
                                <div className='flex bg-[#eee] items-center justify-between w-full h-[44px] rounded-3xl px-10'>
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

        </div>
    )
}

export default Table