"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500 p-4 shadow-md">
            <nav className="max-w-5xl mx-auto flex justify-between items-center text-white font-semibold relative">
                <div className="flex items-center gap-4">
                    <Image
                        src={logo}
                        alt="Logo Cripto Bot"
                        width={32}
                        height={32}
                        className="rounded-full border-2 border-white shadow-lg transition-transform duration-200 hover:scale-105"
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
                        <Link href="/" className="hover:text-orange-200 transition-colors">
                            Início
                        </Link>
                    </li>
                    <li>
                        <Link href="/sobre" className="hover:text-orange-200 transition-colors">
                            Sobre
                        </Link>
                    </li>
                </ul>

                {/* Menu mobile */}
                {menuOpen && (
                    <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden md:hidden z-50">
                        <ul className="py-2">
                            <li>
                                <Link href="/" className="block px-4 py-2 text-gray-800 hover:bg-purple-100 transition-colors" onClick={() => setMenuOpen(false)}>
                                    Início
                                </Link>
                            </li>
                            <li>
                                <Link href="/sobre" className="block px-4 py-2 text-gray-800 hover:bg-purple-100 transition-colors" onClick={() => setMenuOpen(false)}>
                                    Sobre
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
}