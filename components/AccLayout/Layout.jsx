import React from "react";
import Navbaraccomodations from "../Navbar/Navbaraccomodations";
import Footeraccomodations from "../Footer/Footeraccomodations";
export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen bg-[#EEEEEE]">
            <header className="w-full">
                <Navbaraccomodations />
            </header>

            <main className="flex-1">
                {children}
            </main>

            <footer className="w-full">
                <Footeraccomodations />
            </footer>
        </div>
    );
}
