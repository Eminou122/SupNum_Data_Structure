import { useState } from 'react'

const STEPS = [
  {
    label: 'Étape 1 — Pointeur nul',
    pointer: 'NULL',
    chain: null,
    explanation: "p est déclaré mais ne pointe sur rien. Il vaut NULL : utiliser *p ici provoquerait une erreur.",
  },
  {
    label: 'Étape 2 — Un premier nœud',
    pointer: '→ Nœud A',
    chain: [{ name: 'Nœud A', value: 10, next: 'NULL' }],
    explanation: "p pointe vers le Nœud A qui contient la valeur 10. Le nœud A n'a pas de suivant (NULL).",
  },
  {
    label: 'Étape 3 — Chaînage',
    pointer: '→ Nœud A',
    chain: [
      { name: 'Nœud A', value: 10, next: '→ Nœud B' },
      { name: 'Nœud B', value: 20, next: 'NULL' },
    ],
    explanation: "Le Nœud A pointe vers le Nœud B. On peut parcourir la liste en suivant les pointeurs.",
  },
  {
    label: 'Étape 4 — Mémoire libérée',
    pointer: '⚠ invalide',
    chain: null,
    freed: true,
    explanation: "Les nœuds ont été libérés (delete). p ne doit plus être utilisé : c'est un pointeur fantôme.",
  },
]

export default function MemoryViz() {
  const [step, setStep] = useState(0)
  const current = STEPS[step]

  return (
    <div className="rounded-xl border-[3px] border-ink bg-white p-6 shadow-hard">
      <h2 className="font-mono text-2xl font-black">Visualiseur mémoire</h2>
      <p className="mt-1 font-semibold text-base">
        Observe comment un pointeur référence des nœuds en mémoire.
      </p>

      <p className="mt-4 font-mono text-xs font-black uppercase opacity-60">
        {step + 1} / {STEPS.length} — {current.label}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <div className={`rounded-lg border-[3px] border-ink px-4 py-3 font-mono text-sm font-black shadow-hardSm ${current.freed ? 'bg-coral' : 'bg-accent'}`}>
          p {current.pointer}
        </div>

        {current.chain && current.chain.map((node) => (
          <div key={node.name} className="flex items-center gap-2">
            <span className="font-mono text-lg font-black">→</span>
            <div className="rounded-lg border-[3px] border-ink bg-paper px-4 py-3 font-mono text-sm font-black shadow-hardSm">
              <span className="block text-xs opacity-60">{node.name}</span>
              <span className="block">val = {node.value}</span>
              <span className="block text-xs opacity-60">next: {node.next}</span>
            </div>
          </div>
        ))}

        {!current.chain && !current.freed && (
          <div className="flex items-center gap-2">
            <span className="font-mono text-lg font-black">→</span>
            <div className="rounded-lg border-[3px] border-ink bg-paper px-4 py-3 font-mono text-sm font-black shadow-hardSm opacity-40">
              NULL
            </div>
          </div>
        )}

        {current.freed && (
          <div className="flex items-center gap-2">
            <span className="font-mono text-lg font-black">→</span>
            <div className="rounded-lg border-[3px] border-ink bg-coral px-4 py-3 font-mono text-sm font-black shadow-hardSm line-through opacity-60">
              Nœud A / Nœud B (libérés)
            </div>
          </div>
        )}
      </div>

      <p className="mt-5 rounded-lg border-[3px] border-ink bg-paper px-4 py-3 font-semibold leading-6 shadow-hardSm">
        {current.explanation}
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        <button
          onClick={() => setStep((s) => s - 1)}
          disabled={step === 0}
          className="rounded-lg border-[3px] border-ink bg-white px-4 py-2 font-mono text-sm font-black shadow-hardSm outline-none transition hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
        >
          ← Précédent
        </button>
        <button
          onClick={() => setStep((s) => s + 1)}
          disabled={step === STEPS.length - 1}
          className="rounded-lg border-[3px] border-ink bg-primary px-4 py-2 font-mono text-sm font-black text-white shadow-hardSm outline-none transition hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
        >
          Suivant →
        </button>
        <button
          onClick={() => setStep(0)}
          className="rounded-lg border-[3px] border-ink bg-paper px-4 py-2 font-mono text-sm font-black shadow-hardSm outline-none transition hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-primary"
        >
          Réinitialiser
        </button>
      </div>
    </div>
  )
}
