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


    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    };

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

    const ValuesAndInterests = [
        {
            rowone: [
                { name: 'Environment', img: './valueandintrest/Environment.svg' },
                { name: 'Animal Rights', img: './valueandintrest/Animal_Rights.svg' },
                { name: 'Science', img: './valueandintrest/Science.svg' },
            ]
        },

    ]

    return (
        <Mainlayout>
            <div className="flex gap-2 justify-end">
                <button
                    className="w-[157px] h-[46px] flex items-center justify-center 
                    gap-[6px] rounded-[10px]
                    border border-[#000000]/60 text-[#000000] text-[14px] font-medium"
                >
                    <img src="/eyes.svg" alt="View icon" className="w-[19px] h-[13px]" />
                    View as Visitor
                </button>

                <button
                    className="w-[156px] h-[46px] flex items-center justify-center 
                    gap-[6px] rounded-[10px]
                    bg-[#000000]
                    text-white text-[14px] font-medium"
                >
                    Post a Job Offer !
                </button>
            </div>
            <div className="min-h-screen mt-10">
                {/* Main Content Container */}
                <div className="flex flex-col lg:flex-row gap-10 px-4 pt-10 justify-center">

                    <div className="lg:col-span-2 space-y-5 w-full lg:w-[70%]">

                        <div className="bg-white h-[202px] w-[982px] rounded-[25px] shadow-md p-6 flex flex-col relative">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1 items-center h-[44px]">
                                    <img src="/userloc.svg" />
                                    <p>
                                        <span className="font-semibold text-center text-[#000000] text-[14px]">
                                            HQ
                                        </span>{" "}
                                        <span className="font-semibold text-[#757575] text-[14px]">
                                            Paris, France
                                        </span>
                                    </p>
                                </div>

                                <div className="absolute bottom-0 right-0 opacity-40">
                                    <img
                                        src="/infinityright.svg"
                                        alt="Infinity symbol"
                                        className="w-full  h-[75px] object-contain rounded-br-[23px] opacity-20"
                                    />
                                </div>

                                <div className="flex  items-center">
                                    <div className='flex gap-2 items-center justify-center'>

                                        <div className='flex items-center flex-col'>
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
                                            <span className="text-[#757575] text-[14px]">( no reviews yet)</span>
                                        </div>
                                        <div>
                                            <img src='Editblue.svg' className='w-[18px] h-[18px] cursor-pointer' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Profile Image - floating at top center */}
                            <div className="absolute -top-[60px] left-1/2 transform -translate-x-1/2">
                                <div className="relative w-[136px] h-[136px]">
                                    <img
                                        src="/company-seen.svg"
                                        alt="profile"
                                        className="w-[136px] h-[136px] object-cover"
                                    />

                                    <span className="absolute top-20 right-0 w-[38px] h-[39px]">
                                        <img src="/camera.svg" className="w-full h-full" alt="badge" />
                                    </span>
                                </div>
                            </div>

                            {/* Name + Roles */}
                            <div className="text-center">
                                <h2 className="text-[24px] font-semibold text-[#000000]">Everywhere Jobs</h2>
                                <p className="text-[#757575] font-medium text-[16px]">Business & Tech</p>
                            </div>

                            <div className="flex items-center justify-center gap-4 mt-2 w-full max-w-[443px] h-[51px] mx-auto">
                                {/* Followers */}
                                <p className="flex flex-col items-center">
                                    <span className="text-[#29ABE2] text-[16px] font-semibold">12</span>
                                    <span className="text-[#757575] text-[14px] font-normal">workers</span>
                                </p>

                                {/* Following */}
                                <p className="flex flex-col items-center">
                                    <span className="text-[#29ABE2] text-[16px] font-semibold">1,252</span>
                                    <span className="text-[#757575] text-[14px] font-normal">followers</span>
                                </p>

                                {/* Follow button */}
                                <button className="flex w-[89px] h-[32px] gap-1 px-2 py-2 justify-center items-center border border-[#29ABE2] rounded-[10px]">
                                    <img src="/follow.svg" className="w-[15px] h-[13px]" />
                                    <span className="font-semibold text-[#29ABE2] text-[14px]">Follow</span>
                                </button>
                            </div>
                        </div>

                        <div className="bg-[#EAF7FC] border border-[#29ABE2] h-[102px] w-[982px] rounded-[10px] shadow-md mx-auto">
                            <div className='text-center flex flex-col pt-[13px] pb-[13px] pl-[100px] pr-[100px] '>
                                <span className='text-[#29ABE2] text-[16px] font-semibold'>
                                    You can hide your review anytime !
                                </span>
                                <span className='text-[#29ABE2] text-[14px] font-medium'>
                                    It will also hide every feedback you received but you won’t see other users’ reviews (companies included)
                                    and will have to wait <span className='underline'>30 days</span> after reactivation to visualize them again.
                                </span>
                            </div>
                        </div>

                        <div className="bg-white mx-auto w-[982px] h-[129px] shadow-[0px_4px_6px_0px_#7575751A] rounded-[25px]">
                            <div className="grid h-full divide-x divide-[#E5E5E5]"
                                style={{ gridTemplateColumns: "270px 440px 270px" }}>
                                {/* Contract & Experience */}
                                <div className="flex flex-col items-center text-center justify-center relative p-[32px_24px]">
                                    <img src='/bag.svg' className='absolute top-0 left-0 z-0' />

                                    <div className="z-1 h-[24px] flex items-center mb-6">
                                        <h3 className="z-1 font-semibold text-[16px] leading-[19.78px] text-[#000000]">
                                            Most Frequent Jobs
                                        </h3>

                                        <div className="ml-auto">
                                            <img src="/Editgrey.svg" alt="edit" className='absolute top-8 right-5 w-[18px] h-[18px] cursor-pointer' />
                                        </div>
                                    </div>
                                    <div className="z-1 w-[205px] h-[28px] bg-[#29ABE21A] rounded-[999px] flex items-center justify-center mx-auto">
                                        <p className="text-[#29ABE2] text-[14px] font-semibold flex items-center gap-2">
                                            <span>Waiter</span>
                                            <img src='/dot.svg' />
                                            <span>Cook</span>
                                            <img src='/dot.svg' />
                                            <span>Barman</span>
                                        </p>
                                    </div>
                                </div>

                                {/* Languages */}
                                <div className="flex flex-col items-center text-center justify-center relative p-[32px_24px]">
                                    <img src='/diamond.svg' className='absolute top-0 right-0 z-0' />

                                    <div className="h-[24px] flex items-center mb-6">
                                        <h3 className="z-1 font-semibold text-[16px] leading-[19.78px] text-[#000000]">
                                            Values
                                        </h3>
                                        <div className="ml-auto">
                                            <img src="/Editgrey.svg" alt="edit" className='absolute top-8 right-5 w-[18px] h-[18px] cursor-pointer' />
                                        </div>
                                    </div>
                                    <div className="z-1 flex gap-2 items-center w-full">
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
                                        <span>
                                            <img src="/rightaero.svg" />
                                        </span>
                                    </div>
                                </div>

                                {/* Skills */}
                                <div className="flex flex-col items-center text-center justify-center relative p-[32px_24px]">
                                    <img src='/comp-workstyle.svg' className='absolute top-0 right-0 z-0' />

                                    <div className="h-[24px] flex items-center mb-4">
                                        <h3 className="z-1 font-semibold text-[16px] leading-[19.78px] text-[#000000]">
                                            Workstyle
                                        </h3>
                                        <div className="ml-auto">
                                            <img src="/Editgrey.svg" alt="edit" className='absolute top-8 right-5 w-[18px] h-[18px] cursor-pointer' />
                                        </div>
                                    </div>
                                    <div className="z-1 w-[139px] h-[28px] rounded-full bg-[#29ABE21A] flex items-center justify-center mx-auto">
                                        <span className="font-poppins font-semibold text-[14px] leading-[15.7px] text-[#29ABE2] text-center cursor-pointer">
                                            Introvert friendly
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* About Me */}

                        <div className="relative bg-white h-[504px] w-[982px] rounded-[25px] shadow-md p-6 flex flex-col items-center">
                            <h3 className="font-semibold text-[#000000] mb-5">About Us</h3>


                            <div className="ml-auto">
                                <img src="/Editgrey.svg" alt="edit" className='absolute top-5 right-5 w-[18px] h-[18px] cursor-pointer' />
                            </div>

                            {/* Map Container */}
                            <div className="relative w-[918px] h-[307px] custom-map-container rounded-[20px] overflow-hidden">
                                {/* Map */}
                                <CustomMap />

                                {/* Left Overlay Image */}
                                <div className="absolute top-0 left-0 w-[390px] h-[307px] overflow-hidden z-[2000] pointer-events-none">
                                    <img
                                        src="/HomeImageInsideMap.svg"
                                        alt="Illustrative Room"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <span
                                    className="z-[2000] w-[207px] text-white absolute bottom-5 left-15 text-[12px] font-medium"
                                >
                                    Image for illustrative purpose only
                                </span>
                            </div>

                            {/* Fullscreen Button */}
                            <div
                                onClick={toggleFullscreen}
                                className="absolute top-[70px] right-[37px] z-[3000] p-[10px] flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out"
                            >
                                <img src="./Stepper.svg" alt="Fullscreen" className="w-[42px] h-[42px]" />
                            </div>

                            <div className='mt-5 flex flex-col justify-center items-center '>

                                <span className="flex w-[918px] text-center gap-2 text-[#757575] text-[14px]">
                                    We are an innovative software company created in 2025 in the South of France! We are an innovative software company created in 2025 in the South of France!We are an innovative software company created in 2025 in the South of France!
                                </span>
                                <span className="font-poppins font-normal text-[14px] text-[#757575] leading-[21px] text-global-5 mb-2">
                                    <span className="font-semibold">We are introvert friendly: </span>
                                    <span className="font-semibold italic">You do you, we will not bother you.</span>
                                </span>
                            </div>
                        </div>

                        {/* Our Opportunities */}
                        <div className="bg-white h-[396px] w-[982px] rounded-[25px]  p-6 flex flex-col items-center relative">
                            <h1 className="text-[16px] text-[#000000] font-semibold mb-4 w-[151px] h-[24px]">
                                Our Opportunities
                            </h1>

                            <div className="ml-auto">
                                <img src="/Editgrey.svg" alt="edit" className='absolute top-5 right-5 w-[18px] h-[18px] cursor-pointer' />
                            </div>

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
                                className="flex gap-5 overflow-x-auto scroll-smooth w-full px-4 scrollbar-hide "
                            >
                                {Opportunities.map((profile, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center justify-start w-[265px] h-[196px] border border-[#CECECE] rounded-[20px] bg-white shadow-[4px_4px_11px_0px_#75757530] text-center relative flex-shrink-0"
                                    >
                                        {/* Top gradient bar */}
                                        <div
                                            className="w-full h-[69px] rounded-t-[20px] "
                                            style={{
                                                background:
                                                    "linear-gradient(180deg, rgba(242, 254, 254, 0.2) 0%, rgba(50, 211, 213, 0.2) 50%, rgba(41, 255, 198, 0.2) 100%)",
                                            }}
                                        ></div>

                                        {/* Share Icon */}
                                        <img
                                            src={'/share.svg'}
                                            alt="Share"
                                            className="absolute top-3 right-2 cursor-pointer"
                                        />

                                        {/* Profile image (overlapping gradient & white section) */}
                                        <div className="absolute top-[34px]">
                                            <div className="relative">
                                                <img
                                                    src={'/opportunities.svg'}
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
                                            <span className="text-[#757575] text-[14px]">
                                                {profile.text.startsWith("Posted") ? (
                                                    <>
                                                        <span className="font-semibold text-[#333333]">Posted</span>
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

                        <div className="bg-white h-[377px] w-[982px] rounded-[25px] shadow-md p-6 flex flex-col items-center relative">
                            <h1 className="font-poppins font-semibold text-[16px] leading-[19.78px] tracking-normal text-black mb-4">
                                Recent Feedbacks
                            </h1>
                            <div className="ml-auto">
                                <img src="/Editgrey.svg" alt="edit" className='absolute top-5 right-5 w-[18px] h-[18px] cursor-pointer' />
                            </div>

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
                                        className="max-w-[541px] w-[541px] h-[268px] flex flex-col p-5 border border-gray-300 rounded-[20px] bg-white shadow-sm flex-shrink-0  ml-3 gap-y-4"
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
                                                        src={i < 4 ? "/Star.svg" : "/StarEmpty.svg"}
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
                                                        <img src="/prons.svg" className="w-[21px] h-[21px]" />
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
                                                        <img src="/crons.svg" className="w-[21px] h-[21px]" />
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
                                        <hr className='text-[#DEDDDD]' />
                                        <div className='flex p-2 mb-2 justify-center items-center gap-[106px]'>
                                            <span className='text-[#9A9A9A] font-semibold flex gap-2 items-center'>
                                                <img src='/reply.svg' />
                                                REPLY
                                            </span>
                                            <span className='text-[#9A9A9A] font-semibold flex gap-2 items-center'>
                                                <img src='/report.svg' />
                                                REPORT
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>

                        {/* John’s Gallery */}

                        <div className="bg-white w-[982px] h-[780px] rounded-[25px] shadow-md p-6 flex flex-col items-center">
                            <h1 className="text-[16px] text-[#000000] font-semibold mb-4">Everywhere Job’s Gallery</h1>


                            {/* Main Image */}
                            <div className="w-[864px] h-[314px] mb-4 flex flex-col items-center justify-center bg-[#E6E6E6] border-2 border-dashed border-gray-400 rounded-[20px]">
                                {selectedImage ? (
                                    <img
                                        src={selectedImage}
                                        alt="Uploaded Preview"
                                        className="rounded-[20px] w-full h-full object-cover"
                                    />
                                ) : (
                                    <>
                                        <input
                                            type="file"
                                            id="file-upload"
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                            className="hidden"
                                        />
                                        <label
                                            htmlFor="file-upload"
                                            className="px-6 py-2 bg-[#29ABE2] text-[#FFFFFF] rounded-[10px] cursor-pointer transition"
                                        >
                                            Upload
                                        </label>
                                        <div className="flex items-center mt-4">
                                            <input
                                                type="checkbox"
                                                id="repost"
                                                className="mr-2 text-[#000000] bg-[#E6E6E6] border-2 border-black"
                                            />
                                            <label
                                                htmlFor="repost"
                                                className="text-[14px] text-[#000000] font-medium cursor-pointer"
                                            >
                                                Make my content eligible to be reposted on Everywhere Jobs’ Socials
                                                & Communications
                                            </label>
                                        </div>
                                    </>
                                )}
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
                                            className="flex flex-col gap-2 w-[257px] h-[339px] flex-shrink-0 relative"
                                        >
                                            <img
                                                src="/check.jpg"
                                                className="w-[257px] h-[310px] rounded-[20px] object-cover "
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
                            <div className="bg-[#EAF7FC] h-[66px] w-[864px] rounded-[999px] mt-5 pt-[10px] pb-[10px] pl-[80px] pr-[80px] flex justify-center items-center">
                                <span className='font-popins italic text-[#29ABE2] text-[14px] text-center font-medium'>You can request content removal for reposted content here <br />
                                    (only if you or your company are recognizable)
                                </span>
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
                                                        src={'/opportunities.svg'}
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
                                                <button className="w-[229px] h-[38px] flex items-center justify-center gap-2 bg-[#29ABE2] text-white font-medium text-sm px-4 py-2 rounded-lg hover:bg-[#00A8E0] transition">
                                                    Follow
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>


                        <div className="bg-[#4BDDB61A] h-[41px] w-[982px] rounded-[999px] pt-[10px] pb-[10px] pl-[80px] pr-[80px] flex justify-center items-center">
                            <span className="text-[#4BDDB6] text-[14px] font-medium text-center">
                                You are responsible for the information you communicate & provide on your pages : complete and verify them well !
                            </span>
                        </div>

                    </div>

                    <div className="lg:col-span-1">
                        <div className="w-[345px] h-[691px] bg-white rounded-[25px] box-shadow: [-4px_4px_6px_0px_#7575751A] p-6 overflow-hidden">
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

                            <div className="mb-6">
                                <h3 className="font-semibold text[#000000] text-[16px] mb-3">Similar Companies</h3>
                                <div className="space-y-3">
                                    {[...Array(3)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center w-[177px] h-[50px]"  // match figma size
                                        >
                                            <div className="w-[50px] h-[50px] flex items-center justify-center">
                                                <img
                                                    src="/smcompanyicon.svg"
                                                    alt="Company Icon"
                                                    className="w-[50px] h-[50px]"
                                                />
                                            </div>


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

                            <div className="relative rounded-lg h-33 w-full overflow-hidden">
                                <div className="relative overflow-hidden">
                                    <img
                                        src="/admenuimg.svg"
                                        alt="filter"
                                        className="w-[281px] h-[134px] rounded-[20px] object-cover"
                                    />
                                </div>


                                <div className="absolute top-2 left-0 right-4 px-4">
                                    <div className="flex justify-between items-center">
                                        <span className="font-poppins font-semibold text-[12px] leading-[15.7px] text-white">
                                            Flat in Paris
                                        </span>
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
