// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import editionbg from "../../assets/hero/editionbg.png";

const Edition = () => {
    return (
        <section
            className="w-full h-[650px] bg-cover bg-center flex items-center justify-center px-6"
            style={{ backgroundImage: `url(${editionbg})` }}
            loading='lazy'
        >
            {/* Center Box */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="max-w-5xl text-center text-white"
            >
                <h1 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                    WELCOME TO THE 7TH EDITION<br />
                    OF THE OTUMFUO GOLF TOURNAMENT
                </h1>

                <p className="text-sm md:text-base leading-relaxed mb-8">
                    Stanbic Bank is the title sponsor of the 7th Otumfuo Invitational Golf Tournament Championship 2025,
                    celebrating the 26th anniversary of the Asantehene and the bank. The event aims to connect with
                    clients, and the golfing community, and foster growth opportunities. It also includes side activities
                    for non-players and families, promoting community bonding and the sport of golf.
                    <br /><br />
                    Join us in honouring tradition, building lasting connections, and exemplifying our commitment to
                    exceptional experiences and unparalleled excellence.
                </p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-8 py-3 bg-white text-[#0033A1] font-semibold rounded-[4px] shadow-lg hover:bg-gray-200 transition"
                >
                    Confirm Your Details
                </motion.button>
            </motion.div>
        </section>
    );
};

export default Edition;
