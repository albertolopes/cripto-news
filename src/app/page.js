import Home from '@/components/Home';
import Header from '@/components/Header';
import Ticker from '@/components/Ticker';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Cripto Bot - Notícias de Criptomoedas em Tempo Real',
  description: 'Acompanhe as últimas notícias do mundo cripto analisadas por IA',
};

export default function HomePage() {
  return (
    <>
      <Header />
      <Ticker />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}