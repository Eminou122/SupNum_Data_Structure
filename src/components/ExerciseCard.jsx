import { useState } from 'react'

export default function ExerciseCard({ exercise }) {
  const [showHint, setShowHint] = useState(false)
  const [showSolution, setShowSolution] = useState(false)

  return (
    <article className="rounded-xl border-[3px] border-ink bg-white shadow-hard">
      <div className="p-5">
        <div className="flex items-start gap-4">
          <span className="shrink-0 rounded-lg border-[3px] border-ink bg-primary px-3 py-1 font-mono text-sm font-black text-white shadow-hardSm">
            {exercise.number}
          </span>
          <h2 className="font-mono text-xl font-black leading-tight">{exercise.title}</h2>
        </div>

        <div className="mt-4 whitespace-pre-wrap rounded-lg border-[3px] border-ink bg-paper p-4 font-mono text-sm leading-relaxed">
          {exercise.enonce}
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setShowHint((v) => !v)}
            aria-expanded={showHint}
            className="w-full rounded-lg border-[3px] border-ink bg-accent px-4 py-2 font-mono text-sm font-black shadow-hardSm outline-none transition hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-primary sm:w-auto"
          >
            {showHint ? 'Masquer l\'indice ↑' : 'Voir l\'indice ↓'}
          </button>
          <button
            type="button"
            onClick={() => setShowSolution((v) => !v)}
            aria-expanded={showSolution}
            className="w-full rounded-lg border-[3px] border-ink bg-coral px-4 py-2 font-mono text-sm font-black shadow-hardSm outline-none transition hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-primary sm:w-auto"
          >
            {showSolution ? 'Masquer la solution ↑' : 'Voir la solution ↓'}
          </button>
        </div>

        {showHint && (
          <div className="mt-4 rounded-lg border-[3px] border-ink bg-accent p-4">
            <p className="font-mono text-xs font-black uppercase tracking-wider">Indice</p>
            <p className="mt-1 text-sm font-semibold leading-relaxed">{exercise.indice}</p>
          </div>
        )}

        {showSolution && (
          <div className="mt-4 rounded-lg border-[3px] border-ink bg-coral p-4">
            <p className="font-mono text-xs font-black uppercase tracking-wider">Solution</p>
            <pre className="mt-2 overflow-x-auto whitespace-pre-wrap font-mono text-sm leading-relaxed">
              {exercise.solution}
            </pre>
            <div className="mt-4 border-t-[2px] border-ink/20 pt-4">
              <p className="font-mono text-xs font-black uppercase tracking-wider">Explication</p>
              <p className="mt-1 text-sm font-semibold leading-relaxed">{exercise.explication}</p>
            </div>
          </div>
        )}

        {exercise.chapters.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {exercise.chapters.map((ch) => (
              <a
                key={ch.href}
                href={ch.href}
                className="rounded-md border-2 border-ink bg-paper px-2 py-0.5 font-mono text-xs font-bold outline-none transition hover:bg-primary hover:text-white focus-visible:ring-4 focus-visible:ring-primary"
              >
                {ch.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
