import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Mainlayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="w-full">
                <Navbar />
            </header>

            <main className="flex-1">
                <div className="absolute  left-0 w-full h-[231px] -z-10 overflow-hidden">
                    <img src="/hero/heroFrame.png" alt="Hero Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-10 py-5 w-full max-w-[1440px] px-4 mx-auto">
                    {children}
                </div>
            </main>

            <footer className="w-full">
                <Footer />
            </footer>
        </div>
    )
}