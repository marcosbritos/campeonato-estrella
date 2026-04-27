import Header from '@/components/Header'
import { SectionTitle } from '@/components/UI'
import { LiveCard, UpcomingCard } from '@/components/MatchCards'
import { LIVE_MATCHES, UPCOMING_MATCHES } from '@/lib/mock'

const PAST = [
  { zone: 'A', home: 'PA LA BIRRA', away: 'JARDIN AMERICA', hs: 3, as: 2 },
  { zone: 'B', home: 'CALLE 10', away: 'MANCHESTER BOYS', hs: 4, as: 0 },
  { zone: 'C', home: 'LOS PIBES', away: 'BOKITAS', hs: 2, as: 2 },
]

export default function FixturePage() {
  return (
    <>
      <Header />
      <main style={{ paddingBottom: 24 }}>
        <SectionTitle eyebrow="Fecha 7">En vivo</SectionTitle>
        <div className="no-scrollbar scroll-x" style={{ display: 'flex', gap: 12, padding: '0 16px 8px', scrollSnapType: 'x mandatory' }}>
          {LIVE_MATCHES.map((m, i) => <LiveCard key={i} m={m} i={i} />)}
        </div>

        <SectionTitle eyebrow="Próximos">Fixture</SectionTitle>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: '0 16px 8px' }}>
          {UPCOMING_MATCHES.map((m, i) => <UpcomingCard key={i} m={m} i={i} />)}
        </div>

        <SectionTitle eyebrow="Fecha 6">Resultados</SectionTitle>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: '0 16px 16px' }}>
          {PAST.map((m, i) => (
            <div key={i} className="glass anim-rise" style={{
              animationDelay: `${i * 60}ms`,
              borderRadius: 12, padding: '12px 14px',
              display: 'grid', gridTemplateColumns: '36px 1fr auto 1fr', gap: 10, alignItems: 'center',
            }}>
              <span style={{ font: '800 9px Inter', letterSpacing: '.2em', color: 'var(--ce-fg-4)' }}>Z{m.zone}</span>
              <p style={{ margin: 0, font: `400 13px/1.1 var(--font-bebas)`, letterSpacing: '.04em', color: 'var(--ce-fg)', textAlign: 'right' }}>{m.home}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '0 10px' }}>
                <span className="font-display" style={{ fontSize: 22, color: m.hs > m.as ? '#f5c518' : 'var(--ce-fg-2)' }}>{m.hs}</span>
                <span style={{ color: 'var(--ce-fg-4)', font: '300 14px Inter' }}>—</span>
                <span className="font-display" style={{ fontSize: 22, color: m.as > m.hs ? '#f5c518' : 'var(--ce-fg-2)' }}>{m.as}</span>
              </div>
              <p style={{ margin: 0, font: `400 13px/1.1 var(--font-bebas)`, letterSpacing: '.04em', color: 'var(--ce-fg)' }}>{m.away}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
