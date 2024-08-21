import React from 'react'

import tablebanner from "../assets/tablebanner.png"

const Table = () => {
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

        </div>
    )
}

export default Table