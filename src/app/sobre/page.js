import Sobre from '@/components/Sobre';
import Header from '@/components/Header';
import Ticker from '@/components/Ticker';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Sobre o Cripto Bot - Notícias de Criptomoedas',
  description: 'Conheça o Cripto Bot, o assistente de IA que analisa e resume notícias do mundo cripto',
};

export default function SobrePage() {
  return (
    <>
      <Header />
      <Ticker />
      <main>
        <Sobre />
      </main>
      <Footer />
    </>
  );
}