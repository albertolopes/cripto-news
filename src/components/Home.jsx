"use client";

import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { buildApiUrl } from "../config/api.js";

const renderLink = ({ href, children }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline"
    >
        {children}
    </a>
);

const formatarData = (dataISO) => {
    const data = new Date(dataISO);

    const dataFormatada = data.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        timeZone: "America/Sao_Paulo"
    });

    const horaFormatada = data.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "America/Sao_Paulo"
    });

    return `${dataFormatada} às ${horaFormatada}`;
};

function useInfiniteScroll(callback, isLoading, hasMore) {
    const observer = useRef();
    const lastElementRef = useRef();

    useEffect(() => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();

        observer.current = new window.IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting && hasMore) {
                    callback();
                }
            },
            { rootMargin: "200px" }
        );

        if (lastElementRef.current) {
            observer.current.observe(lastElementRef.current);
        }

        return () => {
            if (observer.current) observer.current.disconnect();
        };
    }, [isLoading, hasMore, callback]);

    return lastElementRef;
}

export default function Home() {
    const [noticias, setNoticias] = useState([]);
    const [expandida, setExpandida] = useState(null);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [erro, setErro] = useState(null);
    const [palavraChave, setPalavraChave] = useState("");
    const [isSearching, setIsSearching] = useState(false);

    const limit = 10;

    const fetchNoticias = async (pageNumber = page, searchTerm = palavraChave) => {
        if (isLoading || pageNumber >= totalPages) return;

        setIsLoading(true);
        setErro(null);
        try {
            const headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36',
                'Referer': 'http://localhost:3000/',
                'sec-ch-ua': '"Not;A=Brand";v="99", "Brave";v="139", "Chromium";v="139"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"'
            };

            const baseUrl = buildApiUrl('noticias');
            if (!baseUrl || baseUrl === 'undefined') {
                throw new Error("Invalid API URL");
            }

            let url = `${baseUrl}?page=${pageNumber + 1}&limit=${limit}`;
            
            if (searchTerm.trim()) {
                url += `&q=${encodeURIComponent(searchTerm.trim())}`;
            }

            console.log("Fetching URL:", url);

            const res = await fetch(url, { headers });
            if (!res.ok) throw new Error("Falha ao carregar notícias. Por favor, tente novamente mais tarde.");
            const data = await res.json();

            if (data?.results?.length > 0) {
                if (pageNumber === 0) {
                    setNoticias(data.results);
                } else {
                    setNoticias((prev) => [...prev, ...data.results]);
                }
                setTotalPages(data.totalPages);
                setPage(pageNumber + 1);
            } else if (pageNumber === 0) {
                setNoticias([]);
                setTotalPages(1);
                setPage(0);
            }
        } catch (error) {
            setErro("Falha ao carregar notícias. Por favor, tente novamente mais tarde.");
            console.error("Erro ao carregar notícias:", error);
        } finally {
            setIsLoading(false);
            setIsFirstLoad(false);
            setIsSearching(false);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setIsSearching(true);
        setPage(0);
        setTotalPages(1);
        fetchNoticias(0, palavraChave);
    };

    const handleClearSearch = () => {
        setPalavraChave("");
        setIsSearching(true);
        setPage(0);
        setTotalPages(1);
        fetchNoticias(0, "");
    };

    useEffect(() => {
        fetchNoticias(0);
    }, []);

    const hasMore = page < totalPages;
    const lastElementRef = useInfiniteScroll(
        () => fetchNoticias(page),
        isLoading,
        hasMore
    );

    const toggleExpand = (id) => {
        setExpandida(expandida === id ? null : id);
    };

    return (
        <div className="min-h-screen bg-white text-black px-0 sm:px-2">
            <main className="w-full max-w-5xl mx-auto bg-white rounded-xl mt-4 sm:mt-6 md:mt-10">
                <div className="mb-6 p-2 sm:p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                    <form onSubmit={handleSearch} className="flex flex-col gap-2 sm:flex-row sm:gap-3">
                        <div className="flex-1 relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-4 w-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                value={palavraChave}
                                onChange={(e) => setPalavraChave(e.target.value)}
                                placeholder="Buscar notícias por palavra-chave..."
                                className="w-full px-3 py-2 sm:px-4 sm:py-3 pl-10 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                disabled={isSearching}
                            />
                        </div>
                        <div className="flex gap-2">
                            <button
                                type="submit"
                                disabled={isSearching}
                                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 disabled:opacity-50"
                            >
                                {isSearching ? "Buscando..." : "Buscar"}
                            </button>
                            {palavraChave && (
                                <button
                                    type="button"
                                    onClick={handleClearSearch}
                                    disabled={isSearching}
                                    className="px-4 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600"
                                >
                                    Limpar
                                </button>
                            )}
                        </div>
                    </form>
                </div>

                {erro && (
                    <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-2 rounded mb-4">
                        {erro}
                    </div>
                )}

                {isFirstLoad ? (
                    <div className="flex flex-col items-center justify-center h-[50vh]">
                        <div
                            className="w-12 h-12 rounded-full animate-spin bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 mask mask-circle mb-4"
                        ></div>
                        <span className="text-lg font-semibold text-gray-600">Carregando notícias...</span>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {noticias.map((noticia, index) => {
                            const isLast = index === noticias.length - 1;
                            return (
                                <article
                                    key={noticia._id}
                                    ref={isLast ? lastElementRef : null}
                                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
                                    onClick={() => toggleExpand(noticia._id)}
                                >
                                    <h2 className="text-xl font-bold mb-2">{noticia.titulo}</h2>
                                    <div className="prose max-w-none">
                                        <ReactMarkdown components={{ a: renderLink }}>
                                            {expandida === noticia._id ? noticia.textoCompleto : noticia.resumo}
                                        </ReactMarkdown>
                                    </div>
                                    <div className="mt-4 flex justify-between items-center">
                                        <div className="text-purple-600 hover:text-purple-800">
                                            {expandida === noticia._id ? "Mostrar menos" : "Ler mais"}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {formatarData(noticia.data)}
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                )}

                {isLoading && !isFirstLoad && (
                    <div className="flex justify-center items-center mt-8">
                        <span
                            className="font-semibold"
                            style={{
                                background: "linear-gradient(to right, #8b5cf6, #ec4899, #f97316)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                color: "transparent",
                            }}
                        >
                            Carregando...
                        </span>
                    </div>
                )}

                {!hasMore && noticias.length > 0 && (
                    <div className="text-center py-8 text-gray-600">
                        <p>Você chegou ao fim das notícias disponíveis.</p>
                    </div>
                )}
            </main>
        </div>
    );
}