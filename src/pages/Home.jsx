import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import AdBanner900x90 from "./AdBanner900x90.jsx";
import AdBanner300x250 from "./AdBanner300x250.jsx";

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

    const limit = 10;

    const fetchNoticias = async (pageNumber = page) => {
        if (isLoading || pageNumber >= totalPages) return;

        setIsLoading(true);
        setErro(null);
        try {
            const res = await fetch(
                `https://cripto-price-i8c1.onrender.com/noticias?page=${pageNumber + 1}&limit=${limit}`
            );
            if (!res.ok) throw new Error("Erro ao buscar notícias");
            const data = await res.json();

            if (data?.results?.length > 0) {
                setNoticias((prev) => [...prev, ...data.results]);
                setTotalPages(data.totalPages);
                setPage(pageNumber + 1);
            }
        } catch (error) {
            setErro("Erro ao carregar notícias. Tente novamente.");
            console.error("Erro ao carregar notícias:", error);
        } finally {
            setIsLoading(false);
            setIsFirstLoad(false);
        }
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
            <div className="hidden md:block">
                <AdBanner900x90 />
            </div>
            <div className="block md:hidden">
                <AdBanner300x250 />
            </div>

            <main className="w-full max-w-5xl mx-auto bg-white rounded-xl mt-4 sm:mt-6 md:mt-10">
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
                                Nenhuma notícia encontrada.
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
                                                    <p className="text-xs font-medium mb-0 group-hover:text-purple-700 transition-colors text-black">
                                                        {expandida === _id ? "Mostrar menos ▲" : "Mostrar mais ▼"}
                                                    </p>
                                                    <span className="text-xs text-gray-400 select-none">
                                                        {formatarData(data)}
                                                    </span>
                                                </div>  
                                            </article>

                                            {(idx + 1) % 15 === 0 && (
                                                <>
                                                    <div className="hidden md:block">
                                                        <AdBanner900x90 />
                                                    </div>
                                                    <div className="block md:hidden">
                                                        <AdBanner300x250 />
                                                    </div>
                                                </>
                                            )}
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
                        {!isLoading && hasMore && (
                            <div className="flex justify-center mt-8">
                                <button
                                    onClick={() => fetchNoticias(page)}
                                    className="px-6 py-2 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white font-semibold rounded-lg shadow hover:scale-105 transition"
                                >
                                    Carregar mais notícias
                                </button>
                            </div>
                        )}
                    </>
                )}
            </main>
        </div>
    );
}
