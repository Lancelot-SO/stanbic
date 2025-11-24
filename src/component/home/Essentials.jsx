// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import ess from "../../assets/hero/ess.png";
import ess1 from "../../assets/hero/ess1.png";

export default function Essentials() {

    // Parent container variant (stagger children)
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    // Fade + slide-up animation
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    // List item animation
    const listItem = {
        hidden: { opacity: 0, x: -15 },
        show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    };

    return (
        <motion.section
            className="w-full py-16 px-4 md:px-12 lg:px-[151px] flex flex-row gap-20"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
        >
            {/* Images */}
            <motion.div className="flex flex-row gap-4">
                <motion.img
                    src={ess}
                    alt="Sunglasses on wood"
                    className="w-[255px] h-[395px] object-cover shadow-md rounded-xl"
                    variants={fadeUp}
                    whileHover={{ scale: 1.03 }}
                />

                <motion.img
                    src={ess1}
                    alt="Golf bag outdoors"
                    className="w-[255px] h-[395px] object-cover shadow-md mt-[70px] rounded-xl"
                    variants={fadeUp}
                    whileHover={{ scale: 1.03 }}
                />
            </motion.div>

            {/* Text Content */}
            <motion.div variants={fadeUp} className="space-y-4 flex-1">
                <h2 className="text-[40px] font-bold text-gray-800">
                    Don’t Forget the Essentials
                </h2>

                {/* Improved list animation */}
                <motion.ul
                    className="list-disc pl-5 space-y-4 text-gray-700 text-base"
                    variants={container}
                >
                    {[
                        "Sun protection – hats, shades, fans.",
                        "Power bank / charger.",
                        "Healthy snacks – granola, trail mix, etc.",
                        "First aid materials.",
                        "Comfortable shoes (for non-players).",
                        "Golf equipment – clubs, balls, tees.",
                    ].map((item, index) => (
                        <motion.li key={index} variants={listItem}>
                            {item}
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </motion.section>
    );
}
