// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Cloud, CloudRain, Sun, RefreshCw } from "lucide-react";
import SunIllustration from "./SunIllustration";

const api = {
    key: "e51a99ba5449d1c13ee0227cdc604c58",
    baseUrl: "https://api.openweathermap.org/data/2.5/",
};

// Determine icon type for hourly forecast
function getWeatherType(main) {
    if (!main) return "cloud";
    const key = main.toLowerCase();

    if (key.includes("clear") || key.includes("sun")) return "sun";
    if (key.includes("rain") || key.includes("drizzle") || key.includes("thunder")) return "rain";
    if (key.includes("cloud")) return "cloud";

    return "cloud";
}

export default function WeatherApp() {
    const [weather, setWeather] = useState(null);
    const [hourly, setHourly] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchWeather = async () => {
        setLoading(true);

        try {
            // Current weather
            const res = await fetch(
                `${api.baseUrl}weather?q=Kumasi&units=metric&appid=${api.key}`
            );
            const data = await res.json();

            // Hourly forecast
            const res2 = await fetch(
                `${api.baseUrl}forecast?q=Kumasi&units=metric&appid=${api.key}`
            );
            const forecastData = await res2.json();

            const nextHours = forecastData.list.slice(0, 5).map((f) => ({
                time: formatHour(f.dt),
                temp: Math.round(f.main.temp),
                icon: getWeatherType(f.weather[0].main),
            }));

            setWeather({
                temp: Math.round(data.main.temp),
                condition: getWeatherType(data.weather[0].main),
                city: data.name,
                country: data.sys.country,
            });

            setHourly(nextHours);
        } catch (err) {
            console.error("API error:", err);
        }

        setLoading(false);
    };

    // Convert timestamp to 12-hour AM/PM format
    const formatHour = (timestamp) => {
        const date = new Date(timestamp * 1000);
        let hours = date.getHours();
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        return `${hours} ${ampm}`;
    };

    useEffect(() => {
        fetchWeather();
    }, []);

    if (loading || !weather)
        return <p className="text-center text-gray-500">Loading weather...</p>;

    return (
        <div className="max-w-5xl my-10 mx-auto">
            <div className="flex items-start justify-between gap-12">

                {/* LEFT SIDE */}
                <div className="flex-1">
                    <h1 className="text-7xl font-bold mb-2">{weather.temp}°</h1>

                    <p className="text-base">
                        {weather.city}, {weather.country}
                    </p>

                    {/* HOURLY FORECAST */}
                    <div className="mt-10 flex gap-8">
                        {hourly.map((h, index) => (
                            <div key={index} className="text-center">
                                <p className="text-sm mb-3">{h.temp}°</p>

                                <div className="flex justify-center mb-3">
                                    <WeatherIcon type={h.icon} />
                                </div>

                                <p className="text-xs text-gray-500">{h.time}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div>
                    {/* 🌡 Temperature-based image */}
                    {weather.temp >= 27 ? (
                        <SunIllustration />
                    ) : (
                        <Cloud size={160} className="text-gray-400 drop-shadow-md" />
                    )}

                    <div className="flex items-center justify-end gap-2 mt-8 text-sm text-gray-500">
                        <span>Last Updated: {new Date().toLocaleTimeString()}</span>

                        <button onClick={fetchWeather} className="hover:opacity-70">
                            <RefreshCw size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ------------------ WEATHER ICON COMPONENT ------------------ */
function WeatherIcon({ type }) {
    switch (type) {
        case "sun":
            return <Sun size={24} className="text-yellow-400" />;
        case "cloud":
            return <Cloud size={24} className="text-gray-400" />;
        case "rain":
            return <CloudRain size={24} className="text-blue-400" />;
        default:
            return <Cloud size={24} />;
    }
}

/* ------------------ PROP TYPES ------------------ */
WeatherIcon.propTypes = {
    type: PropTypes.oneOf(["sun", "cloud", "rain"]).isRequired,
};

WeatherApp.propTypes = {};
