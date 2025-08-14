import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./assets/logo.png";
import Home from "./pages/Home.jsx";
import Sobre from "./pages/Sobre.jsx";
import Ticker from "./components/Ticker.jsx";
import TradingViewEmbed from "./pages/TradingViewEmbed.jsx";
import { API_URLS } from "./config/api.js";

export default function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        fetch(API_URLS.ACESSO, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        }).catch((err) => {

        });
    }, []);

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

                {/* Rodapé */}
                <footer className="bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500 text-white mt-16">
                    <div className="max-w-5xl mx-auto px-6 py-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Logo e descrição */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={logo}
                                        alt="Logo Cripto Bot"
                                        className="w-10 h-10 rounded-full border-2 border-white shadow-lg"
                                    />
                                    <span className="text-xl font-extrabold bg-gradient-to-r from-orange-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                                        Cripto Bot
                                    </span>
                                </div>
                                <p className="text-purple-100 text-sm leading-relaxed">                                    
                                    Mantenha-se atualizado com as últimas novidades do mercado, de forma inteligente e automatizada.
                                </p>
                            </div>

                            {/* Links rápidos */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-white">Links Rápidos</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <Link to="/" className="text-purple-100 hover:text-white transition-colors duration-200 text-sm">
                                            Notícias
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/grafico" className="text-purple-100 hover:text-white transition-colors duration-200 text-sm">
                                            Gráficos
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/sobre" className="text-purple-100 hover:text-white transition-colors duration-200 text-sm">
                                            Sobre
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Informações de contato */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-white">Informações</h3>
                                <div className="space-y-2 text-sm text-purple-100">
                                    <p>© 2025 Cripto Bot</p>
                                    <p>Todos os direitos reservados</p>
                                    <p className="pt-2">
                                        <a 
                                            href="https://github.com/albertolopes" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-purple-200 hover:text-white transition-colors duration-200"
                                        >
                                            GitHub
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Linha divisória */}
                        <div className="border-t border-purple-400 mt-8 pt-8">
                            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-purple-200">
                                <p>
                                    Desenvolvido com <span className="text-purple-700">♥</span> para a comunidade crypto por{" "}
                                    <a
                                        href="https://github.com/albertolopes"
                                        className="underline hover:text-gray-700"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        albertolopes
                                    </a>
                                </p>
                                <div className="flex items-center gap-4 mt-4 md:mt-0">
                                    <span className="text-xs">v1.0.0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

                {(() => {
                    const [showButton, setShowButton] = React.useState(false);

                    React.useEffect(() => {
                        const handleScroll = () => {
                            if (window.scrollY > 100) {
                                setShowButton(true);
                            } else {
                                setShowButton(false);
                            }
                        };
                        window.addEventListener('scroll', handleScroll);
                        return () => window.removeEventListener('scroll', handleScroll);
                    }, []);

                    const scrollToTop = () => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    };

                    return showButton ? (
                        <button
                            onClick={scrollToTop}
                            className="fixed bottom-6 right-6 z-50 bg-purple-600 hover:bg-purple-700 text-white rounded-full p-3 shadow-lg transition-all duration-200 flex items-center justify-center"
                            aria-label="Voltar ao topo"
                            style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                        </button>
                    ) : null;
                })()}
            </div>
        </Router>
    );
}
