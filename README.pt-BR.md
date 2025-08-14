# 🤖 CriptoBot

Um agregador de notícias de criptomoedas em tempo real alimentado por IA, construído com React e Vite.

> 🇺🇸 [Read in English](README.md)

## 🚀 Funcionalidades

- **Notícias em Tempo Real**: Receba as últimas notícias de crypto assim que acontecem
- **Resumos com IA**: Resumos inteligentes destacando pontos-chave
- **Gráficos Interativos**: Gráficos TradingView ao vivo para BTC e SOL
- **Design Responsivo**: Funciona perfeitamente em desktop e mobile
- **Scroll Infinito**: Experiência de navegação fluida
- **Funcionalidade de Busca**: Encontre notícias específicas por palavras-chave
- **Ticker Crypto ao Vivo**: Preços de criptomoedas em tempo real

## 🛠️ Stack Tecnológica

- **Frontend**: React 19 + Vite
- **Estilização**: Tailwind CSS
- **Roteamento**: React Router DOM
- **Markdown**: React Markdown
- **Gráficos**: TradingView Widgets
- **Deploy**: Vercel

## 📦 Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/yourusername/cripto-news.git
cd cripto-news
```

2. **Instale as dependências**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

O app estará disponível em `http://localhost:5000`

## 🏗️ Build

```bash
npm run build
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   └── Ticker.jsx      # Ticker de preços crypto ao vivo
├── config/             # Arquivos de configuração
│   ├── api.js          # Configuração centralizada da API
│   └── README.md       # Documentação da API
├── pages/              # Componentes de página
│   ├── Home.jsx        # Feed de notícias com scroll infinito
│   ├── Sobre.jsx       # Página sobre
│   └── TradingViewEmbed.jsx # Gráficos interativos
├── assets/             # Assets estáticos
├── App.jsx             # Componente principal do app
├── main.jsx            # Ponto de entrada do app
└── styles.css          # Estilos globais
```

## 🔧 Configuração

### Configuração da API

Todas as chamadas da API estão centralizadas em `src/config/api.js`:

```javascript
import { API_URLS } from './config/api.js';

// Use URLs pré-construídas
fetch(API_URLS.NOTICIAS);
fetch(API_URLS.TRENDING);

// Ou construa URLs dinâmicas
import { buildApiUrl } from './config/api.js';
const url = `${buildApiUrl('/noticias')}?page=1&limit=10`;
```

### Variáveis de Ambiente

Crie um arquivo `.env` no diretório raiz:

```env
VITE_API_BASE_URL=https://cripto-price-i8c1.onrender.com
```

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório GitHub ao Vercel
2. O Vercel detectará automaticamente a configuração do Vite
3. Faça o deploy com as configurações padrão

### Deploy Manual

```bash
npm run build
# Faça upload da pasta 'dist' para seu provedor de hospedagem
```

## 📱 Funcionalidades em Detalhes

### Feed de Notícias
- Scroll infinito para navegação fluida
- Resumos de notícias alimentados por IA
- Atualizações em tempo real
- Funcionalidade de busca
- Design responsivo

### Gráficos ao Vivo
- Widgets TradingView interativos
- Pares BTC/USDT e SOL/USDT
- Atualizações de preço em tempo real
- Otimizado para mobile

### Ticker Crypto
- Preços de criptomoedas ao vivo
- Animação de scroll suave
- Funcionalidade de auto-refresh

## 🤝 Como Contribuir

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/feature-incrivel`)
3. Commit suas mudanças (`git commit -m 'Adiciona feature incrível'`)
4. Push para a branch (`git push origin feature/feature-incrivel`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👨‍💻 Autor

**Alberto Lopes**
- GitHub: [@albertolopes](https://github.com/albertolopes)
- Email: albertolopes@mail.com

## 🙏 Agradecimentos

- [TradingView](https://www.tradingview.com/) pelos widgets de gráficos
- [Vite](https://vitejs.dev/) pela ferramenta de build
- [Tailwind CSS](https://tailwindcss.com/) pela estilização
- [React](https://reactjs.org/) pelo framework de UI

---

⭐ **Dê uma estrela neste repositório se achou útil!**
