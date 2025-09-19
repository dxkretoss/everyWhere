import React, { useState } from 'react'
import AccMainlayout from '@/components/AccMainlayout/AccMainlayout';
import dynamic from "next/dynamic"

const CustomMap = dynamic(() => import("@/components/CustomMap/CustomMap"), {
    ssr: false,
});

export default function FavProperties() {
    const [active, setActive] = useState("Replied");

    const buttons = [
        { label: "Pending", minWidth: "139px" },
        { label: "Replied", minWidth: "139px" },
        { label: "Closed", minWidth: "139px" },
    ];

    const cards = [1, 2, 3];
    return (
        <AccMainlayout>
            <div className='h-[55px] flex items-center justify-center shadow-[0px_4px_6px_0px_#0000001C]'>
                <h1 className='text-[24px] font-semibold text-[#000000]'>Favourite Properties</h1>
            </div>

            <div className='mt-[22px] flex justify-center items-center'>
                <span className='text-[#757575] text-[14px]'>
                    Click the offer you want to open up & check the messages you received !
                </span>
            </div>

            <div className="flex justify-center items-center py-[25px]">
                <div className="w-[435px] h-[52px] bg-white flex justify-center items-center shadow-[0px_4px_11px_0px_#CECECEC7] rounded-[10px]">
                    {buttons.map((btn) => (
                        <button
                            key={btn.label}
                            onClick={() => setActive(btn.label)}
                            style={{ minWidth: btn.minWidth }}
                            className={`h-[40px] rounded-[10px] font-semibold text-[16px] transition-colors flex  justify-center items-center
                                              ${active === btn.label ? "bg-[#FFAB24] text-white" : "bg-white text-black"}
                                          `}
                        >
                            {btn.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="w-[1227px] mx-auto justify-center mb-[20px]">
                <div className="w-[1227px] mx-auto justify-center mb-[20px] flex gap-[50px] relative">
                    {cards.map((index) => (
                        <div
                            key={index}
                            className="w-[356px] h-[450px] border border-[#CECECE] rounded-[20px] shadow-[4px_4px_11px_0px_#75757578]"
                        >
                            <div className="relative">

                                <div
                                    className="w-full h-[79px] rounded-t-[16px]"
                                    style={{
                                        backgroundImage: `
                                        linear-gradient(90deg, rgba(0,0,0,0.65) 0%, rgba(255,255,255,0) 73.73%),
                                        url(/hero_bg_4.svg)
                                        `,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                    }}
                                ></div>

                                {/* Location */}
                                <div className="absolute top-3 left-4 flex gap-2 items-center">
                                    <img src='/loc-white.svg' />
                                    <span className="text-[#FFFFFF] text-[12px]">Paris</span>
                                </div>

                                {/* Toggle Switch */}
                                <div className="absolute top-3 right-4 flex items-center ">
                                    <img src={index === 1 ? "/bell.svg" : "/bellfill.svg"} />
                                </div>

                                <div className="flex flex-col items-center mt-4">
                                    <div className="w-[107px] h-[41px] flex justify-center items-center absolute top-16 left-1/2 -translate-x-1/2 px-4 py-1 bg-black text-white text-[16px] font-semibold rounded-full">
                                        Flat
                                    </div>
                                    <p className="text-[14px] font-medium mt-4 text-[#757575]">500 € / month</p>
                                </div>

                                <div className="flex justify-center items-center gap-6 mt-2">
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-black font-medium text-[12px]">entry date</span>
                                        <span className="px-2 py-1 bg-[#FFAB241A] rounded-[999px] text-[#FFAB24] font-medium text-[12px] mt-1">02/09/25</span>
                                    </div>
                                </div>

                                <div className="flex justify-around gap-4 mt-2 text-[12px]">
                                    <div className="flex items-center gap-1">
                                        <img src='/Apartment.svg' />
                                        <span className='text-[12px] text-[#757575]'>Apartment</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <img src='/1.svg' />
                                        <span className='text-[12px] text-[#757575]'>1</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <img src='/100m2.svg' />
                                        <span className='text-[12px] text-[#757575]'>100 m<sub>2</sub></span>
                                    </div>
                                </div>

                                <hr className='mt-2 text-[#CECECE]' />

                                <div className="mt-2 px-4 flex flex-col gap-2 justify-center items-center">
                                    <h3 className="text-center text-[14px] font-medium text-[#333333]">Property Location</h3>
                                    <div className='w-[299px] h-[85px]'>
                                        <CustomMap />
                                    </div>
                                </div>

                                <hr className='mt-4 text-[#CECECE]' />

                                <div className='flex w-full justify-center items-center mt-4'>
                                    <div className='flex w-1/2 gap-1 justify-center'>
                                        <button
                                            className={`w-[142px] h-[38px] border-[2px] rounded-[999px] shadow-[0px_4px_4px_0px_#0000002E] 
                                                ${index === 3 ? "border-[#CECECE]" : "border-[#4BDDB6]"}`}
                                        >
                                            <span
                                                className={`text-[14px] font-semibold 
                                                     ${index === 3 ? "text-[#CECECE]" : "text-[#4BDDB6]"}`}
                                            >
                                                Reply
                                            </span>
                                        </button>

                                    </div>

                                    <div className='flex w-1/2 gap-1 justify-center'>
                                        <button className='w-[142px] h-[38px] border-[2px] border-[#FF6E6E] rounded-[999px] shadow-[0px_4px_4px_0px_#0000002E]'>
                                            <span className='text-[14px] font-semibold text-[#FF6E6E]'>Withdraw</span>
                                        </button>
                                    </div>
                                </div>

                                <div className='flex gap-1 justify-center mt-3'>
                                    <img src='/poke.svg' />
                                    <span className='text-[14px] text-[#000000] font-medium'>Poke</span>
                                </div>
                            </div>
                        </div>
                    ))}

                    <img src='/leftaero-with-border.svg' className='absolute top-1/2 -left-10 cursor-pointer' />
                    <img src='/rightaero-with-border.svg' className='absolute top-1/2 -right-10 cursor-pointer' />
                </div>
            </div>
        </AccMainlayout>
    )
}
