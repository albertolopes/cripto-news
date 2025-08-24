"use client";

import React, { useState, useEffect } from "react";
import { buildApiUrl } from "../config/api.js";

export default function Ticker() {
    const [criptos, setCriptos] = useState([]);

    useEffect(() => {
        async function fetchCriptos() {
            try {
                const res = await fetch(buildApiUrl('trending'));
                if (!res.ok) throw new Error("Erro ao buscar criptos");
                const data = await res.json();

                // Transform the data into the required format
                const formatted = Object.entries(data).map(([key, value]) => ({
                    name: value.name,
                    preco: value.price
                }));
                
                setCriptos(formatted);
            } catch (err) {
                console.error("Error fetching crypto data:", err);
                // Set empty array to avoid undefined errors
                setCriptos([]);
            }
        }

        fetchCriptos();
        
        // Set up interval to fetch data every 30 seconds
        const interval = setInterval(fetchCriptos, 30000);
        
        // Cleanup interval on component unmount
        return () => clearInterval(interval);
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
                        🔹 {cripto.name}:{" "}
                        <span className="font-semibold">{cripto.preco}</span>
                    </span>
                ))}
            </div>
        </div>
    );
}
