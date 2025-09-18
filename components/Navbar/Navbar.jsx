
import React from "react";
import Image from "next/image";
import { Search } from "lucide-react";
export default function Navbar() {
    return (
        <nav className="w-full h-[80px] border border-[#EBEBEB] flex items-center justify-between bg-white">
            <div className="flex items-center flex-1">
                <div className="w-[230px]">
                    <Image
                        src="/nav/logo.svg"
                        alt="Logo"
                        width={220}
                        height={76}
                        className="object-contain mt-[2px]"
                    />
                </div>
                <div className="hidden xl:flex flex-1">
                    <div className="w-full relative">
                        <Search className="absolute  text-[#29ABE2] left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Job name, Sector, Keyword ..."
                            className="font-normal text-sm h-[45px] w-[612px] pl-10 pr-4 py-2 rounded-[12px] shadow-[0px_4px_11px_0px_#93939312] border border-[#EBEBEB]"
                        />
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-4 mr-2">
                <button className="w-[160px] h-[45px] hidden xl:block bg-white border border-[#EBEBEB] text-[#29ABE2] font-poppins font-semibold text-sm leading-none tracking-normal px-4 py-2 rounded-lg hover:bg-blue-50 transition">
                    PUBLISH AN OFFER
                </button>


                <div className="flex items-center gap-3">
                    <img src="/nav/menu.svg" alt="Apps" className="hidden xl:flex cursor-pointer" />
                    <img src="/nav/mail.svg" alt="Mail" className="hidden xl:flex cursor-pointer" />
                    <img src="/nav/bell.svg" alt="Notifications" className="cursor-pointer" />
                    <div class="hidden xl:flex w-[45px] h-[45px] opacity-100 rounded-[10px] border gap-[10px] border-[#EBEBEB] px-[12px] py-[10px]  items-center justify-center">
                        <img src="/nav/circle.svg" alt="Refresh" class="cursor-pointer w-[22px] h-[19px]" />
                    </div>


                    {/* User Avatar + Chevron */}
                    <div className="flex items-center gap-1 cursor-pointer">
                        <img
                            src="/nav-img.svg"
                            alt="User"
                            className="w-[32px] h-[32px]"
                        />
                        <img
                            src="/arrow.svg"
                            alt="Dropdown"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}
