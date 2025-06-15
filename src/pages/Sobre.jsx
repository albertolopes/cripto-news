import React from "react";

export default function Sobre() {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-6 text-center">Sobre o Cripto Bot</h1>

            <p className="mb-6 text-gray-700 leading-relaxed">
                Nosso bot inteligente é impulsionado por <strong>Inteligência Artificial avançada</strong> fornecida pela plataforma <em>DeepSeek</em>, permitindo análise e respostas rápidas e precisas.
                Com integrações diretas ao <strong>Telegram</strong> e ao <strong>X (antigo Twitter)</strong>, o bot mantém você conectado aos seus canais favoritos, entregando notícias e atualizações em tempo real.
                Todo o processo é orquestrado por meio de <strong>GitHub Actions</strong>, garantindo uma automação robusta e confiável para deploy contínuo e manutenção constante, sem intervenção manual.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Contato</h2>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li>
                    <strong>Email:</strong>{" "}
                    <a
                        href="mailto:albertolopes@mail.com"
                        className="text-blue-600 hover:underline"
                    >
                        albertolopes@mail.com
                    </a>
                </li>
                <li>
                    <strong>GitHub:</strong>{" "}
                    <a
                        href="https://github.com/albertolopes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        albertolopes
                    </a>
                </li>
                <li>
                    <strong>Perfil do bot no X:</strong>{" "}
                    <a
                        href="https://x.com/avocado_x_bot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        https://x.com/avocado_x_bot
                    </a>
                </li>
                <li>
                    <strong>Telegram:</strong>{" "}
                    <a
                        href="https://t.me/AvocadreamBot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        t.me/AvocadreamBot
                    </a>
                </li>
            </ul>
        </div>
    );
}
