import React from 'react';
import gallerybg from "../assets/gallerybg.png";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import card5 from "../assets/card5.png";
import product from "../assets/product.png";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";

const Gallery = () => {
    return (
        <div className='overflow-hidden'>
            <img src={gallerybg} alt='head' className='w-full' />

            <div className='absolute flex lg:top-[45%] top-[80px] lg:left-[180px] left-4 flex-row'>
                <div className=''>
                    <h1 className='lg:text-4xl text-2xl font-extrabold mt-4 lg:w-[812px] w-full lg:h-[136px] text-custom-blue lg:text-[65px] lg:leading-[68px] leading-8'>
                        OUR <br />
                        TOURNAMENT<br />
                        IMAGES
                    </h1>
                </div>
            </div>

            <section className='flex justify-center'>
                <div className='lg:w-[1320px] w-full lg:h-[648px] flex lg:flex-row flex-col gap-8 mt-10 mb-14'>
                    <div className='lg:w-[648px] w-full lg:h-[648px]'>
                        <img src={card1} alt='card' className='lg:h-full h-auto w-full' />
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <img src={card2} alt='card' className='w-[312px] lg:h-[312px] h-auto' />
                        <img src={card3} alt='card' className='w-[312px] lg:h-[312px] h-auto' />
                        <img src={card4} alt='card' className='w-[312px] lg:h-[312px] h-auto' />
                        <img src={card5} alt='card' className='w-[312px] lg:h-[312px] h-auto' />
                    </div>
                </div>
            </section>

            <section className='flex flex-col justify-center'>
                <div className="flex items-center justify-center">
                    <h2 className='text-[32px] font-bold text-custom-blue'>ALL OUR IMAGES</h2>
                </div>

                <div className='mt-16 flex lg:ml-[80px] flex-col  items-center justify-center lg:w-[1320px] w-full h-full lg:h-[985px]'>
                    <div className='flex gap-6 lg:flex-row flex-col'>
                        <img src={product} alt='card' className='w-[312px] h-[400px]' />
                        <img src={product1} alt='card' className='w-[312px] h-[400px]' />
                        <img src={product2} alt='card' className='w-[312px] h-[400px]' />
                        <img src={product3} alt='card' className='w-[312px] h-[400px]' />
                    </div>

                    <div className='flex gap-6 mt-8 lg:flex-row flex-col'>
                        <img src={product4} alt='card' className='w-[312px] h-[400px]' />
                        <img src={product5} alt='card' className='w-[312px] h-[400px]' />
                        <img src={product6} alt='card' className='w-[312px] h-[400px]' />
                        <img src={product7} alt='card' className='w-[312px] h-[400px]' />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Gallery;
