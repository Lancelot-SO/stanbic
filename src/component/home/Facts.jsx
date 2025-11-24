// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import fact from "../../assets/hero/facts.png"

export default function Facts() {
    const facts = [
        "Golf courses used to have anywhere from 5 to 22 holes per game!",
        "Golf is largely believed to have originated in Scotland, but some historians believe it takes influence from similar ancient Roman and Chinese games.",
        "The word golf originated from the Dutch word “kolf” or “kolve”, which then became the Scottish word “gouff” and “goff”.",
        "Golf was originally played by shepherds to pass the time.",
        "Golf holes do not stay in one place but are moved regularly to keep the greens in good condition.",
        "The chances of an average golfer to sink a hole-in-one are 1 in 12,000.",
    ];

    /** MAIN ANIMATIONS */
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        show: (i = 1) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: i * 0.15 },
        }),
    };

    const containerStagger = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const imageAnim = {
        hidden: { opacity: 0, scale: 0.95 },
        show: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <section className="w-full py-14 px-6 md:px-12 lg:px-[151px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* LEFT – TEXT CONTENT */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerStagger}
                    className="space-y-6"
                >
                    {/* Title */}
                    <motion.h2
                        variants={fadeUp}
                        className="text-3xl font-bold text-gray-800"
                    >
                        6 Fun Facts
                    </motion.h2>

                    {/* Facts List */}
                    <ul className="space-y-4 text-gray-700 leading-relaxed">
                        {facts.map((fact, index) => (
                            <motion.li
                                key={index}
                                variants={fadeUp}
                                className="flex gap-3 items-start"
                            >
                                <span className="mt-2 h-2 w-2 bg-gray-500 rounded-full"></span>
                                <p>{fact}</p>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* RIGHT – IMAGE */}
                <motion.div
                    variants={imageAnim}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex justify-center"
                >
                    <img
                        src={fact}
                        alt="Golf fun facts"
                        className="w-full h-[350px] md:h-[420px] lg:h-[480px] object-cover rounded-2xl shadow-lg"
                    />
                </motion.div>

            </div>
        </section>
    );
}
