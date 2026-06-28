import { useState } from 'react'

const FUNCTIONS = [
  {
    label: 'O(1)',
    desc: 'constant',
    value: () => 1,
    color: 'bg-success',
  },
  {
    label: 'O(log n)',
    desc: 'logarithmique',
    value: (n) => Math.ceil(Math.log2(Math.max(n, 2))),
    color: 'bg-accent',
  },
  {
    label: 'O(n)',
    desc: 'linéaire',
    value: (n) => n,
    color: 'bg-primary',
  },
  {
    label: 'O(n²)',
    desc: 'quadratique',
    value: (n) => n * n,
    color: 'bg-coral',
  },
]

const MAX_DISPLAY = 100

export default function ComplexityViz() {
  const [n, setN] = useState(10)

  return (
    <div className="rounded-xl border-[3px] border-ink bg-white p-6 shadow-hard">
      <h2 className="font-mono text-2xl font-black">Visualiseur de complexité</h2>
      <p className="mt-1 font-semibold text-base">
        Compare comment les coûts grandissent quand n augmente.
      </p>

      <div className="mt-5 flex items-center gap-4">
        <label htmlFor="n-slider" className="font-mono text-sm font-black whitespace-nowrap">
          Taille n : <span className="text-primary">{n}</span>
        </label>
        <input
          id="n-slider"
          type="range"
          min={1}
          max={100}
          value={n}
          onChange={(e) => setN(Number(e.target.value))}
          className="w-full cursor-pointer accent-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary rounded"
        />
      </div>

      <div className="mt-6 grid gap-4">
        {FUNCTIONS.map(({ label, desc, value, color }) => {
          const raw = value(n)
          const widthPct = Math.min(100, Math.max(4, (raw / MAX_DISPLAY) * 100))
          return (
            <div key={label}>
              <div className="flex items-baseline justify-between gap-2 mb-1">
                <span className="font-mono text-sm font-black">{label}</span>
                <span className="font-mono text-xs text-ink/60">{desc}</span>
                <span className="ml-auto font-mono text-sm font-black tabular-nums">{raw.toLocaleString()}</span>
              </div>
              <div className="h-7 w-full rounded-lg border-[3px] border-ink bg-paper overflow-hidden">
                <div
                  className={`h-full ${color} border-r-[3px] border-ink transition-all duration-200`}
                  style={{ width: `${widthPct}%` }}
                  role="img"
                  aria-label={`${label} : ${raw}`}
                />
              </div>
            </div>
          )
        })}
      </div>

      <p className="mt-5 rounded-lg border-[3px] border-ink bg-paper px-4 py-2 font-mono text-sm font-black shadow-hardSm">
        Déplace le curseur : tu verras pourquoi O(n²) devient vite beaucoup plus grand que O(n).
      </p>
    </div>
  )
}
