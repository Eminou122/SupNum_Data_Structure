import { useState } from 'react'

export default function Quiz({ title, questions }) {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const q = questions[current]
  const answered = selected !== null

  function handleSelect(idx) {
    if (answered) return
    setSelected(idx)
    if (idx === q.answerIndex) setScore((s) => s + 1)
  }

  function handleNext() {
    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1)
      setSelected(null)
    } else {
      setDone(true)
    }
  }

  function handleRetry() {
    setCurrent(0)
    setSelected(null)
    setScore(0)
    setDone(false)
  }

  if (done) {
    const perfect = score === questions.length
    return (
      <section className="rounded-xl border-[3px] border-ink bg-white p-6 shadow-hard">
        <h2 className="font-mono text-2xl font-black">{title}</h2>
        <div className="mt-6 rounded-xl border-[3px] border-ink bg-accent p-6 shadow-hard text-center">
          <p className="font-mono text-4xl font-black">
            {score} / {questions.length}
          </p>
          <p className="mt-3 text-lg font-semibold">
            {perfect
              ? 'Parfait ! Tu maîtrises les algorithmes de tri.'
              : score >= questions.length / 2
              ? 'Bien joué ! Relis les sections sur les points manqués.'
              : 'Continue à réviser — relis le cours et réessaie.'}
          </p>
        </div>
        <button
          type="button"
          onClick={handleRetry}
          className="mt-6 rounded-lg border-[3px] border-ink bg-success px-5 py-3 font-mono text-sm font-black shadow-hardSm outline-none transition hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-primary"
        >
          Recommencer le quiz
        </button>
      </section>
    )
  }

  return (
    <section className="rounded-xl border-[3px] border-ink bg-white p-6 shadow-hard">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <h2 className="font-mono text-2xl font-black">{title}</h2>
        <span className="font-mono text-sm font-black text-ink/60">
          {current + 1} / {questions.length}
        </span>
      </div>
      <p className="mt-1 font-mono text-xs font-black uppercase text-ink/50">
        Choisis la bonne réponse
      </p>

      <p className="mt-5 text-lg font-black leading-tight">{q.question}</p>

      <ul className="mt-4 grid gap-3" role="list">
        {q.choices.map((choice, idx) => {
          const isCorrect = idx === q.answerIndex
          const isChosen = idx === selected
          let bg = 'bg-paper hover:bg-accent'
          let label = null
          if (answered) {
            if (isCorrect) { bg = 'bg-success'; label = 'Correct' }
            else if (isChosen) { bg = 'bg-coral'; label = 'Incorrect' }
            else bg = 'bg-paper opacity-60'
          }
          return (
            <li key={idx}>
              <button
                type="button"
                onClick={() => handleSelect(idx)}
                disabled={answered}
                className={`w-full text-left rounded-lg border-[3px] border-ink px-4 py-3 font-semibold shadow-hardSm outline-none transition focus-visible:ring-4 focus-visible:ring-primary disabled:cursor-default ${
                  answered ? bg : `${bg} hover:-translate-y-0.5`
                }`}
              >
                <span className="font-mono font-black mr-2">
                  {String.fromCharCode(65 + idx)}.
                </span>
                {choice}
                {label && (
                  <span className="ml-2 font-mono text-xs font-black uppercase">
                    [{label}]
                  </span>
                )}
              </button>
            </li>
          )
        })}
      </ul>

      {answered && (
        <div
          className="mt-5 rounded-lg border-[3px] border-ink bg-paper p-4 shadow-hardSm"
          role="status"
          aria-live="polite"
        >
          <p className="font-mono text-sm font-black uppercase">Explication</p>
          <p className="mt-1 font-semibold leading-6">{q.explanation}</p>
        </div>
      )}

      {answered && (
        <button
          type="button"
          onClick={handleNext}
          className="mt-5 rounded-lg border-[3px] border-ink bg-primary px-5 py-3 font-mono text-sm font-black text-white shadow-hardSm outline-none transition hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-accent"
        >
          {current + 1 < questions.length ? 'Question suivante →' : 'Voir le résultat'}
        </button>
      )}
    </section>
  )
}
