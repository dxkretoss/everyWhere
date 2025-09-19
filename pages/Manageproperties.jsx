import React, { useState } from 'react'
import dynamic from "next/dynamic"
import AccMainlayout from '@/components/AccMainlayout/AccMainlayout';
const CustomMap = dynamic(() => import("@/components/CustomMap/CustomMap"), {
    ssr: false,
});

export default function Manageproperties() {
    const [isOn, setIsOn] = useState(true);
    const [selectedCard, setSelectedCard] = useState(true);

    const [active, setActive] = useState("New");

    const buttons = [
        { label: "New", minWidth: "112px" },
        { label: "Contacted", minWidth: "124px" },
        { label: "Ignored", minWidth: "124px" },
    ];
    return (
        <AccMainlayout>
            <div className='h-[57px] flex items-center justify-center shadow-[0px_4px_6px_0px_#0000001C]'>
                <h1 className='text-[24px] font-semibold text-[#000000]'>Managed Properties</h1>
            </div>

            <div className='mt-[22px] flex justify-center items-center'>
                <span className='text-[#757575] text-[14px]'>
                    Click the ads you want to supervise & check the messages you received !
                </span>
            </div>

            <div className="w-[1227px] h-[1011px] mx-auto justify-center mb-[20px]">
                <div className={`relative mt-[27px] flex`}>
                    <div className="flex">
                        <div>
                            <div className={`bg-[#F4F4F4] rounded-t-[20px] p-[25px] transition-colors`}>
                                <div
                                    onClick={() => {
                                        setSelectedCard(!selectedCard);
                                    }}
                                    className={`cursor-pointer relative w-[359px] h-[516px] 
                                                    border-[4px] border-black
                                                    rounded-[20px] shadow-[4px_4px_11px_0px_#75757566] flex flex-col overflow-hidden transition-colors
                                                    bg-white`}
                                >
                                    {/* Header */}
                                    <div className="relative">
                                        {/* Gradient Header */}
                                        <div
                                            className="w-full h-[79px] rounded-t-[16px] opacity-30"
                                            style={{
                                                background:
                                                    "linear-gradient(107.8deg, #FFF4E2 0%, #FFAB24 50%, #FFC973 100%)",
                                            }}
                                        ></div>

                                        {/* Location */}
                                        <div className="absolute top-3 left-4 flex gap-2 items-center">
                                            <img src='/card-loc.svg' />
                                            <span className="text-[#757575] text-[12px]">Paris</span>
                                        </div>

                                        {/* Toggle Switch */}
                                        <div className="absolute top-3 right-4 flex items-center px-1">
                                            <div
                                                onClick={() => setIsOn(!isOn)}
                                                className={`w-10 h-6 rounded-full flex items-center px-1 cursor-pointer transition-all duration-300 ${isOn ? "bg-white" : "bg-gray-200"
                                                    }`}
                                                style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
                                            >
                                                <div
                                                    className={`w-4 h-4 rounded-full transition-all duration-300 ${isOn ? "ml-auto bg-[#FFAB24]" : "ml-0 bg-white"
                                                        }`}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Job Title */}
                                    <div className="flex flex-col items-center mt-4">
                                        <div className="w-[107px] h-[41px] flex justify-center items-center absolute top-16 left-1/2 -translate-x-1/2 px-4 py-1 bg-black text-white text-[16px] font-semibold rounded-full">
                                            Flat
                                        </div>
                                        <p className="text-[14px] font-medium mt-4 text-[#757575]">500 € / month</p>
                                    </div>

                                    {/* Published / Starting */}
                                    <div className="flex justify-center items-center gap-6 mt-2">
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-black font-medium text-[12px]">published</span>
                                            <span className="px-2 py-1 bg-[#F5F5F5] rounded-[999px] text-[#A8A8A8] font-medium text-[12px] mt-1">02/09/25</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-black font-medium text-[12px]">starting</span>
                                            <span className="px-2 py-1 bg-[#FFAB241A] rounded-[999px] text-[#FFAB24] font-medium text-[12px] mt-1">02/09/25</span>
                                        </div>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex justify-around gap-4 mt-3 text-[12px]">
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

                                    {/* Workplace Overview */}
                                    <div className="mt-4 px-4 flex flex-col  justify-center items-center">
                                        <h3 className="text-center text-[14px] font-medium text-[#333333]">Property Overview</h3>
                                        <img src='/gallery-main.svg' className='w-[299px] h-[123px] rounded-[10px]' />
                                        <div className='w-[299px] h-[85px]'>
                                            <CustomMap />
                                        </div>
                                    </div>

                                    {/* Stats */}
                                    <div className="flex justify-center gap-6 mt-3">
                                        <p className='flex gap-1'>
                                            <span className="text-[#FFAB24] text-[16px] font-semibold">657</span>
                                            <span className="text-[#757575] text-[14px">visitors</span>
                                        </p>
                                        <p className='flex gap-1'>
                                            <span className="text-[#FFAB24] text-[16px] font-semibold">12</span>
                                            <span className="text-[#757575] text-[14px">messages</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex relative'>
                            <div className={`p-[25px] `}>
                                <div className={`relative cursor-not-allowed w-[356px] h-[516px] border border-[#E6E6E6] rounded-[20px] shadow-[4px_4px_11px_0px_#75757566] flex flex-col overflow-hidden transition-color`}>
                                    {/* Header */}
                                    <div className="absolute inset-0 bg-[#FFFFFF2F] backdrop-blur-[5px] rounded-[20px] shadow-[4px_4px_11px_0px_#75757566] z-[9999] pointer-events-auto"></div>

                                    <div className="relative">
                                        {/* Gradient Header */}
                                        <div
                                            className="w-full h-[79px] rounded-t-[16px] opacity-30"
                                            style={{
                                                background:
                                                    "linear-gradient(107.8deg, #FFF4E2 0%, #FFAB24 50%, #FFC973 100%)",
                                            }}
                                        ></div>

                                        {/* Location */}
                                        <div className="absolute top-3 left-4 flex gap-2 items-center">
                                            <img src='/card-loc.svg' />
                                            <span className="text-[#757575] text-[12px]">Paris</span>
                                        </div>

                                        {/* Toggle Switch */}
                                        <div className="absolute top-3 right-4 flex items-center px-1">
                                            <div
                                                onClick={() => setIsOn(!isOn)}
                                                className={`w-10 h-6 rounded-full flex items-center px-1 cursor-pointer transition-all duration-300 ${isOn ? "bg-white" : "bg-gray-200"
                                                    }`}
                                                style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
                                            >
                                                <div
                                                    className={`w-4 h-4 rounded-full transition-all duration-300 ${isOn ? "ml-auto bg-[#FFAB24]" : "ml-0 bg-white"
                                                        }`}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Job Title */}
                                    <div className="flex flex-col items-center mt-4">
                                        <div className="w-[107px] h-[41px] flex justify-center items-center absolute top-16 left-1/2 -translate-x-1/2 px-4 py-1 bg-black text-white text-[16px] font-semibold rounded-full">
                                            Flat
                                        </div>
                                        <p className="text-[14px] font-medium mt-4 text-[#757575]">500 € / month</p>
                                    </div>

                                    {/* Published / Starting */}
                                    <div className="flex justify-center items-center gap-6 mt-2">
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-black font-medium text-[12px]">published</span>
                                            <span className="px-2 py-1 bg-[#F5F5F5] rounded-[999px] text-[#A8A8A8] font-medium text-[12px] mt-1">02/09/25</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-black font-medium text-[12px]">starting</span>
                                            <span className="px-2 py-1 bg-[#FFAB241A] rounded-[999px] text-[#FFAB24] font-medium text-[12px] mt-1">02/09/25</span>
                                        </div>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex justify-around gap-4 mt-3 text-[12px]">
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


                                    {/* Workplace Overview */}
                                    <div className="mt-4 px-4 flex flex-col  justify-center items-center">
                                        <h3 className="text-center text-[14px] font-medium text-[#333333]">Property Overview</h3>
                                        <img src='/gallery-main.svg' className='w-[299px] h-[123px] rounded-[10px]' />
                                        <div className='w-[299px] h-[85px]'>
                                            <CustomMap />
                                        </div>
                                    </div>

                                    {/* Stats */}
                                    <div className="flex justify-center gap-6 mt-3">
                                        <p className='flex gap-1'>
                                            <span className="text-[#FFAB24] text-[16px] font-semibold">657</span>
                                            <span className="text-[#757575] text-[14px">visitors</span>
                                        </p>
                                        <p className='flex gap-1'>
                                            <span className="text-[#FFAB24] text-[16px] font-semibold">12</span>
                                            <span className="text-[#757575] text-[14px">messages</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className={`p-[25px]`}>
                                <div className={`relative cursor-not-allowed w-[356px] h-[516px] border border-[#E6E6E6] rounded-[20px] shadow-[4px_4px_11px_0px_#75757566] flex flex-col overflow-hidden transition-color`}>
                                    {/* Header */}
                                    <div className="absolute inset-0 bg-[#FFFFFF2F] backdrop-blur-[5px] rounded-[20px] shadow-[4px_4px_11px_0px_#75757566] z-[9999] pointer-events-auto"></div>

                                    <div className="relative">
                                        {/* Gradient Header */}
                                        <div
                                            className="w-full h-[79px] rounded-t-[16px] opacity-30"
                                            style={{
                                                background:
                                                    "linear-gradient(107.8deg, #FFF4E2 0%, #FFAB24 50%, #FFC973 100%)",
                                            }}
                                        ></div>

                                        {/* Location */}
                                        <div className="absolute top-3 left-4 flex gap-2 items-center">
                                            <img src='/card-loc.svg' />
                                            <span className="text-[#757575] text-[12px]">Paris</span>
                                        </div>

                                        {/* Toggle Switch */}
                                        <div className="absolute top-3 right-4 flex items-center px-1">
                                            <div
                                                onClick={() => setIsOn(!isOn)}
                                                className={`w-10 h-6 rounded-full flex items-center px-1 cursor-pointer transition-all duration-300 ${isOn ? "bg-white" : "bg-gray-200"
                                                    }`}
                                                style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
                                            >
                                                <div
                                                    className={`w-4 h-4 rounded-full transition-all duration-300 ${isOn ? "ml-auto bg-[#FFAB24]" : "ml-0 bg-white"
                                                        }`}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Job Title */}
                                    <div className="flex flex-col items-center mt-4">
                                        <div className="w-[107px] h-[41px] flex justify-center items-center absolute top-16 left-1/2 -translate-x-1/2 px-4 py-1 bg-black text-white text-[16px] font-semibold rounded-full">
                                            Flat
                                        </div>
                                        <p className="text-[14px] font-medium mt-4 text-[#757575]">500 € / month</p>
                                    </div>

                                    {/* Published / Starting */}
                                    <div className="flex justify-center items-center gap-6 mt-2">
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-black font-medium text-[12px]">published</span>
                                            <span className="px-2 py-1 bg-[#F5F5F5] rounded-[999px] text-[#A8A8A8] font-medium text-[12px] mt-1">02/09/25</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-black font-medium text-[12px]">starting</span>
                                            <span className="px-2 py-1 bg-[#FFAB241A] rounded-[999px] text-[#FFAB24] font-medium text-[12px] mt-1">02/09/25</span>
                                        </div>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex justify-around gap-4 mt-3 text-[12px]">
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


                                    {/* Workplace Overview */}
                                    <div className="mt-4 px-4 flex flex-col  justify-center items-center">
                                        <h3 className="text-center text-[14px] font-medium text-[#333333]">Property Overview</h3>
                                        <img src='/gallery-main.svg' className='w-[299px] h-[123px] rounded-[10px]' />
                                        <div className='w-[299px] h-[85px]'>
                                            <CustomMap />
                                        </div>
                                    </div>

                                    {/* Stats */}
                                    <div className="flex justify-center gap-6 mt-3">
                                        <p className='flex gap-1'>
                                            <span className="text-[#FFAB24] text-[16px] font-semibold">657</span>
                                            <span className="text-[#757575] text-[14px">visitors</span>
                                        </p>
                                        <p className='flex gap-1'>
                                            <span className="text-[#FFAB24] text-[16px] font-semibold">12</span>
                                            <span className="text-[#757575] text-[14px">messages</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="absolute top-50 left-7 z-[9999] h-[119px] w-[761px]"
                                style={{
                                    background: "linear-gradient(107.8deg, rgba(255,244,226,0.3) 0%, rgba(255,171,36,0.3) 50%, rgba(255,201,115,0.3) 100%)",
                                    boxShadow: '0px 5px 11px 0px #2D2D2D',
                                }}
                            >
                                <div className='relative z-[99999]'>
                                    <img src='/pre-infi-left-acc.svg' className='absolute top-0 left-0 opacity-70' />
                                    <img src='/pre-infi-right-acc.svg' className='absolute top-[70px] right-0 opacity-70' />
                                    <img src='/pre-top-acc.svg' className='absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-70' />
                                </div>
                                <div className="absolute inset-0 mt-4 flex flex-col justify-center items-center text-center gap-2">
                                    <span className="font-semibold text-[18px] text-[#333333]">
                                        Get a premium account
                                    </span>
                                    <span className="text-[14px] font-medium text-[#333333]">
                                        & post an endless number of housing ads !
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {selectedCard ? (
                    <div className='h-[439px] w-[1227px] flex flex-col rounded-bl-[20px] rounded-tr-[20px] rounded-br-[20px] bg-[#F4F4F4] relative'>
                        <div className="flex justify-center items-center py-[25px]">
                            <div className="w-[381px] h-[52px] bg-white flex justify-center items-center shadow-[0px_4px_11px_0px_#CECECEC7] rounded-[10px]">
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

                        <div className="flex-1 px-[30px]">
                            <div className='flex flex-col gap-[50px]'>
                                <div className='flex flex-col gap-[50px]'>
                                    <div className='flex gap-[50px]'>
                                        <div className="relative w-[356px] h-[299px] border-[1px] border-[#CECECE] rounded-[20px] shadow-[4px_4px_11px_0px_#75757578] bg-white flex flex-col overflow-hidden">

                                            <div className="relative">
                                                {/* Gradient Header */}
                                                <div
                                                    className="w-full h-[79px] rounded-t-[16px] opacity-10"
                                                    style={{
                                                        background: 'linear-gradient(107.8deg, #F9F9F9 0%, #929292 23.56%, #000000 100%)'
                                                    }}
                                                ></div>

                                                {/* Location */}
                                                <div className="absolute top-3 left-4 flex gap-2 items-center">
                                                    <img src='/card-loc.svg' />
                                                    <span className="text-[#757575] text-[12px]">Paris</span>
                                                </div>

                                                <div className="flex flex-col items-center mt-4">
                                                    <img src='/user.svg' className="absolute top-10 left-1/2 -translate-x-1/2" />
                                                    <span className='mt-5 text-[16px] text-[#333333] font-semibold'>John Doe</span>
                                                    <p className="text-[14px] font-medium text-[#757575]">Waiter</p>
                                                </div>

                                                <div className='flex justify-center items-center mt-[5px]'>
                                                    <span className='text-[14px] text-[#757575] text-center'>“I am interested in this offer and want to know more about it.”</span>
                                                </div>

                                                <hr className='mt-[16px] text-[#CECECE]' />

                                                <div className='flex w-full justify-center items-center mt-5'>
                                                    <div className='flex w-1/2 gap-1 justify-center'>
                                                        <img src='/prons.svg' />
                                                        <button className='w-[116px] h-[38px] border-[2px] border-[#4BDDB6] rounded-[999px] shadow-[0px_4px_4px_0px_#0000002E]'>
                                                            <span className='text-[14px] font-semibold text-[#4BDDB6]'>Answer</span>
                                                        </button>
                                                    </div>

                                                    <div className='flex w-1/2 gap-1 justify-center'>
                                                        <img src='/ignore.svg' />
                                                        <button className='w-[116px] h-[38px] border-[2px] border-[#757575] rounded-[999px] shadow-[0px_4px_4px_0px_#0000002E]'>
                                                            <span className='text-[14px] font-semibold text-[#757575]'>Ignore</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="relative w-[356px] h-[299px] border-[1px] border-[#CECECE] rounded-[20px] shadow-[4px_4px_11px_0px_#75757578] bg-white flex flex-col overflow-hidden">

                                            <div className="relative">
                                                {/* Gradient Header */}
                                                <div
                                                    className="w-full h-[79px] rounded-t-[16px] opacity-10"
                                                    style={{
                                                        background: 'linear-gradient(107.8deg, #F9F9F9 0%, #929292 23.56%, #000000 100%)'
                                                    }}
                                                ></div>

                                                {/* Location */}
                                                <div className="absolute top-3 left-4 flex gap-2 items-center">
                                                    <img src='/card-loc.svg' />
                                                    <span className="text-[#757575] text-[12px]">Paris</span>
                                                </div>

                                                <div className="flex flex-col items-center mt-4">

                                                    <div className="w-[72px] h-[72px] rounded-full bg-[#F5F5F5] flex items-center justify-center absolute top-10 left-1/2 -translate-x-1/2">
                                                        <img
                                                            src="/Person.svg"
                                                            alt="Person"
                                                            className="w-[36px] h-[36px] object-contain"
                                                        />
                                                    </div>
                                                    {/* <img src='/user.svg' className="absolute top-10 left-1/2 -translate-x-1/2" /> */}
                                                    <span className='mt-5 text-[16px] text-[#333333] font-semibold'>Unregistered User </span>
                                                    <p className="text-[14px] font-medium text-[#757575]">(Contact for more details)</p>
                                                </div>

                                                <div className='flex justify-center items-center mt-[5px]'>
                                                    <span className='text-[14px] text-[#757575] text-center'>“I am interested in this offer and want to know more about it.”</span>
                                                </div>

                                                <hr className='mt-[16px] text-[#CECECE]' />

                                                <div className='flex w-full justify-center items-center mt-5'>
                                                    <div className='flex w-1/2 gap-1 justify-center'>
                                                        <img src='/prons.svg' />
                                                        <button className='w-[116px] h-[38px] border-[2px] border-[#4BDDB6] rounded-[999px] shadow-[0px_4px_4px_0px_#0000002E]'>
                                                            <span className='text-[14px] font-semibold text-[#4BDDB6]'>Answer</span>
                                                        </button>
                                                    </div>

                                                    <div className='flex w-1/2 gap-1 justify-center'>
                                                        <img src='/ignore.svg' />
                                                        <button className='w-[116px] h-[38px] border-[2px] border-[#757575] rounded-[999px] shadow-[0px_4px_4px_0px_#0000002E]'>
                                                            <span className='text-[14px] font-semibold text-[#757575]'>Ignore</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="relative w-[356px] h-[299px] border-[1px] border-[#CECECE] rounded-[20px] shadow-[4px_4px_11px_0px_#75757578] bg-white flex flex-col overflow-hidden">

                                            <div className="relative">
                                                {/* Gradient Header */}
                                                <div
                                                    className="w-full h-[79px] rounded-t-[16px] opacity-10"
                                                    style={{
                                                        background: 'linear-gradient(107.8deg, #F9F9F9 0%, #929292 23.56%, #000000 100%)'
                                                    }}
                                                ></div>

                                                {/* Location */}
                                                <div className="absolute top-3 left-4 flex gap-2 items-center">
                                                    <img src='/card-loc.svg' />
                                                    <span className="text-[#757575] text-[12px]">Paris</span>
                                                </div>

                                                <div className="flex flex-col items-center mt-4">
                                                    <img src='/user.svg' className="absolute top-10 left-1/2 -translate-x-1/2" />
                                                    <span className='mt-5 text-[16px] text-[#333333] font-semibold'>John Doe</span>
                                                    <p className="text-[14px] font-medium text-[#757575]">Waiter</p>
                                                </div>

                                                <div className='flex justify-center items-center mt-[5px]'>
                                                    <span className='text-[14px] text-[#757575] text-center'>“I am interested in this offer and want to know more about it.”</span>
                                                </div>

                                                <hr className='mt-[16px] text-[#CECECE]' />

                                                <div className='flex w-full justify-center items-center mt-5'>
                                                    <div className='flex w-1/2 gap-1 justify-center'>
                                                        <img src='/prons.svg' />
                                                        <button className='w-[116px] h-[38px] border-[2px] border-[#4BDDB6] rounded-[999px] shadow-[0px_4px_4px_0px_#0000002E]'>
                                                            <span className='text-[14px] font-semibold text-[#4BDDB6]'>Answer</span>
                                                        </button>
                                                    </div>

                                                    <div className='flex w-1/2 gap-1 justify-center'>
                                                        <img src='/ignore.svg' />
                                                        <button className='w-[116px] h-[38px] border-[2px] border-[#757575] rounded-[999px] shadow-[0px_4px_4px_0px_#0000002E]'>
                                                            <span className='text-[14px] font-semibold text-[#757575]'>Ignore</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <img src='/leftaero-with-border.svg' className='absolute top-1/2 -left-20 cursor-pointer' />
                        <img src='/rightaero-with-border.svg' className='absolute top-1/2 -right-20 cursor-pointer' />
                    </div>
                ) : null}
            </div>
        </AccMainlayout >
    )
}
