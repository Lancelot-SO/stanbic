import React from 'react'
import gallerybg from "../assets/gallerybg.png"
import card1 from "../assets/card1.png"
import card2 from "../assets/card2.png"
import card3 from "../assets/card3.png"
import card4 from "../assets/card4.png"
import card5 from "../assets/card5.png"

import product from "../assets/product.png"
import product1 from "../assets/product1.png"
import product2 from "../assets/product2.png"
import product3 from "../assets/product3.png"
import product4 from "../assets/product4.png"
import product5 from "../assets/product5.png"
import product6 from "../assets/product6.png"
import product7 from "../assets/product7.png"



const Gallery = () => {
    return (
        <div>
            <img src={gallerybg} alt='head' className='w-full' />

            <div className='absolute flex top-[45%] left-[180px] flex-row '>
                <div className=''>
                    <h1 className='text-4xl font-extrabold mt-4 w-[812px] h-[136px] text-custom-blue text-[65px] leading-[68px]'>
                        OUR <br />
                        TOURNAMENT<br />
                        IMAGES
                    </h1>
                </div>
            </div>

            <section>
                <div className='w-[1320px] h-[648px] flex gap-8 mt-10 ml-20 mb-14'>
                    <div className='w-[648px] h-[648px]'>
                        <img src={card1} alt='card' className='h-full w-full' />
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <img src={card2} alt='card' className='w-[312px] h-[312px]' />
                        <img src={card3} alt='card' className='w-[312px] h-[312px]' />
                        <img src={card4} alt='card' className='w-[312px] h-[312px]' />
                        <img src={card5} alt='card' className='w-[312px] h-[312px]' />

                    </div>
                </div>
            </section>

            <section>
                <div className="flex items-center justify-center">
                    <h2 className='text-[32px] font-bold text-custom-blue'>All OUR IMAGES </h2>
                </div>

                <div className='mt-16 ml-[80px] w-[1320px] h-[985px]'>

                    <div className='flex gap-6 '>
                        <img src={product} alt='card' className='w-[312px] h-[400px]' />
                        <img src={product1} alt='card' className='w-[312px] h-[400px]' />
                        <img src={product2} alt='card' className='w-[312px] h-[400px]' />
                        <img src={product3} alt='card' className='w-[312px] h-[400px]' />
                    </div>

                    <div className='flex gap-6 mt-8'>
                        <img src={product4} alt='card' className='w-[312px] h-[400px]' />
                        <img src={product5} alt='card' className='w-[312px] h-[400px]' />
                        <img src={product6} alt='card' className='w-[312px] h-[400px]' />
                        <img src={product7} alt='card' className='w-[312px] h-[400px]' />
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Gallery