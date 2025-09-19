import React, { useState } from 'react'
import AccMainlayout from '@/components/AccMainlayout/AccMainlayout'
import dynamic from "next/dynamic"

const CustomMap = dynamic(() => import("@/components/CustomMap/CustomMap"), {
    ssr: false,
});

export default function ManagePropertiesDash() {
    const [isOn, setIsOn] = useState(true);
    const [selectedCard, setSelectedCard] = useState(1);
    const [cardID, setcardID] = useState(1);
    const cards = [1, 2, 3];
    const [skillLevel, setSkillLevel] = useState(30);

    const handleSkillLevelChange = (event) => {
        setSkillLevel(parseInt(event.target.value));
    };

    const [active, setActive] = useState("New");

    const buttons = [
        { label: "New", minWidth: "112px" },
        { label: "Contacted", minWidth: "124px" },
        { label: "Ignored", minWidth: "124px" },
    ];
    return (
        <AccMainlayout>
            <div className='h-[57px] flex items-center justify-center'>
                <h1 className='text-[24px] font-semibold text-[#000000]'>Managed Properties</h1>
            </div>

            <div className="relative w-full h-[343px] overflow-hidden">
                <img
                    src="/manage-bg.svg"
                    className="absolute inset-0 w-full h-full object-cover scale-y-[-1] z-0"
                    alt="Background"
                />

                <div className="relative z-10 flex flex-col items-center mt-[21px] gap-[15px] h-full text-white">
                    <div className='flex gap-2 items-center'>
                        <img src='/man-bedge.svg' className='w-[27px] h-[27px]' />
                        <span className='text-[14px] font-medium text-[#757575]'>Check your monthly analytics</span>
                    </div>

                    <div className='flex gap-[15px]'>
                        <div className='w-[385px] h-[107px] border border-[#757575] content-center rounded-[20px] bg-white p-3'>
                            <div className='flex justify-between items-center'>
                                <h2 className='text-[64px] text-[#757575] font-medium'>
                                    89
                                </h2>
                                <div className='flex flex-col items-end gap-2'>
                                    <img src='/man-first.svg' className='bg-[#FFAB24] text-white flex justify-center items-center rounded-full p-1 w-[30px] h-[30px]' />
                                    <span className='text-[#000000] text-[16px] font-semibold'>Posted Offers</span>
                                </div>
                            </div>
                        </div>

                        <div className='w-[385px] h-[107px] border border-[#757575] content-center rounded-[20px] bg-white p-3'>
                            <div className='flex justify-between items-center'>
                                <h2 className='text-[64px] text-[#757575] font-medium'>
                                    10 000
                                </h2>
                                <div className='flex flex-col items-end gap-2'>
                                    <img src='/man-2nd.svg' className='bg-[#FFAB24] text-white flex justify-center items-center rounded-full p-1 w-[30px] h-[30px]' />
                                    <span className='text-[#000000] text-[16px] font-semibold'>Displays</span>
                                </div>
                            </div>
                        </div>

                        <div className='w-[385px] h-[107px] border border-[#757575] content-center rounded-[20px] bg-white p-3'>
                            <div className='flex justify-between items-center'>
                                <h2 className='text-[64px] text-[#757575] font-medium'>
                                    1 000
                                </h2>
                                <div className='flex flex-col items-end gap-2'>
                                    <img src='1000.svg' className='bg-[#FFAB24] text-white flex justify-center items-center rounded-full p-1 w-[30px] h-[30px]' />
                                    <span className='text-[#000000] text-[16px] font-semibold'>Visits</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-[15px]'>
                        <div className='w-[385px] h-[107px] border border-[#757575] content-center rounded-[20px] bg-white p-3'>
                            <div className='flex justify-between items-center'>
                                <h2 className='text-[64px] text-[#FFAB24] font-medium'>
                                    10%
                                </h2>
                                <div className='flex flex-col items-end gap-2'>
                                    <img src='10.svg' className='bg-[#FFAB24] text-white flex justify-center items-center rounded-full p-1 w-[30px] h-[30px]' />
                                    <span className='text-[#000000] text-[16px] font-semibold'>Click Through Rate</span>
                                </div>
                            </div>
                        </div>

                        <div className='w-[385px] h-[107px] border border-[#757575] content-center rounded-[20px] bg-white p-3'>
                            <div className='flex justify-between items-center'>
                                <h2 className='text-[64px] text-[#FFAB24] font-medium'>
                                    78
                                </h2>
                                <div className='flex flex-col items-end gap-2'>
                                    <img src='78.svg' className='bg-[#FFAB24] text-white flex justify-center items-center rounded-full p-1 w-[30px] h-[30px]' />
                                    <span className='text-[#000000] text-[16px] font-semibold'>Messages </span>
                                </div>
                            </div>
                        </div>

                        <div className='w-[385px] h-[107px] border border-[#757575] content-center rounded-[20px] bg-white p-3'>
                            <div className='flex justify-between items-center'>
                                <h2 className='text-[64px] text-[#FFAB24] font-medium'>
                                    98
                                </h2>
                                <div className='flex flex-col items-end gap-2'>
                                    <img src='98.svg' className='bg-[#FFAB24] text-white flex justify-center items-center rounded-full p-1 w-[30px] h-[30px]' />
                                    <span className='text-[#000000] text-[16px] font-semibold'>Bookings onto the website</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-[41px] flex justify-center items-center'>
                <span className='text-[#757575] text-[14px] font-medium'>
                    Click the ads you want to supervise & check the messages you received !
                </span>
            </div>

            <div className="w-[1227px] h-[1018px] mx-auto justify-center mb-[20px]">
                <div className={`relative mt-[27px] flex`}>
                    {cards.map((cardId) => (
                        <div key={cardId}>
                            <div className={` ${selectedCard === cardId ? "bg-[#F4F4F4] rounded-t-[20px]" : "bg-white"} p-[25px] transition-colors`}>
                                <div
                                    onClick={() => {
                                        setSelectedCard(prev => prev === cardId ? null : cardId);
                                        setcardID(cardId);
                                    }}
                                    className={`cursor-pointer relative w-[359px] h-[516px] 
                                                  ${selectedCard === cardId ? "border-[4px] border-black" : ""}
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

                                <img src='/leftaero-with-border.svg' className='absolute top-1/2 -left-20 cursor-pointer' />
                                <img src='/rightaero-with-border.svg' className='absolute top-1/2 -right-20 cursor-pointer' />
                            </div>
                        </div>
                    ))}
                </div>

                {selectedCard === 1 ? (
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

                {selectedCard === 2 ? (
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

                {selectedCard === 3 ? (
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
        </AccMainlayout>
    )
}
