export default function ChapterViewer({ chapter }) {
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
          <span className="inline-flex rounded-full border-[3px] border-ink bg-success px-4 py-2 font-mono text-sm font-black shadow-hardSm">
            {chapter.number} · Actif
          </span>
          <h1 className="mt-4 font-mono text-4xl font-black leading-tight sm:text-5xl">
            {chapter.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg font-semibold leading-8">
            {chapter.intro}
          </p>
        </div>

        <nav className="mb-10 rounded-xl border-[3px] border-ink bg-white p-5 shadow-hard">
          <p className="font-mono text-sm font-black uppercase">Sections</p>
          <ol className="mt-3 grid gap-2 sm:grid-cols-2">
            {chapter.sections.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#section-${s.id}`}
                  className="flex items-start gap-2 rounded-lg border-[3px] border-ink bg-paper px-3 py-2 font-mono text-sm font-black outline-none transition hover:-translate-y-0.5 hover:bg-accent focus-visible:ring-4 focus-visible:ring-primary"
                >
                  <span className="shrink-0 text-xs opacity-60">{String(i + 1).padStart(2, '0')}</span>
                  {s.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="grid gap-8">
          {chapter.sections.map((section) => (
            <Section key={section.id} section={section} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#accueil"
            className="rounded-xl border-[3px] border-ink bg-white px-6 py-4 font-mono font-black shadow-hard outline-none transition hover:-translate-y-1 focus-visible:ring-4 focus-visible:ring-primary"
          >
            ← Retour à l'accueil
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

function Section({ section }) {
  if (section.isCallout) {
    return (
      <section id={`section-${section.id}`} className="scroll-mt-20">
        <article className="rounded-xl border-[3px] border-ink bg-coral p-6 shadow-hard">
          <h2 className="font-mono text-2xl font-black">{section.heading}</h2>
          <p className="mt-3 text-lg font-semibold leading-7">{section.explanation}</p>
          <p className="mt-4 inline-flex rounded-lg border-[3px] border-ink bg-paper px-4 py-2 font-mono text-sm font-black shadow-hardSm">
            🔜 {section.calloutText}
          </p>
        </article>
      </section>
    )
  }

  return (
    <section id={`section-${section.id}`} className="scroll-mt-20">
      <article className="rounded-xl border-[3px] border-ink bg-white p-6 shadow-hard">
        <h2 className="font-mono text-2xl font-black">{section.heading}</h2>

        <p className="mt-3 text-base font-semibold leading-7">{section.explanation}</p>

        {section.analogy && (
          <div className="mt-4 rounded-lg border-[3px] border-ink bg-accent p-4 shadow-hardSm">
            <p className="font-mono text-sm font-black uppercase">Analogie</p>
            <p className="mt-1 font-semibold leading-6">{section.analogy}</p>
          </div>
        )}

        {section.pseudoCode && (
          <div className="mt-4">
            <p className="font-mono text-sm font-black uppercase">Pseudo-code</p>
            <pre className="mt-2 overflow-x-auto rounded-lg border-[3px] border-ink bg-ink p-4 font-mono text-sm text-white shadow-hardSm">
              {section.pseudoCode}
            </pre>
          </div>
        )}

        {section.keyPoints && (
          <ul className="mt-4 grid gap-2">
            {section.keyPoints.map((point) => (
              <li
                key={point}
                className="flex gap-2 rounded-lg border-[3px] border-ink bg-paper px-3 py-2 font-semibold leading-6"
              >
                <span className="shrink-0 font-black">→</span>
                {point}
              </li>
            ))}
          </ul>
        )}

        {section.warning && (
          <div className="mt-4 rounded-lg border-[3px] border-ink bg-coral p-4 shadow-hardSm">
            <p className="font-mono text-sm font-black uppercase">Attention</p>
            <p className="mt-1 font-semibold leading-6">{section.warning}</p>
          </div>
        )}
      </article>
    </section>
  )
}
