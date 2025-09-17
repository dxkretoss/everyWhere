import React, { useState } from 'react'
import Layout from '@/components/Layout/Layout'
import dynamic from "next/dynamic"

const CustomMap = dynamic(() => import("@/components/CustomMap/CustomMap"), {
    ssr: false,
});

export default function received_applications_regular() {

    const [isOn, setIsOn] = useState(true);
    const [selectedCard, setSelectedCard] = useState(true);
    const [skillLevel, setSkillLevel] = useState(30);

    const handleSkillLevelChange = (event) => {
        setSkillLevel(parseInt(event.target.value));
    };

    const [active, setActive] = useState("New");

    const buttons = [
        { label: "New", minWidth: "112px" },
        { label: "Contacted", minWidth: "124px" },
        { label: "Rejected", minWidth: "124px" },
    ];
    return (
        <Layout>
            <div className='h-[57px] flex items-center justify-center shadow-[0px_4px_6px_0px_#0000001C]'>
                <h1 className='text-[24px] font-semibold text-[#000000]'>Received Applications</h1>
            </div>

            <div className='mt-[22px] flex justify-center items-center'>
                <span className='text-[#757575] text-[14px] font-medium'>
                    Click the offer you want to supervise & check the messages you received !
                </span>
            </div>

            <div className="w-[1227px] mx-auto justify-center my-5">
                <div className={`relative mt-[27px]  flex justify-center gap-[5px]`}>
                    <div className="flex">
                        <div className={`bg-[#F4F4F4] rounded-t-[20px] p-[25px] transition-colors`}>
                            <div
                                onClick={() => {
                                    setSelectedCard(!selectedCard);
                                }}
                                className={`cursor-pointer relative w-[356px] h-[460px] border-[4px] border-black rounded-[20px] shadow-[4px_4px_11px_0px_#75757566] flex flex-col overflow-hidden transition-colors bg-white`}
                            >
                                {/* Header */}
                                <div className="relative">
                                    {/* Gradient Header */}
                                    <div
                                        className="w-full h-[79px] rounded-t-[16px] opacity-20"
                                        style={{
                                            background:
                                                "linear-gradient(107.8deg, #F2FEFE 0%, #32D3D5 50%, #29FFC6 100%)",
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
                                                className={`w-4 h-4 rounded-full transition-all duration-300 ${isOn ? "ml-auto bg-[#29ABE2]" : "ml-0 bg-white"
                                                    }`}
                                            ></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Job Title */}
                                <div className="flex flex-col items-center mt-4">
                                    <div className="absolute top-16 left-1/2 -translate-x-1/2 px-4 py-1 bg-black text-white text-sm rounded-full">
                                        Waiter
                                    </div>
                                    <p className="text-[14px] font-medium mt-2 text-[#757575]">30K € / Year</p>
                                </div>

                                {/* Published / Starting */}
                                <div className="flex justify-center items-center gap-6 mt-4">
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-black font-medium text-[12px]">published</span>
                                        <span className="px-2 py-1 bg-[#F5F5F5] rounded-[999px] text-[#A8A8A8] font-medium text-[12px] mt-1">02/09/25</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-black font-medium text-[12px]">starting</span>
                                        <span className="px-2 py-1 bg-[#4BDDB61A] rounded-[999px] text-[#4BDDB6] font-medium text-[12px] mt-1">02/09/25</span>
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="flex justify-center gap-4 mt-3 text-[12px]">
                                    <div className="flex items-center gap-1">
                                        <img src='/shortterm.svg' />
                                        <span>Short-term</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <img src='/3years.svg' />
                                        <span>3 Years</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <img src='/introvert.svg' />
                                        <span>Introvert +</span>
                                    </div>
                                </div>

                                <hr className='mt-2 text-[#CECECE]' />

                                {/* Workplace Overview */}
                                <div className="mt-4 px-4 flex flex-col gap-2 justify-center items-center">
                                    <h3 className="text-center text-[14px] font-medium text-[#333333]">Workplace Overview</h3>
                                    <img src='/workoverview.svg' className='w-[299px] h-[67px]' />
                                    <div className='w-[299px] h-[85px]'>
                                        <CustomMap />
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="flex justify-center gap-6 mt-1">
                                    <p className='flex gap-1'>
                                        <span className="text-[#29ABE2] text-[16px] font-semibold">657</span>
                                        <span className="text-[#757575] text-[14px">visitors</span>
                                    </p>
                                    <p className='flex gap-1'>
                                        <span className="text-[#29ABE2] text-[16px] font-semibold">12</span>
                                        <span className="text-[#757575] text-[14px">applicants</span>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className='flex relative'>
                            <div className={`p-[25px] `}>
                                <div className={`relative cursor-not-allowed w-[356px] h-[460px] border border-[#E6E6E6] rounded-[20px] shadow-[4px_4px_11px_0px_#75757566] flex flex-col overflow-hidden transition-color`}>
                                    {/* Header */}
                                    <div className="absolute inset-0 bg-[#FFFFFF2F] backdrop-blur-[5px] rounded-[20px] shadow-[4px_4px_11px_0px_#75757566] z-[9999] pointer-events-auto"></div>

                                    <div className="relative">
                                        {/* Gradient Header */}
                                        <div
                                            className="w-full h-[79px] rounded-t-[16px] opacity-20"
                                            style={{
                                                background:
                                                    "linear-gradient(107.8deg, #F2FEFE 0%, #32D3D5 50%, #29FFC6 100%)",
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
                                                    className={`w-4 h-4 rounded-full transition-all duration-300 ${isOn ? "ml-auto bg-[#29ABE2]" : "ml-0 bg-white"
                                                        }`}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Job Title */}
                                    <div className="flex flex-col items-center mt-4">
                                        <div className="absolute top-16 left-1/2 -translate-x-1/2 px-4 py-1 bg-black text-white text-sm rounded-full">
                                            Waiter
                                        </div>
                                        <p className="text-[14px] font-medium mt-2 text-[#757575]">30K € / Year</p>
                                    </div>

                                    {/* Published / Starting */}
                                    <div className="flex justify-center items-center gap-6 mt-4">
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-black font-medium text-[12px]">published</span>
                                            <span className="px-2 py-1 bg-[#F5F5F5] rounded-[999px] text-[#A8A8A8] font-medium text-[12px] mt-1">02/09/25</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-black font-medium text-[12px]">starting</span>
                                            <span className="px-2 py-1 bg-[#4BDDB61A] rounded-[999px] text-[#4BDDB6] font-medium text-[12px] mt-1">02/09/25</span>
                                        </div>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex justify-center gap-4 mt-3 text-[12px]">
                                        <div className="flex items-center gap-1">
                                            <img src='/shortterm.svg' />
                                            <span>Short-term</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <img src='/3years.svg' />
                                            <span>3 Years</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <img src='/introvert.svg' />
                                            <span>Introvert +</span>
                                        </div>
                                    </div>

                                    <hr className='mt-2 text-[#CECECE]' />

                                    {/* Workplace Overview */}
                                    <div className="mt-4 px-4 flex flex-col gap-2 justify-center items-center">
                                        <h3 className="text-center text-[14px] font-medium text-[#333333]">Workplace Overview</h3>
                                        <img src='/workoverview.svg' className='w-[299px] h-[67px]' />
                                        <div className='w-[299px] h-[85px]'>
                                            <CustomMap />
                                        </div>
                                    </div>

                                    {/* Stats */}
                                    <div className="flex justify-center gap-6 mt-1">
                                        <p className='flex gap-1'>
                                            <span className="text-[#29ABE2] text-[16px] font-semibold">657</span>
                                            <span className="text-[#757575] text-[14px">visitors</span>
                                        </p>
                                        <p className='flex gap-1'>
                                            <span className="text-[#29ABE2] text-[16px] font-semibold">12</span>
                                            <span className="text-[#757575] text-[14px">applicants</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className={`p-[25px]`}>
                                <div className={`relative cursor-not-allowed w-[356px] h-[460px] border border-[#E6E6E6] rounded-[20px] shadow-[4px_4px_11px_0px_#75757566] flex flex-col overflow-hidden transition-color`}>
                                    {/* Header */}
                                    <div className="absolute inset-0 bg-[#FFFFFF2F] backdrop-blur-[5px] rounded-[20px] shadow-[4px_4px_11px_0px_#75757566] z-[9999] pointer-events-auto"></div>

                                    <div className="relative">
                                        {/* Gradient Header */}
                                        <div
                                            className="w-full h-[79px] rounded-t-[16px] opacity-20"
                                            style={{
                                                background:
                                                    "linear-gradient(107.8deg, #F2FEFE 0%, #32D3D5 50%, #29FFC6 100%)",
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
                                                    className={`w-4 h-4 rounded-full transition-all duration-300 ${isOn ? "ml-auto bg-[#29ABE2]" : "ml-0 bg-white"
                                                        }`}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Job Title */}
                                    <div className="flex flex-col items-center mt-4">
                                        <div className="absolute top-16 left-1/2 -translate-x-1/2 px-4 py-1 bg-black text-white text-sm rounded-full">
                                            Waiter
                                        </div>
                                        <p className="text-[14px] font-medium mt-2 text-[#757575]">30K € / Year</p>
                                    </div>

                                    {/* Published / Starting */}
                                    <div className="flex justify-center items-center gap-6 mt-4">
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-black font-medium text-[12px]">published</span>
                                            <span className="px-2 py-1 bg-[#F5F5F5] rounded-[999px] text-[#A8A8A8] font-medium text-[12px] mt-1">02/09/25</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-black font-medium text-[12px]">starting</span>
                                            <span className="px-2 py-1 bg-[#4BDDB61A] rounded-[999px] text-[#4BDDB6] font-medium text-[12px] mt-1">02/09/25</span>
                                        </div>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex justify-center gap-4 mt-3 text-[12px]">
                                        <div className="flex items-center gap-1">
                                            <img src='/shortterm.svg' />
                                            <span>Short-term</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <img src='/3years.svg' />
                                            <span>3 Years</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <img src='/introvert.svg' />
                                            <span>Introvert +</span>
                                        </div>
                                    </div>

                                    <hr className='mt-2 text-[#CECECE]' />

                                    {/* Workplace Overview */}
                                    <div className="mt-4 px-4 flex flex-col gap-2 justify-center items-center">
                                        <h3 className="text-center text-[14px] font-medium text-[#333333]">Workplace Overview</h3>
                                        <img src='/workoverview.svg' className='w-[299px] h-[67px]' />
                                        <div className='w-[299px] h-[85px]'>
                                            <CustomMap />
                                        </div>
                                    </div>

                                    {/* Stats */}
                                    <div className="flex justify-center gap-6 mt-1">
                                        <p className='flex gap-1'>
                                            <span className="text-[#29ABE2] text-[16px] font-semibold">657</span>
                                            <span className="text-[#757575] text-[14px">visitors</span>
                                        </p>
                                        <p className='flex gap-1'>
                                            <span className="text-[#29ABE2] text-[16px] font-semibold">12</span>
                                            <span className="text-[#757575] text-[14px">applicants</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="absolute top-50 left-7 z-[9999] h-[119px] w-[761px]"
                                style={{
                                    background: "linear-gradient(107.8deg, rgba(242,254,254,0.2) 0%, rgba(50,211,213,0.2) 50%, rgba(41,255,198,0.2) 100%)",
                                    boxShadow: '0px 5px 11px 0px #2D2D2D',
                                }}
                            >
                                <div className='relative z-[99999]'>
                                    <img src='/pre-infi-left.svg' className='absolute top-0 left-0 opacity-70' />
                                    <img src='/pre-infi-right.svg' className='absolute top-[70px] right-0 opacity-70' />
                                    <img src='/pre-top.svg' className='absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-70' />
                                </div>
                                <div className="absolute inset-0 mt-4 flex flex-col justify-center items-center text-center gap-2">
                                    <span className="font-semibold text-[18px] text-[#333333]">
                                        Unlock your Premium Account
                                    </span>
                                    <span className="text-[14px] font-medium text-[#333333]">
                                        Get detailed analytics & post an endless number of job offers!
                                    </span>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                {selectedCard ? (
                    <div className='h-[942px] w-[1227px] flex flex-col rounded-bl-[20px] rounded-tr-[20px] rounded-br-[20px] bg-[#F4F4F4]'>
                        <div className="flex justify-center items-center py-[25px]">
                            <div className="w-[381px] h-[52px] bg-white flex justify-center items-center shadow-[0px_4px_11px_0px_#CECECEC7] rounded-[10px]">
                                {buttons.map((btn) => (
                                    <button
                                        key={btn.label}
                                        onClick={() => setActive(btn.label)}
                                        style={{ minWidth: btn.minWidth }}
                                        className={`h-[40px] rounded-[10px] font-semibold text-[16px] transition-colors flex  justify-center items-center
                                            ${active === btn.label ? "bg-[#29ABE2] text-white" : "bg-white text-black"}
                                        `}
                                    >
                                        {btn.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto p-[30px]">
                            <div className='flex flex-col gap-[50px]'>
                                <div className='flex flex-col gap-[50px]'>
                                    <div className='flex gap-[50px]'>
                                        <div className="relative w-[356px] h-[376px] border-[1px] border-[#CECECE] rounded-[20px] shadow-[4px_4px_11px_0px_#75757578] bg-white flex flex-col overflow-hidden">

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

                                                <div className="absolute top-3 right-4 flex gap-2  items-center">
                                                    <img src='/download.svg' className='cursor-pointer' />
                                                    <span className="text-[#757575] text-[12px] font-semibold">Download CV</span>
                                                </div>

                                                <div className="flex flex-col items-center mt-4">
                                                    <img src='/user.svg' className="absolute top-10 left-1/2 -translate-x-1/2" />
                                                    <span className='mt-5 text-[16px] text-[#333333] font-semibold'>John Doe</span>
                                                    <p className="text-[14px] font-medium text-[#757575]">Waiter</p>
                                                </div>

                                                <div className='flex justify-center items-center mt-[27px]'>
                                                    <span className='font-medium text-[14px] text-[#333333] text-center'>Self-Rated Matching</span>
                                                </div>
                                                <div className='flex justify-center mt-[9px]'>
                                                    <div className="flex justify-center w-[227px] h-[22px] items-center rounded-[24px] shadow-[4px_4px_11px_0px_#75757578]" style={{ backgroundColor: '#ffffff' }}>
                                                        <div className="w-[227px] h-[20px] rounded-[999px] border-5 border-[#FFFFFF]">
                                                            <input
                                                                type="range"
                                                                min="0"
                                                                max="100"
                                                                value={skillLevel}
                                                                onChange={handleSkillLevelChange}
                                                                className="custom-range w-full cursor-pointer h-[14px] appearance-none transition-all duration-200 rounded-[999px] relative -top-1"
                                                                style={{
                                                                    background: `linear-gradient(
                                                    to right,
                                                    #29ABE2 0%,
                                                    #29ABE2 ${skillLevel}%,
                                                    rgba(174, 174, 174, 0.39) ${skillLevel}%,
                                                    rgba(248, 248, 248, 0.6) 100%
                                                )`,
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Tags */}
                                                <div className="flex justify-center gap-4 mt-[14px] text-[12px]">
                                                    <div className="flex items-center gap-1">
                                                        <img src='/shortterm.svg' />
                                                        <span>Short-term</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <img src='/3years.svg' />
                                                        <span>3 Years</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <img src='/introvert.svg' />
                                                        <span>Introvert +</span>
                                                    </div>
                                                </div>

                                                <hr className='mt-[19px] text-[#CECECE]' />

                                                <div className='flex w-full justify-center items-center mt-5'>
                                                    <div className='flex w-1/2 gap-1 justify-center'>
                                                        <img src='/prons.svg' />
                                                        <button className='w-[116px] h-[38px] border-[2px] border-[#4BDDB6] rounded-[999px] shadow-[0px_4px_4px_0px_#0000002E]'>
                                                            <span className='text-[14px] font-semibold text-[#4BDDB6]'>Contact</span>
                                                        </button>
                                                    </div>

                                                    <div className='flex w-1/2 gap-1 justify-center'>
                                                        <img src='/crons.svg' />
                                                        <button className='w-[116px] h-[38px] border-[2px] border-[#FF6E6E] rounded-[999px] shadow-[0px_4px_4px_0px_#0000002E]'>
                                                            <span className='text-[14px] font-semibold text-[#FF6E6E]'>Reject</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative w-[356px] h-[376px] border-[1px] border-[#CECECE] rounded-[20px] shadow-[4px_4px_11px_0px_#75757578] bg-white flex flex-col overflow-hidden">

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

                                                <div className="absolute top-3 right-4 flex gap-2  items-center">
                                                    <img src='/download.svg' className='cursor-pointer' />
                                                    <span className="text-[#757575] text-[12px] font-semibold">Download CV</span>
                                                </div>

                                                <div className="flex flex-col items-center mt-4">
                                                    <img src='/user.svg' className="absolute top-10 left-1/2 -translate-x-1/2" />
                                                    <span className='mt-5 text-[16px] text-[#333333] font-semibold'>John Doe</span>
                                                    <p className="text-[14px] font-medium text-[#757575]">Waiter</p>
                                                </div>

                                                <div className='flex justify-center items-center mt-[27px]'>
                                                    <span className='font-medium text-[14px] text-[#333333] text-center'>Self-Rated Matching</span>
                                                </div>
                                                <div className='flex justify-center mt-[9px]'>
                                                    <div className="flex justify-center w-[227px] h-[22px] items-center rounded-[24px] shadow-[4px_4px_11px_0px_#75757578]" style={{ backgroundColor: '#ffffff' }}>
                                                        <div className="w-[227px] h-[20px] rounded-[999px] border-5 border-[#FFFFFF]">
                                                            <input
                                                                type="range"
                                                                min="0"
                                                                max="100"
                                                                value={skillLevel}
                                                                onChange={handleSkillLevelChange}
                                                                className="custom-range w-full cursor-pointer h-[14px] appearance-none transition-all duration-200 rounded-[999px] relative -top-1"
                                                                style={{
                                                                    background: `linear-gradient(
                                                    to right,
                                                    #29ABE2 0%,
                                                    #29ABE2 ${skillLevel}%,
                                                    rgba(174, 174, 174, 0.39) ${skillLevel}%,
                                                    rgba(248, 248, 248, 0.6) 100%
                                                )`,
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Tags */}
                                                <div className="flex justify-center gap-4 mt-[14px] text-[12px]">
                                                    <div className="flex items-center gap-1">
                                                        <img src='/shortterm.svg' />
                                                        <span>Short-term</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <img src='/3years.svg' />
                                                        <span>3 Years</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <img src='/introvert.svg' />
                                                        <span>Introvert +</span>
                                                    </div>
                                                </div>

                                                <hr className='mt-[19px] text-[#CECECE]' />

                                                <div className='flex w-full justify-center items-center mt-5'>
                                                    <div className='flex w-1/2 gap-1 justify-center'>
                                                        <img src='/prons.svg' />
                                                        <button className='w-[116px] h-[38px] border-[2px] border-[#4BDDB6] rounded-[999px] shadow-[0px_4px_4px_0px_#0000002E]'>
                                                            <span className='text-[14px] font-semibold text-[#4BDDB6]'>Contact</span>
                                                        </button>
                                                    </div>

                                                    <div className='flex w-1/2 gap-1 justify-center'>
                                                        <img src='/crons.svg' />
                                                        <button className='w-[116px] h-[38px] border-[2px] border-[#FF6E6E] rounded-[999px] shadow-[0px_4px_4px_0px_#0000002E]'>
                                                            <span className='text-[14px] font-semibold text-[#FF6E6E]'>Reject</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative w-[356px] h-[376px] border-[1px] border-[#CECECE] rounded-[20px] shadow-[4px_4px_11px_0px_#75757578] bg-white flex flex-col overflow-hidden">

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

                                                <div className="absolute top-3 right-4 flex gap-2  items-center">
                                                    <img src='/download.svg' className='cursor-pointer' />
                                                    <span className="text-[#757575] text-[12px] font-semibold">Download CV</span>
                                                </div>

                                                <div className="flex flex-col items-center mt-4">
                                                    <img src='/user.svg' className="absolute top-10 left-1/2 -translate-x-1/2" />
                                                    <span className='mt-5 text-[16px] text-[#333333] font-semibold'>John Doe</span>
                                                    <p className="text-[14px] font-medium text-[#757575]">Waiter</p>
                                                </div>

                                                <div className='flex justify-center items-center mt-[27px]'>
                                                    <span className='font-medium text-[14px] text-[#333333] text-center'>Self-Rated Matching</span>
                                                </div>
                                                <div className='flex justify-center mt-[9px]'>
                                                    <div className="flex justify-center w-[227px] h-[22px] items-center rounded-[24px] shadow-[4px_4px_11px_0px_#75757578]" style={{ backgroundColor: '#ffffff' }}>
                                                        <div className="w-[227px] h-[20px] rounded-[999px] border-5 border-[#FFFFFF]">
                                                            <input
                                                                type="range"
                                                                min="0"
                                                                max="100"
                                                                value={skillLevel}
                                                                onChange={handleSkillLevelChange}
                                                                className="custom-range w-full cursor-pointer h-[14px] appearance-none transition-all duration-200 rounded-[999px] relative -top-1"
                                                                style={{
                                                                    background: `linear-gradient(
                                                    to right,
                                                    #29ABE2 0%,
                                                    #29ABE2 ${skillLevel}%,
                                                    rgba(174, 174, 174, 0.39) ${skillLevel}%,
                                                    rgba(248, 248, 248, 0.6) 100%
                                                )`,
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Tags */}
                                                <div className="flex justify-center gap-4 mt-[14px] text-[12px]">
                                                    <div className="flex items-center gap-1">
                                                        <img src='/shortterm.svg' />
                                                        <span>Short-term</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <img src='/3years.svg' />
                                                        <span>3 Years</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <img src='/introvert.svg' />
                                                        <span>Introvert +</span>
                                                    </div>
                                                </div>

                                                <hr className='mt-[19px] text-[#CECECE]' />

                                                <div className='flex w-full justify-center items-center mt-5'>
                                                    <div className='flex w-1/2 gap-1 justify-center'>
                                                        <img src='/prons.svg' />
                                                        <button className='w-[116px] h-[38px] border-[2px] border-[#4BDDB6] rounded-[999px] shadow-[0px_4px_4px_0px_#0000002E]'>
                                                            <span className='text-[14px] font-semibold text-[#4BDDB6]'>Contact</span>
                                                        </button>
                                                    </div>

                                                    <div className='flex w-1/2 gap-1 justify-center'>
                                                        <img src='/crons.svg' />
                                                        <button className='w-[116px] h-[38px] border-[2px] border-[#FF6E6E] rounded-[999px] shadow-[0px_4px_4px_0px_#0000002E]'>
                                                            <span className='text-[14px] font-semibold text-[#FF6E6E]'>Reject</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex gap-[50px]'>
                                        <div className="relative w-[356px] h-[376px] border-[1px] border-[#CECECE] rounded-[20px] shadow-[4px_4px_11px_0px_#75757578] bg-white flex flex-col overflow-hidden">

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

                                                <div className="absolute top-3 right-4 flex gap-2  items-center">
                                                    <img src='/download.svg' className='cursor-pointer' />
                                                    <span className="text-[#757575] text-[12px] font-semibold">Download CV</span>
                                                </div>

                                                <div className="flex flex-col items-center mt-4">
                                                    <img src='/user.svg' className="absolute top-10 left-1/2 -translate-x-1/2" />
                                                    <span className='mt-5 text-[16px] text-[#333333] font-semibold'>John Doe</span>
                                                    <p className="text-[14px] font-medium text-[#757575]">Waiter</p>
                                                </div>

                                                <div className='flex justify-center items-center mt-[5px]'>
                                                    <span className='font-medium text-[12px] text-[#FF6E6E] text-center'>Not Authorized (might need a visa)</span>
                                                </div>

                                                <div className='flex justify-center items-center mt-[5px]'>
                                                    <span className='font-medium text-[14px] text-[#333333] text-center'>Self-Rated Matching</span>
                                                </div>
                                                <div className='flex justify-center mt-[9px]'>
                                                    <div className="flex justify-center w-[227px] h-[22px] items-center rounded-[24px] shadow-[4px_4px_11px_0px_#75757578]" style={{ backgroundColor: '#ffffff' }}>
                                                        <div className="w-[227px] h-[20px] rounded-[999px] border-5 border-[#FFFFFF]">
                                                            <input
                                                                type="range"
                                                                min="0"
                                                                max="100"
                                                                value={skillLevel}
                                                                onChange={handleSkillLevelChange}
                                                                className="custom-range w-full cursor-pointer h-[14px] appearance-none transition-all duration-200 rounded-[999px] relative -top-1"
                                                                style={{
                                                                    background: `linear-gradient(
                                                    to right,
                                                    #29ABE2 0%,
                                                    #29ABE2 ${skillLevel}%,
                                                    rgba(174, 174, 174, 0.39) ${skillLevel}%,
                                                    rgba(248, 248, 248, 0.6) 100%
                                                )`,
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Tags */}
                                                <div className="flex justify-center gap-4 mt-[14px] text-[12px]">
                                                    <div className="flex items-center gap-1">
                                                        <img src='/shortterm.svg' />
                                                        <span>Short-term</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <img src='/3years.svg' />
                                                        <span>3 Years</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <img src='/introvert.svg' />
                                                        <span>Introvert +</span>
                                                    </div>
                                                </div>

                                                <hr className='mt-[19px] text-[#CECECE]' />

                                                <div className='flex w-full justify-center items-center mt-5'>
                                                    <div className='flex w-1/2 gap-1 justify-center'>
                                                        <img src='/prons.svg' />
                                                        <button className='w-[116px] h-[38px] border-[2px] border-[#4BDDB6] rounded-[999px] shadow-[0px_4px_4px_0px_#0000002E]'>
                                                            <span className='text-[14px] font-semibold text-[#4BDDB6]'>Contact</span>
                                                        </button>
                                                    </div>

                                                    <div className='flex w-1/2 gap-1 justify-center'>
                                                        <img src='/crons.svg' />
                                                        <button className='w-[116px] h-[38px] border-[2px] border-[#FF6E6E] rounded-[999px] shadow-[0px_4px_4px_0px_#0000002E]'>
                                                            <span className='text-[14px] font-semibold text-[#FF6E6E]'>Reject</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative w-[356px] h-[376px] border-[1px] border-[#CECECE] rounded-[20px] shadow-[4px_4px_11px_0px_#75757578] bg-white flex flex-col overflow-hidden">

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

                                                <div className="absolute top-3 right-4 flex gap-2  items-center">
                                                    <img src='/download.svg' className='cursor-pointer' />
                                                    <span className="text-[#757575] text-[12px] font-semibold">Download CV</span>
                                                </div>

                                                <div className="flex flex-col items-center mt-4">
                                                    <img src='/user.svg' className="absolute top-10 left-1/2 -translate-x-1/2" />
                                                    <span className='mt-5 text-[16px] text-[#333333] font-semibold'>John Doe</span>
                                                    <p className="text-[14px] font-medium text-[#757575]">Waiter</p>
                                                </div>

                                                <div className='flex justify-center items-center mt-[5px]'>
                                                    <span className='font-medium text-[12px] text-[#FF6E6E] text-center'>Not Authorized (might need a visa)</span>
                                                </div>

                                                <div className='flex justify-center items-center mt-[5px]'>
                                                    <span className='font-medium text-[14px] text-[#333333] text-center'>Self-Rated Matching</span>
                                                </div>
                                                <div className='flex justify-center mt-[9px]'>
                                                    <div className="flex justify-center w-[227px] h-[22px] items-center rounded-[24px] shadow-[4px_4px_11px_0px_#75757578]" style={{ backgroundColor: '#ffffff' }}>
                                                        <div className="w-[227px] h-[20px] rounded-[999px] border-5 border-[#FFFFFF]">
                                                            <input
                                                                type="range"
                                                                min="0"
                                                                max="100"
                                                                value={skillLevel}
                                                                onChange={handleSkillLevelChange}
                                                                className="custom-range w-full cursor-pointer h-[14px] appearance-none transition-all duration-200 rounded-[999px] relative -top-1"
                                                                style={{
                                                                    background: `linear-gradient(
                                                    to right,
                                                    #29ABE2 0%,
                                                    #29ABE2 ${skillLevel}%,
                                                    rgba(174, 174, 174, 0.39) ${skillLevel}%,
                                                    rgba(248, 248, 248, 0.6) 100%
                                                )`,
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Tags */}
                                                <div className="flex justify-center gap-4 mt-[14px] text-[12px]">
                                                    <div className="flex items-center gap-1">
                                                        <img src='/shortterm.svg' />
                                                        <span>Short-term</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <img src='/3years.svg' />
                                                        <span>3 Years</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <img src='/introvert.svg' />
                                                        <span>Introvert +</span>
                                                    </div>
                                                </div>

                                                <hr className='mt-[19px] text-[#CECECE]' />

                                                <div className='flex w-full justify-center items-center mt-5'>
                                                    <div className='flex w-1/2 gap-1 justify-center'>
                                                        <img src='/prons.svg' />
                                                        <button className='w-[116px] h-[38px] border-[2px] border-[#4BDDB6] rounded-[999px] shadow-[0px_4px_4px_0px_#0000002E]'>
                                                            <span className='text-[14px] font-semibold text-[#4BDDB6]'>Contact</span>
                                                        </button>
                                                    </div>

                                                    <div className='flex w-1/2 gap-1 justify-center'>
                                                        <img src='/crons.svg' />
                                                        <button className='w-[116px] h-[38px] border-[2px] border-[#FF6E6E] rounded-[999px] shadow-[0px_4px_4px_0px_#0000002E]'>
                                                            <span className='text-[14px] font-semibold text-[#FF6E6E]'>Reject</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative w-[356px] h-[376px] border-[1px] border-[#CECECE] rounded-[20px] shadow-[4px_4px_11px_0px_#75757578] bg-white flex flex-col overflow-hidden">
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

                                                <div className="absolute top-3 right-4 flex gap-2  items-center">
                                                    <img src='/download.svg' className='cursor-pointer' />
                                                    <span className="text-[#757575] text-[12px] font-semibold">Download CV</span>
                                                </div>

                                                <div className="flex flex-col items-center mt-4">
                                                    <img src='/user.svg' className="absolute top-10 left-1/2 -translate-x-1/2" />
                                                    <span className='mt-5 text-[16px] text-[#333333] font-semibold'>John Doe</span>
                                                    <p className="text-[14px] font-medium text-[#757575]">Waiter</p>
                                                </div>

                                                <div className='flex justify-center items-center mt-[5px]'>
                                                    <span className='font-medium text-[12px] text-[#FF6E6E] text-center'>Not Authorized (might need a visa)</span>
                                                </div>

                                                <div className='flex justify-center items-center mt-[5px]'>
                                                    <span className='font-medium text-[14px] text-[#333333] text-center'>Self-Rated Matching</span>
                                                </div>
                                                <div className='flex justify-center mt-[9px]'>
                                                    <div className="flex justify-center w-[227px] h-[22px] items-center rounded-[24px] shadow-[4px_4px_11px_0px_#75757578]" style={{ backgroundColor: '#ffffff' }}>
                                                        <div className="w-[227px] h-[20px] rounded-[999px] border-5 border-[#FFFFFF]">
                                                            <input
                                                                type="range"
                                                                min="0"
                                                                max="100"
                                                                value={skillLevel}
                                                                onChange={handleSkillLevelChange}
                                                                className="custom-range w-full cursor-pointer h-[14px] appearance-none transition-all duration-200 rounded-[999px] relative -top-1"
                                                                style={{
                                                                    background: `linear-gradient(
                                                    to right,
                                                    #29ABE2 0%,
                                                    #29ABE2 ${skillLevel}%,
                                                    rgba(174, 174, 174, 0.39) ${skillLevel}%,
                                                    rgba(248, 248, 248, 0.6) 100%
                                                )`,
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Tags */}
                                                <div className="flex justify-center gap-4 mt-[14px] text-[12px]">
                                                    <div className="flex items-center gap-1">
                                                        <img src='/shortterm.svg' />
                                                        <span>Short-term</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <img src='/3years.svg' />
                                                        <span>3 Years</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <img src='/introvert.svg' />
                                                        <span>Introvert +</span>
                                                    </div>
                                                </div>

                                                <hr className='mt-[19px] text-[#CECECE]' />

                                                <div className='flex w-full justify-center items-center mt-5'>
                                                    <div className='flex w-1/2 gap-1 justify-center'>
                                                        <img src='/prons.svg' />
                                                        <button className='w-[116px] h-[38px] border-[2px] border-[#4BDDB6] rounded-[999px] shadow-[0px_4px_4px_0px_#0000002E]'>
                                                            <span className='text-[14px] font-semibold text-[#4BDDB6]'>Contact</span>
                                                        </button>
                                                    </div>

                                                    <div className='flex w-1/2 gap-1 justify-center'>
                                                        <img src='/crons.svg' />
                                                        <button className='w-[116px] h-[38px] border-[2px] border-[#FF6E6E] rounded-[999px] shadow-[0px_4px_4px_0px_#0000002E]'>
                                                            <span className='text-[14px] font-semibold text-[#FF6E6E]'>Reject</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex gap-[50px]'>
                                        <div className="relative w-[356px] h-[376px] border-[1px] border-[#CECECE] rounded-[20px] shadow-[4px_4px_11px_0px_#75757578] bg-white flex flex-col overflow-hidden">

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

                                                <div className="absolute top-3 right-4 flex gap-2  items-center">
                                                    <img src='/download.svg' className='cursor-pointer' />
                                                    <span className="text-[#757575] text-[12px] font-semibold">Download CV</span>
                                                </div>

                                                <div className="flex flex-col items-center mt-4">
                                                    <img src='/user.svg' className="absolute top-10 left-1/2 -translate-x-1/2" />
                                                    <span className='mt-5 text-[16px] text-[#333333] font-semibold'>John Doe</span>
                                                    <p className="text-[14px] font-medium text-[#757575]">Waiter</p>
                                                </div>

                                                <div className='flex justify-center items-center mt-[27px]'>
                                                    <span className='font-medium text-[14px] text-[#333333] text-center'>Self-Rated Matching</span>
                                                </div>
                                                <div className='flex justify-center mt-[9px]'>
                                                    <div className="flex justify-center w-[227px] h-[22px] items-center rounded-[24px] shadow-[4px_4px_11px_0px_#75757578]" style={{ backgroundColor: '#ffffff' }}>
                                                        <div className="w-[227px] h-[20px] rounded-[999px] border-5 border-[#FFFFFF]">
                                                            <input
                                                                type="range"
                                                                min="0"
                                                                max="100"
                                                                value={skillLevel}
                                                                onChange={handleSkillLevelChange}
                                                                className="custom-range w-full cursor-pointer h-[14px] appearance-none transition-all duration-200 rounded-[999px] relative -top-1"
                                                                style={{
                                                                    background: `linear-gradient(
                                                    to right,
                                                    #29ABE2 0%,
                                                    #29ABE2 ${skillLevel}%,
                                                    rgba(174, 174, 174, 0.39) ${skillLevel}%,
                                                    rgba(248, 248, 248, 0.6) 100%
                                                )`,
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Tags */}
                                                <div className="flex justify-center gap-4 mt-[14px] text-[12px]">
                                                    <div className="flex items-center gap-1">
                                                        <img src='/shortterm.svg' />
                                                        <span>Short-term</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <img src='/3years.svg' />
                                                        <span>3 Years</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <img src='/introvert.svg' />
                                                        <span>Introvert +</span>
                                                    </div>
                                                </div>

                                                <hr className='mt-[19px] text-[#CECECE]' />

                                                <div className='flex w-full justify-center items-center mt-5'>
                                                    <div className='flex w-1/2 gap-1 justify-center'>
                                                        <img src='/prons.svg' />
                                                        <button className='w-[116px] h-[38px] border-[2px] border-[#4BDDB6] rounded-[999px] shadow-[0px_4px_4px_0px_#0000002E]'>
                                                            <span className='text-[14px] font-semibold text-[#4BDDB6]'>Contact</span>
                                                        </button>
                                                    </div>

                                                    <div className='flex w-1/2 gap-1 justify-center'>
                                                        <img src='/crons.svg' />
                                                        <button className='w-[116px] h-[38px] border-[2px] border-[#FF6E6E] rounded-[999px] shadow-[0px_4px_4px_0px_#0000002E]'>
                                                            <span className='text-[14px] font-semibold text-[#FF6E6E]'>Reject</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative w-[356px] h-[376px] border-[1px] border-[#CECECE] rounded-[20px] shadow-[4px_4px_11px_0px_#75757578] bg-white flex flex-col overflow-hidden">

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

                                                <div className="absolute top-3 right-4 flex gap-2  items-center">
                                                    <img src='/download.svg' className='cursor-pointer' />
                                                    <span className="text-[#757575] text-[12px] font-semibold">Download CV</span>
                                                </div>

                                                <div className="flex flex-col items-center mt-4">
                                                    <img src='/user.svg' className="absolute top-10 left-1/2 -translate-x-1/2" />
                                                    <span className='mt-5 text-[16px] text-[#333333] font-semibold'>John Doe</span>
                                                    <p className="text-[14px] font-medium text-[#757575]">Waiter</p>
                                                </div>

                                                <div className='flex justify-center items-center mt-[5px]'>
                                                    <span className='font-medium text-[12px] text-[#FF6E6E] text-center'>Not Authorized (might need a visa)</span>
                                                </div>

                                                <div className='flex justify-center items-center mt-[5px]'>
                                                    <span className='font-medium text-[14px] text-[#333333] text-center'>Self-Rated Matching</span>
                                                </div>
                                                <div className='flex justify-center mt-[9px]'>
                                                    <div className="flex justify-center w-[227px] h-[22px] items-center rounded-[24px] shadow-[4px_4px_11px_0px_#75757578]" style={{ backgroundColor: '#ffffff' }}>
                                                        <div className="w-[227px] h-[20px] rounded-[999px] border-5 border-[#FFFFFF]">
                                                            <input
                                                                type="range"
                                                                min="0"
                                                                max="100"
                                                                value={skillLevel}
                                                                onChange={handleSkillLevelChange}
                                                                className="custom-range w-full cursor-pointer h-[14px] appearance-none transition-all duration-200 rounded-[999px] relative -top-1"
                                                                style={{
                                                                    background: `linear-gradient(
                                                    to right,
                                                    #29ABE2 0%,
                                                    #29ABE2 ${skillLevel}%,
                                                    rgba(174, 174, 174, 0.39) ${skillLevel}%,
                                                    rgba(248, 248, 248, 0.6) 100%
                                                )`,
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Tags */}
                                                <div className="flex justify-center gap-4 mt-[14px] text-[12px]">
                                                    <div className="flex items-center gap-1">
                                                        <img src='/shortterm.svg' />
                                                        <span>Short-term</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <img src='/3years.svg' />
                                                        <span>3 Years</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <img src='/introvert.svg' />
                                                        <span>Introvert +</span>
                                                    </div>
                                                </div>

                                                <hr className='mt-[19px] text-[#CECECE]' />

                                                <div className='flex w-full justify-center items-center mt-5'>
                                                    <div className='flex w-1/2 gap-1 justify-center'>
                                                        <img src='/prons.svg' />
                                                        <button className='w-[116px] h-[38px] border-[2px] border-[#4BDDB6] rounded-[999px] shadow-[0px_4px_4px_0px_#0000002E]'>
                                                            <span className='text-[14px] font-semibold text-[#4BDDB6]'>Contact</span>
                                                        </button>
                                                    </div>

                                                    <div className='flex w-1/2 gap-1 justify-center'>
                                                        <img src='/crons.svg' />
                                                        <button className='w-[116px] h-[38px] border-[2px] border-[#FF6E6E] rounded-[999px] shadow-[0px_4px_4px_0px_#0000002E]'>
                                                            <span className='text-[14px] font-semibold text-[#FF6E6E]'>Reject</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative w-[356px] h-[376px] border-[1px] border-[#CECECE] rounded-[20px] shadow-[4px_4px_11px_0px_#75757578] bg-white flex flex-col overflow-hidden">
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

                                                <div className="absolute top-3 right-4 flex gap-2  items-center">
                                                    <img src='/download.svg' className='cursor-pointer' />
                                                    <span className="text-[#757575] text-[12px] font-semibold">Download CV</span>
                                                </div>

                                                <div className="flex flex-col items-center mt-4">
                                                    <img src='/user.svg' className="absolute top-10 left-1/2 -translate-x-1/2" />
                                                    <span className='mt-5 text-[16px] text-[#333333] font-semibold'>John Doe</span>
                                                    <p className="text-[14px] font-medium text-[#757575]">Waiter</p>
                                                </div>

                                                <div className='flex justify-center items-center mt-[5px]'>
                                                    <span className='font-medium text-[12px] text-[#FF6E6E] text-center'>Not Authorized (might need a visa)</span>
                                                </div>

                                                <div className='flex justify-center items-center mt-[5px]'>
                                                    <span className='font-medium text-[14px] text-[#333333] text-center'>Self-Rated Matching</span>
                                                </div>
                                                <div className='flex justify-center mt-[9px]'>
                                                    <div className="flex justify-center w-[227px] h-[22px] items-center rounded-[24px] shadow-[4px_4px_11px_0px_#75757578]" style={{ backgroundColor: '#ffffff' }}>
                                                        <div className="w-[227px] h-[20px] rounded-[999px] border-5 border-[#FFFFFF]">
                                                            <input
                                                                type="range"
                                                                min="0"
                                                                max="100"
                                                                value={skillLevel}
                                                                onChange={handleSkillLevelChange}
                                                                className="custom-range w-full cursor-pointer h-[14px] appearance-none transition-all duration-200 rounded-[999px] relative -top-1"
                                                                style={{
                                                                    background: `linear-gradient(
                                                    to right,
                                                    #29ABE2 0%,
                                                    #29ABE2 ${skillLevel}%,
                                                    rgba(174, 174, 174, 0.39) ${skillLevel}%,
                                                    rgba(248, 248, 248, 0.6) 100%
                                                )`,
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Tags */}
                                                <div className="flex justify-center gap-4 mt-[14px] text-[12px]">
                                                    <div className="flex items-center gap-1">
                                                        <img src='/shortterm.svg' />
                                                        <span>Short-term</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <img src='/3years.svg' />
                                                        <span>3 Years</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <img src='/introvert.svg' />
                                                        <span>Introvert +</span>
                                                    </div>
                                                </div>

                                                <hr className='mt-[19px] text-[#CECECE]' />

                                                <div className='flex w-full justify-center items-center mt-5'>
                                                    <div className='flex w-1/2 gap-1 justify-center'>
                                                        <img src='/prons.svg' />
                                                        <button className='w-[116px] h-[38px] border-[2px] border-[#4BDDB6] rounded-[999px] shadow-[0px_4px_4px_0px_#0000002E]'>
                                                            <span className='text-[14px] font-semibold text-[#4BDDB6]'>Contact</span>
                                                        </button>
                                                    </div>

                                                    <div className='flex w-1/2 gap-1 justify-center'>
                                                        <img src='/crons.svg' />
                                                        <button className='w-[116px] h-[38px] border-[2px] border-[#FF6E6E] rounded-[999px] shadow-[0px_4px_4px_0px_#0000002E]'>
                                                            <span className='text-[14px] font-semibold text-[#FF6E6E]'>Reject</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </Layout >
    )
}
