import { useState } from 'react'

const ARR = [4, 9, 2, 11, 6]

const STEPS = [
  {
    i: 0,
    max: 4,
    label: 'Initialisation',
    detail: 'max ← T[0] = 4',
    explanation: 'On commence avec T[0] = 4 comme premier maximum.',
  },
  {
    i: 1,
    max: 9,
    label: 'T[1] = 9 > max(4)',
    detail: 'max ← 9',
    explanation: '9 est plus grand que 4 : on met à jour max.',
  },
  {
    i: 2,
    max: 9,
    label: 'T[2] = 2 ≤ max(9)',
    detail: 'max reste 9',
    explanation: '2 est plus petit que 9 : on ne change pas max.',
  },
  {
    i: 3,
    max: 11,
    label: 'T[3] = 11 > max(9)',
    detail: 'max ← 11',
    explanation: '11 est plus grand que 9 : on met à jour max.',
  },
  {
    i: 4,
    max: 11,
    label: 'T[4] = 6 ≤ max(11)',
    detail: 'max reste 11',
    explanation: '6 est plus petit que 11 : on ne change pas max.',
  },
  {
    i: null,
    max: 11,
    label: 'Terminé',
    detail: 'maximum = 11',
    explanation: 'Toutes les cases ont été vérifiées. Le maximum est 11.',
  },
]

export default function PseudoTracer() {
  const [step, setStep] = useState(0)
  const current = STEPS[step]

  return (
    <div className="rounded-xl border-[3px] border-ink bg-white p-6 shadow-hard">
      <p className="font-mono text-lg font-black">Traceur de pseudo-code</p>
      <p className="mt-1 font-semibold text-sm">
        On cherche le maximum du tableau étape par étape.
      </p>

      <div className="mt-5 flex gap-2">
        {ARR.map((val, idx) => (
          <div
            key={idx}
            className={`flex h-12 w-12 items-center justify-center rounded-lg border-[3px] border-ink font-mono text-base font-black shadow-hardSm transition ${
              current.i === idx
                ? 'bg-accent'
                : current.i !== null && idx < current.i
                ? 'bg-paper opacity-50'
                : 'bg-paper'
            }`}
          >
            {val}
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-lg border-[3px] border-ink bg-paper p-4 shadow-hardSm">
        <p className="font-mono text-xs font-black uppercase opacity-60">
          Étape {step + 1} / {STEPS.length}
        </p>
        <p className="mt-1 font-mono text-base font-black">{current.label}</p>
        <p className="mt-1 font-mono text-sm">{current.detail}</p>
        <p className="mt-2 font-semibold text-sm leading-6">{current.explanation}</p>
        <p className="mt-3 inline-flex rounded-lg border-[3px] border-ink bg-success px-3 py-1 font-mono text-sm font-black shadow-hardSm">
          max = {current.max}
        </p>
      </div>

      <div className="mt-5 flex gap-3">
        <button
          onClick={() => setStep((s) => s - 1)}
          disabled={step === 0}
          className="rounded-lg border-[3px] border-ink bg-white px-4 py-2 font-mono text-sm font-black shadow-hardSm outline-none transition hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:translate-y-0"
        >
          Précédent
        </button>
        <button
          onClick={() => setStep((s) => s + 1)}
          disabled={step === STEPS.length - 1}
          className="rounded-lg border-[3px] border-ink bg-accent px-4 py-2 font-mono text-sm font-black shadow-hardSm outline-none transition hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:translate-y-0"
        >
          Suivant
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
