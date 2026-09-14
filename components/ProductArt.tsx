import type { Palette, ProductKind } from "@/lib/content"

// Deterministic pseudo-random so server and client render identical SVGs.
function seeded(seed: string) {
  let h = 2166136261
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507)
    h = Math.imul(h ^ (h >>> 13), 3266489909)
    h ^= h >>> 16
    return (h >>> 0) / 4294967296
  }
}

type Props = {
  kind: ProductKind
  palette: Palette
  seed: string
  label?: string
  className?: string
}

export function ProductArt({ kind, palette, seed, label, className }: Props) {
  if (kind === "dressing") return <Bottle palette={palette} label={label} className={className} />
  if (kind === "dukkah") return <Dukkah palette={palette} seed={seed} className={className} />
  return <Bowl palette={palette} seed={seed} className={className} />
}

function Bowl({ palette, seed, className }: { palette: Palette; seed: string; className?: string }) {
  const rand = seeded(seed)
  const specks = Array.from({ length: 34 }, () => {
    const a = rand() * Math.PI * 2
    const r = 18 + Math.sqrt(rand()) * 52
    return {
      x: 120 + Math.cos(a) * r,
      y: 120 + Math.sin(a) * r,
      r: 1.2 + rand() * 2.4,
      c: palette.garnish[Math.floor(rand() * palette.garnish.length)],
    }
  })
  const id = `bowl-${seed}`

  return (
    <svg viewBox="0 0 240 240" className={className} role="img" aria-hidden="true">
      <defs>
        <radialGradient id={`${id}-rim`} cx="45%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#FFFDF8" />
          <stop offset="100%" stopColor="#E6DCCB" />
        </radialGradient>
        <radialGradient id={`${id}-fill`} cx="42%" cy="38%" r="70%">
          <stop offset="0%" stopColor={palette.swirl} />
          <stop offset="100%" stopColor={palette.base} />
        </radialGradient>
      </defs>
      <ellipse cx="124" cy="130" rx="104" ry="100" fill="#1F2A1E" opacity="0.12" />
      <circle cx="120" cy="120" r="102" fill={`url(#${id}-rim)`} />
      <circle cx="120" cy="120" r="84" fill={`url(#${id}-fill)`} />
      <path
        d="M120 58c34 0 60 26 60 58s-24 54-54 54-48-20-48-46 18-40 40-40 32 14 32 30-12 24-24 24-18-8-18-18 6-12 12-12"
        fill="none"
        stroke={palette.swirl}
        strokeWidth="9"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M120 58c34 0 60 26 60 58s-24 54-54 54-48-20-48-46 18-40 40-40 32 14 32 30"
        fill="none"
        stroke={palette.base}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.45"
      />
      <ellipse cx="128" cy="122" rx="20" ry="13" fill={palette.accent} opacity="0.55" />
      {specks.map((s, i) => (
        <circle key={i} cx={s.x} cy={s.y} r={s.r} fill={s.c} />
      ))}
      <path d="M44 92a84 84 0 0 1 48-46" stroke="#fff" strokeWidth="5" strokeLinecap="round" opacity="0.7" fill="none" />
    </svg>
  )
}

function Dukkah({ palette, seed, className }: { palette: Palette; seed: string; className?: string }) {
  const rand = seeded(seed)
  const grains = Array.from({ length: 230 }, () => {
    const a = rand() * Math.PI * 2
    const r = Math.sqrt(rand()) * 80
    return {
      x: 120 + Math.cos(a) * r,
      y: 120 + Math.sin(a) * r,
      rx: 1.6 + rand() * 3.4,
      ry: 1 + rand() * 2,
      rot: rand() * 180,
      c: rand() < 0.5 ? palette.garnish[Math.floor(rand() * palette.garnish.length)] : rand() < 0.5 ? palette.base : palette.swirl,
    }
  })
  const id = `dukkah-${seed}`

  return (
    <svg viewBox="0 0 240 240" className={className} role="img" aria-hidden="true">
      <defs>
        <radialGradient id={`${id}-dish`} cx="45%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#3B4A33" />
          <stop offset="100%" stopColor="#1F2A1E" />
        </radialGradient>
        <radialGradient id={`${id}-mound`} cx="42%" cy="38%" r="60%">
          <stop offset="0%" stopColor={palette.swirl} />
          <stop offset="100%" stopColor={palette.base} />
        </radialGradient>
      </defs>
      <ellipse cx="124" cy="130" rx="104" ry="100" fill="#1F2A1E" opacity="0.14" />
      <circle cx="120" cy="120" r="102" fill={`url(#${id}-dish)`} />
      <circle cx="120" cy="120" r="86" fill={`url(#${id}-mound)`} />
      {grains.map((g, i) => (
        <ellipse
          key={i}
          cx={g.x}
          cy={g.y}
          rx={g.rx}
          ry={g.ry}
          fill={g.c}
          transform={`rotate(${g.rot} ${g.x} ${g.y})`}
        />
      ))}
      <path d="M44 92a84 84 0 0 1 48-46" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity="0.25" fill="none" />
    </svg>
  )
}

function Bottle({ palette, label, className }: { palette: Palette; label?: string; className?: string }) {
  const initial = label?.charAt(0) ?? ""
  return (
    <svg viewBox="0 0 240 240" className={className} role="img" aria-hidden="true">
      <ellipse cx="120" cy="222" rx="56" ry="8" fill="#1F2A1E" opacity="0.14" />
      <rect x="104" y="14" width="32" height="22" rx="4" fill="#1F2A1E" />
      <path
        d="M108 36h24v26c0 8 30 20 30 46v100c0 8-6 14-14 14H92c-8 0-14-6-14-14V108c0-26 30-38 30-46z"
        fill="#F6F1E6"
        opacity="0.55"
      />
      <path d="M80 118h80v90c0 7-5 12-12 12H92c-7 0-12-5-12-12z" fill={palette.base} />
      <path d="M80 118c20 8 60-8 80 0v10c-20-8-60 8-80 0z" fill={palette.swirl} />
      <rect x="84" y="138" width="72" height="54" rx="4" fill="#F4EEE3" />
      <rect x="84" y="138" width="72" height="54" rx="4" fill="none" stroke={palette.accent} strokeWidth="1.5" />
      <text
        x="120"
        y="176"
        textAnchor="middle"
        fontFamily="var(--font-fraunces), Georgia, serif"
        fontSize="30"
        fontStyle="italic"
        fill={palette.accent}
      >
        {initial}
      </text>
      <path
        d="M108 36h24v26c0 8 30 20 30 46v100c0 8-6 14-14 14H92c-8 0-14-6-14-14V108c0-26 30-38 30-46z"
        fill="none"
        stroke="#1F2A1E"
        strokeOpacity="0.2"
        strokeWidth="2"
      />
      <path d="M92 116v84" stroke="#fff" strokeWidth="5" strokeLinecap="round" opacity="0.45" />
    </svg>
  )
}
