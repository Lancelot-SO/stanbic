
// eslint-disable-next-line no-unused-vars
import React from "react";

export default function SunIllustration() {
    return (
        <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-sm"
        >
            <circle cx="100" cy="100" r="45" fill="#facc15 " stroke="#F5A623" strokeWidth="2" />

            <g stroke="#F5A623" strokeWidth="3" strokeLinecap="round">
                <line x1="100" y1="40" x2="100" y2="20" />
                <line x1="135" y1="55" x2="150" y2="40" />
                <line x1="160" y1="100" x2="180" y2="100" />
                <line x1="135" y1="145" x2="150" y2="160" />
                <line x1="100" y1="160" x2="100" y2="180" />
                <line x1="65" y1="145" x2="50" y2="160" />
                <line x1="40" y1="100" x2="20" y2="100" />
                <line x1="65" y1="55" x2="50" y2="40" />
            </g>
        </svg>
    );
}
