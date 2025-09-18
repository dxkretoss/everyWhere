import React, { useState } from "react";

const ToggleSwitch = ({ labelOn = "Available", labelOff = "Unavailable", title }) => {
    const [isOn, setIsOn] = useState(true);

    const toggle = () => setIsOn(!isOn);

    const onText = title === "Recruiting" ? "Recruiting" : labelOn;
    const offText = title === "Recruiting" ? "Un Recruiting" : labelOff;

    return (
        <div className="
                w-[133px] h-[27px] 
                sm:w-[150px] sm:h-[32px]  
                md:w-[160px] md:h-[36px]   
                lg:w-[180px] lg:h-[40px]  
                flex items-center justify-center gap-2 cursor-pointer
                "
            onClick={toggle}>
            <span className="text-black text-[14px] font-medium">
                {isOn ? onText : offText}
            </span>
            <div
                className={`w-12 h-6 flex items-center rounded-full p-1 shadow-[0px_4px_4px_0px_#00000040] transition-colors duration-300 ${isOn ? "bg-[#FFFFFF]" : "bg-black"
                    }`}
            >
                <div
                    className={`w-4 h-4 rounded-full transform transition-transform duration-300 ${isOn ? "translate-x-6 bg-[#29ABE2]" : "translate-x-0 bg-white"
                        }`}
                ></div>
            </div>
        </div>
    );
};

export default ToggleSwitch;
