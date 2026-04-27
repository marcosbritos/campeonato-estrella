# Campeonato de la Estrella — Rewrite v3

Nueva versión de los componentes de tu app Next.js con el diseño moderno (dark + light, mesh background, aurora, Tweaks de tema, etc).

## Cómo aplicarlo a tu proyecto local

Reemplazá/agregá estos archivos en tu codebase existente:

```
src/app/globals.css              (REEMPLAZAR)
src/app/layout.tsx               (REEMPLAZAR)
src/app/page.tsx                 (REEMPLAZAR · ahora es la HOME con live + accesos)
src/app/fixture/page.tsx         (REEMPLAZAR)
src/app/goleadores/page.tsx      (REEMPLAZAR)
src/app/fairplay/page.tsx        (REEMPLAZAR)
src/app/arbitro/page.tsx         (REEMPLAZAR)

src/components/ThemeProvider.tsx (NUEVO)
src/components/Header.tsx        (REEMPLAZAR)
src/components/BottomNav.tsx     (REEMPLAZAR)
src/components/UI.tsx            (NUEVO · Monogram, SectionTitle, LiveDot)
src/components/MatchCards.tsx    (NUEVO · LiveCard, UpcomingCard)
src/components/StandingsTable.tsx (NUEVO)
src/components/RegisterSW.tsx    (NUEVO)

src/lib/mock.ts                  (NUEVO · data de ejemplo; reemplazar por Supabase)
```

## Conexión a Supabase

En `src/lib/mock.ts` hay data hardcodeada para que compile y veas el diseño.
Para conectar con Supabase real, creá `src/lib/data.ts` con funciones async:

```ts
import { supabase } from './supabase'
import type { Standing } from './mock'

export async function getStandings(zone: 'A'|'B'|'C'): Promise<Standing[]> {
  const { data } = await supabase.from('standings').select('*').eq('zone', zone).order('pts', { ascending: false })
  return data ?? []
}
```

Luego convertí las páginas que usan mock a `async` server components:

```tsx
export default async function HomePage() {
  const live = await getLiveMatches()
  // ...
}
```

## Dependencias necesarias

Tu `package.json` ya debería tener Next.js. Agregá (si no los tenés):

```bash
npm install next react react-dom
# fuentes via next/font (ya viene)
```

No hace falta Tailwind plugins extra — todo el styling está en CSS variables + inline styles.

## Theme toggle

El botón ☾/☀ en el header togglea entre dark y light. Persiste en `localStorage`.

## Notas

- `BottomNav` tiene 5 tabs: Tabla (/) · Fixture · Goleadores · Fair Play · Árbitro.
- La home (/) muestra: live cards → accesos por zona → próximos → tabla.
- Si querés separar la tabla en su propia ruta, moví `<StandingsTable />` a `src/app/tabla/page.tsx` y agregá el link en BottomNav.
- Todos los colores, radios, shadows, etc, salen de CSS variables en `globals.css` — tocá ahí para afinar.

## Próximos pasos sugeridos

1. Conectar Supabase a cada página (reemplazar mock).
2. Agregar página `/player/[id]` con el design del UI kit (PlayerStatsModern.jsx).
3. Agregar página `/formacion/[match]` con el design del UI kit (LineupModern.jsx).
4. Service worker (`public/sw.js`) para offline — mantener el que ya tenés.
