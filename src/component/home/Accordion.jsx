// eslint-disable-next-line no-unused-vars
import React from "react";
import img1 from "../../assets/hero/f1.png";
import img2 from "../../assets/hero/f2.png";
import img3 from "../../assets/hero/f3.png";
import img4 from "../../assets/hero/f4.png";
import img5 from "../../assets/hero/f5.png";
import img6 from "../../assets/hero/f6.png";

const images = [img1, img2, img3, img4, img5, img6];

const Accordion = () => {
    return (
        <div className="w-full">
            <div className="
                grid 
                grid-cols-6 
                w-full 
                gap-0
            ">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="h-[251px] overflow-hidden"
                    >
                        <img
                            src={img}
                            alt={`accordion-${index}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accordion;
