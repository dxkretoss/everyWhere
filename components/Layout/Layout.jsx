import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="w-full">
                <Navbar />
            </header>

            <main className="flex-1">
                <div className="py-10 w-[1440px] m-auto">
                    {children}
                </div>
            </main>

            <footer className="w-full">
                <Footer />
            </footer>
        </div>
    );
}
