"use client";

import Image from 'next/image';
import Link from 'next/link';
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500 text-white mt-16">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src={logo}
                alt="Logo Cripto Bot"
                width={40}
                height={40}
                className="rounded-full border-2 border-white shadow-lg"
              />
              <span className="text-xl font-extrabold bg-gradient-to-r from-orange-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                Cripto Bot
              </span>
            </div>
            <p className="text-purple-100 text-sm leading-relaxed">
              Mantenha-se atualizado com as últimas novidades do mercado, de forma inteligente e automatizada.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-purple-100 hover:text-white transition-colors duration-200 text-sm">
                  Notícias
                </Link>
              </li>
              <li>
                <Link href="/grafico" className="text-purple-100 hover:text-white transition-colors duration-200 text-sm">
                  Gráficos
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-purple-100 hover:text-white transition-colors duration-200 text-sm">
                  Sobre
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact information */}
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

        {/* Divider */}
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
  );
}