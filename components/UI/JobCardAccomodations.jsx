import React from 'react'

export default function JobCardAccomodations() {
    return (
        <div className="bg-white h-[257px] p-2  rounded-[10px] border border-[#CECECE] shadow-[4px_4px_11px_0px_#75757530] overflow-hidden mb-5">
            {/* flex-col on mobile, flex-row on larger screens */}
            <div className="flex flex-col sm:flex-row">

                {/* Image Section */}
                <div className="relative p-3 flex items-center justify-center rounded-t-2xl sm:rounded-tl-2xl sm:rounded-tr-none">
                    <img
                        src="/jobcard/jobimage.png"
                        alt="job"
                        className="w-[215px] h-[209px] object-cover rounded-lg"
                    />
                    <div className="absolute top-1 right-1 flex -space-x-2">
                        <img src="/badge3.svg" alt="badge3" className="w-[32px] h-[32px]" />
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-4">
                    <div className="flex justify-between items-start gap-2">
                        <div>
                            <h3 className="text-[22px] font-semibold text-[#000000]">500 € / month</h3>
                            <h4 className="text-[20px] font-medium text-[#000000]">
                                Flat with 2 bedrooms{" "}
                                <span className="ml-2 text-sm text-[#757575] font-medium bg-[#F5F5F5] px-2 py-0.5 rounded-full">
                                    From 02/04/25
                                </span>
                            </h4>
                        </div>
                        <div className="flex items-center justify-center w-[120px] h-[28px] rounded-full gap-[2px] px-[2px] bg-white">
                            {Array(5).fill(0).map((_, i) => (
                                <div
                                    key={i}
                                    className="w-[19px] h-[19px] flex items-center justify-center"
                                >
                                    <span className="text-lg font-bold w-[8px] h-[15px] text-[#FFAD2A] flex items-center justify-center">
                                        ★
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <hr className="mt-2 text-[#CECECE]" />

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-3 text-sm text-gray-600">
                        {/* Item 1 */}
                        <span className="flex items-center gap-1 text-black">
                            <img src="/jobcard/apartment.svg" alt="apartment" className="w-5 h-5" />
                            Apartment
                        </span>

                        {/* Item 2 */}
                        <span className="flex items-center gap-1 text-black">
                            <img src="/jobcard/5-locals.png" alt="locals" className="w-5 h-5" />
                            5 locals
                        </span>

                        {/* later change above icon */}

                        {/* Item 3 */}
                        <span className="flex items-center gap-1 text-black">
                            <img src="/jobcard/100-m2.svg" alt="area" className="w-5 h-5" />
                            100 m2
                        </span>

                        {/* Item 4 */}
                        <span className="flex items-center gap-1 text-black">
                            <img src="/jobcard/Floor-2.svg" alt="floor" className="w-5 h-5" />
                            Floor 2
                        </span>

                        {/* Item 5 */}
                        <span className="flex items-center gap-1 text-black">
                            <img src="/jobcard/5-bedrooms.svg" alt="bedrooms" className="w-5 h-5" />
                            5 bedrooms
                        </span>

                        {/* Item 6 */}
                        <span className="flex items-center gap-1 text-black">
                            <img src="/jobcard/3-bathrooms.svg" alt="bathrooms" className="w-5 h-5" />
                            3 bathrooms
                        </span>

                        {/* Item 7 */}
                        <span className="flex items-center gap-1 text-black">
                            <img src="/jobcard/Furnished.svg" alt="furnished" className="w-5 h-5" />
                            Furnished
                        </span>

                        {/* Item 8 */}
                        <span className="flex items-center gap-1 text-black">
                            <img src="/jobcard/Garden.svg" alt="garden" className="w-5 h-5" />
                            Garden
                        </span>
                    </div>
                    <div className="flex gap-3 mt-3 w-full">
                        <button className="w-[124px] h-[36px] flex items-center justify-center gap-[8px]">
                            <img
                                src="/accomodationsPage/ShortStayButton.svg"
                                alt="save"
                            />
                        </button>
                        <button className="font-[poppins] w-[148px] h-[36px] flex items-center justify-center gap-[5px] border-[1.08px] border-[#757575] text-[#757575] text-[12px] sm:text-[14px] pt-[10px]  pb-[10px]  rounded-[10px]">
                            <img src="/accomodationsPage/stash_calendar-light.svg" alt="save" className="w-[24px] h-[24px]" />
                            <span className="font-medium">Easy booking</span>
                        </button>

                        <button className="w-[117px] h-[38px] flex items-center justify-center gap-[8.4px] border border-[#29ABE2] text-[#29ABE2] text-[14px] sm:text-[14px] rounded-[10px]">
                            <img
                                src="/accomodationsPage/Call.svg"
                                alt="save"
                                className="w-3 h-3 sm:w-4 sm:h-4"
                            />
                            <span className="font-semibold text-[14px] leading-[21px]">Contact</span>
                        </button>

                    </div>

                </div>
            </div>
        </div>
    )
}
