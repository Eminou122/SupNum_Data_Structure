import { useState } from 'react'

export default function LinkedListVisualizer({ frames }) {
  const [frameIdx, setFrameIdx] = useState(0)

  const frame = frames[frameIdx]
  const isFirst = frameIdx === 0
  const isLast = frameIdx === frames.length - 1
  const links = new Set(frame.pointers.map(({ from, to }) => `${from}-${to}`))
  const values = frame.nodes.map(({ val }) => val)

  return (
    <section className="rounded-xl border-[3px] border-ink bg-white p-6 shadow-hard">
      <div className="mb-4 flex items-center justify-between gap-2">
        <h2 className="font-mono text-xl font-black">Visualisation pas à pas</h2>
        <span className="rounded-lg border-[3px] border-ink bg-paper px-3 py-1 font-mono text-xs font-black">
          Étape {frameIdx + 1} / {frames.length}
        </span>
      </div>

      <div
        className="overflow-x-auto rounded-lg border-[3px] border-ink bg-paper p-5"
        role="img"
        aria-label={values.length ? `Liste chaînée : ${values.join(', ')}, puis NULL` : 'Liste chaînée vide : head égale NULL'}
      >
        {frame.nodes.length === 0 ? (
          <div className="flex min-w-max items-center gap-3 font-mono font-black">
            <span className="text-primary">head</span>
            <span>→</span>
            <span className="rounded-lg border-[3px] border-ink bg-white px-4 py-3 shadow-hardSm">NULL</span>
          </div>
        ) : (
          <div className="flex min-w-max items-center gap-3 pb-2 pt-7">
            {frame.nodes.map((node, index) => {
              const nextNode = frame.nodes[index + 1]
              const isLinked = nextNode && links.has(`${node.id}-${nextNode.id}`)
              const isActive = node.id === frame.activeId
              const isNew = node.id === frame.newId

              return (
                <div key={node.id} className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute -top-7 left-1/2 flex -translate-x-1/2 gap-1 font-mono text-xs font-black">
                      {index === 0 && <span className="text-primary">head</span>}
                      {isActive && <span className="text-ink">current</span>}
                      {isNew && <span className="text-ink">new</span>}
                    </div>
                    <div className={`min-w-16 rounded-lg border-[3px] border-ink px-5 py-4 text-center font-mono text-xl font-black shadow-hardSm ${isNew ? 'bg-success' : isActive ? 'bg-accent' : 'bg-white'}`}>
                      {node.val}
                    </div>
                  </div>
                  {nextNode && (
                    <span className={`font-mono font-black ${isLinked ? 'text-2xl' : 'text-xs text-ink/50'}`}>
                      {isLinked ? '→' : 'non lié'}
                    </span>
                  )}
                </div>
              )
            })}
            <span className="font-mono text-2xl font-black">→</span>
            <span className="rounded-lg border-[3px] border-ink bg-white px-4 py-3 font-mono font-black shadow-hardSm">NULL</span>
          </div>
        )}
      </div>

      <p className="mt-3 font-mono text-xs font-bold">
        Les flèches représentent <code>next</code> ; <code>NULL</code> marque la fin de la liste.
      </p>

      <div className="mt-4 rounded-lg border-[3px] border-ink bg-accent p-4" aria-live="polite">
        <p className="font-mono text-sm font-black leading-relaxed">{frame.description}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setFrameIdx((index) => index - 1)}
          disabled={isFirst}
          className="rounded-lg border-[3px] border-ink bg-white px-4 py-2 font-mono text-sm font-black shadow-hardSm outline-none transition hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
        >
          ← Étape précédente
        </button>
        <button
          type="button"
          onClick={() => setFrameIdx((index) => index + 1)}
          disabled={isLast}
          className="rounded-lg border-[3px] border-ink bg-success px-4 py-2 font-mono text-sm font-black shadow-hardSm outline-none transition hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
        >
          Étape suivante →
        </button>
        <button
          type="button"
          onClick={() => setFrameIdx(0)}
          className="rounded-lg border-[3px] border-ink bg-paper px-4 py-2 font-mono text-sm font-black shadow-hardSm outline-none transition hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-primary"
        >
          Réinitialiser
        </button>
      </div>
    </section>
  )
}
