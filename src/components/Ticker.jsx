import React, { useState, useEffect } from "react";

export default function Ticker() {
    const [criptos, setCriptos] = useState([]);

    useEffect(() => {
        async function fetchCriptos() {
            try {
                const res = await fetch("https://cripto-price-i8c1.onrender.com/trending");
                if (!res.ok) throw new Error("Erro ao buscar criptos");
                const data = await res.json();

                const formatted = data.map((c) => ({
                    nome: c.name,
                    preco: c.price,
                }));
                setCriptos(formatted);
            } catch (err) {
                console.error(err);
            }
        }

        fetchCriptos();
    }, []);

    if (criptos.length === 0) {
        return (
            <div className="bg-black text-white py-2 text-center">
                Carregando criptomoedas...
            </div>
        );
    }

    return (
        <div className="bg-black text-white overflow-hidden whitespace-nowrap py-2">
            <div className="animate-marquee inline-block min-w-full">
                {criptos.map((cripto, index) => (
                    <span key={index} className="mx-8 inline-block">
            🔹 {cripto.nome}:{" "}
                        <span className="font-semibold">{cripto.preco}</span>
          </span>
                ))}
            </div>
        </div>
    );
}
