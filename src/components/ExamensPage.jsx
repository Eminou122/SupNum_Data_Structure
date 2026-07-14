import { useState } from 'react'
import { examPapers } from '../data/exams/index.js'

const FILTERS = [
  { label: 'Tous', value: 'all' },
  { label: 'Tests', value: 'test' },
  { label: 'Examens', value: 'exam' },
]

export default function ExamensPage() {
  const [filter, setFilter] = useState('all')
  const visiblePapers = filter === 'all'
    ? examPapers
    : examPapers.filter((paper) => paper.type === filter)

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-10 border-b-[3px] border-ink bg-paper/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="#accueil"
            className="rounded-lg border-[3px] border-ink bg-primary px-4 py-2 font-mono text-xl font-black text-white shadow-hardSm outline-none focus-visible:ring-4 focus-visible:ring-accent"
          >
            SupAlgo
          </a>
          <div className="flex flex-wrap justify-end gap-2">
            <a
              href="#accueil"
              className="rounded-lg border-[3px] border-ink bg-white px-3 py-2 font-mono text-sm font-black shadow-hardSm outline-none transition hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-primary sm:px-4"
            >
              Accueil
            </a>
            <a
              href="#/td-tp"
              className="rounded-lg border-[3px] border-ink bg-success px-3 py-2 font-mono text-sm font-black shadow-hardSm outline-none transition hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-primary sm:px-4"
            >
              TD/TP
            </a>
            <a
              href="#/examens"
              aria-current="page"
              className="rounded-lg border-[3px] border-ink bg-accent px-3 py-2 font-mono text-sm font-black shadow-hardSm outline-none focus-visible:ring-4 focus-visible:ring-primary sm:px-4"
            >
              Examens
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-flex rounded-full border-[3px] border-ink bg-coral px-4 py-2 font-mono text-sm font-black shadow-hardSm">
            v1.5 • Tests &amp; examens
          </span>
          <h1 className="mt-4 font-mono text-4xl font-black leading-tight sm:text-5xl">
            Tests &amp; examens
          </h1>
          <p className="mt-4 max-w-3xl text-lg font-semibold leading-8">
            Consulte quatre sujets originaux de SupNum pour préparer tes révisions. Les fiches
            guidées seront ajoutées plus tard, après vérification attentive de chaque sujet.
          </p>
        </div>

        <div
          className="mb-8 flex flex-wrap gap-2"
          role="group"
          aria-label="Filtrer les sujets par type"
        >
          {FILTERS.map(({ label, value }) => {
            const count = value === 'all'
              ? examPapers.length
              : examPapers.filter((paper) => paper.type === value).length

            return (
              <button
                key={value}
                type="button"
                onClick={() => setFilter(value)}
                aria-pressed={filter === value}
                className={`rounded-lg border-[3px] border-ink px-4 py-2 font-mono text-sm font-black outline-none transition focus-visible:ring-4 focus-visible:ring-primary ${
                  filter === value
                    ? 'bg-primary text-white shadow-hardSm'
                    : 'bg-white hover:-translate-y-0.5'
                }`}
              >
                {label} ({count})
              </button>
            )
          })}
        </div>

        <section aria-label="Sujets disponibles">
          <div className="grid gap-6 sm:grid-cols-2">
            {visiblePapers.map((paper) => (
              <article
                key={paper.id}
                className="flex min-w-0 flex-col rounded-xl border-[3px] border-ink bg-white p-5 shadow-hard"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-md border-[3px] border-ink px-2 py-0.5 font-mono text-xs font-black shadow-hardSm ${paper.type === 'test' ? 'bg-accent' : 'bg-success'}`}
                  >
                    {paper.badge}
                  </span>
                  <span className="rounded-md border-2 border-ink bg-paper px-2 py-0.5 font-mono text-xs font-black">
                    {paper.year}
                  </span>
                </div>
                <h2 className="mt-4 font-mono text-xl font-black leading-tight">{paper.title}</h2>
                <p className="mt-3 font-mono text-sm font-black">{paper.duration}</p>
                <p className="mt-3 flex-1 text-sm font-semibold leading-6">{paper.description}</p>
                <a
                  href={paper.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex min-h-11 items-center justify-center rounded-lg border-[3px] border-ink bg-coral px-4 py-2 text-center font-mono text-sm font-black shadow-hardSm outline-none transition hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-primary"
                >
                  Ouvrir le PDF original →
                </a>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-12 flex justify-center">
          <a
            href="#accueil"
            className="rounded-xl border-[3px] border-ink bg-white px-6 py-4 font-mono font-black shadow-hard outline-none transition hover:-translate-y-1 focus-visible:ring-4 focus-visible:ring-primary"
          >
            ← Retour à l&apos;accueil
          </a>
        </div>
      </main>

      <footer className="mt-12 border-t-[3px] border-ink bg-ink px-4 py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 font-mono font-black sm:flex-row sm:items-center sm:justify-between">
          <p>SupNum Data Structure Demo</p>
          <p>Frontend-only MVP</p>
        </div>
      </footer>
    </div>
  )
}
