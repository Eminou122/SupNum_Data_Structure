import { useState } from 'react'

const BAR_MAX_H = 160 // px, for the tallest value

function Bar({ value, maxVal, isComparing, isSorted, index }) {
  const heightPx = Math.max(Math.round((value / maxVal) * BAR_MAX_H), 18)
  const bg = isSorted
    ? 'bg-success border-[2px] border-ink'
    : isComparing
      ? 'bg-coral border-[2px] border-ink'
      : 'bg-primary border-[2px] border-ink'

  return (
    <div className="flex flex-1 flex-col items-center gap-1">
      <span className="font-mono text-xs font-black">{value}</span>
      <div
        className="flex w-full items-end justify-center"
        style={{ height: `${BAR_MAX_H}px` }}
      >
        <div
          className={`w-full rounded-t transition-all duration-150 ${bg}`}
          style={{ height: `${heightPx}px` }}
          role="presentation"
        />
      </div>
      <span className="font-mono text-xs font-bold text-ink/50">[{index}]</span>
    </div>
  )
}

export default function SortExampleVisualizer({ frames }) {
  const [frameIdx, setFrameIdx] = useState(0)

  const frame = frames[frameIdx]
  const total = frames.length
  const isFirst = frameIdx === 0
  const isLast = frameIdx === total - 1

  const comparingSet = new Set(frame.comparing)
  const sortedSet = new Set(frame.sorted)
  const maxVal = Math.max(...frame.arr)

  function prev() {
    if (!isFirst) setFrameIdx((i) => i - 1)
  }
  function next() {
    if (!isLast) setFrameIdx((i) => i + 1)
  }
  function reset() {
    setFrameIdx(0)
  }

  return (
    <section className="rounded-xl border-[3px] border-ink bg-white p-6 shadow-hard">
      <div className="mb-4 flex items-center justify-between gap-2">
        <h2 className="font-mono text-xl font-black">Visualisation pas à pas</h2>
        <span className="rounded-lg border-[3px] border-ink bg-paper px-3 py-1 font-mono text-xs font-black">
          Étape {frameIdx + 1} / {total}
        </span>
      </div>

      {/* Bar chart */}
      <div
        className="flex gap-2 rounded-lg border-[3px] border-ink bg-paper px-4 pb-4 pt-2"
        aria-label={`État du tableau : ${frame.arr.join(', ')}`}
        role="img"
      >
        {frame.arr.map((value, i) => (
          <Bar
            key={i}
            value={value}
            maxVal={maxVal}
            isComparing={comparingSet.has(i)}
            isSorted={sortedSet.has(i)}
            index={i}
          />
        ))}
      </div>

      {/* Legend */}
      <div className="mt-3 flex flex-wrap gap-3">
        <span className="flex items-center gap-1.5 font-mono text-xs font-bold">
          <span className="inline-block h-3 w-3 rounded-sm border-[2px] border-ink bg-primary" />
          Non trié
        </span>
        <span className="flex items-center gap-1.5 font-mono text-xs font-bold">
          <span className="inline-block h-3 w-3 rounded-sm border-[2px] border-ink bg-coral" />
          Comparé
        </span>
        <span className="flex items-center gap-1.5 font-mono text-xs font-bold">
          <span className="inline-block h-3 w-3 rounded-sm border-[2px] border-ink bg-success" />
          Trié
        </span>
      </div>

      {/* Step description */}
      <div className="mt-4 rounded-lg border-[3px] border-ink bg-accent p-4">
        <p className="font-mono text-sm font-black leading-relaxed">{frame.description}</p>
      </div>

      {/* Controls */}
      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={prev}
          disabled={isFirst}
          aria-label="Étape précédente"
          className="rounded-lg border-[3px] border-ink bg-white px-4 py-2 font-mono text-sm font-black shadow-hardSm outline-none transition hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
        >
          ← Étape précédente
        </button>
        <button
          type="button"
          onClick={next}
          disabled={isLast}
          aria-label="Étape suivante"
          className="rounded-lg border-[3px] border-ink bg-success px-4 py-2 font-mono text-sm font-black shadow-hardSm outline-none transition hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
        >
          Étape suivante →
        </button>
        <button
          type="button"
          onClick={reset}
          aria-label="Réinitialiser"
          className="rounded-lg border-[3px] border-ink bg-paper px-4 py-2 font-mono text-sm font-black shadow-hardSm outline-none transition hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-primary"
        >
          Réinitialiser
        </button>
      </div>

      <p className="sr-only" aria-live="polite">
        {frame.description}
      </p>
    </section>
  )
}
