# 🤖 CriptoBot

A real-time cryptocurrency news aggregator powered by AI, built with React and Vite.

> 🇧🇷 [Leia em Português](README.pt-BR.md)

## 🚀 Features

- **Real-time News**: Get the latest crypto news as they happen
- **AI-Powered Summaries**: Intelligent summaries highlighting key points
- **Interactive Charts**: Live TradingView charts for BTC and SOL
- **Responsive Design**: Works perfectly on desktop and mobile
- **Infinite Scroll**: Seamless news browsing experience
- **Search Functionality**: Find specific news by keywords
- **Live Crypto Ticker**: Real-time cryptocurrency prices

## 🛠️ Tech Stack

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Markdown**: React Markdown
- **Charts**: TradingView Widgets
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/cripto-news.git
cd cripto-news
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The app will be available at `http://localhost:5000`

## 🏗️ Build

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   └── Ticker.jsx      # Live crypto price ticker
├── config/             # Configuration files
│   ├── api.js          # Centralized API configuration
│   └── README.md       # API documentation
├── pages/              # Page components
│   ├── Home.jsx        # News feed with infinite scroll
│   ├── Sobre.jsx       # About page
│   └── TradingViewEmbed.jsx # Interactive charts
├── assets/             # Static assets
├── App.jsx             # Main app component
├── main.jsx            # App entry point
└── styles.css          # Global styles
```

## 🔧 Configuration

### API Configuration

All API calls are centralized in `src/config/api.js`:

```javascript
import { API_URLS } from './config/api.js';

// Use pre-built URLs
fetch(API_URLS.NOTICIAS);
fetch(API_URLS.TRENDING);

// Or build dynamic URLs
import { buildApiUrl } from './config/api.js';
const url = `${buildApiUrl('/noticias')}?page=1&limit=10`;
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=https://cripto-price-i8c1.onrender.com
```

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with default settings

### Manual Deployment

```bash
npm run build
# Upload the 'dist' folder to your hosting provider
```

## 📱 Features in Detail

### News Feed
- Infinite scroll for seamless browsing
- AI-powered news summaries
- Real-time updates
- Search functionality
- Responsive design

### Live Charts
- Interactive TradingView widgets
- BTC/USDT and SOL/USDT pairs
- Real-time price updates
- Mobile-optimized

### Crypto Ticker
- Live cryptocurrency prices
- Smooth scrolling animation
- Auto-refresh functionality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Alberto Lopes**
- GitHub: [@albertolopes](https://github.com/albertolopes)
- Email: albertolopes@mail.com

## 🙏 Acknowledgments

- [TradingView](https://www.tradingview.com/) for chart widgets
- [Vite](https://vitejs.dev/) for the build tool
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React](https://reactjs.org/) for the UI framework

---

⭐ **Star this repository if you found it helpful!**
