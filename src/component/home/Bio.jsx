// eslint-disable-next-line no-unused-vars
import React from "react";
import golferImg from "../../assets/hero/golfer.png"
const Bio = () => {
    return (
        <section className="w-full py-10 px-4 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

                {/* Image */}
                <div className="w-full md:w-1/2 flex justify-start">
                    <img
                        src={golferImg}
                        alt="Golfer"
                        className="w-[350px] md:w-[480px] object-contain"
                        loading='lazy'
                    />
                </div>

                {/* Text Content */}
                <div className="w-full md:w-[692px]">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0637A2] mb-5 leading-tight">
                        THE STANBIC ASANTEHENE GOLF TOURNAMENT
                    </h2>

                    <p className="text-[#0637A2] leading-relaxed mb-4">
                        The Stanbic Asantehene Golf Tournament is a premier annual event
                        hosted by Stanbic Bank in partnership with the Royal Golf Club,
                        Kumasi, under the patronage of His Majesty Otumfuo Osei Tutu II.
                    </p>

                    <p className="text-[#0637A2] leading-relaxed">
                        For over 15 years, it has united business leaders, clients, and golf
                        enthusiasts in a weekend of sport, networking, and celebration. The
                        tournament reflects Stanbic’s commitment to excellence, partnership,
                        and community, creating meaningful connections on and off the
                        course.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Bio;
