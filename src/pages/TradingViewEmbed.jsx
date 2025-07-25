import React, { useEffect, useRef } from "react";

export default function TradingViewEmbed() {
  const containerRef = useRef(null);
  const solContainerRef = useRef(null);

  useEffect(() => {
    if (!window.TradingView) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/tv.js";
      script.async = true;
      script.onload = () => {
        createWidget();
        createSolWidget();
      };
      document.body.appendChild(script);
    } else {
      createWidget();
      createSolWidget();
    }

    function createWidget() {
      if (window.TradingView && document.getElementById('tradingview_widget_container')) {
        new window.TradingView.widget({
          width: "100%",
          height: "100%",
          symbol: "BINANCE:BTCUSDT",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "br",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: 'tradingview_widget_container',
        });
      }
    }

    function createSolWidget() {
      if (window.TradingView && document.getElementById('tradingview_widget_sol_container')) {
        new window.TradingView.widget({
          width: "100%",
          height: "100%",
          symbol: "BINANCE:SOLUSDT",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "br",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: 'tradingview_widget_sol_container',
        });
      }
    }
  }, []);

  return (
    <div className="flex flex-col items-center min-h-[50vh] sm:min-h-[70vh] bg-gradient-to-br py-1 px-1">
      <h2 className="text-xl sm:text-3xl font-bold text-gray-800 mb-2 text-center">Gráfico Interativo TradingView</h2>
      {/* Gráfico BTC/USDT */}
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-2 sm:p-8 border border-gray-100 flex flex-col items-center mt-4 overflow-hidden">
        <p className="text-gray-600 mb-4 sm:mb-6 text-center max-w-xl">
          <span className="font-semibold text-purple-700">BTC/USDT</span>
        </p>
        <div 
          className="w-full"
          style={{ 
            aspectRatio: window.innerWidth < 640 ? '4/5' : '16/9', 
            maxWidth: 900
          }}
        >
          <div
            id="tradingview_widget_container"
            ref={containerRef}
            className="w-full h-full min-h-[300px]"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
      {/* Gráfico SOL/USDT */}
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-2 sm:p-8 border border-gray-100 flex flex-col items-center mt-6 overflow-hidden">
        <p className="text-gray-600 mb-4 sm:mb-6 text-center max-w-xl">
          <span className="font-semibold text-purple-700">SOL/USDT</span>
        </p>
        <div 
          className="w-full"
          style={{ 
            aspectRatio: window.innerWidth < 640 ? '4/5' : '16/9', 
            maxWidth: 900
          }}
        >
          <div
            id="tradingview_widget_sol_container"
            ref={solContainerRef}
            className="w-full h-full min-h-[300px]"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
} 