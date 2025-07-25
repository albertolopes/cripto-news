import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./assets/logo.png";
import Home from "./pages/Home.jsx";
import Sobre from "./pages/Sobre.jsx";
import Ticker from "./components/Ticker.jsx";
import TradingViewEmbed from "./pages/TradingViewEmbed.jsx";

export default function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <Router>
            <div className="min-h-screen bg-white text-black">
                <header className="w-full bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500 p-4 shadow-md">
                    <nav className="max-w-5xl mx-auto flex justify-between items-center text-white font-semibold relative">
                        <div className="flex items-center gap-4">
                            <img
                                src={logo}
                                alt="Logo Cripto Bot"
                                className="w-8 h-8 rounded-full border-2 border-white shadow-lg transition-transform duration-200 hover:scale-105"
                            />
                            <span className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-orange-300 via-pink-300 to-purple-300 bg-clip-text text-transparent drop-shadow-md">
                                Cripto Bot
                            </span>
                        </div>
                        {/* Botão hambúrguer mobile */}
                        <button
                            className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
                            onClick={() => setMenuOpen((open) => !open)}
                            aria-label="Abrir menu"
                        >
                            <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                        </button>
                        {/* Menu de navegação */}
                        <ul className="hidden md:flex gap-6 text-lg">
                            <li>
                                <Link to="/" className="hover:underline">Noticias</Link>
                            </li>
                            <li>
                                <Link to="/grafico" className="hover:underline">Graficos</Link>
                            </li>
                            <li>
                                <Link to="/sobre" className="hover:underline">Sobre</Link>
                            </li>
                        </ul>
                        {/* Dropdown mobile */}
                        {menuOpen && (
                            <ul className="absolute top-full right-0 mt-2 bg-white text-black rounded-lg shadow-lg flex flex-col gap-2 p-4 z-60 md:hidden animate-fade-in">
                                <li>
                                    <Link to="/" className="hover:text-purple-600" onClick={() => setMenuOpen(false)}>Noticias</Link>
                                </li>
                                <li>
                                    <Link to="/grafico" className="hover:text-purple-600" onClick={() => setMenuOpen(false)}>Graficos</Link>
                                </li>
                                <li>
                                    <Link to="/sobre" className="hover:text-purple-600" onClick={() => setMenuOpen(false)}>Sobre</Link>
                                </li>
                            </ul>
                        )}
                    </nav>
                </header>

                <div className="sticky top-0 z-50">
                    <Ticker />
                </div>

                <main className="max-w-5xl w-full mx-auto p-6 mt-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/sobre" element={<Sobre />} />
                        <Route path="/grafico" element={<TradingViewEmbed />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}
