import React, { useState } from 'react'
import AccMainlayout from '@/components/AccMainlayout/AccMainlayout'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import dynamic from "next/dynamic"

const CustomMap = dynamic(() => import("@/components/CustomMap/CustomMap"), {
    ssr: false,
});

export default function Details() {
    const [isOn, setIsOn] = useState(true);
    const [active, setActive] = useState("Photos");

    const buttons = [
        { label: "Photos", minWidth: "90px" },
        { label: "Description & Characteristics", minWidth: "270px" },
        { label: "Map", minWidth: "69px" },
    ];

    const [activeEnergy, setactiveEnergy] = useState("A");

    const levels = [
        { label: "A", color: "#25A96D" },
        { label: "B", color: "#538D2B" },
        { label: "C", color: "#C8CC2A" },
        { label: "D", color: "#F7E003" },
        { label: "E", color: "#EAA511" },
        { label: "F", color: "#EC8200" },
        { label: "G", color: "#D24D0A" },
    ];

    const [activeGHG, setactiveGHG] = useState("A");

    const levelsGHG = [
        { label: "A", color: "#999999" },
        { label: "B", color: "#BABABA" },
        { label: "C", color: "#C8C8C8" },
        { label: "D", color: "#D8D8D8" },
        { label: "E", color: "#E3E3E3" },
        { label: "F", color: "#E3E3E3" },
    ];
    return (
        <AccMainlayout>
            <div className='min-w-[1440px] h-[55px] flex items-center shadow-[0px_4px_6px_0px_#0000001C] px-[20px]'>
                <div className='flex justify-between w-full'>
                    <div className='flex items-center'>
                        <ChevronLeft className='text-[#29ABE2]' />
                        <span className='text-[#29ABE2]'>Back to Results List</span>

                        <div className='w-[441px] h-[44px] flex ml-[50px] items-center'>
                            {buttons.map((btn) => (
                                <button
                                    key={btn.label}
                                    onClick={() => setActive(btn.label)}
                                    style={{ minWidth: btn.minWidth }}
                                    className={`h-[40px] rounded-[10px] font-medium text-[16px] transition-colors flex  justify-center items-center
                                                ${active === btn.label ? "bg-[#FFAB24] text-white" : "bg-white text-black"}
                                            `}
                                >
                                    {btn.label}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button className='flex justify-center items-center w-[80px] h-[38px] border border-[#FFAB24] rounded-[10px]'>
                            <img src='/savebell.svg' className='w-[14px] h-[16px] mr-[6px]' />
                            <span className='text-[14px] text-[#FFAB24] font-semibold text-center'>SAVE</span>
                        </button>

                        <div className='flex ml-[30px]'>
                            <div className='flex flex-col items-end'>
                                <span className='text-[14px] text-[#000000] font-medium'>{isOn ? "Available" : "Unavailable"}</span>
                                <span className='text-[12px] text-[#757575]'>From 09 May, 2025</span>
                            </div>
                            <div className="flex items-center px-1 ml-[7px]">
                                <div
                                    onClick={() => setIsOn(!isOn)}
                                    className={`w-[60px] h-[31px] rounded-full flex items-center px-1 cursor-pointer transition-all duration-300 ${isOn ? "bg-[#29ABE2]" : "bg-gray-200"
                                        }`}
                                    style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
                                >
                                    <div
                                        className={`w-[23px] h-[23px] rounded-full transition-all duration-300 ${isOn ? "ml-auto bg-[#FFFFFF]" : "ml-0 bg-white"
                                            }`}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="min-h-screen">
                <div className="flex gap-[43px] px-4 pt-8 justify-center">
                    <div className="lg:col-span-2 space-y-5 w-full lg:w-[884px] ">
                        <div className='w-[884px] h-[425px] flex'>
                            <div className='w-[635px] h-[425px] relative'>
                                <img src='/details-1.svg' className='rounded-tl-[12px] rounded-bl-[12px]' />

                                <span className='text-[14px] font-medium text-[#000000] absolute bottom-5 right-5 bg-[#FFFFFFAB] rounded-[4px] px-[10px] py-[12px]'>1 / 4</span>
                            </div>
                            <div className='flex flex-col gap-[5px] ml-[5px]'>
                                <div className='w-[244px] h-[210px] '>
                                    <img src='/details-2.svg' />
                                </div>
                                <div className="w-[244px] h-[210px] relative">
                                    <img src="/details-3.svg" className="w-full h-full object-cover" />

                                    <span className="absolute inset-0 flex items-center justify-center text-[16px] text-[#FFFFFF] font-semibold">
                                        +1 Photo
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className='w-[884px] h-[63px] flex justify-between items-center'>
                            <div className='flex items-center'>
                                <img src='/details-loc.svg' />

                                <div className='ml-[15px] flex flex-col'>
                                    <span className='text-[20px] font-semibold text-[#000000]'>Two Bedroom Flat, Jean Médecin Avenue, Nice</span>
                                    <span className='text-[14px]  text-[#757575]'>France</span>
                                </div>
                            </div>
                            <div>
                                <div className='ml-[15px] flex flex-col items-end'>
                                    <span className='text-[20px] font-semibold text-[#000000]'>500 € / month</span>
                                    <div className='flex '>
                                        <span className='text-[14px]  text-[#757575]'>(no reviews yet)</span>
                                        {[...Array(5)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="w-[19px] h-[19px]"
                                            >
                                                <img
                                                    src={"/StarEmpty.svg"}
                                                    alt="star"
                                                    className="w-[19px] h-[19px]"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className='w-[884px] text-[#DEDDDD]' />

                        <div className='w-[884px]'>
                            <h2 className='text-[20px] text-[#000000] font-semibold'>Description</h2>
                            <span className='text-[14px] text-[#757575] w-[875px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, </span>
                        </div>

                        <hr className='w-[884px] text-[#DEDDDD]' />

                        <div className='w-[884px]'>
                            <h2 className='text-[20px] text-[#000000] font-semibold'>Characteristics</h2>

                            <div className='flex'>
                                <div className="w-[75%] grid grid-cols-2 sm:grid-cols-4 gap-4 mt-[13px]">
                                    {/* Item 1 */}

                                    <div className='flex items-center'>
                                        <img src="/jobcard/apartment.svg" alt="apartment" className="w-[21px] h-[21px]" />
                                        <div className='ml-[10px]'>
                                            <span className="flex text-[16px] font-medium text-black">
                                                Type
                                            </span>
                                            <span className="flex text-[14px] text-[#757575]">
                                                Apartment
                                            </span>
                                        </div>
                                    </div>
                                    {/* Item 2 */}

                                    <div className='flex items-center'>
                                        <img src="/jobcard/5-locals.png" alt="locals" className="w-[21px] h-[21px]" />
                                        <div className='ml-[10px]'>
                                            <span className="flex text-[16px] font-medium text-black">
                                                Locals
                                            </span>
                                            <span className="flex text-[14px] text-[#757575]">
                                                1
                                            </span>
                                        </div>
                                    </div>

                                    {/* later change above icon */}

                                    {/* Item 3 */}

                                    <div className='flex items-center'>
                                        <img src="/jobcard/100-m2.svg" alt="locals" className="w-[21px] h-[21px]" />
                                        <div className='ml-[10px]'>
                                            <span className="flex text-[16px] font-medium text-black">
                                                Surface
                                            </span>
                                            <span className="text-[14px] text-[#757575]">
                                                100 m<sub>2</sub>
                                            </span>
                                        </div>
                                    </div>

                                    {/* Item 4 */}

                                    <div className='flex items-center'>
                                        <img src="/jobcard/Floor-2.svg" alt="locals" className="w-[21px] h-[21px]" />
                                        <div className='ml-[10px]'>
                                            <span className="flex text-[16px] font-medium text-black">
                                                Floor
                                            </span>
                                            <span className="flex text-[14px] text-[#757575]">
                                                2
                                            </span>
                                        </div>
                                    </div>

                                    {/* Item 4 */}

                                    <div className='flex items-center'>
                                        <img src="/jobcard/5-bedrooms.svg" alt="locals" className="w-[21px] h-[21px]" />
                                        <div className='ml-[10px]'>
                                            <span className="flex text-[16px] font-medium text-black">
                                                Bedrooms
                                            </span>
                                            <span className="flex text-[14px] text-[#757575]">
                                                1
                                            </span>
                                        </div>
                                    </div>

                                    {/* Item 6 */}

                                    <div className='flex items-center'>
                                        <img src="/jobcard/3-bathrooms.svg" alt="locals" className="w-[21px] h-[21px]" />
                                        <div className='ml-[10px]'>
                                            <span className="flex text-[16px] font-medium text-black">
                                                Bathrooms
                                            </span>
                                            <span className="flex text-[14px] text-[#757575]">
                                                1
                                            </span>
                                        </div>
                                    </div>

                                    {/* Item 7 */}

                                    <div className='flex items-center'>
                                        <img src="/Elevator.svg" alt="locals" className="w-[21px] h-[21px]" />
                                        <div className='ml-[10px]'>
                                            <span className="flex text-[16px] font-medium text-black">
                                                Elevator
                                            </span>
                                            <span className="flex text-[14px] text-[#757575]">
                                                No
                                            </span>
                                        </div>
                                    </div>


                                    {/* Item 7 */}

                                    <div className='flex items-center'>
                                        <img src="/Charges.svg" alt="locals" className="w-[21px] h-[21px]" />
                                        <div className='ml-[10px]'>
                                            <span className="flex text-[16px] font-medium text-black">
                                                Charges
                                            </span>
                                            <span className="flex text-[14px] text-[#757575]">
                                                0 € / month
                                            </span>
                                        </div>
                                    </div>

                                </div>

                                <div className='"w-[25%] flex flex-col items-center justify-center'>
                                    <div className='flex gap-[3px]'>
                                        <img src='/bulb.svg' />
                                        <span className='text-[20px] font-semibold text-[#000000]'>Other Features</span>
                                    </div>

                                    <div className='flex gap-[10px] items-center'>
                                        <div className='text-[16px]  text-[#757575] flex flex-col items-center'>
                                            <span>Garage</span>
                                            <span>Garden</span>
                                        </div>
                                        <div className='text-[16px]  text-[#757575] flex flex-col  items-center'>
                                            <span>Balcony</span>
                                            <span>View</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className='w-[884px] text-[#DEDDDD]' />

                        <div className='w-[884px]'>
                            <h2 className='text-[20px] text-[#000000] font-semibold'>Additional Details</h2>


                            <div className='flex'>

                                <div className="flex flex-col items-start">
                                    {/* Title */}
                                    <p className="text-[16px] text-[#000000] font-medium mb-2">Energy performance</p>

                                    {/* Scale */}
                                    <div className="flex gap-[2px] items-center">
                                        {levels.map((item) => (
                                            <button
                                                key={item.label}
                                                onClick={() => setactiveEnergy(item.label)}
                                                style={{ backgroundColor: item.color }}
                                                className={`flex items-center justify-center text-[12px] font-semibold  transition-all duration-300
                                                    ${activeEnergy === item.label
                                                        ? "text-black w-[28px] h-[20px] rounded-[2px]"
                                                        : "text-transparent w-[24px] h-[6px]"
                                                    }`}
                                            >
                                                {item.label}
                                            </button>
                                        ))}
                                    </div>

                                </div>

                                <div className="flex flex-col items-start ml-[32px]">
                                    {/* Title */}
                                    <p className="text-[16px] text-[#000000] font-medium mb-2">GHG emission</p>

                                    {/* Scale */}
                                    <div className="flex gap-[2px] items-center">
                                        {levelsGHG.map((item) => (
                                            <button
                                                key={item.label}
                                                onClick={() => setactiveGHG(item.label)}
                                                style={{ backgroundColor: item.color }}
                                                className={`flex items-center justify-center text-[12px] font-semibold  transition-all duration-300
                                                    ${activeGHG === item.label
                                                        ? "text-black w-[28px] h-[20px] rounded-[2px]"
                                                        : "text-transparent w-[24px] h-[6px]"
                                                    }`}
                                            >
                                                {item.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col items-start ml-[32px]">
                                    {/* Title */}
                                    <p className="text-[16px] text-[#000000] font-medium mb-2">Contract</p>
                                    <span className='text-[#757575] text-[14px]'>Rental</span>
                                </div>

                                <div className="flex flex-col items-start  ml-[102px]">
                                    {/* Title */}
                                    <p className="text-[16px] text-[#000000] font-medium mb-2">Duration</p>
                                    <span className='text-[#757575] text-[14px]'>Long stay</span>
                                </div>

                                <div className="flex flex-col items-start  ml-[102px]">
                                    {/* Title */}
                                    <p className="text-[16px] text-[#000000] font-medium mb-2">Furnished</p>
                                    <span className='text-[#757575] text-[14px]'>Yes</span>
                                </div>

                            </div>
                        </div>

                        <hr className='w-[884px] text-[#DEDDDD]' />

                        <div className='w-[884px]'>
                            <h2 className='text-[20px] text-[#000000] font-semibold'>Transports</h2>

                            <div className='flex gap-[46px]'>
                                <div className='w-[166px] h-[67px] rounded-[10px] border border-[#29ABE2] mt-[17px] flex items-center justify-center'>
                                    <img src='/Bus.svg' />
                                    <div className='flex flex-col ml-[6px]'>
                                        <span className='text-[14px] font-medium text-[#29ABE2]'>Bus Station</span>
                                        <span className='text-[14px]  text-[#29ABE2]'>300m away</span>
                                    </div>
                                </div>

                                <div className='w-[166px] h-[67px] rounded-[10px] border border-[#29ABE2] mt-[17px] flex items-center justify-center'>
                                    <img src='/Train.svg' />
                                    <div className='flex flex-col ml-[6px]'>
                                        <span className='text-[14px] font-medium text-[#29ABE2]'>Train Station</span>
                                        <span className='text-[14px]  text-[#29ABE2]'>300m away</span>
                                    </div>
                                </div>
                                <div className='w-[166px] h-[67px] rounded-[10px] border border-[#29ABE2] mt-[17px] flex items-center justify-center'>
                                    <img src='/Metro.svg' />
                                    <div className='flex flex-col ml-[6px]'>
                                        <span className='text-[14px] font-medium text-[#29ABE2]'>Metro Station</span>
                                        <span className='text-[14px]  text-[#29ABE2]'>300m away</span>
                                    </div>
                                </div>
                                <div className='w-[166px] h-[67px] rounded-[10px] border border-[#29ABE2] mt-[17px] flex items-center justify-center'>
                                    <img src='/Tram.svg' />
                                    <div className='flex flex-col ml-[6px]'>
                                        <span className='text-[14px] font-medium text-[#29ABE2]'>Tram Station</span>
                                        <span className='text-[14px]  text-[#29ABE2]'>300m away</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className='w-[884px] text-[#DEDDDD]' />

                        <div className='w-[884px]'>
                            <h2 className='text-[20px] text-[#000000] font-semibold'>Reviews</h2>
                            <div className='flex justify-center items-center gap-[16px]'>
                                <ChevronLeft className='text-[#757575]' />
                                <div className='w-[412px] h-[119px] flex justify-center rounded-[10px] border border-[#DEDDDD] mt-[17px]'>
                                    <div className='flex justify-center items-center'>
                                        <img src='/user.svg' className='w-[54px] h-[54px]' />
                                        <div className='flex flex-col justify-center ml-[12px]'>
                                            <div className='flex  justify-between items-center'>
                                                <h2 className="text-[#333333] text-[14px] font-semibold">John Doe</h2>
                                                <div className="flex items-center justify-center w-[120px] h-[24px] rounded-full  px-[2px] bg-white">
                                                    {[...Array(5)].map((_, i) => (
                                                        <div
                                                            key={i}
                                                            className="w-[19px] h-[19px] flex items-center justify-center"
                                                        >
                                                            <img
                                                                src={i < 4 ? "/Star.svg" : "/StarEmpty.svg"}
                                                                alt="star"
                                                                className="w-[15px] h-[15px]"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <span className="text-[#757575] text-[14px]">"I recommend this accomodation a lot !"</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[412px] h-[119px]  flex justify-center rounded-[10px] border border-[#DEDDDD] mt-[17px]'>
                                    <div className='flex justify-center items-center'>
                                        <img src='/user.svg' className='w-[54px] h-[54px]' />
                                        <div className='flex flex-col justify-center ml-[12px]'>
                                            <div className='flex  justify-between items-center'>
                                                <h2 className="text-[#333333] text-[14px] font-semibold">John Doe</h2>
                                                <div className="flex items-center justify-center w-[120px] h-[24px] rounded-full  px-[2px] bg-white">
                                                    {[...Array(5)].map((_, i) => (
                                                        <div
                                                            key={i}
                                                            className="w-[19px] h-[19px] flex items-center justify-center"
                                                        >
                                                            <img
                                                                src={i < 4 ? "/Star.svg" : "/StarEmpty.svg"}
                                                                alt="star"
                                                                className="w-[15px] h-[15px]"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <span className="text-[#757575] text-[14px]">"I recommend this accomodation a lot !"</span>
                                        </div>
                                    </div>
                                </div>
                                <ChevronRight className='text-[#757575]' />

                            </div>
                        </div>

                        <hr className='w-[884px] text-[#DEDDDD]' />

                        <div className='w-[884px] flex items-center '>
                            <span className='text-[#CECECE] text-[20px] font-semibold mr-[50px]'>Ad</span>
                            <img src='/details-ad.svg' className='w-[728px] h-[90px]' />
                        </div>

                        <hr className='w-[884px] text-[#DEDDDD]' />

                        <div className='w-[884px]'>
                            <h2 className='text-[20px] text-[#000000] font-semibold'>Discover More</h2>

                            <div className='flex gap-[24px]'>
                                <div className='w-[279px] h-[253px] rounded-[10px] bg-[#FFFFFF] shadow-[0px_4px_11px_0px_#0000001F] p-[16px] flex flex-col items-center'>
                                    <div className='relative'>
                                        <img src='/discover.svg' />
                                        <span className='text-[#FFFFFF] text-[16px] font-mediun absolute top-2 right-2'>500 € / month</span>
                                    </div>
                                    <span className='text-[#000000] text-[16px] font-medium text-center mt-[12px]'>Flat with 2 bedrooms</span>
                                    <div className="flex gap-4 mt-3 text-[12px]">
                                        <div className="flex items-center gap-1">
                                            <img src='/Apartment.svg' />
                                            <span className='text-[14px] text-[#757575]'>Apartment</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <img src='/1.svg' />
                                            <span className='text-[14px] text-[#757575]'>1</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <img src='/100m2.svg' />
                                            <span className='text-[14px] text-[#757575]'>200 m<sub>2</sub></span>
                                        </div>
                                    </div>
                                </div>

                                <div className='w-[279px] h-[253px] rounded-[10px] bg-[#FFFFFF] shadow-[0px_4px_11px_0px_#0000001F] p-[16px] flex flex-col items-center'>
                                    <div className='relative'>
                                        <img src='/discover.svg' />
                                        <span className='text-[#FFFFFF] text-[16px] font-mediun absolute top-2 right-2'>500 € / month</span>
                                    </div>
                                    <span className='text-[#000000] text-[16px] font-medium text-center mt-[12px]'>Flat with 2 bedrooms</span>
                                    <div className="flex gap-4 mt-3 text-[12px]">
                                        <div className="flex items-center gap-1">
                                            <img src='/Apartment.svg' />
                                            <span className='text-[14px] text-[#757575]'>Apartment</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <img src='/1.svg' />
                                            <span className='text-[14px] text-[#757575]'>1</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <img src='/100m2.svg' />
                                            <span className='text-[14px] text-[#757575]'>200 m<sub>2</sub></span>
                                        </div>
                                    </div>
                                </div>

                                <div className='w-[279px] h-[253px] rounded-[10px] bg-[#FFFFFF] shadow-[0px_4px_11px_0px_#0000001F] p-[16px] flex flex-col items-center'>
                                    <div className='relative'>
                                        <img src='/discover.svg' />
                                        <span className='text-[#FFFFFF] text-[16px] font-mediun absolute top-2 right-2'>500 € / month</span>
                                    </div>
                                    <span className='text-[#000000] text-[16px] font-medium text-center mt-[12px]'>Flat with 2 bedrooms</span>
                                    <div className="flex gap-4 mt-3 text-[12px]">
                                        <div className="flex items-center gap-1">
                                            <img src='/Apartment.svg' />
                                            <span className='text-[14px] text-[#757575]'>Apartment</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <img src='/1.svg' />
                                            <span className='text-[14px] text-[#757575]'>1</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <img src='/100m2.svg' />
                                            <span className='text-[14px] text-[#757575]'>200 m<sub>2</sub></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className='w-[884px] text-[#DEDDDD]' />

                    </div>
                    <div className='flex flex-col items-center '>
                        <div className="w-[413px] h-[425px] rounded-[10px] border border-[#DEDDDD] bg-[#FDFDFD] shadow-[0px_4px_6px_0px_#7575751A] p-6 flex flex-col items-center">
                            <h2 className='text-[#000000] text-[20px] font-semibold'>Contact the advertiser</h2>

                            <textarea
                                defaultValue={'I am interested in this offer and would like to know more about it'}
                                className='w-[371px] h-[128px] text-[#757575] border border-[#DEDDDD] rounded-[10px] bg-[#FFFFFF] outline-none px-[15px] py-[10px]' />


                            <button className='text-[#FFFFFF] bg-[#FFAB24] font-semibold mt-[16px] w-[372px] h-[44px] rounded-[10px] flex justify-center items-center'>
                                <img src='/mess.svg' className='mr-[6px]' />
                                Send Message
                            </button>

                            <hr className='w-[413px] text-[#DEDDDD] mt-[20px]' />

                            <div className='border border-[#DEDDDD] flex items-center p-[16px] rounded-[10px] bg-[#FFFFFF] w-[372px] h-[68px] mt-[20px]'>
                                <div className='flex justify-between w-full'>
                                    <div className='flex items-center'>
                                        <img src='/Call.svg' className='w-[24px] h-[24px]' />
                                        <div className='flex flex-col ml-[12px]'>
                                            <span className='text-[#000000] text-[14px] font-semibold'>Private</span>
                                            <span className='text-[#757575] text-[14px]'>43543645767</span>
                                        </div>
                                    </div>
                                    <div>
                                        <img src='/user-layout.svg' />
                                    </div>
                                </div>
                            </div>

                            <div className='flex justify-center items-center mt-[17px]'>
                                <img src='/update.svg' />
                                <span className='text-[#757575] text-[14px] ml-[12px]'>Updated on 29/04/2025</span>
                            </div>
                        </div>
                        <div className="w-[413px] flex items-center justify-center mt-[30px] gap-[30px]">
                            <div className='flex items-center'>
                                <img src='/hide.svg' />
                                <span className='text-[#757575] text-[14px] font-semibold ml-[6px]'>HIDE</span>
                            </div>
                            <div className='flex items-center'>
                                <img src='/report.svg' />
                                <span className='text-[#757575] text-[14px] font-semibold ml-[6px]'>REPORT</span>
                            </div>
                            <div className='flex items-center'>
                                <img src='/share-1.svg' />
                                <span className='text-[#757575] text-[14px] font-semibold ml-[6px]'>SHARE AD</span>
                            </div>
                        </div>

                        <div className='w-[413px] h-[409px] mt-[30px]'>
                            <CustomMap />
                        </div>
                    </div>

                </div>
            </div>

        </AccMainlayout >
    )
}
