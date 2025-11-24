// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import golfcourse from "../../assets/table/golfcourse.png"
import { GiGolfFlag } from "react-icons/gi";

const players = [
    { position: 1, name: "Kwesi A." },
    { position: 2, name: "Akosua B." },
    { position: 3, name: "Kofi C." },
    { position: 4, name: "Afia D." },
    { position: 5, name: "Yaw E." },
    { position: 6, name: "Abena F." },
    { position: 7, name: "Kojo G." },
    { position: 8, name: "Esi H." },
    { position: 9, name: "Kwesi A." },
    { position: 10, name: "Akosua B." },
    { position: 11, name: "Akosua C." },
    { position: 12, name: "Akosua D." },
    { position: 13, name: "Akosua E." },
    { position: 14, name: "Akosua F." },
];

const holes = [1, 2, 3, 4];

const scoresData = [
    { playerPos: 1, par: 4, thru: 4, today: -2, scores: [3, 4, 3, 4], total: -2 },
    { playerPos: 2, par: 4, thru: 3, today: -1, scores: [4, 3, 4, 0], total: -1 },
    { playerPos: 3, par: 4, thru: 4, today: 0, scores: [4, 4, 4, 4], total: 0 },
    { playerPos: 4, par: 4, thru: 2, today: 1, scores: [5, 4, 0, 0], total: 1 },
    { playerPos: 5, par: 4, thru: 4, today: -3, scores: [3, 3, 4, 3], total: -3 },
    { playerPos: 6, par: 4, thru: 3, today: 2, scores: [4, 5, 4, 0], total: 2 },
    { playerPos: 7, par: 4, thru: 4, today: 1, scores: [4, 4, 5, 4], total: 1 },
    { playerPos: 8, par: 4, thru: 2, today: 0, scores: [4, 4, 0, 0], total: 0 },
    { playerPos: 9, par: 4, thru: 1, today: -1, scores: [3, 0, 0, 0], total: -1 },
    { playerPos: 10, par: 4, thru: 3, today: 0, scores: [4, 4, 4, 0], total: 0 },
    { playerPos: 11, par: 4, thru: 4, today: 2, scores: [4, 5, 4, 5], total: 2 },
    { playerPos: 12, par: 4, thru: 2, today: -1, scores: [3, 4, 0, 0], total: -1 },
    { playerPos: 13, par: 4, thru: 3, today: 1, scores: [4, 4, 5, 0], total: 1 },
    { playerPos: 14, par: 4, thru: 4, today: 0, scores: [4, 4, 4, 4], total: 0 },
];

const MainTable = () => {

    const [formattedDate, setFormattedDate] = useState("");

    useEffect(() => {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, "0");
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const dayOfWeek = today
            .toLocaleDateString("en-US", { weekday: "short" })
            .toUpperCase();

        setFormattedDate(`${day}/${month} ${dayOfWeek}`);
    }, []);
    return (
        <div>
            <section
                className="relative w-full h-[964px] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${golfcourse})` }}
            >
                <div className="absolute w-full max-w-[1056px] bg-white rounded-lg shadow-md">
                    <div className="p-4 md:p-8">

                        {/* Header */}
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 bg-white p-4 rounded-lg border">
                            <div className="flex items-center gap-2">
                                <GiGolfFlag className="w-6 h-6 text-[#0637A2]" />
                                <h1 className="text-[16px] font-bold text-[#0637A2]">SCOREBOARD</h1>

                                <span className="ml-0 md:ml-4 text-sm md:text-lg font-normal text-[#6D6D6D]">
                                    Prize Money: GHS 70,000.00
                                </span>
                            </div>

                            <div className="flex items-center gap-2 px-4 py-2 rounded-lg text-[#6D6D6D] font-semibold border border-gray-300 mt-4 md:mt-0">
                                <span>📅</span>
                                <span>{formattedDate}</span>
                            </div>
                        </div>

                        {/* Table Wrapper (responsive scroll) */}
                        <div className="border border-border rounded-lg max-h-[480px] overflow-y-auto bg-card">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-border bg-[#0637A2]">
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-white w-12">
                                            POS
                                        </th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-white w-40">
                                            NAME
                                        </th>
                                        <th className="px-4 py-3 text-center text-sm font-semibold text-white w-12">
                                            PAR
                                        </th>
                                        <th className="px-4 py-3 text-center text-sm font-semibold text-white w-12">
                                            THRU
                                        </th>
                                        <th className="px-4 py-3 text-center text-sm font-semibold text-white w-16">
                                            TODAY
                                        </th>

                                        {/* Hole Numbers */}
                                        {holes.map((hole) => (
                                            <th
                                                key={hole}
                                                className="px-3 py-3 text-center text-sm font-semibold text-white w-10"
                                            >
                                                {hole}
                                            </th>
                                        ))}

                                        <th className="px-4 py-3 text-center text-sm font-semibold text-white w-12">
                                            TOTAL
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {players.map((player, idx) => {
                                        const scores = scoresData[idx];

                                        return (
                                            <tr
                                                key={player.position}
                                                className="border-b border-border hover:bg-muted/50 transition-colors"
                                            >
                                                {/* POSITION */}
                                                <td className="px-4 py-3 text-sm font-medium text-[#6D6D6D] w-12">
                                                    {player.position}
                                                </td>

                                                {/* NAME */}
                                                <td className="px-4 py-3 text-sm font-medium text-[#6D6D6D] w-40">
                                                    {player.name}
                                                </td>

                                                {/* PAR */}
                                                <td className="px-4 py-3 text-sm text-center text-[#6D6D6D] w-12">
                                                    {scores.par}
                                                </td>

                                                {/* THRU */}
                                                <td className="px-4 py-3 text-sm text-center text-[#6D6D6D] w-12">
                                                    {scores.thru}
                                                </td>

                                                {/* TODAY */}
                                                <td
                                                    className={`px-4 py-3 text-sm text-center font-semibold w-16 ${scores.today < 0
                                                        ? "text-red-600"
                                                        : scores.today > 0
                                                            ? "text-blue-600"
                                                            : "text-[#6D6D6D]"
                                                        }`}
                                                >
                                                    {scores.today > 0 ? "+" : ""}
                                                    {scores.today}
                                                </td>

                                                {/* INDIVIDUAL HOLE SCORES */}
                                                {scores.scores.map((score, holeIdx) => (
                                                    <td
                                                        key={holeIdx}
                                                        className="px-3 py-3 text-sm text-center text-[#6D6D6D] w-10"
                                                    >
                                                        {score > 0 ? score : "—"}
                                                    </td>
                                                ))}

                                                {/* TOTAL */}
                                                <td
                                                    className={`px-4 py-3 text-sm text-center font-semibold w-12 ${scores.total < 0
                                                        ? "text-red-600"
                                                        : scores.total > 0
                                                            ? "text-blue-600"
                                                            : "text-[#6D6D6D]"
                                                        }`}
                                                >
                                                    {scores.total > 0 ? "+" : ""}
                                                    {scores.total}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>


                    </div>
                </div>

            </section>
        </div>
    )
}

export default MainTable