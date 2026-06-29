import ExerciseCard from './ExerciseCard.jsx'

export default function PracticePage({ practice }) {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-10 border-b-[3px] border-ink bg-paper/95 backdrop-blur">
        <nav className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <a
            href="#accueil"
            className="rounded-lg border-[3px] border-ink bg-primary px-4 py-2 font-mono text-xl font-black text-white shadow-hardSm outline-none focus-visible:ring-4 focus-visible:ring-accent"
          >
            SupAlgo
          </a>
          <a
            href="#accueil"
            className="rounded-lg border-[3px] border-ink bg-white px-4 py-2 font-mono text-sm font-black shadow-hardSm outline-none transition hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-primary"
          >
            ← Accueil
          </a>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-flex rounded-full border-[3px] border-ink bg-coral px-4 py-2 font-mono text-sm font-black shadow-hardSm">
            {practice.badge}
          </span>
          <h1 className="mt-4 font-mono text-4xl font-black leading-tight sm:text-5xl">
            {practice.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg font-semibold leading-8">{practice.intro}</p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="rounded-lg border-[3px] border-ink bg-white px-3 py-1.5 font-mono text-sm font-black shadow-hardSm">
              Niveau : {practice.difficulty}
            </span>
            <span className="rounded-lg border-[3px] border-ink bg-white px-3 py-1.5 font-mono text-sm font-black shadow-hardSm">
              Durée estimée : {practice.estimatedTime}
            </span>
            <a
              href={practice.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border-[3px] border-ink bg-accent px-3 py-1.5 font-mono text-sm font-black shadow-hardSm outline-none transition hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-primary"
            >
              {practice.sourceLabel} ↗
            </a>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {practice.chapters.map((ch) => (
              <a
                key={ch.href}
                href={ch.href}
                className="rounded-md border-2 border-ink bg-paper px-3 py-1 font-mono text-xs font-bold outline-none transition hover:bg-primary hover:text-white focus-visible:ring-4 focus-visible:ring-primary"
              >
                {ch.label}
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          {practice.exercises.map((ex) => (
            <ExerciseCard key={ex.id} exercise={ex} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#/td-tp"
            className="rounded-xl border-[3px] border-ink bg-white px-6 py-4 font-mono font-black shadow-hard outline-none transition hover:-translate-y-1 focus-visible:ring-4 focus-visible:ring-primary"
          >
            ← Retour au catalogue TD/TP
          </a>
        </div>
      </main>

      <footer className="mt-12 border-t-[3px] border-ink bg-ink px-4 py-8 text-white">
        <div className="mx-auto flex max-w-4xl flex-col gap-2 font-mono font-black sm:flex-row sm:items-center sm:justify-between">
          <p>SupNum Data Structure Demo</p>
          <p>Frontend-only MVP</p>
        </div>
      </footer>
    </div>
  )
}
