// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import tablebg from "../../assets/table/tablebg.png";
import { Sun, Cloud } from "lucide-react";

const api = {
    key: "e51a99ba5449d1c13ee0227cdc604c58",
    baseUrl: "https://api.openweathermap.org/data/2.5/",
};

const TableHero = () => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchWeather = async () => {
        try {
            const res = await fetch(
                `${api.baseUrl}weather?q=Kumasi&units=metric&appid=${api.key}`
            );
            const data = await res.json();

            setWeather({
                temp: Math.round(data.main.temp),
                city: data.name,
                country: data.sys.country,
                condition: data.weather[0].main.toLowerCase(),
            });
        } catch (err) {
            console.error("Weather fetch error:", err);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchWeather();
    }, []);

    return (
        <section
            className="relative w-full h-[685px] bg-cover bg-center"
            style={{ backgroundImage: `url(${tablebg})` }}
        >
            {/* Positioned weather container */}
            <div className="absolute top-[30%] right-[220px] w-[300px] h-[300px] flex items-center justify-center">

                {loading || !weather ? (
                    <p className="text-white">Loading...</p>
                ) : (
                    <div className="flex flex-col items-center justify-center text-white">

                        {/* Temperature */}
                        <h1 className="text-7xl font-bold mb-1">
                            {weather.temp}°
                        </h1>

                        {/* City */}
                        <p className="text-lg">
                            {weather.city}, Ghana
                        </p>

                        {/* Weather icon */}
                        <div className="mt-6">
                            {weather.temp >= 27 ? (
                                <Sun size={90} className="text-yellow-300 drop-shadow-lg" />
                            ) : (
                                <Cloud size={90} className="text-gray-200 drop-shadow-lg" />
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default TableHero;
