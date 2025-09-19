import React from 'react'
import Layout from '@/components/accomodationsLayout/Layout';
import { Search } from "lucide-react";

export default function accomodationsChat() {
    const conversations = [
        {
            name: "Richard Branson",
            role: "Founder at Virgin group",
            message: "Lorem ipsum dolor sit a...",
            avatar: "/grp-1.svg",
            hasBadge: true,
        },
        {
            name: "Carter Donin",
            role: "Founder at Company",
            message: "Lorem ipsum dolor sit a...",
            avatar: "/grp-1.svg",
        },
        {
            name: "Jordyn Herwitz",
            role: "Founder at Texel Crafts",
            message: "Lorem ipsum dolor sit a...",
            avatar: "/grp-1.svg",
        },
        {
            name: "Davis Herwitz",
            role: "Founder at Texel Crafts",
            message: "Lorem ipsum dolor sit a...",
            avatar: "/grp-1.svg",
        },
        {
            name: "Chance Geidt",
            role: "Founder at Texel Crafts",
            message: "Lorem ipsum dolor sit a...",
            avatar: "/grp-1.svg",
        },
        {
            name: "Davis Herwitz",
            role: "Founder at Texel Crafts",
            message: "Lorem ipsum dolor sit a...",
            avatar: "/grp-1.svg",
        },
    ];
    return (
        <Layout>

            <div className="w-full max-w-[1440px] mx-auto">
                <div className="flex gap-[21px] pt-[20px] pb-[20px] justify-center ">
                    <div className="lg:col-span-2">
                        <div className='w-[975px] h-[61px] rounded-tl-[20px] rounded-tr-[20px] bg-white flex items-center border border-[#7575751A]  shadow-[\-4px_4px_6px_0px_#7575751A]'>
                            <button className='bg-[#000000] rounded-[10px] w-[231px] h-[38px] flex justify-center items-center ml-[16px]'>
                                <span className='text-[14px] text-[#FFFFFF] font-bold'>Everywhere Jobs</span>
                                <span className='text-[14px] text-[#FFFFFF] font-medium ml-1'> Inbox</span>
                                <img src='/down-white.svg' className='ml-2 w-[7px] h-[12px]' />
                            </button>
                            <div className="w-px ml-[16px] h-6 bg-[rgba(235,235,235,1)]"></div>

                            <button className='border border-[#EBEBEB] w-[48px] h-[38px] rounded-[10px] ml-[17px] '>
                                <span className='text-[#757575] font-medium text-[14px]'>All</span>
                            </button>

                            <button className='border border-[#EBEBEB] w-[82px] h-[38px] rounded-[10px] ml-[10px] '>
                                <span className='text-[#757575] font-medium text-[14px]'>Unread</span>
                            </button>

                            <button className='border border-[#EBEBEB] w-[105px] h-[38px] rounded-[10px] ml-[10px] '>
                                <span className='text-[#757575] font-medium text-[14px]'>Successful</span>
                            </button>

                            <button className='border border-[#EBEBEB] w-[38px] h-[38px] rounded-[10px] ml-[10px] flex justify-center items-center'>
                                <img src='/messhead.svg' />
                            </button>

                            <div className="ml-[13px] relative">
                                <Search className="absolute  text-[#000000] left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="font-normal text-sm h-[38px] w-[363px] pl-10 pr-4 py-2 rounded-[12px] border border-[#EBEBEB]"
                                />
                            </div>
                        </div>
                        <div className='w-[975px] bg-white h-[531px] rounded-bl-[20px] rounded-br-[20px]'>
                            <div className='flex'>
                                <div className='w-[264px] h-[531px] flex flex-col border-r border-[#E5E5E5] rounded-l-[12px] overflow-hidden'>
                                    <span className='text-[#757575] text-[16px] text-center font-semibold m-[17px]'>
                                        All Conversations
                                    </span>
                                    <hr className='text-[#F5F5F5]' />

                                    <div className='overflow-y-auto flex-1'>
                                        {conversations.map((item, i) => (
                                            <div
                                                key={i}
                                                className='flex items-center gap-3 px-3 h-[98px] border-b border-[#E5E5E5] cursor-pointer hover:bg-[#F9F9F9]'
                                            >
                                                <img
                                                    src={item.avatar}
                                                    alt={item.name}
                                                    className='w-[52px] h-[52px] rounded-full object-cover'
                                                />
                                                <div className='flex flex-col flex-1'>
                                                    <div className='flex items-center gap-1'>
                                                        <span className='text-[14px] font-semibold text-[#333333]'>
                                                            {item.name}
                                                        </span>
                                                        {item.hasBadge && (
                                                            <span className='w-[18px] h-[18px] bg-[#FFAB24] text-white text-[12px] rounded-full flex items-center justify-center'>
                                                                1
                                                            </span>
                                                        )}
                                                    </div>
                                                    <span className='text-[12px] text-[#000000]'>{item.role}</span>
                                                    <span className='text-[12px] text-[#757575] truncate'>
                                                        {item.message}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='w-[711px] h-[531px]'>
                                    <div className='flex flex-col'>
                                        <div className='h-[432px] bg-[linear-gradient(98.37deg,#FFF4E2_-7.82%,#FFDFAD_47.24%,#FFC973_106.75%)]'>
                                            <div className='flex justify-center items-center mt-[20px]'>
                                                <div className='flex flex-col items-center'>
                                                    <span className='text-[16px] font-semibold text-[#000000]'>Jordyn Herwitz</span>
                                                    <span className='text-[12px]  text-[#000000]'>Founder at Texel Crafts</span>
                                                </div>
                                            </div>
                                            <div className="flex justify-center items-center mt-[29px]">
                                                <div className="h-px w-[72px] bg-[#757575] mr-4" />
                                                <span className="italic text-[12px] text-[#000000]">
                                                    Wednesday 20 March, 2025
                                                </span>
                                                <div className="h-px w-[72px] bg-[#757575] ml-4" />
                                            </div>

                                            <div className='flex flex-col justify-end h-[310px] px-[10px]'>
                                                {/* 1st mess */}
                                                <div className="flex justify-end items-end">
                                                    <div className="flex flex-col items-end">
                                                        <div className='w-[288px] h-[92px] border-2 border-[#000000] p-[16px] rounded-[25px] bg-white flex justify-center items-center'>
                                                            <span className='text-[12px] font-medium text-[#757575]'>
                                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.
                                                            </span>
                                                        </div>
                                                        <span className="text-[12px] text-black mt-1">11:23 PM</span>
                                                    </div>
                                                    <img
                                                        src="/chat-img.svg"
                                                        alt=""
                                                        className='mb-[12px]'
                                                    />
                                                </div>

                                                {/* 2nd mess */}

                                                <div className="flex justify-start items-end">
                                                    <img
                                                        src="/chat-img-2.svg"
                                                        alt=""
                                                        className='mb-[12px]'
                                                    />
                                                    <div className="flex flex-col items-end">
                                                        <div className="relative w-[288px] h-[92px] border-2 border-[#000000] p-[16px] pr-[20px] rounded-[25px] bg-white flex items-start">
                                                            <span className="text-[12px] font-medium text-[#757575]">
                                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.
                                                            </span>
                                                            <img
                                                                src="ok.svg"
                                                                className="absolute top-3 right-3 w-[14px] h-[14px] cursor-pointer"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <span className="text-[12px] text-black mt-1">11:23 PM</span>
                                                    </div>

                                                </div>

                                                {/* 3rd mess */}

                                                <div className="flex justify-end items-end">
                                                    <div className="flex flex-col items-end">
                                                        <div className='w-[288px] h-[52px] border-2 border-[#000000] p-[16px] rounded-[25px] bg-white flex justify-center items-center'>
                                                            <span className='text-[12px] font-medium text-[#757575]'>
                                                                Lorem ipsum dolor sit amet, consectetuer
                                                            </span>
                                                        </div>
                                                        <span className="text-[12px] text-black mt-1">11:23 PM</span>
                                                    </div>
                                                    <img
                                                        src="/chat-img.svg"
                                                        alt=""
                                                        className='mb-[12px]'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='h-[99px] p-[16px]'>
                                            <div className='h-[68px] w-[679px] border border-[#FFAB24] rounded-[10px] flex justify-between bg-[#FFF5E4]'>
                                                <div className='ml-[17px] mt-[14px] text-[#FFAB24] w-[408px]'>
                                                    <input type='text' placeholder='write a message...' className='outline-none' />
                                                </div>
                                                <div className='flex items-center w-[109px]'>
                                                    <img src='/doc-acc.svg' className='w-[24px] h-[24px] mr-[5px]' />
                                                    <button className='bg-[#000000] w-[74px] h-[38px] rounded-[10px] flex justify-center items-center'>
                                                        <span className='text-[14px] font-semibold text-[#FFFFFF]'>Send</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-1">
                        <div className="w-[345px] h-[592px] bg-white rounded-[25px] shadow-[-4px_4px_6px_0px_#7575751A] p-6 overflow-hidden">
                            <div className="space-y-4 text-sm">
                                <h3 className="text-[#000000] font-semibold text-[16px]">Menu</h3>

                                <div className="flex items-center gap-3 cursor-pointer">
                                    <img src="/change-mode.svg" alt="change mode" />
                                    <span className="text-[#757575] text-[14px] font-medium">Change mode</span>
                                </div>

                                <div className="flex items-center gap-3 cursor-pointer">
                                    <img src="/dashboard.svg" alt="dashboard" />
                                    <span className="text-[#757575] text-[14px]  font-medium">Dashboard</span>
                                </div>

                                <div className="flex items-center gap-3 cursor-pointer">
                                    <img src="/messages.svg" alt="messages" />
                                    <span className="text-[#757575] text-[14px] font-medium">Messages</span>
                                </div>

                                <div className="flex items-center gap-3 cursor-pointer">
                                    <img src="/faq.svg" alt="faq" />
                                    <span className="text-[#757575] text-[14px] font-medium">FAQ</span>
                                </div>
                            </div>
                            <div className="border-t border-[#F5F5F5] my-6"></div>

                            <h3 className="text-[#CECECE] font-semibold text-[16px] mb-2">Ad</h3>

                            <div className='w-[281px] h-[281px] rounded-[20px] bg-[linear-gradient(98.37deg,#FFF4E2_-7.82%,#FFDFAD_47.24%,#FFC973_106.75%)]'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
