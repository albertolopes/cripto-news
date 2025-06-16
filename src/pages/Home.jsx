import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";

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
    return data.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
};

export default function Home() {
    const [noticias, setNoticias] = useState([]);
    const [expandida, setExpandida] = useState(null);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const isLoading = useRef(false);

    const limit = 10;

    const fetchNoticias = async (pageNumber) => {
        if (isLoading.current || pageNumber >= totalPages) return;

        isLoading.current = true;
        try {
            const res = await fetch(
                `https://cripto-price-i8c1.onrender.com/noticias?page=${
                    pageNumber + 1
                }&limit=${limit}`
            );
            const data = await res.json();

            if (data?.results?.length > 0) {
                setNoticias((prev) => [...prev, ...data.results]);
                setTotalPages(data.totalPages);
                setPage(pageNumber + 1);
            }
        } catch (error) {
            console.error("Erro ao carregar notícias:", error);
        } finally {
            isLoading.current = false;
            setIsFirstLoad(false);
        }
    };

    useEffect(() => {
        fetchNoticias(0);
    }, []);

    useEffect(() => {
        const onScroll = () => {
            if (
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight - 500 &&
                !isLoading.current &&
                page < totalPages
            ) {
                fetchNoticias(page);
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [page, totalPages]);

    const toggleExpand = (id) => {
        setExpandida(expandida === id ? null : id);
    };

    return (
        <div className="min-h-screen bg-white text-black px-0 sm:px-2">
            <main className="w-full max-w-5xl mx-auto bg-white rounded-xl mt-4 sm:mt-6 md:mt-10">
                {isFirstLoad ? (
                    <div className="flex justify-center items-center h-[50vh]">
                        <div className="w-10 h-10 rounded-full animate-spin bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400
                          mask mask-circle"></div>
                    </div>
                ) : (
                    <>
                        <div className="space-y-4 sm:space-y-6">
                            {noticias.map(({ _id, titulo, resumo, textoCompleto, data }) => (
                                <article
                                    key={_id}
                                    onClick={() => toggleExpand(_id)}
                                    className="w-full p-3 sm:p-5 bg-white rounded-none sm:rounded-lg shadow-sm sm:shadow-md hover:shadow-md transition-shadow cursor-pointer border-b sm:border border-gray-300"
                                >
                                    <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
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
                                        <p className="mb-2 text-gray-800 break-words text-justify">
                                            {resumo}
                                        </p>
                                    )}

                                    <div className="mt-2 flex justify-between items-center">
                                        <p className="text-blue-600 underline">
                                            {expandida === _id ? "Mostrar menos" : "Mostrar mais"}
                                        </p>
                                        <span className="text-sm text-gray-500 select-none">
                    {formatarData(data)}
                  </span>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {isLoading.current && (
                            <p className="text-center mt-6 font-semibold text-gray-600">
                                Carregando...
                            </p>
                        )}
                    </>
                )}
            </main>
        </div>
    );
}
