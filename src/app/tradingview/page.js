import TradingViewEmbed from '@/components/TradingViewEmbed';
import Header from '@/components/Header';
import Ticker from '@/components/Ticker';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Gráficos TradingView - Cripto Bot',
  description: 'Acompanhe os gráficos em tempo real das principais criptomoedas',
};

export default function TradingViewPage() {
  return (
    <>
      <Header />
      <Ticker />
      <main>
        <TradingViewEmbed />
      </main>
      <Footer />
    </>
  );
}