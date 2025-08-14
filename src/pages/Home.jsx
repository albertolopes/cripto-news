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
            let url = `${buildApiUrl('/noticias')}?page=${pageNumber + 1}&limit=${limit}`;
            
            if (searchTerm.trim()) {
                url += `&q=${encodeURIComponent(searchTerm.trim())}`;
            }

            const res = await fetch(url);
            if (!res.ok) throw new Error("Erro ao buscar notícias");
            const data = await res.json();

            if (data?.results?.length > 0) {
                if (pageNumber === 0) {
                    // Se é a primeira página, substitui as notícias
                    setNoticias(data.results);
                } else {
                    // Se não é a primeira página, adiciona às existentes
                    setNoticias((prev) => [...prev, ...data.results]);
                }
                setTotalPages(data.totalPages);
                setPage(pageNumber + 1);
            } else if (pageNumber === 0) {
                // Se é a primeira página e não há resultados, limpa as notícias
                setNoticias([]);
                setTotalPages(1);
                setPage(0);
            }
        } catch (error) {
            setErro("Erro ao carregar notícias. Tente novamente.");
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
        // eslint-disable-next-line
    }, []);

    // Infinite scroll com IntersectionObserver
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
                {/* Campo de busca */}
                <div className="mb-6 p-2 sm:p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                    <form
                        onSubmit={handleSearch}
                        className="flex flex-col gap-2 sm:flex-row sm:gap-3"
                    >
                        <div className="flex-1 relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg
                                    className="h-4 w-4 text-purple-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="text"
                                value={palavraChave}
                                onChange={(e) => setPalavraChave(e.target.value)}
                                placeholder="Buscar notícias por palavra-chave..."
                                className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
                                style={{ paddingLeft: '3rem' }}
                                disabled={isSearching}
                            />
                        </div>
                        <div className="flex flex-col gap-2 sm:flex-row sm:gap-2 w-full sm:w-auto">
                            <button
                                type="submit"
                                disabled={isSearching}
                                className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
                            >
                                {isSearching ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Buscando...
                                    </>
                                ) : (
                                    "Buscar"
                                )}
                            </button>
                            {palavraChave && (
                                <button
                                    type="button"
                                    onClick={handleClearSearch}
                                    disabled={isSearching}
                                    className="w-full sm:w-auto px-4 py-2 sm:py-3 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                                >
                                    Limpar
                                </button>
                            )}
                        </div>
                    </form>
                    {palavraChave && (
                        <div className="mt-2 sm:mt-3 text-xs sm:text-sm text-purple-600">
                            Buscando por: <span className="font-semibold">"{palavraChave}"</span>
                        </div>
                    )}
                </div>

                {erro && (
                    <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-2 rounded mb-4 text-center">
                        {erro}
                        <button
                            className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                            onClick={() => fetchNoticias(page)}
                        >
                            Tentar novamente
                        </button>
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
                    <>
                        {noticias.length === 0 ? (
                            <div className="text-center text-gray-500 py-16">
                                {palavraChave ? `Nenhuma notícia encontrada para "${palavraChave}".` : "Nenhuma notícia encontrada."}
                            </div>
                        ) : (
                            <div className="space-y-4 sm:space-y-6">
                                {noticias.map(({ _id, titulo, resumo, textoCompleto, data }, idx) => {
                                    const isLast = idx === noticias.length - 1;
                                    return (
                                        <React.Fragment key={_id}>
                                            <article
                                                ref={isLast ? lastElementRef : undefined}
                                                onClick={() => toggleExpand(_id)}
                                                className={`w-full p-3 sm:p-5 bg-white rounded-none sm:rounded-lg shadow-sm sm:shadow-md hover:shadow-lg transition-shadow cursor-pointer border-b sm:border border-gray-300 group relative`}
                                                tabIndex={0}
                                                aria-expanded={expandida === _id}
                                                onKeyDown={e => {
                                                    if (e.key === "Enter" || e.key === " ") {
                                                        toggleExpand(_id);
                                                    }
                                                }}
                                            >
                                                <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 group-hover:text-purple-700 transition-colors">
                                                    {titulo}
                                                </h2>

                                                {expandida === _id ? (
                                                    <div className="prose prose-sm sm:prose md:prose-lg prose-gray max-w-none">
                                                        <ReactMarkdown
                                                            components={{
                                                                a: renderLink,
                                                                hr: () => null,
                                                            }}
                                                        >
                                                            {textoCompleto}
                                                        </ReactMarkdown>
                                                    </div>
                                                ) : (
                                                    <p className="mb-2 text-gray-800 break-words text-justify line-clamp-3 group-hover:text-gray-900 transition-colors">
                                                        {resumo}
                                                    </p>
                                                )}

                                                <div className="mt-1 flex justify-between items-center">
                                                    <p className="text-xs font-medium mb-0 text-purple-700 group-hover:text-purple-700 transition-colors">
                                                        {expandida === _id ? "Mostrar menos ▲" : "Mostrar mais ▼"}
                                                    </p>
                                                    <span className="text-xs text-gray-400 select-none">
                                                        {formatarData(data)}
                                                    </span>
                                                </div>  
                                            </article>


                                        </React.Fragment>
                                    );
                                })}
                            </div>
                        )}

                        {isLoading && (
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
                    </>
                )}
            </main>
        </div>
    );
}
