import React, { useRef, useState, useEffect } from 'react'
import Mainlayout from '@/components/MainLayout/Mainlayout'
import dynamic from "next/dynamic"
import { Search } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react"
import ToggleSwitch from '@/components/UI/ToggleSwitch';

const CustomMap = dynamic(() => import("@/components/CustomMap/CustomMap"), {
    ssr: false,
});

const ValuesAndInterests = [
    {
        rowone: [
            { name: 'Environment', img: './valueandintrest/Environment.png' },
            { name: 'Animal Rights', img: './valueandintrest/Animal_Rights.png' },
            { name: 'Science', img: './valueandintrest/Science.png' },
            { name: 'Volunteering', img: './valueandintrest/Volunteering.png' },
            { name: 'Craftmanship', img: './valueandintrest/Craftmanship.png' },
        ]
    },
    {
        rowtwo: [
            { name: 'Education', img: './valueandintrest/Education.png' },
            { name: 'Sprituality', img: './valueandintrest/Sprituality.png' },
            { name: 'Social Actions', img: './valueandintrest/Social.png' },
            { name: 'Women Rights', img: './valueandintrest/Women.png' },
            { name: 'Minorities', img: './valueandintrest/Minorities.png' },
        ]
    },
    {
        rowthree: [
            { name: 'Aesthetics', img: './valueandintrest/Aesthetics.png' },
            { name: 'Finance', img: './valueandintrest/Finance.png' },
            { name: 'Food & Beverages', img: './valueandintrest/Food.png' },
            { name: 'Sports', img: './valueandintrest/Sports.png' },
            { name: 'Culture & Events', img: './valueandintrest/Culture.png' },
        ]
    },
]
export default function Profileseenbyvisitors() {

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



    const opportunitiesRef = useRef(null);
    const [canScrollLeftOpportunities, setCanScrollLeftOpportunities] = useState(false);
    const [canScrollRightOpportunities, setCanScrollRightOpportunities] = useState(false);

    const updateGalleryScrollButtons1 = () => {
        if (!opportunitiesRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = opportunitiesRef.current;
        setCanScrollLeftOpportunities(scrollLeft > 0);
        setCanScrollRightOpportunities(scrollLeft + clientWidth < scrollWidth);
    };

    useEffect(() => {
        updateGalleryScrollButtons1();
        if (opportunitiesRef.current) {
            opportunitiesRef.current.addEventListener("scroll", updateGalleryScrollButtons1);
            return () => opportunitiesRef.current.removeEventListener("scroll", updateGalleryScrollButtons1);
        }
    }, []);

    const scrollGallery1 = (direction) => {
        if (!opportunitiesRef.current) return;
        const { scrollLeft, clientWidth } = opportunitiesRef.current;
        const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
        opportunitiesRef.current.scrollTo({
            left: scrollLeft + scrollAmount,
            behavior: "smooth",
        });
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


    const feedbacks = [
        {
            name: "John Doe",
            img: "https://randomuser.me/api/portraits/men/5.jpg",
            text: "We enjoyed working with this profile! Great experience.",
        },
        {
            name: "Jane Smith",
            img: "https://randomuser.me/api/portraits/women/44.jpg",
            text: "Very professional and easy to collaborate with!",
        }
    ]

    const similarprofiles
        = [
            {
                img: "/Group 1000009809.png",
                name: "Everywhere Jobs",
                text: "Business & Tech",
            },
            {
                img: "/Group 1000009809.png",
                name: "Everywhere Jobs",
                text: "Business & Tech",
            },
            {
                img: "/Group 1000009809.png",
                name: "Everywhere Jobs",
                text: "Business & Tech",
            },
            {
                img: "/Group 1000009809.png",
                name: "Everywhere Jobs",
                text: "Business & Tech",
            },
        ]


    const Opportunities = [
        {
            img: "/Group 1000009809.png",
            shareIcon: "/share icon.png",
            name: "Job Title Will Go Here",
            text: "Posted : 1 hour 30 mins ago",
        },
        {
            img: "/Group 1000009809.png",
            shareIcon: "/share icon.png",
            name: "Job Title Will Go Here",
            text: "Posted : 1 hour 30 mins ago",
        },
        {
            img: "/Group 1000009809.png",
            shareIcon: "/share icon.png",
            name: "Job Title Will Go Here",
            text: "Posted : 1 hour 30 mins ago",
        },
        {
            img: "/Group 1000009809.png",
            shareIcon: "/share icon.png",
            name: "Job Title Will Go Here",
            text: "Posted : 1 hour 30 mins ago",
        },
    ]

    const Otherfeedback = [
        {
            name: "John Doe",
            avatar: "https://randomuser.me/api/portraits/men/5.jpg",
            comment: "I had a very great experience here. Highly recommended!",
            pros: ["Great missions", "Amazing team"],
            improvements: ["No onboarding document", "Hard objectives"]
        },
        {
            name: "Jane Smith",
            avatar: "https://randomuser.me/api/portraits/men/5.jpg",
            comment: "Fantastic experience, highly professional team!",
            pros: ["Supportive management", "Flexible schedule"],
            improvements: ["Long feedback forms"]
        }
    ];

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

                        <div className="bg-white h-[202px] w-[982px] rounded-[25px] shadow-md p-6 flex flex-col relative">
                            <div className="flex justify-between">
                                <div className="flex gap-2 items-center">
                                    <img src="/userloc.png" className="w-[56px] h-[44px]" />
                                    <p>
                                        <span className="font-semibold text-[#000000] text-[14px]">
                                            HQ
                                        </span>{" "}
                                        <span className="font-normal text-[#757575] text-[14px]">
                                            Paris, France
                                        </span>
                                    </p>
                                </div>

                                <div className="ml-[893px] absolute  bottom-0 right-[-25px] color-[#42C1F8] w-[165px] h-[80px] opacity-80">
                                    <img
                                        src="/Infinite bottom.png"
                                        alt="Infinity symbol"
                                        className="object-contain"
                                    />
                                </div>

                                <div className="flex flex-col items-center">
                                    <div className="flex items-center justify-center w-[120px] h-[24px] rounded-full  px-[2px] bg-white">
                                        {[...Array(5)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="w-[19px] h-[19px] flex items-center justify-center"
                                            >
                                                <img
                                                    src={i < 4 ? "/Star.png" : "/StarEmpty.png"}
                                                    alt="star"
                                                    className="w-[15px] h-[15px]"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-[#757575] text-[14px]">( no reviews yet)</span>
                                </div>
                            </div>

                            {/* Profile Image - floating at top center */}
                            <div className="absolute -top-[60px] left-1/2 transform -translate-x-1/2">
                                <div className="relative w-[136px] h-[136px]">
                                    <img
                                        src="/Logo.png"
                                        alt="profile"
                                        className="w-[120px] h-[120px] object-cover"
                                    />
                                </div>
                            </div>

                            {/* Name + Roles */}
                            <div className="text-center">
                                <h2 className="text-lg font-semibold text-[#000000]">John Doe</h2>
                                <p className="text-[#757575]">Business & Tech</p>
                            </div>

                            <div className="flex items-center gap-4 mt-2 w-full max-w-[443px] h-[51px] mx-auto sm:ml-[320px]">
                                {/* Followers */}
                                <p className="flex flex-col items-center">
                                    <span className="text-[#29ABE2] text-[16px] font-semibold">12</span>
                                    <span className="text-[#757575] text-[14px] font-normal">Workers</span>
                                </p>

                                {/* Following */}
                                <p className="flex flex-col items-center">
                                    <span className="text-[#29ABE2] text-[16px] font-semibold">1,252</span>
                                    <span className="text-[#757575] text-[14px] font-normal">Followers</span>
                                </p>

                                {/* Follow button */}
                                <button className="flex gap-1 px-2 py-2 justify-center items-center border border-[#29ABE2] rounded-[10px]">
                                    <img src="/follow.png" className="w-[15px] h-[13px]" />
                                    <span className="font-semibold text-[#29ABE2] text-[14px]">Follow</span>
                                </button>
                            </div>

                        </div>


                        <div className="bg-white h-[129px] w-[982px] rounded-[25px] shadow-md mx-auto">
                            <div className="grid grid-cols-[25%_45%_30%] divide-x divide-gray-200 text-center">
                                {/* Contract */}
                                <div className="text-center p-8">
                                    <h3 className="font-semibold text-[#000000] text-[16px] mb-2">
                                        Most Frequent Jobs
                                    </h3>
                                    {/* Blue pill container */}
                                    <div className="w-[205px] h-[28px] bg-[#29ABE21A] rounded-full flex items-center justify-center mx-auto">
                                        <p className="text-[#29ABE2] text-[12px] font-semibold flex items-center gap-2">
                                            <span>Waiter</span>
                                            <span className="text-[12px]">•</span>
                                            <span>Cook</span>
                                            <span className="text-[12px]">•</span>
                                            <span>Barman</span>
                                        </p>
                                    </div>

                                </div>


                                {/* Skills */}
                                <div className="text-center p-8">
                                    <h3 className="font-semibold text-[#000000] text-[16px] mb-2">Values</h3>
                                    <div className="flex justify-center items-center gap-6 text-[14px] text-[#757575]">
                                        {/* Environment */}
                                        <div className="flex items-center gap-2 h-[28px] whitespace-nowrap">
                                            <img src="/environment.png" alt="Environment" className="font-poppins font-medium text-[14px] leading-[15.7px] text-[#757575]" />
                                            <span>Environment</span>
                                        </div>

                                        {/* Animal Rights */}
                                        <div className="flex items-center gap-2 h-[28px] whitespace-nowrap">
                                            <img src="/animal.png" alt="Animal Rights" className="font-poppins font-medium text-[14px] leading-[15.7px] text-[#757575]" />
                                            <span>Animal Rights</span>
                                        </div>

                                        {/* Science */}
                                        <div className="flex items-center gap-2 h-[28px] whitespace-nowrap">
                                            <img src="/Technology.png" alt="Science" className="font-poppins font-medium text-[14px] leading-[15.7px] text-[#757575]" />
                                            <span>Science</span>
                                            <img
                                                src="/arrow-left.png"
                                                alt="arrow"
                                                className="w-[16px] h-[16px] brightness-0 invert-[41%] sepia-[5%] saturate-[0%] hue-rotate-[0deg] opacity-100"
                                            />
                                        </div>
                                    </div>

                                </div>

                                {/* Languages */}
                                {/* <div className="text-center p-4">
                                    <h3 className="font-semibold text-[#000000] text-[16px] mb-2">Workstyle</h3>
                                    <div className="w-[139px] h-[28px] rounded-full bg-[#29ABE21A] flex items-center justify-center mx-auto">
                                        <span className="font-poppins font-medium text-[14px] leading-[15.7px] text-[#29ABE2] text-center cursor-pointer hover:underline">
                                            Introvert friendly
                                        </span>
                                    </div>
                                </div> */}

                                <div className="text-center p-8 relative">
                                    {/* Background finger image */}
                                    <img
                                        src="/Finger.png"
                                        alt="fingerImage"
                                        className="absolute w-[88.85px] h-[125.33px] top-[4.23px] right-[10px] opacity-100 brightness-5 saturate-100 invert pointer-events-none"
                                    />

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <h3 className="font-semibold text-[#000000] text-[16px] mb-2">
                                            Workstyle
                                        </h3>
                                        <div className="w-[139px] h-[28px] rounded-full bg-[#29ABE21A] flex items-center justify-center mx-auto">
                                            <span className="font-poppins font-medium text-[14px] leading-[15.7px] text-[#29ABE2] text-center cursor-pointer">
                                                Introvert friendly
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* About Me */}

                        <div className="relative bg-white h-[504px] w-[982px] rounded-[25px] shadow-md p-6 flex flex-col items-center">
                            <h3 className="font-semibold text-[#000000] mb-2">About Me</h3>

                            {/* Map Container */}
                            <div className="relative w-[918px] h-[307px] custom-map-container rounded-[20px] overflow-hidden">
                                {/* Map */}
                                <CustomMap />

                                {/* Left Overlay Image */}
                                <div className="absolute top-[-77px] left-[-117px] w-[469px] h-[469px] border-[8px] border-white rounded-full overflow-hidden z-[2000] pointer-events-none">
                                    <img
                                        src="/HomeImageInsideMap.jpg"
                                        alt="Illustrative Room"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Fullscreen Button */}
                            <div
                                onClick={toggleFullscreen}
                                className="absolute top-[50px] right-[37px] z-[3000] p-[10px] flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out"
                            >
                                <img src="./Stepper.png" alt="Fullscreen" className="w-[42px] h-[42px]" />
                            </div>

                            <div className='mt-5 flex flex-col justify-center items-center '>

                                <span className="flex items-center gap-2 text-[#757575] text-[14px]">
                                    I am a driven worker, I am looking for a short-term contract in the foods & beverages industry.
                                </span>

                                <span className='flex gap-2 text-[#757575] font-semibold text-[14px]'>
                                    <img src="/Person.png" alt="Person" className="w-[16px] h-[16px]" />
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

                        {/* <div className="bg-white h-[242px] w-[982px] rounded-[25px] shadow-md p-6 flex flex-col">
                            <h1 className='text-[16px] text-[#000000] font-semibold text-left'> Experience</h1>
                            <div className='mt-5  flex justify-between items-center'>
                                <div className='flex gap-10 items-center'>
                                    <img src='/mcd.png' />
                                    <span className='text-[#000000] text-[14px] font-semibold'>
                                        Cook
                                    </span>
                                    <span className="font-poppins font-normal text-[14px] leading-[19.78px] tracking-[0] text-[#000000]">
                                        McDonalds
                                    </span>

                                    <p className='flex gap-2'>
                                        <img src='/experince.png' className='h-[18px] w-[12px]' />
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
                                        <img src="/Exploc.png" />
                                        <span className="text-[#757575] text-[14px] font-normal">
                                            Karachi
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <hr className='mt-5 text-[#CECECE]' />

                            <div className='mt-5  flex justify-between items-center'>
                                <div className='flex gap-10 items-center'>
                                    <img src='/cook.png' />
                                    <span className='text-[#000000] text-[14px] font-semibold'>
                                        Cook
                                    </span>
                                    <span className="font-poppins font-normal text-[14px] leading-[19.78px] tracking-[0] text-[#000000]">
                                        Foodpanda
                                    </span>

                                    <p className='flex gap-2'>
                                        <img src='/experince.png' className='h-[18px] w-[12px]' />
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
                                        <img src="/Exploc.png" />
                                        <span className="text-[#757575] text-[14px] font-normal">
                                            Karachi
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div> */}

                        {/* Education */}

                        {/* <div className="bg-white h-[242px] w-[982px] rounded-[25px] shadow-md p-6 flex flex-col">
                            <h1 className='text-[16px] text-[#000000] font-semibold text-left'> Education</h1>
                            <div className='mt-5  flex justify-between items-center'>
                                <div className='grid grid-cols-[100px_180px_180px_120px_140px] items-center'>
                                    <img src='/edu.png' />
                                    <span className='text-[#000000] text-[14px] font-semibold'>
                                        Masters Degree
                                    </span>
                                    <span className='text-[#000000] text-[14px] font-base'>
                                        X Business School
                                    </span>
                                    <p className='flex gap-2'>
                                        <img src='/Educationloader.png' className='h-[18px] w-[12px]' />
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
                                        <img src="/Exploc.png" />
                                        <span className="text-[#757575] text-[14px] font-normal">
                                            Karachi
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <hr className='mt-5 text-[#CECECE]' />

                            <div className='mt-5  flex justify-between items-center'>
                                <div className='grid grid-cols-[100px_180px_180px_120px_140px] items-center'>
                                    <img src='/edu.png' />
                                    <span className='text-[#000000] text-[14px] font-semibold'>
                                        Level of X certification
                                    </span>
                                    <span className='text-[#000000] text-[14px] font-base'>
                                        X Certification
                                    </span>
                                    <p className='flex gap-2'>
                                        <img src='/Educationloader.png' className='h-[18px] w-[12px]' />
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
                                        <img src="/Exploc.png" />
                                        <span className="text-[#757575] text-[14px] font-normal">
                                            Karachi
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div> */}

                        {/* Values & Interests */}

                        {/* <div className="bg-white h-[219px] w-[982px] rounded-[25px] shadow-md p-6 flex flex-col items-center">
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

                        </div> */}


                        {/* Our Opportunities */}
                        <div className="bg-white h-[396px] w-[982px] rounded-[25px] shadow-md p-6 flex flex-col items-center relative">
                            <h1 className="text-[16px] text-[#000000] font-semibold mb-4 w-[151px] h-[24px]">
                                Our Opportunities
                            </h1>

                            <div className="relative w-[735px] h-[53px]">
                                {/* Search Icon */}
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#29ABE2]" />

                                {/* Input */}
                                <input
                                    type="text"
                                    placeholder="Search Job..."
                                    className="w-[612px] h-[53px] pl-10 pr-4 rounded-[12px] shadow-[0_4px_11px_0px_#00000012] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 font-normal text-sm"
                                />


                                {/* Search Button */}
                                <button
                                    className="absolute right-0 top-0 h-[53px] w-[111px] px-4 bg-[#29ABE2] text-white rounded-[12px] font-medium"
                                >
                                    Search
                                </button>
                            </div>

                            <br />

                            {/* Left Scroll */}
                            {canScrollLeftOpportunities && (
                                <button
                                    onClick={() => scrollGallery1("left")}
                                    className="absolute left-2 top-[55%] z-10"
                                >
                                    <ChevronLeft className="w-5 h-5 text-[#757575]" />
                                </button>
                            )}

                            {/* Right Scroll */}
                            {canScrollRightOpportunities && (
                                <button
                                    onClick={() => scrollGallery1("right")}
                                    className="absolute right-2 top-[55%] z-10"
                                >
                                    <ChevronRight className="w-5 h-5 text-[#757575]" />
                                </button>
                            )}
                            {/* Scrollable container */}
                            <div
                                ref={opportunitiesRef}
                                className="flex gap-5 overflow-x-auto scroll-smooth w-full px-4 scrollbar-hide"
                            >
                                {Opportunities.map((profile, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center justify-start w-[265px] h-[196px] border border-[#CECECE] rounded-[20px] bg-white shadow-sm text-center relative flex-shrink-0"
                                    >
                                        {/* Top gradient bar */}
                                        <div
                                            className="w-full h-[69px] rounded-t-[20px]"
                                            style={{
                                                background:
                                                    "linear-gradient(180deg, rgba(242, 254, 254, 0.2) 0%, rgba(50, 211, 213, 0.2) 50%, rgba(41, 255, 198, 0.2) 100%)",
                                            }}
                                        ></div>

                                        {/* Share Icon */}
                                        <img
                                            src={profile.shareIcon}
                                            alt="Share"
                                            className="absolute top-3 right-2 w-[22px] h-[18px] cursor-pointer"
                                        />

                                        {/* Profile image (overlapping gradient & white section) */}
                                        <div className="absolute top-[34px]">
                                            <div className="relative">
                                                <img
                                                    src={profile.img}
                                                    className="w-[65px] h-[65px] object-cover"
                                                    alt={profile.name}
                                                />
                                            </div>
                                        </div>

                                        {/* Bottom white section */}
                                        <div className="flex flex-col justify-center items-center gap-1 pt-10">
                                            <h2 className="text-[#333333] text-[14px] font-semibold">
                                                {profile.name}
                                            </h2>
                                            <span className="text-[#757575] text-[12px]">
                                                {profile.text.startsWith("Posted") ? (
                                                    <>
                                                        <span className="font-bold text-[#333333]">Posted</span>
                                                        {profile.text.replace("Posted", "")}
                                                    </>
                                                ) : (
                                                    profile.text
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>

                        {/* Recent Feedbacks */}

                        <div className="bg-white h-[333px] w-[982px] rounded-[25px] shadow-md p-6 flex flex-col items-center relative">
                            <h1 className="font-poppins font-semibold text-[16px] leading-[19.78px] tracking-normal text-black mb-4">
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
                                {Otherfeedback.map((fb, index) => (
                                    <div
                                        key={index}
                                        className="max-w-[541px] w-[541px] h-[224px] flex flex-col p-5 border border-gray-300 rounded-[20px] bg-white shadow-sm flex-shrink-0  ml-3 gap-y-4"
                                    >
                                        {/* Header Section with User Info and Rating */}
                                        <div className="mt-2 flex items-start justify-between mb-3">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={fb.avatar}
                                                    className="rounded-full w-[54px] h-[54px] object-cover"
                                                    alt={fb.name}
                                                />
                                                <div>
                                                    <h2 className="text-[#333333] text-[16px] font-semibold mb-1">{fb.name}</h2>
                                                    <div className="h-[20px] text-[#757575] w-[441px] font-poppins font-normal text-[14px] leading-[19.78px] tracking-[0%]">
                                                        {fb.comment}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-end h-[24px] rounded-full bg-white">
                                                {[...Array(5)].map((_, i) => (
                                                    <img
                                                        key={i}
                                                        src={i < 4 ? "/Star.png" : "/StarEmpty.png"}
                                                        alt="star"
                                                        className="w-[20px] h-[20px]"
                                                    />
                                                ))}
                                            </div>

                                        </div>

                                        {/* Pros and Improvements Section */}
                                        <div className="flex gap-6 flex-1">
                                            {/* Pros Section */}
                                            <div className="flex-1">
                                                {/* Header Section */}
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="w-5 h-5 rounded-full flex items-center justify-center">
                                                        <img src="/check icon.png" className="w-[21px] h-[21px]" />
                                                    </div>
                                                    <span className="text-[14px] font-medium text-[#333333]">Pros</span>
                                                </div>

                                                {/* List aligned with text, not icon */}
                                                <ul className="pl-[27px] space-y-1">
                                                    {fb.pros.map((pro, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="text-[13px] text-[#666666] flex items-start gap-2"
                                                        >
                                                            <span className="text-[10px] mt-1">•</span>
                                                            {pro}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>


                                            {/* Areas of Improvement Section */}

                                            <div className="flex-1">
                                                {/* Header Section */}
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="w-5 h-5 rounded-full flex items-center justify-center">
                                                        <img src="/wrong icon.png" className="w-[21px] h-[21px]" />
                                                    </div>
                                                    <span className="text-[14px] font-medium text-[#333333]">
                                                        Areas of improvements
                                                    </span>
                                                </div>

                                                {/* List aligned with text, not icon */}
                                                <ul className="pl-[27px] space-y-1">
                                                    {fb.improvements.map((improvement, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="text-[13px] text-[#666666] flex items-start gap-2"
                                                        >
                                                            <span className="text-[10px] mt-1">•</span>
                                                            {improvement}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>

                        {/* John’s Gallery */}

                        <div className="bg-white w-[982px] h-[780px] rounded-[25px] shadow-md p-6 flex flex-col items-center">
                            <h1 className="text-[16px] text-[#000000] font-semibold mb-4">John’s Gallery</h1>

                            {/* Main Image */}
                            <div className="mb-4 flex justify-center w-full">
                                <img
                                    src="/gallery-main.png"
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

                        <div className="bg-white h-[300px] w-[982px] rounded-[25px] shadow-md p-6 flex flex-col items-center relative">
                            <h1 className="text-[16px] text-[#000000] font-semibold mb-4 w-[156px] h-[20px]">
                                Similar Companies
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
                                                    Follow
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className="bg-white h-auto lg:h-[691px] w-full lg:w-[345px] rounded-[25px] shadow-md p-6 flex flex-col">
                        {/* Menu Section */}
                        <div className="space-y-4">
                            <h3 className="text-[#000000] font-semibold text-[16px]">Menu</h3>

                            <div className="flex items-center gap-3 cursor-pointer">
                                <img src="/change-mode.png" alt="change mode" />
                                <span className="text-[#757575] text-[14px] font-medium">Change mode</span>
                            </div>

                            <div className="flex items-center gap-3 cursor-pointer">
                                <img src="/dashboard.png" alt="dashboard" />
                                <span className="text-[#757575] text-[14px]  font-medium">Dashboard</span>
                            </div>

                            <div className="flex items-center gap-3 cursor-pointer">
                                <img src="/messages.png" alt="messages" />
                                <span className="text-[#757575] text-[14px] font-medium">Messages</span>
                            </div>

                            <div className="flex items-center gap-3 cursor-pointer">
                                <img src="/faq.png" alt="faq" />
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
                                        src={'/relation.png'}
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
                                src="/ad.png"
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
