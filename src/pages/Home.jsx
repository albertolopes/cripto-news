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
    const isLoading = useRef(false);

    const limit = 10;

    const fetchNoticias = async (pageNumber) => {
        if (isLoading.current || pageNumber >= totalPages) return;

        isLoading.current = true;
        try {
            const res = await fetch(
                `http://localhost:3000/noticias?page=${pageNumber + 1}&limit=${limit}`
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
        <div className="min-h-screen bg-white text-black">
            <main className="max-w-5xl w-full mx-auto bg-white rounded-xl p-12 mt-10">
                <div className="space-y-6">
                    {noticias.map(({ _id, titulo, resumo, textoCompleto, data }) => (
                        <article
                            key={_id}
                            onClick={() => toggleExpand(_id)}
                            className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-gray-300"
                        >
                            <h2 className="text-2xl font-semibold mb-2">{titulo}</h2>

                            {expandida === _id ? (
                                <div className="prose prose-lg prose-gray max-w-none">
                                    <ReactMarkdown
                                        components={{
                                            a: renderLink,
                                            hr: () => null, // remove linha horizontal indesejada
                                        }}
                                    >
                                        {textoCompleto}
                                    </ReactMarkdown>
                                </div>
                            ) : (
                                <p className="mb-2 text-gray-800">{resumo}</p>
                            )}

                            <p className="mt-2 text-blue-600 underline">
                                {expandida === _id ? "Mostrar menos" : "Mostrar mais"}
                            </p>

                            {/* Data no canto inferior direito */}
                            <span className="absolute bottom-4 right-4 text-sm text-gray-500 select-none">
                {formatarData(data)}
              </span>
                        </article>
                    ))}
                </div>

                {isLoading.current && (
                    <p className="text-center mt-6 font-semibold text-gray-600">
                        Carregando...
                    </p>
                )}
            </main>
        </div>
    );
}
