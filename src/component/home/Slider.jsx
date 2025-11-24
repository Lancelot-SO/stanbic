// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Slider1 from "../../assets/hero/slider1.png"
import Slider2 from "../../assets/hero/slider2.png"
import Slider3 from "../../assets/hero/slider3.png"
import Slider4 from "../../assets/hero/slider4.png"

export default function Slider() {
    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        Slider1,
        Slider2,
        Slider3,
        Slider4,
    ];

    // Snap to the closest slide after drag ends
    const handleDragEnd = (_, info) => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;

        const direction = offset + velocity < 0 ? 1 : -1;

        let newIndex = currentIndex + direction;

        if (newIndex < 0) newIndex = 0;
        if (newIndex > images.length - 1) newIndex = images.length - 1;

        setCurrentIndex(newIndex);
    };

    return (
        <section className="w-full overflow-hidden relative">
            {/* Slider */}
            <motion.div
                ref={sliderRef}
                className="flex cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                animate={{ x: -currentIndex * window.innerWidth }}
                transition={{ type: "spring", stiffness: 200, damping: 30 }}
                style={{ height: "557px" }}
            >
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        className="w-full h-full flex-shrink-0 relative"
                    >
                        <img
                            src={img}
                            alt={`slide-${index}`}
                            className="w-full h-full object-cover"
                        />


                    </motion.div>
                ))}
            </motion.div>

            {/* DOT NAVIGATION — bottom-left corner */}
            <div className="absolute bottom-16 left-32 flex gap-3">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`w-3 h-3 rounded-full transition
                            ${currentIndex === i ? "bg-white" : " border bg-transparent"}
                        `}
                    />
                ))}
            </div>
        </section>
    );
}
