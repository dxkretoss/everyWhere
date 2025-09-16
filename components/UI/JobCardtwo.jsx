import React from 'react'

export default function JobCardtwo() {
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
                        <img src="/badge1.svg" alt="badge1" className="w-[32px] h-[32px]" />
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-4">
                    <div className="flex justify-between items-start  gap-2">
                        <div>
                            <h3 className="text-[20px] font-medium text-[#000000]">Dunkin</h3>
                            <h4 className="text-[22px] font-semibold text-[#000000]">
                                Sales Manager{" "}
                                <span className="ml-2 text-sm text-[#757575] font-medium bg-[#F5F5F5] px-2 py-0.5 rounded-[999px]">
                                    ASAP
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

                    <hr className="mt-2 border border-[#CECECE]" />

                    <div className="flex flex-wrap gap-6 mt-3 text-sm text-gray-600">
                        <span className="flex items-center gap-1 text-black h-[21px] w-[56px]">
                            <img src="/jobcard/location.svg" alt="location" /> Paris
                        </span>
                        <span className="flex items-center gap-1 text-black h-[22px] w-[91px]">
                            <img src="/jobcard/dollar.svg" alt="salary" /> 30K € / Y
                        </span>
                        <span className="flex items-center gap-1 text-black h-[21px] w-[70px]">
                            <img src="/jobcard/loading.svg" alt="experience" /> 3 Years
                        </span>
                    </div>

                    <p className="text-[#757575] text-[14px] mt-2">
                        We're looking for a dynamic Sales Manager to lead our team
                    </p>

                    <div className="flex gap-3 mt-3 w-full">
                        <button className="w-[102px] h-[36px] font-medium flex items-center justify-center border-[1.08px] border-[#757575] text-[#757575] text-[14px] sm:text-[14px] rounded-[10px]">
                            Long term
                        </button>
                        <button className="w-[151.23px] h-[36px] font-medium flex items-center justify-center border-[1.08px] border-[#757575] text-[#757575] text-[14px] sm:text-[14px]  rounded-[10px]">
                            Extrovert Friendly
                        </button>
                        <button className="w-[111px] h-[38px] flex items-center justify-center gap-[8px] bg-[#29ABE2] text-white text-[12px] sm:text-[14px] rounded-[10px]">
                            <img src="/jobcard/apply.svg" alt="save" />
                            <span className="font-medium">Apply</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
