import Header from '@/components/Header'
import { SectionTitle, Monogram } from '@/components/UI'
import { SCORERS } from '@/lib/mock'

export default function GoleadoresPage() {
  return (
    <>
      <Header />
      <main style={{ paddingBottom: 24 }}>
        <SectionTitle eyebrow="Tabla de artilleros">Goleadores</SectionTitle>

        {/* Podio top 3 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr 1fr', gap: 8, padding: '0 16px 16px', alignItems: 'end' }}>
          {[SCORERS[1], SCORERS[0], SCORERS[2]].map((s, i) => {
            const realPos = i === 0 ? 2 : i === 1 ? 1 : 3
            const h = realPos === 1 ? 150 : realPos === 2 ? 120 : 100
            const colors = { 1: '#f5c518', 2: '#d8d8e0', 3: '#cd7f32' } as const
            const c = colors[realPos as 1 | 2 | 3]
            return (
              <div key={s.name} className="anim-rise" style={{ animationDelay: `${i * 100}ms`, textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}>
                  <Monogram name={s.name} highlight ring={realPos === 1} size={realPos === 1 ? 56 : 44} />
                </div>
                <p style={{ margin: 0, font: `400 13px/1.1 var(--font-bebas)`, letterSpacing: '.04em', color: 'var(--ce-fg)' }}>{s.name}</p>
                <p style={{ margin: '2px 0 8px', font: '700 8px Inter', letterSpacing: '.15em', color: 'var(--ce-fg-4)' }}>{s.team}</p>
                <div style={{
                  height: h, borderRadius: '12px 12px 0 0', position: 'relative', overflow: 'hidden',
                  background: `linear-gradient(180deg, ${c}, ${c}33)`,
                  border: `1px solid ${c}80`, borderBottom: 'none',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span className="font-display score-glow" style={{ fontSize: realPos === 1 ? 46 : 36, color: '#14141e' }}>{s.goals}</span>
                  <span style={{ font: '900 9px Inter', letterSpacing: '.2em', color: 'rgba(0,0,0,.6)' }}>GOLES</span>
                  <span style={{ position: 'absolute', top: 6, right: 8, font: '900 14px Inter', color: '#14141e' }}>#{realPos}</span>
                </div>
              </div>
            )
          })}
        </div>

        <SectionTitle eyebrow="Ranking completo">Todos</SectionTitle>

        <div style={{ padding: '0 16px 16px' }}>
          <div className="glass" style={{ borderRadius: 14, overflow: 'hidden' }}>
            {SCORERS.map((s, i) => (
              <div key={s.name} className="anim-rise" style={{
                animationDelay: `${i * 40}ms`,
                display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px',
                borderBottom: i < SCORERS.length - 1 ? '1px solid var(--ce-divider)' : 'none',
              }}>
                <span style={{
                  width: 24, textAlign: 'center', font: '900 12px Inter',
                  color: i < 3 ? '#f5c518' : 'var(--ce-fg-4)',
                }}>{i + 1}</span>
                <Monogram name={s.name} size={32} highlight={i < 3} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ margin: 0, font: `400 14px/1.1 var(--font-bebas)`, letterSpacing: '.04em', color: 'var(--ce-fg)' }}>{s.name}</p>
                  <p style={{ margin: '2px 0 0', font: '700 9px Inter', letterSpacing: '.1em', color: 'var(--ce-fg-3)' }}>{s.team}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span className="font-display" style={{ fontSize: 22, color: 'var(--ce-fg)' }}>{s.goals}</span>
                  <span style={{ font: '700 9px Inter', letterSpacing: '.1em', color: 'var(--ce-fg-4)', marginLeft: 4 }}>g</span>
                  <p style={{ margin: 0, font: '600 9px Inter', color: 'var(--ce-fg-4)' }}>{(s.goals / s.pj).toFixed(2)}/PJ</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
