import React from "react";

export default function Sobre() {
    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md mt-8 border border-gray-100">
            <div className="flex flex-col items-center mb-8">
                <div className="rounded-full p-3 shadow bg-gray-100 mb-3">
                    <span role="img" aria-label="Bot" className="text-3xl">🤖</span>
                </div>
                <h1 className="text-3xl font-bold mb-2 text-center text-gray-800">
                    Sobre o Cripto Bot
                </h1>
                <p className="text-base text-gray-700 text-center max-w-2xl mt-2">
                    O <span className="font-bold text-purple-700">Cripto Bot</span> é um assistente inteligente que utiliza <span className="font-semibold text-purple-700">Inteligência Artificial</span> (<span className="italic">DeepSeek</span>) para analisar, resumir e entregar notícias relevantes do universo cripto em tempo real.
                </p>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">
                    Como funciona?
                </h2>
                <ul className="list-disc list-inside text-gray-800 space-y-2 pl-2">
                    <li>
                        <span className="font-semibold text-purple-700">Coleta automática:</span> O bot monitora fontes confiáveis de notícias cripto 24/7.
                    </li>
                    <li>
                        <span className="font-semibold text-purple-700">Análise com IA:</span> Utiliza modelos avançados para resumir, filtrar e destacar o que realmente importa.
                    </li>
                    <li>
                        <span className="font-semibold text-purple-700">Entrega instantânea:</span> Publica as notícias nos canais do <b>Telegram</b> e <b>X (antigo Twitter)</b> em tempo real.
                    </li>
                    <li>
                        <span className="font-semibold text-purple-700">Automação total:</span> Todo o fluxo é orquestrado por <b>GitHub Actions</b> para garantir deploys contínuos e manutenção sem intervenção manual.
                    </li>
                </ul>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">Principais Recursos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4 shadow flex flex-col gap-2 border border-gray-100">
                        <span className="font-bold text-gray-800">Notícias em tempo real</span>
                        <span className="text-gray-700 text-sm">Receba as últimas novidades do mercado cripto assim que elas acontecem.</span>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 shadow flex flex-col gap-2 border border-gray-100">
                        <span className="font-bold text-gray-800">Resumos inteligentes</span>
                        <span className="text-gray-700 text-sm">A IA resume e destaca os pontos mais importantes de cada notícia.</span>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 shadow flex flex-col gap-2 border border-gray-100">
                        <span className="font-bold text-gray-800">Integração com Telegram & X</span>
                        <span className="text-gray-700 text-sm">Acompanhe tudo nos seus canais favoritos, sem ruído.</span>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 shadow flex flex-col gap-2 border border-gray-100">
                        <span className="font-bold text-gray-800">Automação & Open Source</span>
                        <span className="text-gray-700 text-sm">Código aberto, deploy automatizado e manutenção transparente.</span>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">Contato & Links</h2>
                <ul className="space-y-3 text-gray-800">
                    <li className="flex items-center gap-2">
                        <span role="img" aria-label="Email" className="text-purple-700">✉️</span>
                        <span className="font-semibold">Email:</span>
                        <a
                            href="mailto:albertolopes@mail.com"
                            className="text-purple-700 hover:underline"
                        >
                            albertolopes@mail.com
                        </a>
                    </li>
                    <li className="flex items-center gap-2">
                        <span role="img" aria-label="GitHub" className="text-purple-700">🐙</span>
                        <span className="font-semibold">GitHub:</span>
                        <a
                            href="https://github.com/albertolopes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-700 hover:underline"
                        >
                            albertolopes
                        </a>
                    </li>
                    <li className="flex items-center gap-2">
                        <span role="img" aria-label="Twitter/X" className="text-purple-700">🐦</span>
                        <span className="font-semibold">Bot no X:</span>
                        <a
                            href="https://x.com/avocado_x_bot"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-700 hover:underline"
                        >
                            @avocado_x_bot
                        </a>
                    </li>
                    <li className="flex items-center gap-2">
                        <span role="img" aria-label="Telegram" className="text-purple-700">📢</span>
                        <span className="font-semibold">Telegram:</span>
                        <a
                            href="https://t.me/AvocadreamBot"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-700 hover:underline"
                        >
                            t.me/AvocadreamBot
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
