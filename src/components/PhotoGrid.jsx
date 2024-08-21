import React, { useState } from 'react';
import "./PhotoGrid.css";

import Img1 from "../assets/product1.png";
import Img2 from "../assets/product15.jpg";
import Img3 from "../assets/product3.png";
import Img4 from "../assets/product4.png";
import Img5 from "../assets/product5.png";
import Img6 from "../assets/product6.jpg";
import Img7 from "../assets/product7.png";
import Img8 from "../assets/product8.png";
import Img9 from "../assets/product24.jpg";
import Img10 from "../assets/product10.png"; // Add more images here
import Img11 from "../assets/product11.png";
import Img12 from "../assets/product12.png";
// Import all the remaining images

import { FaTimes } from 'react-icons/fa';

const PhotoGrid = () => {
    const data = [
        { id: 1, imgSrc: Img1 },
        { id: 2, imgSrc: Img2 },
        { id: 3, imgSrc: Img3 },
        { id: 4, imgSrc: Img4 },
        { id: 5, imgSrc: Img5 },
        { id: 6, imgSrc: Img6 },
        { id: 7, imgSrc: Img7 },
        { id: 8, imgSrc: Img8 },
        { id: 9, imgSrc: Img9 },
        { id: 10, imgSrc: Img10 }, // Add more images here
        { id: 11, imgSrc: Img11 },
        { id: 12, imgSrc: Img12 },
        { id: 13, imgSrc: Img12 },
        { id: 14, imgSrc: Img12 },
        { id: 15, imgSrc: Img12 },

        // Add all remaining images
    ];

    const [modal, setModal] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');
    const [showMore, setShowMore] = useState(false);

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModal(true);
    };

    // Determine which images to display based on the showMore state
    const displayedImages = showMore ? data : data.slice(0, 9);

    return (
        <div className='overflow-hidden'>
            <div className={modal ? "modal open" : "modal"}>
                <img src={tempImgSrc} alt='foto' />
                <FaTimes onClick={() => setModal(false)} />
            </div>
            <div className='md:px-[170px] px-4 flex flex-col items-center mb-8'>
                <div className='gallery'>
                    {
                        displayedImages.map((item, index) => (
                            <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                                <img src={item.imgSrc} alt="foto" className='w-[100%] rounded-lg' />
                            </div>
                        ))
                    }
                </div>
                <div
                    className="cursor-pointer w-[200px] h-[40px] rounded-3xl border border-blue-200 flex items-center justify-center mt-8"
                    onClick={() => setShowMore(!showMore)}
                >
                    <button className='text-[#0033AA] font-medium leading-[26px]'>
                        {showMore ? 'View Less' : 'View More'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PhotoGrid;
