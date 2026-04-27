import Header from '@/components/Header'
import { SectionTitle } from '@/components/UI'
import { LiveCard, UpcomingCard } from '@/components/MatchCards'
import StandingsTable from '@/components/StandingsTable'
import { LIVE_MATCHES, UPCOMING_MATCHES } from '@/lib/mock'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <Header />
      <main style={{ paddingBottom: 24 }}>
        <SectionTitle eyebrow="En este momento">Partidos en vivo</SectionTitle>
        <div className="no-scrollbar scroll-x" style={{
          display: 'flex', gap: 12, padding: '0 16px 8px', scrollSnapType: 'x mandatory',
        }}>
          {LIVE_MATCHES.map((m, i) => <LiveCard key={i} m={m} i={i} />)}
        </div>

        <SectionTitle eyebrow="24 equipos · 3 zonas">Acceso rápido</SectionTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, padding: '0 16px' }}>
          {['A', 'B', 'C'].map((z, i) => (
            <Link key={z} href="/" className="tap anim-rise" style={{
              animationDelay: `${i * 80}ms`,
              display: 'block', padding: '20px 12px', borderRadius: 16, textDecoration: 'none', textAlign: 'center',
              background: 'linear-gradient(135deg,rgba(192,57,43,.2),rgba(245,197,24,.08))',
              border: '1px solid rgba(245,197,24,.25)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,.08), 0 4px 16px rgba(192,57,43,.15)',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: -20, right: -20, width: 70, height: 70, borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,197,24,.4), transparent)', filter: 'blur(20px)' }}/>
              <p className="text-grad-gold" style={{ margin: 0, font: `400 32px/1 var(--font-bebas)`, letterSpacing: '.04em', position: 'relative' }}>ZONA {z}</p>
              <p style={{ margin: '4px 0 0', font: '800 9px Inter', letterSpacing: '.15em', color: 'var(--ce-fg-3)', position: 'relative' }}>8 EQUIPOS</p>
            </Link>
          ))}
        </div>

        <SectionTitle eyebrow="Próximos">Fixture</SectionTitle>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: '0 16px 16px' }}>
          {UPCOMING_MATCHES.map((m, i) => <UpcomingCard key={i} m={m} i={i} />)}
        </div>

        <StandingsTable />
      </main>
    </>
  )
}
