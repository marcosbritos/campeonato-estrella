'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV = [
  { href: '/', label: 'Tabla', icon: '▦' },
  { href: '/fixture', label: 'Fixture', icon: '◎' },
  { href: '/goleadores', label: 'Goles', icon: '⚽' },
  { href: '/fairplay', label: 'Fair Play', icon: '▮▮' },
  { href: '/arbitro', label: 'Árbitro', icon: '★' },
]

export default function BottomNav() {
  const path = usePathname()
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass-2" style={{ borderTop: '1px solid var(--ce-border)' }}>
      <div style={{
        position: 'absolute', top: -1, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(192,57,43,.5), rgba(245,197,24,.5), rgba(192,57,43,.5), transparent)',
      }}/>
      <div className="flex">
        {NAV.map(item => {
          const active = path === item.href
          return (
            <Link key={item.href} href={item.href}
              className="flex-1 flex flex-col items-center justify-center py-3 gap-0.5 relative overflow-hidden tap">
              {active && <>
                <span style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(245,197,24,.12), transparent)' }}/>
                <span className="tab-line" style={{
                  position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                  height: 2, width: '2.5rem', borderRadius: '0 0 4px 4px',
                  background: 'linear-gradient(90deg, #c0392b, #f5c518, #c0392b)',
                }}/>
              </>}
              <span style={{
                fontSize: item.icon === '⚽' ? 18 : 16,
                color: active ? '#f5c518' : 'var(--ce-fg-4)',
                filter: active ? 'drop-shadow(0 0 6px rgba(245,197,24,.5))' : 'none',
                lineHeight: 1,
              }}>{item.icon}</span>
              <span style={{
                fontSize: 8, fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase',
                color: active ? '#f5c518' : 'var(--ce-fg-4)', lineHeight: 1,
              }}>{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
