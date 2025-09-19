import React, { useState } from 'react'
import Layout from '@/components/Layout/Layout'
import dynamic from "next/dynamic"

const CustomMap = dynamic(() => import("@/components/CustomMap/CustomMap"), {
    ssr: false,
});

export default function MyapplicationDash() {
    const [active, setActive] = useState("Replied");

    const buttons = [
        { label: "Pending", minWidth: "112px" },
        { label: "Replied", minWidth: "124px" },
        { label: "Closed", minWidth: "124px" },
    ];

    const cards = [1, 2, 3];


    return (
        <Layout>
            <div className='h-[57px] flex items-center justify-center'>
                <h1 className='text-[24px] font-semibold text-[#000000]'>My Applications</h1>
            </div>

            <div className="relative w-full h-[343px] overflow-hidden">
                <img
                    src="/received-bg.svg"
                    className="absolute inset-0 w-full h-full object-cover scale-y-[-1] z-0"
                    alt="Background"
                />

                <div className="relative z-10 flex flex-col items-center mt-[21px] gap-[15px] h-full text-white">
                    <div className='flex gap-2 items-center'>
                        <img src='/rec-bedge.svg' className='w-[27px] h-[27px]' />
                        <span className='text-[14px] font-medium text-[#757575]'>Check your monthly analytics</span>
                    </div>

                    <div className='flex gap-[15px]'>
                        <div className='w-[385px] h-[107px] border border-[#757575] content-center rounded-[20px] bg-white p-3'>
                            <div className='flex justify-between items-center'>
                                <h2 className='text-[64px] text-[#757575] font-medium'>
                                    89
                                </h2>
                                <div className='flex flex-col items-end gap-2'>
                                    <img src='89.svg' className='bg-[#29ABE2] text-white flex justify-center items-center rounded-full p-1 w-[30px] h-[30px]' />
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
                                    <img src='10000.svg' className='bg-[#29ABE2] text-white flex justify-center items-center rounded-full p-1 w-[30px] h-[30px]' />
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
                                    <img src='1000.svg' className='bg-[#29ABE2] text-white flex justify-center items-center rounded-full p-1 w-[30px] h-[30px]' />
                                    <span className='text-[#000000] text-[16px] font-semibold'>Visits</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-[15px]'>
                        <div className='w-[385px] h-[107px] border border-[#757575] content-center rounded-[20px] bg-white p-3'>
                            <div className='flex justify-between items-center'>
                                <h2 className='text-[64px] text-[#29ABE2] font-medium'>
                                    10%
                                </h2>
                                <div className='flex flex-col items-end gap-2'>
                                    <img src='10.svg' className='bg-[#29ABE2] text-white flex justify-center items-center rounded-full p-1 w-[30px] h-[30px]' />
                                    <span className='text-[#000000] text-[16px] font-semibold'>Click Through Rate</span>
                                </div>
                            </div>
                        </div>

                        <div className='w-[385px] h-[107px] border border-[#757575] content-center rounded-[20px] bg-white p-3'>
                            <div className='flex justify-between items-center'>
                                <h2 className='text-[64px] text-[#29ABE2] font-medium'>
                                    78
                                </h2>
                                <div className='flex flex-col items-end gap-2'>
                                    <img src='78.svg' className='bg-[#29ABE2] text-white flex justify-center items-center rounded-full p-1 w-[30px] h-[30px]' />
                                    <span className='text-[#000000] text-[16px] font-semibold'>Messages </span>
                                </div>
                            </div>
                        </div>

                        <div className='w-[385px] h-[107px] border border-[#757575] content-center rounded-[20px] bg-white p-3'>
                            <div className='flex justify-between items-center'>
                                <h2 className='text-[64px] text-[#29ABE2] font-medium'>
                                    98
                                </h2>
                                <div className='flex flex-col items-end gap-2'>
                                    <img src='98.svg' className='bg-[#29ABE2] text-white flex justify-center items-center rounded-full p-1 w-[30px] h-[30px]' />
                                    <span className='text-[#000000] text-[16px] font-semibold'>Applications</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-[41px] flex justify-center items-center'>
                <span className='text-[#757575] text-[14px] font-medium'>
                    Click the offer you want to supervise & check the messages you received !
                </span>
            </div>

            <div className="flex justify-center items-center py-[25px]">
                <div className="w-[381px] h-[53px] bg-white flex justify-center items-center shadow-[0px_4px_11px_0px_#CECECEC7] rounded-[10px]">
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
                                <div className="absolute top-3 right-4 flex items-center px-1 bg-white w-[90px] h-[24px] rounded-[999px]">
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className="w-[16px] h-[16px] flex items-center justify-center">
                                            <img
                                                src={i < 4 ? "/Star.svg" : "/StarEmpty.svg"}
                                                alt="star"
                                                className="w-[15px] h-[15px]"
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col items-center mt-4">
                                    <div className="w-[107px] h-[41px] flex justify-center items-center absolute top-15 left-1/2 -translate-x-1/2 px-4 py-1 bg-black text-white text-sm rounded-full">
                                        <span className='text-[16px] font-semibold'>Waiter</span>
                                    </div>
                                    <p className="text-[14px] font-medium mt-4 text-[#757575]">30K € / Year</p>
                                </div>

                                <div className="flex justify-center items-center gap-6 mt-2">
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-black font-medium text-[12px]">starting date</span>
                                        <span className="px-2 py-1 bg-[#4BDDB61A] rounded-[999px] text-[#4BDDB6] font-medium text-[12px] mt-1">02/09/25</span>
                                    </div>
                                </div>

                                <div className="flex justify-center gap-4 mt-2 text-[12px]">
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

                                <div className="mt-2 px-4 flex flex-col gap-2 justify-center items-center">
                                    <h3 className="text-center text-[14px] font-medium text-[#333333]">Everywhere Jobs</h3>
                                    <div className='w-[299px] h-[85px]'>
                                        <CustomMap />
                                    </div>
                                </div>

                                <hr className='mt-4 text-[#CECECE]' />

                                <div className='flex w-full justify-center items-center mt-4'>
                                    <div className='flex w-1/2 gap-1 justify-center'>
                                        <button className='w-[142px] h-[38px] border-[2px] border-[#4BDDB6] rounded-[999px] shadow-[0px_4px_4px_0px_#0000002E]'>
                                            <span className='text-[14px] font-semibold text-[#4BDDB6]'>Reply</span>
                                        </button>
                                    </div>

                                    <div className='flex w-1/2 gap-1 justify-center'>
                                        <button className='w-[142px] h-[38px] border-[2px] border-[#FF6E6E] rounded-[999px] shadow-[0px_4px_4px_0px_#0000002E]'>
                                            <span className='text-[14px] font-semibold text-[#FF6E6E]'>Withdraw</span>
                                        </button>
                                    </div>
                                </div>

                                <div className='flex gap-1 justify-center mt-2'>
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
        </Layout>
    )
}
