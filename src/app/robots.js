export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://cripto-bot.vercel.app/sitemap.xml',
  }
}