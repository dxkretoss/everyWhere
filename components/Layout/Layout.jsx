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
                <div>
                    {children}
                </div>
            </main>

            <footer className="w-full">
                <Footer />
            </footer>
        </div>
    );
}
