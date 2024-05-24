import React, { useState } from 'react';
import gallerybg from "../assets/gallerybg.png";
import cardmain from "../assets/mainCard.png";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.jpg";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import product9 from "../assets/product9.png";
import product10 from "../assets/product10.png";
import product11 from "../assets/product11.png";
import product12 from "../assets/product12.png";
import product13 from "../assets/product13.png";
import product14 from "../assets/product14.png";
import product15 from "../assets/product15.jpg";
import product16 from "../assets/product16.png";
import product17 from "../assets/product17.png";
import product18 from "../assets/product18.png";
import product19 from "../assets/product19.png";
import product20 from "../assets/product20.png";
import product21 from "../assets/product21.png";
import product22 from "../assets/product22.png";
import product23 from "../assets/product23.jpg";
import product24 from "../assets/product24.jpg";


const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className='overflow-hidden'>
            <img src={gallerybg} alt='head' className='w-full' />

            <div className='absolute flex lg:top-[45%] md:top-[20%] top-[80px] lg:left-[180px] left-4 flex-row'>
                <div className=''>
                    <h1 className='lg:text-4xl text-2xl font-extrabold mt-4 lg:w-[812px] w-full lg:h-[136px] text-custom-blue lg:text-[65px] md:text-[40px] md:leading-[40px] lg:leading-[68px] leading-8'>
                        ENJOY THE<br />
                        highlights of<br />
                        the day
                    </h1>
                </div>
            </div>

            <section className='flex justify-center'>
                <div className='lg:w-[1320px] w-full lg:h-[648px] flex lg:flex-row flex-col gap-8 mt-10 mb-14'>
                    <div className='lg:w-[648px] w-full lg:h-[648px]'>
                        <img src={cardmain} alt='card' className='lg:h-full h-auto w-full cursor-pointer' onClick={() => openModal(cardmain)} />
                    </div>
                    <div className='grid grid-cols-2 gap-4 md:items-center md:place-items-center'>
                        <img src={card1} alt='card' className='w-[312px] lg:h-[312px] h-auto cursor-pointer' onClick={() => openModal(card1)} />
                        <img src={card2} alt='card' className='w-[312px] lg:h-[312px] h-auto cursor-pointer' onClick={() => openModal(card2)} />
                        <img src={card3} alt='card' className='w-[312px] lg:h-[312px] h-auto cursor-pointer' onClick={() => openModal(card3)} />
                        <img src={card4} alt='card' className='w-[312px] lg:h-[312px] h-auto cursor-pointer' onClick={() => openModal(card4)} />
                    </div>
                </div>
            </section>

            <section className='flex flex-col justify-center'>
                <div className="flex items-center justify-center">
                    <h2 className='text-[32px] font-bold text-custom-blue'>ALL OUR IMAGES</h2>
                </div>

                <div className='mt-16 flex lg:ml-[80px] flex-col  items-center justify-center lg:w-[1320px] w-full h-full'>
                    <div className='flex gap-6 lg:flex-row flex-col md:flex-row md:flex-wrap md:items-center md:justify-center'>
                        <img src={product1} alt='card' className='w-[316px] h-[400px] md:w-[290px] cursor-pointer' onClick={() => openModal(product1)} />
                        <img src={product2} alt='card' className='w-[316px] h-[400px] md:w-[290px] cursor-pointer' onClick={() => openModal(product2)} />
                        <img src={product3} alt='card' className='w-[316px] h-[400px] md:w-[290px] cursor-pointer' onClick={() => openModal(product3)} />
                        <img src={product4} alt='card' className='w-[316px] h-[400px] md:w-[290px] cursor-pointer' onClick={() => openModal(product4)} />
                    </div>

                    <div className='flex gap-6 mt-8 lg:flex-row flex-col md:flex-row md:flex-wrap md:items-center md:justify-center'>
                        <img src={product5} alt='card' className='w-[316px] h-[400px] md:w-[290px] cursor-pointer' onClick={() => openModal(product5)} />
                        <img src={product6} alt='card' className='w-[316px] h-[400px] md:w-[290px] cursor-pointer' onClick={() => openModal(product6)} />
                        <img src={product7} alt='card' className='w-[316px] h-[400px] md:w-[290px] cursor-pointer' onClick={() => openModal(product7)} />
                        <img src={product8} alt='card' className='w-[316px] h-[400px] md:w-[290px] cursor-pointer' onClick={() => openModal(product8)} />
                    </div>

                    <div className='flex gap-6 mt-8 lg:flex-row flex-col md:flex-row md:flex-wrap md:items-center md:justify-center'>
                        <img src={product9} alt='card' className='w-[316px] h-[400px] md:w-[290px] cursor-pointer' onClick={() => openModal(product9)} />
                        <img src={product10} alt='card' className='w-[316px] h-[400px] md:w-[290px] cursor-pointer' onClick={() => openModal(product10)} />
                        <img src={product11} alt='card' className='w-[316px] h-[400px] md:w-[290px] cursor-pointer' onClick={() => openModal(product11)} />
                        <img src={product12} alt='card' className='w-[316px] h-[400px] md:w-[290px] cursor-pointer' onClick={() => openModal(product12)} />
                    </div>

                    <div className='flex gap-6 mt-8 lg:flex-row flex-col md:flex-row md:flex-wrap md:items-center md:justify-center'>
                        <img src={product13} alt='card' className='w-[316px] h-[400px] md:w-[290px] cursor-pointer' onClick={() => openModal(product13)} />
                        <img src={product14} alt='card' className='w-[316px] h-[400px] md:w-[290px] cursor-pointer' onClick={() => openModal(product14)} />
                        <img src={product15} alt='card' className='w-[316px] h-[400px] md:w-[290px] cursor-pointer' onClick={() => openModal(product15)} />
                        <img src={product16} alt='card' className='w-[316px] h-[400px] md:w-[290px] cursor-pointer' onClick={() => openModal(product16)} />
                    </div>

                    <div className='flex gap-6 mt-8 lg:flex-row flex-col md:flex-row md:flex-wrap md:items-center md:justify-center'>
                        <img src={product17} alt='card' className='w-[316px] h-[400px] md:w-[290px] cursor-pointer' onClick={() => openModal(product17)} />
                        <img src={product18} alt='card' className='w-[316px] h-[400px] md:w-[290px] cursor-pointer' onClick={() => openModal(product18)} />
                        <img src={product19} alt='card' className='w-[316px] h-[400px] md:w-[290px] cursor-pointer' onClick={() => openModal(product19)} />
                        <img src={product20} alt='card' className='w-[316px] h-[400px] md:w-[290px] cursor-pointer' onClick={() => openModal(product20)} />
                    </div>

                    <div className='flex gap-6 mt-8 lg:flex-row flex-col md:flex-row md:flex-wrap md:items-center md:justify-center'>
                        <img src={product21} alt='card' className='w-[316px] h-[400px] md:w-[290px] cursor-pointer' onClick={() => openModal(product21)} />
                        <img src={product22} alt='card' className='w-[316px] h-[400px] md:w-[290px] cursor-pointer' onClick={() => openModal(product22)} />
                        <img src={product23} alt='card' className='w-[316px] h-[400px] md:w-[290px] cursor-pointer' onClick={() => openModal(product23)} />
                        <img src={product24} alt='card' className='w-[316px] h-[400px] md:w-[290px] cursor-pointer' onClick={() => openModal(product24)} />
                    </div>
                </div>
            </section>

            {selectedImage && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50' onClick={closeModal}>
                    <div className='relative  bg-white w-[550px] h-[550px] p-4 rounded-lg'>
                        <img src={selectedImage} alt='Selected' className='w-full h-[520px] max-h-screen max-w-full' />
                        <button className='absolute top-0 right-5 rounded-full m-4 text-white text-2xl font-bold w-[30px] h-[30px] pb-1 bg-custom-blue flex items-center justify-center' onClick={closeModal}>×</button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Gallery;
