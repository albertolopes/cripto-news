import { ImageResponse } from 'next/og';
 
export const runtime = 'edge';
 
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(to right, #7e22ce, #ec4899, #f97316)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '40px 80px',
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 'bold', marginBottom: 20 }}>
          Cripto Bot
        </div>
        <div style={{ fontSize: 36, textAlign: 'center' }}>
          Notícias de criptomoedas analisadas por IA
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}