import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";



const DatePickerComponent = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className="flex items-center justify-between p-2 bg-gray-50 rounded-full shadow-md w-max border border-gray-300 z-10">
            <button className="p-1 text-gray-600">
                <IoIosArrowBack />
            </button>
            <div className="flex items-center mx-2">
                <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    customInput={
                        <div className="flex items-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-[20px] w-[20px] text-gray-600 mt-1" viewBox="0 0 20 20" fill="currentColor">
                                <FaCalendarAlt />
                            </svg>
                            <span className="text-gray-600 text-sm ml-2">
                                {selectedDate ? format(selectedDate, 'dd/MM EEE').toUpperCase() : '18/08 SU'}
                            </span>
                        </div>
                    }
                />
            </div>
            <button className="p-1 text-gray-600">
                <IoIosArrowForward />
            </button>
        </div>
    );
};

export default DatePickerComponent;
