import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./assets/logo.png";
import Home from "./pages/Home.jsx";
import Sobre from "./pages/Sobre.jsx";
import Ticker from "./components/Ticker.jsx";
import AdBanner from "./pages/AdBanner.jsx";

export default function App() {
    return (
        <Router>
            <div className="min-h-screen bg-white text-black">
                <AdBanner />
                <header className="w-full bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500 p-4 shadow-md">
                    <nav className="max-w-5xl mx-auto flex justify-between items-center text-white font-semibold">
                        <div className="flex items-center gap-4">
                            <img
                                src={logo}
                                alt="Logo Cripto Bot"
                                className="w-10 h-10 rounded-full border-2 border-white"
                            />
                            <span className="text-2xl font-bold">Cripto Bot</span>
                        </div>
                        <ul className="flex gap-6 text-lg">
                            <li>
                                <Link to="/" className="hover:underline">Início</Link>
                            </li>
                            <li>
                                <Link to="/sobre" className="hover:underline">Sobre</Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                <div className="sticky top-0 z-50">
                    <Ticker />
                </div>

                <main className="max-w-5xl w-full mx-auto p-6 mt-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/sobre" element={<Sobre />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}
