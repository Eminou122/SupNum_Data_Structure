export default function ExamViewer({ paper }) {
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
            href="#/examens"
            className="rounded-lg border-[3px] border-ink bg-white px-4 py-2 font-mono text-sm font-black shadow-hardSm outline-none transition hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-primary"
          >
            ← Tests &amp; examens
          </a>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-flex rounded-full border-[3px] border-ink bg-coral px-4 py-2 font-mono text-sm font-black shadow-hardSm">
            {paper.badge}
          </span>
          <h1 className="mt-4 font-mono text-4xl font-black leading-tight sm:text-5xl">
            {paper.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg font-semibold leading-8">{paper.intro}</p>

          {!paper.officialCorrection && (
            <p
              className="mt-5 rounded-xl border-[3px] border-ink bg-accent px-4 py-3 font-mono font-black shadow-hardSm"
              role="note"
            >
              Correction guidée non officielle
            </p>
          )}

          <a
            href={paper.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex min-h-11 items-center rounded-lg border-[3px] border-ink bg-white px-4 py-2 font-mono text-sm font-black shadow-hardSm outline-none transition hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-primary"
          >
            {paper.sourceLabel} ↗
          </a>
        </div>

        <div className="grid gap-7">
          {paper.exercises.map((exercise) => (
            <article
              key={exercise.id}
              className="min-w-0 rounded-xl border-[3px] border-ink bg-white p-5 shadow-hard sm:p-6"
            >
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="font-mono text-xl font-black leading-tight sm:text-2xl">
                  {exercise.title}
                </h2>
                <span className="rounded-md border-2 border-ink bg-success px-2 py-1 font-mono text-xs font-black">
                  {exercise.topic}
                </span>
              </div>

              <section className="mt-5">
                <h3 className="font-mono text-base font-black">Résumé de la question</h3>
                <p className="mt-2 font-semibold leading-7">{exercise.promptSummary}</p>
              </section>

              <section className="mt-5 rounded-lg border-[3px] border-ink bg-paper p-4">
                <h3 className="font-mono text-base font-black">Ce qu’on te demande vraiment</h3>
                <p className="mt-2 font-semibold leading-7">{exercise.whatTheyWant}</p>
              </section>

              <details className="mt-5 rounded-lg border-[3px] border-ink bg-white">
                <summary className="cursor-pointer px-4 py-3 font-mono font-black outline-none focus-visible:ring-4 focus-visible:ring-primary">
                  Méthode de résolution
                </summary>
                <ol className="list-decimal space-y-2 px-8 pb-4 font-semibold leading-7">
                  {exercise.method.map((step) => <li key={step}>{step}</li>)}
                </ol>
              </details>

              <details className="mt-3 rounded-lg border-[3px] border-ink bg-accent/40">
                <summary className="cursor-pointer px-4 py-3 font-mono font-black outline-none focus-visible:ring-4 focus-visible:ring-primary">
                  Pistes de correction
                </summary>
                <ul className="list-disc space-y-2 px-8 pb-4 font-semibold leading-7">
                  {exercise.guidedCorrection.map((step) => <li key={step}>{step}</li>)}
                </ul>
              </details>

              <details className="mt-3 rounded-lg border-[3px] border-ink bg-coral/30">
                <summary className="cursor-pointer px-4 py-3 font-mono font-black outline-none focus-visible:ring-4 focus-visible:ring-primary">
                  Pièges à éviter
                </summary>
                <ul className="list-disc space-y-2 px-8 pb-4 font-semibold leading-7">
                  {exercise.traps.map((trap) => <li key={trap}>{trap}</li>)}
                </ul>
              </details>

              <div className="mt-5 flex flex-wrap gap-2" aria-label={`Ressources liées à ${exercise.title}`}>
                {[...exercise.relatedChapters, ...exercise.relatedExamples].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-lg border-2 border-ink bg-paper px-3 py-2 font-mono text-xs font-black outline-none transition hover:bg-primary hover:text-white focus-visible:ring-4 focus-visible:ring-primary"
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#/examens"
            className="rounded-xl border-[3px] border-ink bg-white px-6 py-4 font-mono font-black shadow-hard outline-none transition hover:-translate-y-1 focus-visible:ring-4 focus-visible:ring-primary"
          >
            ← Retour aux tests &amp; examens
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
