import Header from '@/components/Header'
import { SectionTitle, Monogram } from '@/components/UI'
import { FAIRPLAY } from '@/lib/mock'

export default function FairPlayPage() {
  const sorted = [...FAIRPLAY].sort((a, b) => a.pts - b.pts)
  const max = Math.max(...sorted.map(f => f.pts))

  return (
    <>
      <Header />
      <main style={{ paddingBottom: 24 }}>
        <SectionTitle eyebrow="Menos puntos = mejor">Fair Play</SectionTitle>

        <div style={{ padding: '0 16px 14px', font: '700 9px Inter', letterSpacing: '.15em', color: 'var(--ce-fg-4)', textTransform: 'uppercase' }}>
          Amarilla = 1 pt · Roja = 3 pts
        </div>

        <div style={{ padding: '0 16px 16px' }}>
          <div className="glass" style={{ borderRadius: 14, overflow: 'hidden' }}>
            {sorted.map((f, i) => {
              const pct = (f.pts / max) * 100
              const isTop = i < 3
              return (
                <div key={f.team} className="anim-rise" style={{
                  animationDelay: `${i * 30}ms`,
                  padding: '12px 14px',
                  borderBottom: i < sorted.length - 1 ? '1px solid var(--ce-divider)' : 'none',
                  borderLeft: isTop ? '2px solid rgba(74,222,128,.5)' : '2px solid transparent',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                    <span style={{
                      width: 22, textAlign: 'center', font: '900 12px Inter',
                      color: isTop ? 'rgba(74,222,128,.95)' : 'var(--ce-fg-4)',
                    }}>{i + 1}</span>
                    <Monogram name={f.team} size={28} highlight={isTop} />
                    <p style={{ margin: 0, flex: 1, font: `400 13px/1.1 var(--font-bebas)`, letterSpacing: '.04em', color: 'var(--ce-fg)' }}>{f.team}</p>
                    <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                      <span style={{ font: '900 11px Inter', color: '#f5c518' }}>▮{f.amarillas}</span>
                      <span style={{ font: '900 11px Inter', color: '#e74c3c' }}>▮{f.rojas}</span>
                      <span className="font-display" style={{ fontSize: 18, color: 'var(--ce-fg)', marginLeft: 6, minWidth: 28, textAlign: 'right' }}>{f.pts}</span>
                    </div>
                  </div>
                  <div style={{ height: 4, borderRadius: 2, background: 'var(--ce-bg-3)', overflow: 'hidden' }}>
                    <div style={{
                      width: `${pct}%`, height: '100%',
                      background: isTop
                        ? 'linear-gradient(90deg, rgba(74,222,128,.6), rgba(74,222,128,.95))'
                        : 'linear-gradient(90deg, #f5c518, #e67e22, #e74c3c)',
                      transition: 'width .5s var(--ce-ease-spring)',
                    }}/>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </>
  )
}
