import React, { useEffect } from 'react'
import Layout from '@/components/Layout/Layout'
import dynamic from "next/dynamic"

const CustomMap = dynamic(() => import("@/components/CustomMap/FeedMap"), {
    ssr: false,
});

const card = [1, 2, 3, 4, 5]
export default function Feed() {
    useEffect(() => {
        document.title = 'Feed'
    }, [])
    return (
        <Layout>
            {/* Background map */}
            <div className="relative h-[calc(100vh-175px)]">
                <div className="absolute inset-0 z-0">
                    <CustomMap />
                </div>

                {/* Foreground content */}
                <div className="relative z-10">
                    <div className="flex justify-between">
                        <div className='w-[162px] h-[46px] flex justify-center items-center border border-[#757575BF] m-[16px] rounded-[999px] bg-[#FFFFFFBF] shadow-[-4px_4px_6px_0px_#7575751A]'>
                            <span className='text-[16px] font-semibold text-[#000000]'>Recent Posts</span>
                        </div>

                        <div className='w-[731px] h-[46px] m-[16px] flex  items-center border border-[#757575BF] rounded-[999px] bg-[#FFFFFFBF] shadow-[-4px_4px_6px_0px_#7575751A]'>
                            <div className='flex items-center'>
                                <span className='text-[16px] font-semibold text-[#000000] w-[110px] mr-[33px] ml-[29px]'>Published by</span>
                                <div className='flex justify-center items-center w-[113px] mr-[10px]'>
                                    <img src='/blueuser.svg' className='w-[34px] h-[34px]' />
                                    <span className='text-[14px] font-semibold text-[#333333]'>Recruiters</span>
                                </div>
                                <div className='flex justify-center items-center w-[118px] mr-[10px]'>
                                    <img src='/greenuser.svg' className='w-[34px] h-[34px]' />
                                    <span className='text-[14px] font-semibold text-[#333333]'>Applicants</span>
                                </div>
                                <div className='flex justify-center items-center w-[118px] mr-[10px]'>
                                    <img src='/yellowuser.svg' className='w-[34px] h-[34px]' />
                                    <span className='text-[14px] font-semibold text-[#333333]'>Freelances</span>
                                </div>
                                <div className='flex justify-center items-center w-[138px] mr-[10px]'>
                                    <img src='/orangeuser.svg' className='w-[34px] h-[34px]' />
                                    <span className='text-[14px] font-semibold text-[#333333]'>Home owners</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src='/chat.svg' className="absolute right-20" />
                        </div>
                    </div>
                </div>
                <div
                    className="absolute min-w-[1441px] w-full h-[283px] bottom-0 flex justify-start items-center  gap-[12px] pl-[20px] 
             bg-gradient-to-b from-[rgba(117,117,117,0.20)] to-[rgba(0,0,0,0.020)]
             shadow-[0px_0px_43.02px_0px_#0000001A]"
                >
                    {card.map((index) => (
                        <div key={index} className='w-[264px] p-[10px] h-[217px]  mt-[50px] border border-[#757575] bg-[#FFFFFF] rounded-[25px] shadow-[4px_4px_11px_0px_#75757530]'>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center'>
                                    <img src='/feeduser.svg' />
                                    <div className='flex flex-col'>
                                        <span className='text-[12px] font-semibold text-[#333333]'>John Doe</span>
                                        <span className='text-[12px] text-[#333333]'>2 hours ago</span>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <span className='text-[12px] font-medium text-[#333333]'>Paris</span>
                                    <img src='/card-loc.svg' className='w-[12px] h-[15px] ml-[5px]' />
                                    <span className='text-[12px]  text-[#F8312F] ml-[8px]'>2k</span>
                                    <img src='/Heart.svg' className='w-[17.5px] h-[15.5px] ml-[2px]' />
                                    <img src='/dot-menu.svg' className='w-[18px] h-[18px] ml-[2px]' />
                                </div>
                            </div>
                            <div className='relative'>
                                <img src='/gallery-main.svg' className='w-[242px] h-[96px] rounded-[10px]' />
                                <div className='w-[90px] h-[20px] rounded-[999px] bg-[#000000CC] flex justify-center items-center absolute top-2 right-2'>
                                    <span className='text-[12px] font-semibold text-[#FFFFFF]'> @company</span>
                                </div>
                            </div>
                            <span className='w-[222px] h-[20px] text-[12px] text-[#757575]'>
                                Text Text Text Text Text Text Text Text !
                            </span>
                            <div className='flex items-center'>
                                <div className='w-[196px] h-[32px] rounded-[999px] bg-[#F5F5F5] border border-[#F5F5F5] flex items-center px-3'>
                                    <input
                                        type='text'
                                        placeholder='Write comment..'
                                        className='w-full bg-transparent outline-none text-sm text-black'
                                    />
                                </div>

                                <span className='text-[12px] text-[#757575] ml-[7px]'>
                                    2K
                                </span>
                                <img src='/message.svg' className='ml-[2px]' />
                            </div>
                        </div>
                    ))}
                </div>
                <img src="/rightaero.svg" className='absolute right-10 bottom-30 cursor-pointer' />
            </div>
        </Layout>
    )
}
