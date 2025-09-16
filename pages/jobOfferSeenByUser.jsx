import React, { useState, useRef, useEffect } from 'react'
// import Layout from '@/components/Layout/Layout/'
import Mainlayout from '@/components/MainLayout/Mainlayout';
import ToggleSwitch from '@/components/UI/ToggleSwitch';
import { MapPin, Clock, Calendar, Star, Globe, Users, Coffee, ChevronLeft, ChevronRight } from 'lucide-react';

import dynamic from "next/dynamic"

const CustomMap = dynamic(() => import("@/components/CustomMap/CustomMap"), {
    ssr: false,
});

export default function jobOfferSeenByUser() {
    const [skillLevel, setSkillLevel] = useState(30);
    const [attachCV, setAttachCV] = useState(false);
    const [needVisa, setNeedVisa] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollRef = useRef(null);
    const jobData = [
        { id: 1, title: "Job Title Will Go Here", company: "Company name here" },
        { id: 2, title: "Job Title Will Go Here", company: "Company name here" },
        { id: 3, title: "Job Title Will Go Here", company: "Company name here" },
        { id: 4, title: "Job Title Will Go Here", company: "Company name here" },
        { id: 5, title: "Job Title Will Go Here", company: "Company name here" },
    ];

    const similarprofiles
        = [
            {
                img: "/Group 1000009809.png",
                name: "Job Title Will Go Here",
                text: "Company name here",
            },
            {
                img: "/Group 1000009809.png",
                name: "Job Title Will Go Here",
                text: "Company name here",
            },
            {
                img: "/Group 1000009809.png",
                name: "Job Title Will Go Here",
                text: "Company name here",
            },
            {
                img: "/Group 1000009809.png",
                name: "Job Title Will Go Here",
                text: "Company name here",
            },
        ]
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
    const handleSkillLevelChange = (event) => {
        setSkillLevel(parseInt(event.target.value));
    };


    const handleApply = () => {
        console.log('Application submitted with skill level:', skillLevel);
    };

    const InlineButton = ({
        children,
        onClick,
        variant = 'primary',
        size = 'medium',
        disabled = false,
        type = 'button',
        fullWidth = false,
        leftIcon,
        className = '',
        ...props
    }) => {
        const baseClasses =
            'font-medium rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center gap-1';

        const variants = {
            primary:
                'bg-global-2 text-global-7 hover:bg-blue-700 disabled:bg-gray-400 focus:ring-blue-500',
            secondary:
                'bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:bg-gray-100 focus:ring-gray-500',
            outline:
                'border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:border-gray-200 disabled:text-gray-400 focus:ring-gray-500',
        };

        const sizes = {
            small: 'px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm',
            medium: 'px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base',
            large: 'px-4 py-2 text-base sm:px-6 sm:py-3 sm:text-lg',
        };

        const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : 'w-auto'
            } ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} ${className}`;

        return (
            <button
                type={type}
                onClick={onClick}
                disabled={disabled}
                className={buttonClasses}
                style={{
                    backgroundColor: variant === 'primary' ? '#29abe2' : undefined,
                    color: variant === 'primary' ? '#ffffff' : undefined,
                }}
                {...props}
            >
                {leftIcon && <img src={leftIcon} alt="" className="w-4 h-4" />}
                {children}
            </button>
        );
    };

    const toggleFullscreen = () => {
        const mapEl = document.querySelector(".custom-map-container"); // className of map container
        if (!mapEl) return;

        if (!document.fullscreenElement) {
            mapEl.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    };


    return (
        <Mainlayout>
            <div className="w-full max-w-[1440px] mx-auto px-4">
                <div className="h-[27px] flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-0">
                    {/* Left section */}
                    <div className="flex items-center mb-2 sm:mb-0">
                        <div className="flex items-center gap-1 sm:gap-2">
                            <img
                                src="/user-outline.svg"
                                className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]"
                                alt="Applicants"
                            />
                            <p className='flex gap-1 items-end'>
                                <span className="text-[#000000] text-[20px]">
                                    90
                                </span>
                                <span className="text-[#000000] font-medium text-[16px]">
                                    applicants
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Right section */}
                    <div>
                        <ToggleSwitch title="Recruiting" />
                    </div>
                </div>
            </div>

            <div className="min-h-screen">
                {/* Main Content Container */}
                <div className="flex gap-3 px-4 pt-10 justify-center">

                    {/* Left Column - Job Details */}
                    <div className="lg:col-span-2 space-y-5">

                        {/* Job Header Card */}
                        <div className="bg-white rounded-[25px] shadow-sm p-6 top-[185px] left-[50px] w-[982px] h-[459px]">
                            <div className="relative flex items-start justify-between mb-4">
                                {/* Left Section - Job Details */}
                                <div>
                                    <span className="absolute -top-[45px] left-1/2 transform -translate-x-1/2 
                                            w-[132px] h-[48px] 
                                            rounded-full 
                                            bg-black text-white 
                                            flex items-center justify-center 
                                            font-poppins font-semibold text-[26px] leading-[24px]">
                                        Waiter
                                    </span>

                                    <div className="flex flex-col items-center text-center gap-3">
                                        {/* Logo */}
                                        <img
                                            src="/Frame 1618873050.png"
                                            alt="Job Logo"
                                            className="w-[112px] h-[112px] rounded-[10px] object-cover"
                                        />

                                        {/* Job Title */}
                                        <h1 className="w-[206px] font-poppins font-semibold text-2xl leading-[20px] text-gray-900 text-center">
                                            Everywhere Jobs
                                        </h1>

                                        <p className="w-[130px] font-poppins font-normal text-sm leading-5 text-gray-600 text-center">
                                            Business & Tech
                                        </p>


                                        {/* Rating */}
                                        <div className="flex items-center justify-center">
                                            <img
                                                src="/Frame 1618873051.png"
                                                alt="Rating Stars"
                                                className="w-[112px] h-[22px] object-contain"
                                            />
                                        </div>
                                        {/* Salary */}
                                        <p className="mt-6 font-poppins font-medium text-[16px] leading-[20px] text-[#757575]">
                                            30K € / Year
                                        </p>

                                        {/* Divider */}
                                        <div className="w-[411px] border-t border-[1px] border-gray-300 my-3"></div>


                                        {/* Job Details */}
                                        <div className="grid grid-cols-3 gap-6 text-sm w-full">
                                            <div className="flex flex-col gap-2">
                                                <p className="font-poppins font-medium text-sm leading-6 text-gray-500">
                                                    Remote Rate
                                                </p>
                                                <span className="w-[42px] h-[28px] rounded-full bg-gray-100 flex items-center justify-center mx-auto font-poppins font-medium text-sm leading-5">
                                                    0%
                                                </span>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <p className="font-poppins font-medium text-sm leading-6 text-gray-500">
                                                    Starting Date
                                                </p>
                                                <span className="w-[80px] h-[28px] px-3 py-1 rounded-full bg-[rgba(75,221,182,0.1)]  text-[#4BDDB6] flex items-center justify-center mx-auto font-poppins font-medium text-sm leading-5">02/09/25</span>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <p className="text-gray-500">Duration</p>
                                                <span className="w-[64px] h-[28px] rounded-full bg-gray-100 flex items-center justify-center mx-auto font-poppins font-medium text-sm leading-5">1 year</span>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                                {/* Right Section - Location & Map */}
                                <div className="flex flex-col items-end">
                                    {/* Location Pin */}
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="font-poppins text-[#000000]  font-medium text-[14px]">Paris, France</span>
                                        <img src="/location.svg" alt="Location" className="w-[16px] h-[20px]" />
                                    </div>


                                    {/* Map Image */}
                                    <div className="w-[483px] h-[369px] rounded-xl overflow-hidden shadow">
                                        <div className="h-[calc(100vh-210px)] custom-map-container">
                                            <CustomMap />
                                        </div>
                                        <div
                                            onClick={toggleFullscreen}
                                            className="absolute top-[30px] right-[17px] z-[1000] rounded-[12px] p-[10px] flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out"
                                        >
                                            <img src="./Stepper.png" alt="Fullscreen" className="w-[42px] h-[42px]" />
                                        </div>

                                        <div
                                            id="show-accommodations-btn"
                                            class="h-[37px] absolute bottom-2 right-12 bg-white px-[15px] py-[10px] rounded-[10px] shadow-[0_3px_12px_rgba(0,0,0,0.15)] text-[#00a0df] text-[12px] flex items-center gap-[10px] z-[999] whitespace-nowrap"
                                        >
                                            <input
                                                type="checkbox"
                                                id="accommodation-toggle"
                                                class="peer appearance-none w-4 h-4 border border-[#00a0df] rounded-sm cursor-pointer 
                                        checked:bg-[#00a0df] checked:border-[#00a0df]
                                        checked:after:content-['✔'] checked:after:text-white checked:after:text-[10px] 
                                        checked:after:flex checked:after:items-center checked:after:justify-center"
                                            />
                                            <label htmlFor="accommodation-toggle" class="cursor-pointer select-none">
                                                Show nearby accommodations
                                            </label>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Skills and Languages Section */}
                        <div className="bg-white mx-auto w-[982px] h-[199px] shadow-[0_4px_6px_rgba(117,117,117,0.1)] rounded-[25px] p-[32px_24px]">
                            <div className="grid grid-cols-3 h-full">
                                {/* Contract & Experience */}
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h3 className="font-semibold text-[16px] leading-[19.78px] text-[#333333] mb-6">
                                        Contract & Experience
                                    </h3>

                                    <div className="mb-6">
                                        <img
                                            src="/Vector (2).png"
                                            alt="Contract Icon"
                                            className="w-[25px] h-[35px] ml-[10px] mt-[5px]"
                                        />
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <span className="px-3 py-1 rounded-full bg-[rgba(41,171,226,0.1)] text-[#29ABE2] text-[12px] font-semibold">
                                            Work study
                                        </span>
                                        <span className="px-3 py-1 rounded-full bg-[#F5F5F5] text-[#757575] text-[12px] font-semibold">
                                            1 Year
                                        </span>
                                    </div>
                                </div>

                                {/* Languages */}
                                <div className="flex flex-col items-center text-center justify-center border-x border-[#F5F5F5]">
                                    <h3 className="font-semibold text-[16px] leading-[19.78px] text-[#333333] mb-6">
                                        Languages
                                    </h3>

                                    <div className="flex justify-center items-center space-x-6 mb-6">
                                        <img

                                            src="/image (1).png"
                                            alt="French flag"
                                            className="w-[44px] h-[32px] rounded-sm object-cover"
                                        />
                                        <img
                                            src="/image 16.png"
                                            alt="UK flag"
                                            className="w-[44px] h-[32px] rounded-sm object-cover"
                                        />
                                        <img
                                            src="/image 17.png"
                                            alt="Italian flag"
                                            className="w-[44px] h-[32px] rounded-sm object-cover"
                                        />
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <span className="px-3 py-1 rounded-full bg-[rgba(41,171,226,0.1)] text-[#29ABE2] text-[12px] font-semibold">
                                            Fluent
                                        </span>
                                        <span className="px-3 py-1 rounded-full bg-[#F5F5F5] text-[#757575] text-[12px] font-semibold">
                                            Others
                                        </span>
                                    </div>
                                </div>

                                {/* Skills */}
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h3 className="font-semibold text-[16px] leading-[19.78px] text-[#333333] mb-6">
                                        Skills
                                    </h3>

                                    <div className="flex flex-col space-y-3">
                                        <span className="px-3 py-1 rounded-full bg-[#F5F5F5] text-[#757575] text-[12px] font-semibold whitespace-nowrap">
                                            Customer Service
                                        </span>
                                        <span className="px-3 py-1 rounded-full bg-[#F5F5F5] text-[#757575] text-[12px] font-semibold whitespace-nowrap">
                                            Customer Relationship
                                        </span>
                                        <span className="px-3 py-1 rounded-full bg-[#F5F5F5] text-[#757575] text-[12px] font-semibold whitespace-nowrap">
                                            Drink Preparation
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white mx-auto w-[982px] flex flex-col justify-start items-center bg-global-12 rounded-[24px] shadow-[0px_4px_6px_#75757519] px-[20px] py-[20px]">
                            <span className="text-[16px] font-poppins font-semibold leading-[24px] text-global-1">
                                Description
                            </span>
                            <span className="font-poppins font-normal text-sm text-gray-700 leading-5 text-center mt-1.5 block">
                                Our company is looking for a new talent!
                                <br />
                                You will accomplish the following tasks within a team of 10 persons:
                            </span>


                            <div className="flex flex-col justify-start items-center w-full mt-[24px] mb-[10px]">
                                <div className="top-[994px] left-[83px] w-[918px] h-[1px] border-t border-gray-300 opacity-100"></div>

                                {/* Responsibilities */}
                                <div className="flex flex-col gap-[8px] justify-start items-start w-full mt-[20px] mx-[142px]">
                                    {/* Centered Heading */}
                                    <span className="w-full text-center text-[16px] font-poppins font-semibold leading-[24px] text-global-1">
                                        Responsibilities
                                    </span>

                                    <div className="flex flex-col gap-4 w-full items-center">
                                        <div className="flex flex-col gap-4 items-start">
                                            <div className="flex items-center gap-3">
                                                <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                                                    <img src="/Vector (3).png" alt="Check" className="w-5 h-5" />
                                                </div>
                                                <span className="font-poppins font-normal text-sm text-gray-700" style={{ lineHeight: '20px' }}>
                                                    Welcome customers in our restaurant and invite them to take seat
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                                                    <img src="/Vector (3).png" alt="Check" className="w-5 h-5" />
                                                </div>
                                                <span className="font-poppins font-normal text-sm text-gray-700" style={{ lineHeight: '20px' }}>
                                                    Take notes of their orders or register them on our tablets
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                                                    <img src="/Vector (3).png" alt="Check" className="w-5 h-5" />
                                                </div>
                                                <span className="font-poppins font-normal text-sm text-gray-700" style={{ lineHeight: '20px' }}>
                                                    Bring ordered meals at their table and check whether they are satisfied
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <br />

                                </div>

                                <div className="top-[994px] left-[83px] w-[918px] h-[1px] border-t border-gray-300 opacity-100"></div>
                                {/* Why Join Us */}
                                <div className="flex flex-col gap-[8px] justify-start items-center w-full mt-[18px] mx-[190px]">
                                    <span className="text-[16px] font-poppins font-semibold leading-[24px] text-global-1">
                                        Why Join Us
                                    </span>
                                    {/* <div className="flex justify-between items-center w-full mr-[10px]">
                                            <div className="flex flex-col gap-[12px] justify-start items-center">
                                                <img
                                                    src="/images/img_tabler_hand_click.svg"
                                                    alt="Hand Click"
                                                    className="w-[26px] h-[26px]"
                                                />
                                                <img
                                                    src="/images/img_tabler_hand_click.svg"
                                                    alt="Hand Click"
                                                    className="w-[26px] h-[26px]"
                                                />
                                                <img
                                                    src="/images/img_tabler_hand_click.svg"
                                                    alt="Hand Click"
                                                    className="w-[26px] h-[26px]"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-[16px] justify-start items-start w-full">
                                                <span className="text-[14px] font-poppins font-normal leading-[21px] text-global-5">
                                                    Easy e-learning training and personalized integration program
                                                </span>
                                                <span className="text-[14px] font-poppins font-normal leading-[21px] text-global-5">
                                                    We adapt to your schedule so you can balance work and personal life
                                                </span>
                                                <span className="text-[14px] font-poppins font-normal leading-[21px] text-global-5">
                                                    At each service, a meal is offered to you to enjoy, to eat in or take away
                                                </span>
                                            </div>
                                        </div> */}


                                    <div className="flex flex-col gap-4 w-full items-center">
                                        <div className="flex flex-col gap-4 items-start">
                                            <div className="flex items-center gap-3">
                                                <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                                                    <img src="/tabler_hand-click.png" alt="Check" className="w-5 h-5" />
                                                </div>
                                                <span className="font-poppins font-normal text-sm text-gray-700" style={{ lineHeight: '20px' }}>
                                                    Easy e-learning training and personalized integration program
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                                                    <img src="/tabler_hand-click.png" alt="Check" className="w-5 h-5" />
                                                </div>
                                                <span className="font-poppins font-normal text-sm text-gray-700" style={{ lineHeight: '20px' }}>
                                                    We adapt to your schedule so you can balance work and personal life
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                                                    <img src="/tabler_hand-click.png" alt="Check" className="w-5 h-5" />
                                                </div>
                                                <span className="font-poppins font-normal text-sm text-gray-700" style={{ lineHeight: '20px' }}>
                                                    At each service, a meal is offered to you to enjoy, to eat in or take away
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />

                                <div className="top-[994px] left-[83px] w-[918px] h-[1px] border-t border-gray-300 opacity-100"></div>


                                {/* Qualifications */}
                                <span className="text-[16px] font-poppins font-semibold leading-[24px] text-global-1 mt-[18px]">
                                    Qualifications
                                </span>
                                <div className="flex flex-col gap-[6px] justify-start items-center w-[38%] mt-[10px]">
                                    <span className="font-poppins text-sm text-gray-700 text-[14px] font-normal leading-[21px] text-global-5">
                                        Baccalaureate or equivalent experience
                                    </span>
                                    <div className="flex flex-col gap-[6px] justify-start items-center w-full">
                                        <span className="font-poppins font-normal text-sm text-gray-700 text-[14px] leading-[21px] text-global-5">
                                            Proven experience as a waiter for 2 or more years
                                        </span>
                                        <span className="font-poppins font-normal text-sm text-gray-700 text-[14px] leading-[21px] text-global-5">
                                            Strong communication and interpersonal skills
                                        </span>
                                        <span className="font-poppins font-normal text-sm text-gray-700 text-[14px] leading-[21px] text-global-5">
                                            Fluency in French, English and Italian
                                        </span>
                                    </div>
                                </div>
                                <br />
                                {/* Application Section */}
                                <div className=" bg-background flex items-center justify-center p-4">
                                    <div className="relative w-[918px] h[259px] rounded-[35px] bg-[linear-gradient(107.8deg,#F2FEFE_0%,#32D3D5_400%,#29FFC6_100%)] overflow-hidden">

                                        <div className="absolute left-[-10px] color-[#42C1F8] w-[159px] h-[75px]">
                                            <img
                                                src="/Vector (4).png"
                                                alt="Infinity symbol"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>

                                        {/* Bottom-right infinity symbol */}
                                        <div className="absolute left-[781.57px] bottom-0 right-0 color-[#42C1F8] w-[149px] h-[75px] opacity-40">
                                            <img
                                                src="/Vector (5).png"
                                                alt="Infinity symbol"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div
                                            className="flex justify-center items-center w-full bg-cover bg-center bg-no-repeat px-9 py-8">
                                            <div className="flex flex-col gap-6 justify-start items-center  mb-2">
                                                <span className="font-poppins font-semibold text-base leading-6 text-center text-[#000000]">
                                                    <span>Define </span>
                                                    <span className="text-[#29abe2]">honestly</span>
                                                    <span> how many relevant skills you have for this job & apply !</span>
                                                </span>

                                                {/* Skill Level Slider */}
                                                <div className="relative w-[464px] h-[15px] flex justify-center items-center rounded-[24px]" style={{ backgroundColor: '#ffffff' }}>
                                                    <div className="relative w-[528px] h-[24px] opacity-100  flex items-center">
                                                        {/* Left Label - "FEW" */}
                                                        <span className="font-poppins font-semibold text-[14px] leading-[24px] tracking-normal text-center uppercase h[24px] w-[30px] absolute left-0 text-sm text-[#29abe2] transform -translate-x-2/2">FEW</span>
                                                        <div className="w-[463px] h-[22px]  rounded-[999px] border-4 border-[#FFFFFF]">
                                                            <input
                                                                type="range"
                                                                min="0"
                                                                max="100"
                                                                value={skillLevel}
                                                                onChange={handleSkillLevelChange}
                                                                className="w-full h-[14px] appearance-none  transition-all duration-200 rounded-full  relative -top-1"
                                                                style={{
                                                                    background: `linear-gradient(to right, #29abe2 0%, #29abe2 ${skillLevel}%, #e5e5e5 ${skillLevel}%, #e5e5e5 100%)`,
                                                                }}
                                                            />
                                                        </div>
                                                        {/* Right Label - "ALL" */}
                                                        <span className="font-poppins font-semibold text-[14px] leading-[24px] tracking-normal text-center uppercase absolute right-0 text-[#29abe2] transform translate-x-2/2">ALL</span>
                                                    </div>
                                                </div>

                                                {/* Checkboxes */}
                                                <div className="flex justify-between items-center w-full ">
                                                    <div className="flex justify-start items-start w-full">
                                                        <div
                                                            className="ml-10 w-4 h-4 border border-gray-500 rounded cursor-pointer"
                                                            onClick={() => setAttachCV(!attachCV)}
                                                        >
                                                            {attachCV && (
                                                                <div className="w-full h-full rounded" style={{ backgroundColor: '#29abe2' }}></div>
                                                            )}
                                                        </div>
                                                        <span className="text-sm font-normal leading-5 self-center ml-2" style={{ color: '#757575' }}>
                                                            Attach my CV
                                                        </span>

                                                    </div>

                                                    <div className="flex justify-end items-start w-full">
                                                        <div
                                                            className="w-4 h-4 border border-gray-500 rounded cursor-pointer"
                                                            onClick={() => setNeedVisa(!needVisa)}
                                                        >
                                                            {needVisa && (
                                                                <div className="w-full h-full rounded" style={{ backgroundColor: '#29abe2' }}></div>
                                                            )}
                                                        </div>
                                                        <span className="text-sm font-normal leading-5 self-center ml-2" style={{ color: '#757575' }}>
                                                            I need a visa to work in this country
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Apply Button */}
                                                <InlineButton
                                                    variant="primary"
                                                    size="large"
                                                    leftIcon="/Frame.png"
                                                    onClick={handleApply}
                                                    className="rounded-lg px-5 py-3 pl-10"
                                                >
                                                    Apply
                                                </InlineButton>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* Notice */}
                                <div className="w-[918px] h-[114px] flex justify-start items-center border border-gray-500 rounded-lg px-4 mt-3" style={{ backgroundColor: '#f7f7f7f7' }}>
                                    <img
                                        src="/Frame 1618872956.png"
                                        alt="Notice Icon"
                                        className="w-1/10 self-end mt-4"
                                    />
                                    <span className="font-poppins font-normal text-sm leading-6 tracking-normal text-center w-full ml-11 text-[#757575]">
                                        <span>If you do not get an answer within </span>
                                        <span className="bg-white border border-gray-300 rounded px-1.5 py-0.5 font-semibold">
                                            2 weeks
                                        </span>
                                        <span>
                                            , consider the job offer closed at the moment. We look forward to hearing from you!
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* About Us Section */}
                        <div className="bg-white mx-auto w-[982px] flex flex-col justify-start items-center bg-global-12 rounded-[24px] shadow-[0px_4px_6px_#75757519] px-[20px] py-[20px]">
                            <span className="text-[16px] font-poppins font-semibold leading-[24px] text-global-1">
                                About Us
                            </span>
                            <span className="font-poppins tracking-normal  ml-11 text-[#757575] text-[14px] leading-[24px]">
                                We are an innovative software company created in 2025 in the South of France! We are an innovative software company created in 2025 in the South of France! We are an innovative software company created in 2025 in the South of France! We are an innovative software company created in 2025 in the South of France! We are an innovative software company created in 2025 in the South of France! We are an innovative software company created in 2025 in the South of France!
                            </span>

                            <span className="font-poppins font-normal text-[14px] text-[#757575] leading-[21px] text-global-5 mb-2">
                                <span className="font-semibold">We are introvert friendly: </span>
                                <span className="font-semibold italic">You do you, we will not bother you.</span>
                            </span>
                        </div>

                        {/* Workplace Overview */}
                        <div className="bg-white mx-auto w-[982px] h-[421px] flex flex-col justify-start items-center bg-global-12 rounded-[24px] shadow-[0px_4px_6px_#75757519] px-[20px] py-[20px]">
                            <h3 className="items-center font-semibold text-gray-900 mb-4">Workplace Overview</h3>
                            <div className="bg-gray-100 rounded-lg overflow-hidden  w-[918px] h-[314px] left-[82px] opacity-100">
                                <img src="/image (2).png" className="w-full h-full object-cover" alt="Illustration" />
                            </div>

                        </div>

                        {/* Similar jobs*/}
                        <div className="bg-white rounded-[25px] shadow-md p-6 flex flex-col items-center max-w-[982px] w-[982px] h-[329px] relative">
                            <h1 className="text-[16px] text-[#000000] font-semibold mb-4">
                                Similar Profiles
                            </h1>

                            {/* Left Scroll */}
                            {canScrollLeftProfiles && (
                                <button
                                    onClick={() => scrollProfiles("left")}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2"
                                >
                                    <ChevronLeft className="w-5 h-5 text-gray-700" />
                                </button>
                            )}

                            {/* Right Scroll */}
                            {canScrollRightProfiles && (
                                <button
                                    onClick={() => scrollProfiles("right")}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-"
                                >
                                    <ChevronRight className="w-5 h-5 text-gray-700" />
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
                                        className="flex flex-col min-w-[265px] min-h-[210px] justify-start items-center p-0 border border-[#CECECE] rounded-[20px] bg-white shadow-sm flex-shrink-0 text-center"
                                    >
                                        {/* Top gradient section */}
                                        {/* Top gradient section */}
                                        <div
                                            className="w-full h-[69px] rounded-t-[20px] flex justify-center items-center relative"
                                            style={{
                                                background: "linear-gradient(107.8deg, rgba(242, 254, 254, 0.2) 0%, rgba(50, 211, 213, 0.2) 50%, rgba(41, 255, 198, 0.2) 100%)"
                                            }}
                                        >
                                            <div className="absolute top-[34px]">
                                                <div className="relative">
                                                    <img
                                                        src={profile.img}
                                                        className="rounded-full w-[65px] h-[65px] object-cover "
                                                        alt={profile.name}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-col justify-center items-center gap-1 pt-10">
                                            <h2 className="text-[#333333] text-[14px] font-semibold">
                                                {profile.name}
                                            </h2>
                                            <span className="text-[#757575] text-[12px]">{profile.text}</span>
                                            {/* Stars */}
                                            <div className="flex justify-center gap-[8.4px] mt-[10px] mb-[10px]">
                                                <button className="w-[229px] h-[38px] flex items-center justify-center gap-2 bg-[#00C1F7] text-white font-medium text-sm px-4 py-2 rounded-lg hover:bg-[#00A8E0] transition">
                                                    <img src="/frame.png" alt="Plane Icon" className="w-4 h-4" />
                                                    Apply
                                                    <img src="/arrow-left.png" alt="Arrow" className="w-[7px] h-[12px] ml-1" /> {/* Arrow image */}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>

                    </div>

                    {/* Right Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="w-[345px] h-[691px] bg-white rounded-[25px] box-shadow: [-4px_4px_6px_0px_#7575751A] p-6 overflow-hidden">
                            {/* Menu */}
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
                            {/* Divider */}
                            <div className="border-t border-[#F5F5F5] my-6"></div>

                            {/* Similar Companies */}
                            <div className="mb-6">
                                <h3 className="font-semibold text[#000000] text-[16px] mb-3">Similar Companies</h3>
                                <div className="space-y-3">
                                    {[...Array(3)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center w-[177px] h-[50px]"  // match figma size
                                        >
                                            {/* Company Icon */}
                                            <div className="w-[50px] h-[50px] flex items-center justify-center">
                                                <img
                                                    src="/smcompanyicon.svg"
                                                    alt="Company Icon"
                                                    className="w-[50px] h-[50px]"
                                                />
                                            </div>


                                            {/* Company Text */}
                                            <div>
                                                <p className="font-poppins text-[#333333] font-semibold text-[14px] leading-[16px]">
                                                    Everywhere Jobs
                                                </p>
                                                <p className="font-poppins font-normal text-[12px] leading-[20px] text-[#757575]">
                                                    Business & Tech
                                                </p>

                                            </div>
                                        </div>

                                    ))}
                                </div>
                            </div>
                            <div className="border-t border-[#F5F5F5] my-6"></div>

                            <h3 className="text-[#CECECE] font-semibold text-[16px] mb-2">Ad</h3>

                            {/* Office Image */}
                            <div className="relative rounded-lg h-33 w-full overflow-hidden">
                                {/* Background Image */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src="/admenuimg.svg"
                                        alt="filter"
                                        className="w-[281px] h-[134px] rounded-[20px] object-cover"
                                    />
                                </div>


                                {/* Overlay Texts */}
                                <div className="absolute top-2 left-0 right-4 px-4">
                                    <div className="flex justify-between items-center">
                                        {/* Left Text */}
                                        <span className="font-poppins font-semibold text-[12px] leading-[15.7px] text-white">
                                            Flat in Paris
                                        </span>
                                        {/* Right Text */}
                                        <span className="font-poppins font-medium text-[12px] leading-[15.99px] text-white border border-white px-3 py-1 rounded-md text-center">
                                            ABC Agency
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </Mainlayout >
    )
}
