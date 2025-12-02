// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import golferImg from "../../assets/hero/golfer.png";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

const Bio = () => {
    return (
        <section className="w-full py-10 px-8 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

                {/* Image */}
                <motion.div
                    className="w-full md:w-1/2 flex justify-start"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src={golferImg}
                        alt="Golfer"
                        className="w-[350px] md:w-[480px] object-contain"
                        loading="lazy"
                    />
                </motion.div>

                {/* Text Content */}
                <motion.div
                    className="w-full md:w-[692px]"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <h2 className="text-[20px] md:text-[32px] font-bold text-[#0637A2] mb-5 leading-tight">
                        THE STANBIC ASANTEHENE GOLF TOURNAMENT
                    </h2>

                    <p className="text-[#0637A2] leading-relaxed mb-4 text-[16px] font-libre">
                        The Stanbic Asantehene Golf Tournament is a premier annual event
                        hosted by Stanbic Bank in partnership with the Royal Golf Club,
                        Kumasi, under the patronage of His Majesty Otumfuo Osei Tutu II.
                    </p>

                    <p className="text-[#0637A2] leading-relaxed text-[16px] font-libre">
                        For over 15 years, it has united business leaders, clients, and golf
                        enthusiasts in a weekend of sport, networking, and celebration. The
                        tournament reflects Stanbic’s commitment to excellence, partnership,
                        and community, creating meaningful connections on and off the
                        course.
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default Bio;
