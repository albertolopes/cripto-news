import '../styles.css';

export const metadata = {
  title: 'Cripto Bot - Notícias de Criptomoedas em Tempo Real',
  description: 'Notícias de criptomoedas em tempo real analisadas por IA para você ficar por dentro do mercado cripto.',
  keywords: 'cripto, bitcoin, ethereum, criptomoedas, notícias, blockchain, investimentos',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-white text-black">
        {children}
      </body>
    </html>
  );
}