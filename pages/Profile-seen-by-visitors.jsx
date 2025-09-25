import React, { useRef, useState, useEffect } from 'react'
import Mainlayout from '@/components/MainLayout/Mainlayout'
import dynamic from "next/dynamic"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ToggleSwitch from '@/components/UI/ToggleSwitch';

const CustomMap = dynamic(() => import("@/components/CustomMap/CustomMap"), {
    ssr: false,
});

const toggleFullscreen = () => {
    const mapEl = document.querySelector(".custom-map-container"); // className of map container
    if (!mapEl) return;

    if (!document.fullscreenElement) {
        mapEl.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
};


const ValuesAndInterests = [
    {
        rowone: [
            { name: 'Environment', img: './valueandintrest/Environment.svg' },
            { name: 'Animal Rights', img: './valueandintrest/Animal_Rights.svg' },
            { name: 'Science', img: './valueandintrest/Science.svg' },
            { name: 'Volunteering', img: './valueandintrest/Volunteering.svg' },
            { name: 'Craftmanship', img: './valueandintrest/Craftmanship.svg' },
        ]
    },
    {
        rowtwo: [
            { name: 'Education', img: './valueandintrest/Education.svg' },
            { name: 'Sprituality', img: './valueandintrest/Sprituality.svg' },
            { name: 'Social Actions', img: './valueandintrest/Social.svg' },
            { name: 'Women Rights', img: './valueandintrest/Women.svg' },
            { name: 'Minorities', img: './valueandintrest/Minorities.svg' },
        ]
    },
    {
        rowthree: [
            { name: 'Aesthetics', img: './valueandintrest/Aesthetics.svg' },
            { name: 'Finance', img: './valueandintrest/Finance.svg' },
            { name: 'Food & Beverages', img: './valueandintrest/Food.svg' },
            { name: 'Sports', img: './valueandintrest/Sports.svg' },
            { name: 'Culture & Events', img: './valueandintrest/Culture.svg' },
        ]
    },
]
export default function Profileseenbyvisitors() {

    useEffect(() => {
        document.title = 'Profile(seen by visitors)'
    }, [])

    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(false)

    const updateScrollButtons = () => {
        if (!scrollRef.current) return
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
        setCanScrollLeft(scrollLeft > 0)
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth)
    }

    useEffect(() => {
        updateScrollButtons()
        if (scrollRef.current) {
            scrollRef.current.addEventListener("scroll", updateScrollButtons)
            return () => scrollRef.current.removeEventListener("scroll", updateScrollButtons)
        }
    }, [])

    const scroll = (direction) => {
        if (!scrollRef.current) return
        const { scrollLeft, clientWidth } = scrollRef.current
        const scrollAmount = direction === "left" ? -clientWidth : clientWidth
        scrollRef.current.scrollTo({
            left: scrollLeft + scrollAmount,
            behavior: "smooth",
        })
    }

    const galleryRef = useRef(null)
    const [canScrollLeftGallery, setCanScrollLeftGallery] = useState(false)
    const [canScrollRightGallery, setCanScrollRightGallery] = useState(false)

    const updateGalleryScrollButtons = () => {
        if (!galleryRef.current) return
        const { scrollLeft, scrollWidth, clientWidth } = galleryRef.current
        setCanScrollLeftGallery(scrollLeft > 0)
        setCanScrollRightGallery(scrollLeft + clientWidth < scrollWidth)
    }

    useEffect(() => {
        updateGalleryScrollButtons()
        if (galleryRef.current) {
            galleryRef.current.addEventListener("scroll", updateGalleryScrollButtons)
            return () => galleryRef.current.removeEventListener("scroll", updateGalleryScrollButtons)
        }
    }, [])

    const scrollGallery = (direction) => {
        if (!galleryRef.current) return
        const { scrollLeft, clientWidth } = galleryRef.current
        const scrollAmount = direction === "left" ? -clientWidth : clientWidth
        galleryRef.current.scrollTo({
            left: scrollLeft + scrollAmount,
            behavior: "smooth",
        })
    }

    const similarProfilesRef = useRef(null)
    const [canScrollLeftProfiles, setCanScrollLeftProfiles] = useState(false)
    const [canScrollRightProfiles, setCanScrollRightProfiles] = useState(false)

    const updateProfilesScrollButtons = () => {
        if (!similarProfilesRef.current) return
        const { scrollLeft, scrollWidth, clientWidth } = similarProfilesRef.current
        setCanScrollLeftProfiles(scrollLeft > 0)
        setCanScrollRightProfiles(scrollLeft + clientWidth < scrollWidth)
    }

    useEffect(() => {
        updateProfilesScrollButtons()
        if (similarProfilesRef.current) {
            similarProfilesRef.current.addEventListener("scroll", updateProfilesScrollButtons)
            return () => similarProfilesRef.current.removeEventListener("scroll", updateProfilesScrollButtons)
        }
    }, [])

    const scrollProfiles = (direction) => {
        if (!similarProfilesRef.current) return
        const { scrollLeft, clientWidth } = similarProfilesRef.current
        const scrollAmount = direction === "left" ? -clientWidth : clientWidth
        similarProfilesRef.current.scrollTo({
            left: scrollLeft + scrollAmount,
            behavior: "smooth",
        })
    }


    const feedbacks = [
        {
            name: "John Doe",
            img: "https://randomuser.me/api/portraits/men/5.jpg",
            text: "We enjoyed working with this profile! Great experience.",
        },
        {
            name: "John Doe",
            img: "https://randomuser.me/api/portraits/men/5.jpg",
            text: "We enjoyed working with this profile! Great experience.",
        },
        {
            name: "John Doe",
            img: "https://randomuser.me/api/portraits/men/5.jpg",
            text: "We enjoyed working with this profile! Great experience.",
        },
    ]

    const similarprofiles
        = [
            {
                img: "https://randomuser.me/api/portraits/men/5.jpg",
                name: "John Doe",
                text: "Business & Tech",
            },
            {
                img: "https://randomuser.me/api/portraits/men/6.jpg",
                name: "John Doe",
                text: "Business & Tech",
            },
            {
                img: "https://randomuser.me/api/portraits/men/7.jpg",
                name: "John Doe",
                text: "Business & Tech",
            },
            {
                img: "https://randomuser.me/api/portraits/men/8.jpg",
                name: "John Doe",
                text: "Business & Tech",
            },
        ]

    return (
        <Mainlayout>
            <div className='flex justify-between items-center'>
                <div>
                    <p className='flex gap-1 ml-[40px]'>
                        <span className='text-[#000000] font-medium text-[14px] w-[115px] h-[21px]'>Current location </span>
                        <span className='text-[#000000] font-normal text-[14px] w-[87px] h-[21px]'>Lyon, France</span>
                    </p>
                </div>
                <div>
                    <ToggleSwitch />
                </div>
            </div>
            <div className="min-h-screen">
                {/* Main Content Container */}
                <div className="flex flex-col lg:flex-row gap-10 px-4 pt-10 justify-center">

                    <div className="lg:col-span-2 space-y-5 w-full lg:w-[70%]">

                        <div className="bg-white h-[202px] w-[982px] rounded-[25px] shadow-[0px_4px_6px_0px_#7575751A] p-6 flex flex-col relative">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1 items-center">
                                    <img src="/userloc.svg" className="w-[56px] h-[44px]" />
                                    <p>
                                        <span className="font-semibold text-[#000000] text-[14px]">
                                            Ideal workplace
                                        </span>{" "}
                                        <span className="font-semibold text-[#757575] text-[14px]">
                                            Paris, France
                                        </span>
                                    </p>
                                </div>

                                <div className="absolute  -bottom-[1px] right-[-25px] color-[#42C1F8] w-[165px] h-[80px] opacity-80">
                                    <img
                                        src="/Infinite bottom.svg"
                                        alt="Infinity symbol"
                                        className="object-contain rounded-br-[23px]"
                                    />
                                </div>

                                <div className="flex flex-col items-center">
                                    <div>
                                        {[...Array(4)].map((_, i) => (
                                            <span
                                                key={i}
                                                className="text-[#EDEDED] text-[20px] leading-none"
                                            >
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                    <span className="text-[#757575] text-[14px]">( no reviews yet)</span>
                                </div>
                            </div>

                            {/* Profile Image - floating at top center */}
                            <div className="absolute -top-[60px] left-1/2 transform -translate-x-1/2">
                                <div className="relative w-[136px] h-[136px]">
                                    <img
                                        src="/John.svg"
                                        alt="profile"
                                        className="w-[136px] h-[136px] rounded-ful object-cover"
                                    />

                                    {/* Badge */}
                                    <span className="absolute top-0 right-0 w-[36px] h-[36px]">
                                        <img src="/badge1.svg" className="w-full h-full" alt="badge" />
                                    </span>
                                </div>
                            </div>

                            {/* Name + Roles */}
                            <div className="text-center">
                                <h2 className="text-[24px] font-semibold text-[#000000]">John Doe</h2>
                                <p className="text-[16px] text-[#757575]">Cook  |  Waiter  |  Barman</p>
                            </div>

                            <div className="flex items-center gap-4 mt-2 w-full max-w-[443px] h-[51px] mx-auto sm:ml-[320px]">
                                {/* Followers */}
                                <p className="flex flex-col items-center">
                                    <span className="text-[#29ABE2] text-[16px] font-semibold">1,252</span>
                                    <span className="text-[#757575] text-[14px] font-normal">followers</span>
                                </p>

                                {/* Following */}
                                <p className="flex flex-col items-center">
                                    <span className="text-[#29ABE2] text-[16px] font-semibold">1,252</span>
                                    <span className="text-[#757575] text-[14px] font-normal">following</span>
                                </p>

                                {/* Follow button */}
                                <button className="flex w-[89px] h-[32px] gap-1 px-2 py-2 justify-center items-center border border-[#29ABE2] rounded-[10px]">
                                    <img src="/follow.svg" className="w-[15px] h-[13px]" />
                                    <span className="font-semibold text-[#29ABE2] text-[14px]">Follow</span>
                                </button>

                                {/* Message button */}
                                <button className="flex w-[166px] h-[32px] gap-1 px-2 py-2 justify-center items-center bg-[#000000] rounded-[10px]">
                                    <img src="/jobcard/apply.svg" className="w-[15px] h-[15px]" />
                                    <span className="font-semibold text-[#FFFFFF] text-[14px]">Send a message</span>
                                </button>
                            </div>

                        </div>


                        <div className="bg-white h-[88px] w-[982px] rounded-[25px] shadow-[0px_4px_6px_0px_#7575751A] mx-auto">
                            <div className="grid grid-cols-[20%_40%_40%] divide-x divide-gray-200 text-center">
                                {/* Contract */}
                                <div className="text-center p-4">
                                    <h3 className="font-semibold text-[#000000] text-[16px] mb-2">Contract</h3>
                                    <p className="text-[#29ABE2] text-[14px] cursor-pointer font-medium">Short-term</p>
                                </div>

                                {/* Skills */}
                                <div className="text-center p-4">
                                    <h3 className="font-semibold text-[#000000] text-[16px] mb-2">Skills</h3>
                                    <div className="flex justify-center text-[14px] items-center gap-3 text-[#757575]">
                                        <span className='font-medium'>Customer Service</span>
                                        <span className='font-medium'>Customer Relationship</span>
                                        <span>
                                            <img src="/rightaero.svg" />
                                        </span>
                                    </div>
                                </div>

                                {/* Languages */}
                                <div className="text-center p-4">
                                    <h3 className="font-semibold text-[#000000] text-[16px] mb-2">Languages</h3>
                                    <div className="flex items-center justify-center gap-3 flex-wrap">
                                        <span className="text-[#29ABE2] text-[14px] font-medium cursor-pointer hover:underline">Fluent</span>
                                        <img src="/Fluent.svg" alt="French" />
                                        <span className="text-[#29ABE2] text-[14px] font-medium cursor-pointer hover:underline">Others</span>
                                        <img src="/other2.svg" alt="English" />
                                        <img src="/other1.svg" alt="Italian" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* About Me */}

                        <div className="bg-white h-[504px] w-[982px] rounded-[25px] shadow-[0px_4px_6px_0px_#7575751A] p-6 flex flex-col items-center">
                            <h3 className="font-semibold text-[#000000] mb-4">About Me</h3>

                            <div className="w-[918px] h-[307px] relative custom-map-container">
                                <CustomMap />

                                <div
                                    onClick={toggleFullscreen}
                                    className="absolute top-[17px] right-[15px] z-[1000] rounded-[12px] flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out"
                                >
                                    <img src="./Stepper.svg" alt="Fullscreen" className="w-[42px] h-[42px]" />
                                </div>

                                <div
                                    id="show-accommodations-btn"
                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[37px] w-[489px] bg-white px-[15px] py-[10px] rounded-[10px] shadow-[0_3px_12px_rgba(0,0,0,0.15)] flex items-center gap-[10px] z-[999] whitespace-nowrap"
                                >
                                    <label className="font-poppins font-medium text-[12px] leading-[100%] tracking-[0]">
                                        John might not <span className="font-medium text-[#00a0df]">live</span> at this precise location but confirms being mobile there !
                                    </label>
                                </div>
                            </div>

                            <div className='flex flex-col justify-center items-center mt-5 gap-2'>
                                <span className="flex items-center gap-2 text-[#757575] text-[14px]">
                                    I am a driven worker, I am looking for a short-term contract in the foods & beverages industry.
                                </span>

                                <span className='flex gap-2 text-[#757575] font-semibold text-[14px]'>
                                    <img src="/Person.svg" alt="Person" className="w-[16px] h-[16px]" />
                                    I consider myself as an introvert at work
                                </span>
                                <p className='text-[#757575] text-[14px]'>
                                    I am authorized to work in {" "}
                                    <span className='text-[#29ABE2] font-semibold text-[14px]'>
                                        the European Union
                                    </span>
                                </p>
                            </div>
                        </div>

                        {/* Experience */}

                        <div className="bg-white h-[242px] w-[982px] rounded-[25px] shadow-[0px_4px_6px_0px_#7575751A] p-6 flex flex-col">
                            <h1 className='text-[16px] text-[#000000] font-semibold text-left'> Experience</h1>
                            <div className='mt-5  flex justify-between items-center'>
                                <div className='flex gap-10 items-center'>
                                    <img src='/mcd.svg' />
                                    <span className='text-[#000000] text-[14px] font-semibold'>
                                        Cook
                                    </span>
                                    <span className="font-poppins font-normal text-[14px] leading-[19.78px] tracking-[0] text-[#000000]">
                                        McDonalds
                                    </span>

                                    <p className='flex gap-2'>
                                        <img src='/experince.svg' className='h-[18px] w-[12px]' />
                                        <span className='text-[#757575] text-[14px] font-semibold'>
                                            10 Months
                                        </span>
                                    </p>
                                    <span className="text-[15px] text-[#757575] font-medium bg-[#F5F5F5] px-2 py-0.5 rounded-full">
                                        From June 2024
                                    </span>
                                </div>
                                <div>
                                    <p className="flex items-center gap-2">
                                        <img src="/Exploc.svg" className='w-[11px] h-[15px]' />
                                        <span className="text-[#757575] text-[14px] font-normal">
                                            Karachi
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <hr className='mt-5 text-[#CECECE]' />

                            <div className='mt-5  flex justify-between items-center'>
                                <div className='flex gap-10 items-center'>
                                    <img src='/cook.svg' />
                                    <span className='text-[#000000] text-[14px] font-semibold'>
                                        Cook
                                    </span>
                                    <span className="font-poppins font-normal text-[14px] leading-[19.78px] tracking-[0] text-[#000000]">
                                        Foodpanda
                                    </span>

                                    <p className='flex gap-2'>
                                        <img src='/experince.svg' className='h-[18px] w-[12px]' />
                                        <span className='text-[#757575] text-[14px] font-semibold'>
                                            10 Months
                                        </span>
                                    </p>
                                    <span className="text-[15px] text-[#757575] font-medium bg-[#F5F5F5] px-2 py-0.5 rounded-full">
                                        From June 2024
                                    </span>
                                </div>
                                <div>
                                    <p className="flex items-center gap-2">
                                        <img src="/Exploc.svg" className='w-[11px] h-[15px]' />
                                        <span className="text-[#757575] text-[14px] font-normal">
                                            Karachi
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Education */}

                        <div className="bg-white h-[242px] w-[982px] rounded-[25px] shadow-[0px_4px_6px_0px_#7575751A] p-6 flex flex-col">
                            <h1 className='text-[16px] text-[#000000] font-semibold text-left'> Education</h1>
                            <div className='mt-5  flex justify-between items-center'>
                                <div className='grid grid-cols-[100px_180px_180px_120px_140px] items-center'>
                                    <img src='/edu.svg' />
                                    <span className='text-[#000000] text-[14px] font-semibold'>
                                        Masters Degree
                                    </span>
                                    <span className='text-[#000000] text-[14px] font-base'>
                                        X Business School
                                    </span>
                                    <p className='flex gap-2'>
                                        <img src='/Educationloader.svg' className='h-[18px] w-[12px]' />
                                        <span className='text-[#757575] text-[14px] font-semibold'>
                                            10 Months
                                        </span>
                                    </p>
                                    <span className="text-[15px] text-[#757575] font-medium bg-[#F5F5F5] px-2 py-0.5 rounded-full">
                                        From June 2024
                                    </span>
                                </div>
                                <div>
                                    <p className="flex items-center gap-2">
                                        <img src="/Exploc.svg" className='w-[11px] h-[15px]' />
                                        <span className="text-[#757575] text-[14px] font-normal">
                                            Karachi
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <hr className='mt-5 text-[#CECECE]' />

                            <div className='mt-5  flex justify-between items-center'>
                                <div className='grid grid-cols-[100px_180px_180px_120px_140px] items-center'>
                                    <img src='/edu.svg' />
                                    <span className='text-[#000000] text-[14px] font-semibold'>
                                        Level of X certification
                                    </span>
                                    <span className='text-[#000000] text-[14px] font-base'>
                                        X Certification
                                    </span>
                                    <p className='flex gap-2'>
                                        <img src='/Educationloader.svg' className='h-[18px] w-[12px]' />
                                        <span className='text-[#757575] text-[14px] font-semibold'>
                                            10 Months
                                        </span>
                                    </p>
                                    <span className="text-[15px] text-[#757575] font-medium bg-[#F5F5F5] px-2 py-0.5 rounded-full">
                                        From June 2024
                                    </span>
                                </div>
                                <div>
                                    <p className="flex items-center gap-2">
                                        <img src="/Exploc.svg" className='w-[11px] h-[15px]' />
                                        <span className="text-[#757575] text-[14px] font-normal">
                                            Karachi
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Values & Interests */}

                        <div className="bg-white h-[219px] w-[982px] rounded-[25px] shadow-[0px_4px_6px_0px_#7575751A] p-6 flex flex-col items-center">
                            <h3 className="font-semibold text-[#000000] mb-4">Values & Interests</h3>

                            <div className="flex flex-col gap-4 w-full">
                                {ValuesAndInterests.map((row, rowIndex) => {
                                    const key = Object.keys(row)[0]
                                    return (
                                        <div
                                            key={rowIndex}
                                            className="flex justify-center gap-4"
                                        >
                                            {row[key].map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="flex gap-2 items-center text-center"
                                                >
                                                    <img
                                                        src={item.img}
                                                        alt={item.name}
                                                        className="w-[26px] h-[26px] object-contain"
                                                    />
                                                    <span className="text-[14px] text-[#757575]">{item.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )
                                })}
                            </div>

                        </div>

                        {/* Recent Feedbacks */}

                        <div className="bg-white h-[218px] w-[982px] rounded-[25px] shadow-[0px_4px_6px_0px_#7575751A] p-6 flex flex-col items-center relative">
                            <h1 className="text-[16px] text-[#000000] font-semibold mb-4">
                                Recent Feedbacks
                            </h1>
                            {/* Left Scroll Overlay */}
                            {canScrollLeft && (
                                <div className="absolute left-1 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10 flex items-center rounded-[25px] justify-start">
                                    <button
                                        onClick={() => scroll("left")}
                                        className="p-0"
                                    >
                                        <ChevronLeft className="w-5 h-5 text-[#757575]" />
                                    </button>
                                </div>
                            )}

                            {/* Right Scroll Overlay */}
                            {canScrollRight && (
                                <div className="absolute right-1 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10 flex items-center rounded-[25px] justify-end">
                                    <button
                                        onClick={() => scroll("right")}
                                        className="p-0"
                                    >
                                        <ChevronRight className="w-5 h-5 text-[#757575]" />
                                    </button>
                                </div>
                            )}

                            {/* Scrollable container */}
                            <div
                                ref={scrollRef}
                                className="flex gap-5 overflow-x-auto scroll-smooth w-full scrollbar-hide"
                            >
                                {feedbacks.map((fb, index) => (
                                    <div
                                        key={index}
                                        className="min-w-[536px] min-h-[122px] flex gap-2 justify-center p-5 items-center border border-[#CECECE] rounded-[20px] bg-white shadow-sm flex-shrink-0"
                                    >
                                        <div>
                                            <img
                                                src={fb.img}
                                                className="rounded-full w-[54px] h-[54px] object-cover"
                                                alt={fb.name}
                                            />
                                        </div>
                                        <div>
                                            <div className='flex  justify-between items-center'>
                                                <h2 className="text-[#333333] text-[16px] font-semibold">{fb.name}</h2>
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
                                            <span className="text-[#757575] text-[14px]">{fb.text}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>

                        {/* John’s Gallery */}

                        <div className="bg-white w-[982px] h-[780px] rounded-[25px] shadow-[0px_4px_6px_0px_#7575751A] p-6 flex flex-col items-center">
                            <h1 className="text-[16px] text-[#000000] font-semibold mb-4">John’s Gallery</h1>

                            {/* Main Image */}
                            <div className="mb-4 flex justify-center w-full">
                                <img
                                    src="/gallery-main.svg"
                                    className="rounded-[20px] w-[864px] h-[314px] object-cover"
                                    alt="Main gallery"
                                />
                            </div>

                            {/* Thumbnails Scroll */}
                            <div className="relative w-[864px] flex items-center">
                                {/* 👆 restrict width to match main image (864px) */}

                                {canScrollLeftGallery && (
                                    <div className="absolute left-0 top-0 h-full w-20
                                        bg-gradient-to-r from-white to-transparent 
                                        z-20 flex items-center justify-start">
                                        <button
                                            onClick={() => scrollGallery("left")}
                                            className="p-2"
                                        >
                                            <ChevronLeft className="w-5 h-5 text-[#757575]" />
                                        </button>
                                    </div>
                                )}

                                {/* Thumbnails Row */}
                                <div
                                    ref={galleryRef}
                                    className="flex gap-[10px] overflow-x-auto scroll-smooth 
                                    w-full scrollbar-hide z-0 "
                                >
                                    {Array(6).fill("").map((_, i) => (
                                        <div
                                            key={i}
                                            className="flex flex-col gap-2 w-[257px] h-[339px] flex-shrink-0"
                                        >
                                            <img
                                                src="/check.jpg"
                                                className="w-[257px] h-[310px] rounded-[20px] object-cover"
                                                alt="Thumbnail"
                                            />
                                            <div className="flex justify-between px-2">
                                                <p className="flex gap-1">
                                                    <span className="text-[#333333] font-semibold text-[14px]">
                                                        Posted by :
                                                    </span>
                                                    <span className="text-[#757575] font-normal text-[14px]">
                                                        John Doe
                                                    </span>
                                                </p>
                                                <span className="text-[#757575] font-normal text-[14px]">
                                                    02/09/25
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {canScrollRightGallery && (
                                    <div className="absolute right-0 top-0 h-full w-20 
                                        bg-gradient-to-l from-white to-transparent 
                                        z-20 flex items-center justify-end">
                                        <button
                                            onClick={() => scrollGallery("right")}
                                            className="p-0"
                                        >
                                            <ChevronRight className="w-5 h-5 text-[#757575]" />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>



                        {/* Similar Profiles */}

                        <div className="bg-white h-[300px] w-[982px] rounded-[25px] shadow-[4px_4px_11px_0px_#75757530] p-6 flex flex-col items-center relative">
                            <h1 className="text-[20px] text-[#000000] font-semibold mb-4 w-[151px] h-[24px]">
                                Similar Profiles
                            </h1>

                            {/* Left Scroll */}
                            {canScrollLeftProfiles && (
                                <button
                                    onClick={() => scrollProfiles("left")}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 "
                                >
                                    <ChevronLeft className="w-5 h-5 text-[#757575]" />
                                </button>
                            )}


                            {/* Right Scroll */}
                            {canScrollRightProfiles && (
                                <button
                                    onClick={() => scrollProfiles("right")}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10  p-2"
                                >
                                    <ChevronRight className="w-5 h-5 text-[#757575]" />
                                </button>
                            )}

                            {/* Scrollable container */}
                            <div
                                ref={similarProfilesRef}
                                className="flex gap-5 overflow-x-auto scroll-smooth w-full px-2 scrollbar-hide"
                            >
                                {similarprofiles.map((profile, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center justify-start w-[265px] h-[201px] border border-[#CECECE] rounded-[20px] bg-white shadow-[4px_4px_11px_0px_#75757530] text-center relative flex-shrink-0"
                                    >
                                        {/* Top gradient bar */}
                                        <div
                                            className="w-full h-[69px] rounded-t-[20px]"
                                            style={{
                                                background:
                                                    "linear-gradient(180deg, rgba(242, 254, 254, 0.2) 0%, rgba(50, 211, 213, 0.2) 50%, rgba(41, 255, 198, 0.2) 100%)",
                                            }}
                                        ></div>

                                        {/* Profile image (overlapping gradient & white section) */}
                                        <div className="absolute top-[34px]">
                                            <div className="relative">
                                                <img
                                                    src={profile.img}
                                                    className="rounded-full w-[50px] h-[50px] object-cover"
                                                    alt={profile.name}
                                                />
                                                {/* Badge */}
                                                <div className="absolute -top-1 -right-1">
                                                    <img
                                                        src="/badge1.svg"
                                                        alt="badge1"
                                                        className="w-[23px] h-[23px]"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Bottom white section */}
                                        <div className="flex flex-col justify-center items-center gap-1 pt-5">
                                            <h2 className="text-[#333333] text-[14px] font-semibold">
                                                {profile.name}
                                            </h2>
                                            <span className="text-[#333333] text-[12px]">{profile.text}</span>

                                            {/* Stars */}

                                            <div className="flex items-center justify-center w-[120px] h-[24px] rounded-full px-[2px] bg-white">
                                                {[...Array(5)].map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className="w-[24px] h-[24px] flex items-center justify-center"
                                                    >
                                                        <img
                                                            src={i < 4 ? "/Star.svg" : "/StarEmpty.svg"}
                                                            alt="star"
                                                            className="w-[24px] h-[24px]"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className="bg-white h-auto lg:h-[691px] w-full lg:w-[345px] rounded-[25px] shadow-[0px_4px_6px_0px_#7575751A] p-6 flex flex-col">
                        {/* Menu Section */}
                        <div className="space-y-4">
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

                        {/* Divider */}
                        <div className="border-t border-[#F5F5F5] my-6"></div>

                        {/* Relations */}
                        <div>
                            <h3 className="text-[#000000] font-semibold text-[16px] mb-3">Relations</h3>
                            <div className="flex items-center gap-2">
                                {/* Count */}
                                <span className="text-[#29ABE2] text-[16px] font-medium cursor-pointer">
                                    200+
                                </span>
                                {/* Avatars */}
                                <div>
                                    <img
                                        src={'/relation.svg'}
                                        alt="relation"
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-[#F5F5F5] my-6"></div>

                        {/* Similar Profiles */}
                        <div>
                            <h3 className="text-[#000000] font-semibold text-[16px] mb-4">Similar Profiles</h3>

                            {/* Profile 1 */}
                            <div className="flex items-center gap-3 mb-4">
                                <img src="/jobcard/user1.png" alt="Richard" className="w-[44px] h-[44px] rounded-full object-cover" />
                                <div>
                                    <p className="text-[14px] font-semibold text-[#000000] flex items-center gap-1">
                                        Richard Branson
                                        <img src="/badge1.svg" className="w-4 h-4" />
                                    </p>
                                    <p className="text-[13px] text-[#757575]">Founder at Virgin group</p>
                                </div>
                            </div>

                            {/* Profile 2 */}
                            <div className="flex items-center gap-3">
                                <img src="/jobcard/user2.png" alt="Nidhi" className="w-[44px] h-[44px] rounded-full object-cover" />
                                <div>
                                    <p className="text-[14px] font-semibold text-[#000000] flex items-center gap-1">
                                        Nidhi Nagori
                                        <img src="/badge1.svg" className="w-4 h-4" />
                                    </p>
                                    <p className="text-[13px] text-[#757575]">CEO & Founder - Globally</p>
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-[#F5F5F5] my-6"></div>

                        {/* Ad */}
                        <div className="w-full">
                            <h3 className="text-[#CECECE] font-semibold text-[16px] mb-2">Ad</h3>

                            <img
                                src="/ad.svg"
                                alt="ad"
                                className="w-[281px] h-[62px] object-cover rounded-[20px]"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </Mainlayout >
    )
}
