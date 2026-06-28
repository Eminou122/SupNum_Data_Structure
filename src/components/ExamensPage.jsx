const COMING_CARDS = [
  {
    title: 'Examens blancs',
    desc: "S'entraîner en conditions proches de l'examen.",
  },
  {
    title: 'Sujets corrigés',
    desc: 'Comparer ta réponse avec une correction claire.',
  },
  {
    title: 'Mode chronométré',
    desc: 'Répondre avec une limite de temps.',
  },
  {
    title: 'Analyse des erreurs',
    desc: 'Comprendre les notions à revoir.',
  },
]

const REVISION_LINKS = [
  { label: 'Réviser le chapitre 3', href: '#/chapitre-3-tris' },
  { label: "S'entraîner avec les TD/TP", href: '#/td-tp' },
  { label: 'Tester la course des tris', href: '#/playground' },
]

export default function ExamensPage() {
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

      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="mb-10">
          <span className="inline-flex rounded-full border-[3px] border-ink bg-coral px-4 py-2 font-mono text-sm font-black shadow-hardSm">
            Gate 6 • préparation
          </span>
          <h1 className="mt-4 font-mono text-4xl font-black leading-tight sm:text-5xl">
            Examens
          </h1>
          <p className="mt-3 font-mono text-xl font-black text-ink/70">
            Mode examen bientôt disponible
          </p>
          <p className="mt-4 max-w-2xl text-base font-semibold leading-7">
            Les examens corrigés seront ajoutés lorsque les sujets officiels seront disponibles.
            Pour l&apos;instant, révise le cours, la course des tris, le quiz et les TD/TP.
          </p>
        </div>

        {/* Coming-soon cards */}
        <section aria-label="Fonctionnalités à venir">
          <h2 className="font-mono text-2xl font-black">Ce qui arrive</h2>
          <div className="mt-4 grid gap-5 sm:grid-cols-2">
            {COMING_CARDS.map(({ title, desc }) => (
              <article
                key={title}
                aria-label={`${title} — bientôt disponible`}
                className="rounded-xl border-[3px] border-ink bg-white p-5 opacity-60 shadow-hard"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-mono text-lg font-black leading-tight">{title}</h3>
                  <span className="shrink-0 rounded-md border-[3px] border-ink bg-paper px-2 py-0.5 font-mono text-xs font-black text-ink/50">
                    Bientôt
                  </span>
                </div>
                <p className="mt-2 text-sm font-semibold leading-relaxed">{desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Revision path */}
        <section className="mt-12" aria-label="Que faire maintenant">
          <h2 className="font-mono text-2xl font-black">Que faire maintenant ?</h2>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {REVISION_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="rounded-xl border-[3px] border-ink bg-accent px-6 py-4 text-center font-mono font-black shadow-hard outline-none transition hover:-translate-y-1 focus-visible:ring-4 focus-visible:ring-primary"
              >
                {label}
              </a>
            ))}
          </div>
        </section>

        {/* Back link */}
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
        <div className="mx-auto flex max-w-4xl flex-col gap-2 font-mono font-black sm:flex-row sm:items-center sm:justify-between">
          <p>SupNum Data Structure Demo</p>
          <p>Frontend-only MVP</p>
        </div>
      </footer>
    </div>
  )
}
