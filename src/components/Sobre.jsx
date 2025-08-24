"use client";

import { useEffect, useState } from "react";
import { API_URLS } from "../config/api.js";

export default function Sobre() {
    const [totalAcessos, setTotalAcessos] = useState(null);
    const [loadingAcessos, setLoadingAcessos] = useState(true);

    useEffect(() => {
        async function fetchAcessos() {
            try {
                setLoadingAcessos(true);
                const res = await fetch(API_URLS.ACESSOS_TOTAL);
                if (!res.ok) throw new Error("Erro ao buscar acessos");
                const data = await res.json();
                // Suporta tanto { total: 123 } quanto apenas um número
                setTotalAcessos(data.total ?? data);
            } catch (e) {
                setTotalAcessos(null);
            } finally {
                setLoadingAcessos(false);
            }
        }
        fetchAcessos();
    }, []);

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
                        <span className="font-semibold text-purple-700">Entrega personalizada:</span> Apresenta as notícias de forma clara e objetiva, economizando seu tempo.
                    </li>
                </ul>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3 text-gray-800">
                    Por que usar o Cripto Bot?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <div className="flex items-center mb-2">
                            <span role="img" aria-label="Relógio" className="mr-2 text-xl">⏱️</span>
                            <h3 className="font-semibold text-gray-800">Economia de tempo</h3>
                        </div>
                        <p className="text-sm text-gray-700">
                            Receba apenas o essencial, sem precisar filtrar dezenas de notícias diariamente.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <div className="flex items-center mb-2">
                            <span role="img" aria-label="Lupa" className="mr-2 text-xl">🔍</span>
                            <h3 className="font-semibold text-gray-800">Informação de qualidade</h3>
                        </div>
                        <p className="text-sm text-gray-700">
                            Conteúdo verificado e resumido por IA, eliminando ruídos e fake news.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <div className="flex items-center mb-2">
                            <span role="img" aria-label="Gráfico" className="mr-2 text-xl">📈</span>
                            <h3 className="font-semibold text-gray-800">Decisões melhores</h3>
                        </div>
                        <p className="text-sm text-gray-700">
                            Mantenha-se informado para tomar decisões mais inteligentes no mercado cripto.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <div className="flex items-center mb-2">
                            <span role="img" aria-label="Foguete" className="mr-2 text-xl">🚀</span>
                            <h3 className="font-semibold text-gray-800">Sempre atualizado</h3>
                        </div>
                        <p className="text-sm text-gray-700">
                            Acompanhe as últimas tendências e movimentações do mercado em tempo real.
                        </p>
                    </div>
                </div>
            </div>

            <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-100">
                <p className="text-gray-700 mb-2">
                    Este site já ajudou
                </p>
                <p className="text-3xl font-bold text-purple-700">
                    {loadingAcessos ? (
                        <span className="inline-block w-16 h-8 bg-purple-200 rounded animate-pulse"></span>
                    ) : totalAcessos !== null ? (
                        `${totalAcessos.toLocaleString('pt-BR')} pessoas`
                    ) : (
                        "Muitas pessoas"
                    )}
                </p>
                <p className="text-gray-700 mt-2">
                    a se manterem informadas sobre o mundo cripto
                </p>
            </div>
        </div>
    );
}