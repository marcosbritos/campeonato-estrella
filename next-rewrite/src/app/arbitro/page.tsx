'use client'
import { useState } from 'react'
import Header from '@/components/Header'
import { SectionTitle, Monogram } from '@/components/UI'

const TIMELINE = [
  { min: 12, type: 'goal',   team: 'home', text: 'G. ROSSI (VICIOS)' },
  { min: 28, type: 'yellow', team: 'away', text: 'M. FERRO amonestado' },
  { min: 34, type: 'goal',   team: 'home', text: 'M. GOMEZ (VICIOS)' },
  { min: 45, type: 'sub',    team: 'away', text: 'Cambio LA RESAKA' },
  { min: 58, type: 'goal',   team: 'away', text: 'E. PERALTA (RESAKA)' },
  { min: 67, type: 'red',    team: 'away', text: 'J. RÍOS EXPULSADO' },
]

const iconMap: Record<string, string> = { goal: '⚽', yellow: '▮', red: '▮', sub: '⇅' }
const colorMap: Record<string, string> = {
  goal: '#f5c518', yellow: '#f5c518', red: '#e74c3c', sub: 'var(--ce-fg-3)',
}

export default function ArbitroPage() {
  const [sheet, setSheet] = useState<'goal' | 'card' | null>(null)

  return (
    <>
      <Header />
      <main style={{ paddingBottom: 24 }}>
        <SectionTitle eyebrow="Panel árbitro · EN VIVO">Controlá el partido</SectionTitle>

        {/* Scoreboard cinematográfico */}
        <div style={{ padding: '0 16px 14px' }}>
          <div className="glass anim-rise" style={{ position: 'relative', borderRadius: 18, overflow: 'hidden', border: '1px solid rgba(231,76,60,.35)' }}>
            <div className="aurora-layer" />
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#c0392b,#f5c518,#e74c3c)' }}/>

            <div style={{ position: 'relative', padding: '12px 14px 6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ font: '800 9px Inter', letterSpacing: '.2em', color: 'var(--ce-fg-3)' }}>ZONA B · FECHA 7</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, font: '900 11px Inter', letterSpacing: '.1em', color: '#e74c3c' }}>
                <span className="live-dot" />EN VIVO · 67&apos;
              </span>
            </div>

            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', padding: '8px 14px 18px' }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <Monogram name="VICIOS FC" highlight ring size={48} />
                <p style={{ margin: 0, font: `400 14px/1.1 var(--font-bebas)`, color: 'var(--ce-fg)', textAlign: 'center' }}>VICIOS FC</p>
              </div>
              <div style={{ padding: '0 8px', display: 'flex', alignItems: 'center', gap: 10 }}>
                <span className="score-glow font-display" style={{ fontSize: 56, color: '#fff' }}>2</span>
                <span style={{ color: 'var(--ce-fg-4)', font: '300 18px Inter' }}>—</span>
                <span className="score-glow font-display" style={{ fontSize: 56, color: '#fff' }}>1</span>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <Monogram name="LA RESAKA FC" highlight ring size={48} />
                <p style={{ margin: 0, font: `400 14px/1.1 var(--font-bebas)`, color: 'var(--ce-fg)', textAlign: 'center' }}>LA RESAKA FC</p>
              </div>
            </div>

            {/* CTA bar */}
            <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1, background: 'var(--ce-border)', borderTop: '1px solid var(--ce-border)' }}>
              {[
                { label: '+ GOL', color: '#f5c518', action: () => setSheet('goal') },
                { label: '+ TARJETA', color: '#e74c3c', action: () => setSheet('card') },
                { label: 'FIN', color: 'var(--ce-fg-2)', action: () => alert('Finalizar partido') },
              ].map(b => (
                <button key={b.label} onClick={b.action} className="tap" style={{
                  border: 0, padding: '14px 8px', background: 'var(--ce-card-2)',
                  color: b.color, font: `400 16px var(--font-bebas)`, letterSpacing: '.08em', cursor: 'pointer',
                }}>{b.label}</button>
              ))}
            </div>
          </div>
        </div>

        <SectionTitle eyebrow="Eventos">Timeline</SectionTitle>
        <div style={{ padding: '0 16px 16px' }}>
          <div className="glass" style={{ borderRadius: 14, padding: '8px 0' }}>
            {TIMELINE.map((ev, i) => (
              <div key={i} className="anim-rise" style={{
                animationDelay: `${i * 40}ms`,
                display: 'grid', gridTemplateColumns: '44px 28px 1fr', gap: 10, alignItems: 'center',
                padding: '10px 14px', borderBottom: i < TIMELINE.length - 1 ? '1px solid var(--ce-divider)' : 'none',
              }}>
                <span style={{ font: '900 13px Inter', color: 'var(--ce-fg-4)', textAlign: 'right' }}>{ev.min}&apos;</span>
                <span style={{ color: colorMap[ev.type], fontSize: 18, textAlign: 'center' }}>{iconMap[ev.type]}</span>
                <span style={{ font: '700 12px Inter', color: 'var(--ce-fg-2)' }}>{ev.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom sheet */}
        {sheet && (
          <>
            <div onClick={() => setSheet(null)} style={{
              position: 'fixed', inset: 0, background: 'rgba(0,0,0,.55)', zIndex: 99,
              backdropFilter: 'blur(4px)', animation: 'fade-in .2s ease both',
            }}/>
            <div className="glass-2" style={{
              position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 100,
              borderRadius: '20px 20px 0 0', padding: '20px 16px 28px',
              borderTop: '1px solid var(--ce-border)',
              animation: 'slide-up .28s var(--ce-ease-spring) both',
              maxHeight: '70vh', overflowY: 'auto',
            }}>
              <div style={{ width: 40, height: 4, background: 'var(--ce-fg-4)', borderRadius: 2, margin: '0 auto 18px' }}/>
              <h3 className="font-display" style={{ margin: '0 0 14px', fontSize: 22, color: 'var(--ce-fg)' }}>
                {sheet === 'goal' ? 'CARGAR GOL' : 'CARGAR TARJETA'}
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 14 }}>
                {['VICIOS FC', 'LA RESAKA FC'].map(t => (
                  <button key={t} className="tap" style={{
                    padding: '14px 10px', borderRadius: 12, border: '1px solid var(--ce-border)',
                    background: 'var(--ce-card)', color: 'var(--ce-fg)',
                    font: `400 14px var(--font-bebas)`, cursor: 'pointer',
                  }}>{t}</button>
                ))}
              </div>
              <input placeholder="Jugador" style={{
                width: '100%', padding: '14px', borderRadius: 12, border: '1px solid var(--ce-border)',
                background: 'var(--ce-card)', color: 'var(--ce-fg)', fontSize: 14, fontFamily: 'Inter', marginBottom: 14,
              }}/>
              {sheet === 'card' && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 14 }}>
                  <button className="tap" style={{ padding: 14, borderRadius: 12, border: '1px solid rgba(245,197,24,.4)', background: 'rgba(245,197,24,.1)', color: '#f5c518', font: `400 14px var(--font-bebas)`, cursor: 'pointer' }}>AMARILLA</button>
                  <button className="tap" style={{ padding: 14, borderRadius: 12, border: '1px solid rgba(231,76,60,.4)', background: 'rgba(231,76,60,.1)', color: '#e74c3c', font: `400 14px var(--font-bebas)`, cursor: 'pointer' }}>ROJA</button>
                </div>
              )}
              <button onClick={() => setSheet(null)} className="tap" style={{
                width: '100%', padding: 16, borderRadius: 12, border: 0,
                background: 'linear-gradient(135deg, #c0392b, #e74c3c)', color: '#fff',
                font: `400 16px var(--font-bebas)`, letterSpacing: '.08em', cursor: 'pointer',
              }}>CONFIRMAR</button>
            </div>
          </>
        )}
      </main>
    </>
  )
}
