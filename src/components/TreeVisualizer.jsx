import { useState } from 'react'

function TreeNode({ node, path, inserted, activeValue, isRoot = false }) {
  if (!node) return null

  const hasChildren = node.left || node.right
  const stateClass = node.val === inserted
    ? 'bg-success'
    : node.val === activeValue
      ? 'bg-coral'
      : path.has(node.val)
        ? 'bg-accent'
        : 'bg-white'

  return (
    <div className="flex flex-col items-center">
      {isRoot && <span className="mb-1 font-mono text-xs font-black text-ink">racine</span>}
      <div className={`flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-ink font-mono text-lg font-black text-ink shadow-hardSm ${stateClass}`}>
        {node.val}
      </div>

      {hasChildren && (
        <div className="mt-3 grid grid-cols-2 items-start gap-6">
          <div className="flex min-w-28 flex-col items-center">
            {node.left && (
              <>
                <span className="font-mono text-xs font-black text-ink">↙ gauche</span>
                <div className="mt-2">
                  <TreeNode
                    node={node.left}
                    path={path}
                    inserted={inserted}
                    activeValue={activeValue}
                  />
                </div>
              </>
            )}
          </div>
          <div className="flex min-w-28 flex-col items-center">
            {node.right && (
              <>
                <span className="font-mono text-xs font-black text-ink">droite ↘</span>
                <div className="mt-2">
                  <TreeNode
                    node={node.right}
                    path={path}
                    inserted={inserted}
                    activeValue={activeValue}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function treeValues(node) {
  return node
    ? [node.val, ...treeValues(node.left), ...treeValues(node.right)]
    : []
}

export default function TreeVisualizer({ frames }) {
  const [frameIdx, setFrameIdx] = useState(0)

  const frame = frames[frameIdx]
  const isFirst = frameIdx === 0
  const isLast = frameIdx === frames.length - 1
  const values = treeValues(frame.tree)
  const path = new Set(frame.path)
  const ariaLabel = values.length
    ? `Arbre binaire : ${values.join(', ')}. ${frame.path.length ? `Chemin suivi : ${frame.path.join(', ')}.` : ''}`
    : 'Arbre vide, racine égale NULL.'

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
        aria-label={ariaLabel}
      >
        {frame.tree ? (
          <div className="mx-auto min-w-max py-2">
            <TreeNode
              node={frame.tree}
              path={path}
              inserted={frame.inserted}
              activeValue={frame.activeValue}
              isRoot
            />
          </div>
        ) : (
          <p className="min-w-max py-12 text-center font-mono font-black">Arbre vide — racine = NULL</p>
        )}
      </div>

      <div className="mt-3 flex flex-wrap gap-3">
        <span className="flex items-center gap-1.5 font-mono text-xs font-bold text-ink">
          <span className="h-3 w-3 rounded-sm border-2 border-ink bg-accent" /> Chemin
        </span>
        <span className="flex items-center gap-1.5 font-mono text-xs font-bold text-ink">
          <span className="h-3 w-3 rounded-sm border-2 border-ink bg-coral" /> Nœud actif
        </span>
        <span className="flex items-center gap-1.5 font-mono text-xs font-bold text-ink">
          <span className="h-3 w-3 rounded-sm border-2 border-ink bg-success" /> Inséré
        </span>
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
