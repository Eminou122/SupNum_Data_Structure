import { useState } from 'react'

export default function StackQueueVisualizer({ example }) {
  const [frameIdx, setFrameIdx] = useState(0)

  const frame = example.frames[frameIdx]
  const isStack = example.mode === 'stack'
  const isFirst = frameIdx === 0
  const isLast = frameIdx === example.frames.length - 1
  const queueItems = isStack ? [] : frame.items.slice(frame.front, frame.rear + 1)
  const ariaLabel = isStack
    ? frame.items.length
      ? `Pile de la base au sommet : ${frame.items.join(', ')}. Top sur ${frame.items[frame.top]}.`
      : 'Pile vide, top égale moins un.'
    : queueItems.length
      ? `File de front à rear : ${queueItems.join(', ')}.`
      : 'File vide.'

  return (
    <section className="rounded-xl border-[3px] border-ink bg-white p-6 shadow-hard">
      <div className="mb-4 flex items-center justify-between gap-2">
        <h2 className="font-mono text-xl font-black">Visualisation pas à pas</h2>
        <span className="rounded-lg border-[3px] border-ink bg-paper px-3 py-1 font-mono text-xs font-black">
          Étape {frameIdx + 1} / {example.frames.length}
        </span>
      </div>

      <div
        className="overflow-x-auto rounded-lg border-[3px] border-ink bg-paper p-5"
        role="img"
        aria-label={ariaLabel}
      >
        {isStack ? (
          frame.items.length === 0 ? (
            <p className="py-12 text-center font-mono font-black">Pile vide · top = -1</p>
          ) : (
            <div className="mx-auto flex w-full min-w-48 max-w-xs flex-col gap-2">
              {frame.items.map((value, index) => ({ value, index })).reverse().map(({ value, index }) => {
                const isTop = index === frame.top
                const highlight = isTop && frame.operation === 'push'
                  ? 'bg-success'
                  : isTop && (frame.operation === 'pop' || frame.operation === 'peek')
                    ? 'bg-accent'
                    : 'bg-white'

                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`flex-1 rounded-lg border-[3px] border-ink px-5 py-3 text-center font-mono text-xl font-black shadow-hardSm ${highlight}`}>
                      {value}
                    </div>
                    {isTop && <span className="font-mono text-xs font-black text-ink">TOP ↑</span>}
                  </div>
                )
              })}
            </div>
          )
        ) : queueItems.length === 0 ? (
          <p className="min-w-max py-12 text-center font-mono font-black">File vide · front = 0 · rear = -1</p>
        ) : (
          <div className="flex min-w-max items-center gap-3 pb-2 pt-7">
            {queueItems.map((value, offset) => {
              const index = frame.front + offset
              const isFront = index === frame.front
              const isRear = index === frame.rear
              const highlight = isRear && frame.operation === 'enqueue'
                ? 'bg-success'
                : isFront && frame.operation === 'dequeue'
                  ? 'bg-accent'
                  : 'bg-white'

              return (
                <div key={index} className="relative">
                  <div className="absolute -top-7 left-1/2 flex -translate-x-1/2 gap-2 font-mono text-xs font-black text-ink">
                    {isFront && <span>FRONT</span>}
                    {isRear && <span>REAR</span>}
                  </div>
                  <div className={`min-w-16 rounded-lg border-[3px] border-ink px-5 py-4 text-center font-mono text-xl font-black shadow-hardSm ${highlight}`}>
                    {value}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

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
