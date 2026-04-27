'use client'
import Image from 'next/image'
import { useTheme } from './ThemeProvider'

const WHATSAPP_URL = 'https://wa.me/5491134290431'

export default function Header() {
  const { theme, toggle } = useTheme()
  return (
    <header className="relative z-40 glass-2" style={{ borderBottom: '1px solid var(--ce-border)' }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(245,197,24,.6) 30%, rgba(192,57,43,.6) 70%, transparent)',
      }}/>
      <div className="flex items-center justify-between px-4 py-3 gap-2">
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <div className="ce-logo">
            <Image src="/logo.png" alt="Estrella" fill unoptimized style={{ objectFit: 'cover' }}/>
          </div>
          <div className="min-w-0">
            <p style={{ fontSize: 9, fontWeight: 800, letterSpacing: '.25em', textTransform: 'uppercase', color: 'rgba(231,76,60,.95)', margin: 0, whiteSpace: 'nowrap' }}>
              Torneo Apertura · Pintita
            </p>
            <h1 className="font-display text-grad-title" style={{
              fontSize: 20, lineHeight: 1, margin: '2px 0 0',
              whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
            }}>
              CAMPEONATO DE LA ESTRELLA
            </h1>
          </div>
        </div>

        <button onClick={toggle} aria-label="Tema" className="tap"
          style={{
            width: 34, height: 34, borderRadius: '50%',
            border: '1px solid var(--ce-border)', background: 'var(--ce-card)',
            color: 'var(--ce-fg-2)', fontSize: 14, flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
          {theme === 'dark' ? '☾' : '☀'}
        </button>

        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="ce-wa tap">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01s-.52.08-.79.37c-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.08-.12-.28-.2-.57-.35M12.05 21.95h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.64-.23-.38a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 6.99c-.01 5.45-4.45 9.89-9.91 9.89"/>
          </svg>
          RAFA
        </a>
      </div>
    </header>
  )
}
