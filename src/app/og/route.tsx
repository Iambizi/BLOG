import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const title = searchParams.get('title') || 'Blog';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '60px 80px',
          background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: '18px',
            color: '#60a5fa',
            marginBottom: '16px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          Blog
        </div>
        <div
          style={{
            fontSize: title.length > 50 ? '42px' : '56px',
            fontWeight: 700,
            color: '#e5e5e5',
            lineHeight: 1.2,
            letterSpacing: '-0.03em',
            maxWidth: '900px',
          }}
        >
          {title}
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '80px',
            fontSize: '16px',
            color: '#6b6b6b',
          }}
        >
          yourdomain.com
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
