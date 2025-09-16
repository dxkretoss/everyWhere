import React from "react";

export default function Footer() {
    return (
        <footer className="w-full flex flex-col text-white">
            {/* Top Links Section */}
            <div className="w-full h-[49px] bg-[#29ABE2] px-4 py-3">
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-3 sm:gap-4 md:gap-6 text-[14px] font-medium text-left sm:text-center">
                    <a href="#" className="hover:underline">100% secured payments</a>
                    <a href="#" className="hover:underline">GCU</a>
                    <a href="#" className="hover:underline">Terms and conditions</a>
                    <a href="#" className="hover:underline">Legal</a>
                    <a href="#" className="hover:underline">Cookies</a>
                    <a href="#" className="hover:underline">Personal data</a>
                    <a href="#" className="hover:underline">Giveaways</a>
                    <a href="#" className="hover:underline">More about us !</a>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="w-full h-[50px] bg-[#61C1EA] flex flex-col sm:flex-row items-center sm:items-center justify-between px-4 sm:px-8 md:px-12 py-3 gap-3">
                {/* Left Section */}
                <div className="text-xs sm:text-[15px] font-medium text-left w-full sm:w-auto">
                    © Everywhere Jobs
                </div>

                {/* Right Section - Socials */}
                <div className="flex items-center justify-start sm:justify-end gap-4 w-full sm:w-auto">
                    <img src="/footer/facebook.svg" alt="Facebook" className=" cursor-pointer" />
                    <img src="/footer/twitter.svg" alt="X" className=" cursor-pointer" />
                    <img src="/footer/instagram.svg" alt="Instagram" className=" cursor-pointer" />
                    <img src="/footer/linkedin.svg" alt="LinkedIn" className=" cursor-pointer" />
                    <img src="/footer/youtube.svg" alt="YouTube" className=" cursor-pointer" />
                </div>
            </div>
        </footer>
    );
}
