import { useState, useEffect } from 'react'
import ChapterCard from './components/ChapterCard.jsx'
import ChapterViewer from './components/ChapterViewer.jsx'
import SortingRace from './components/SortingRace.jsx'
import TdTpPage from './components/TdTpPage.jsx'
import ExamensPage from './components/ExamensPage.jsx'
import { chapters } from './data/chapters.js'
import { chapter3 } from './data/chapter3.js'

const CHAPTER_ROUTES = { 'chapitre-3-tris': chapter3 }

const reasons = [
  'Voir au lieu de mémoriser',
  'Comprendre Big-O avec des courses',
  'Réviser avec les TD/TP disponibles',
]
const roadmap = [
  ['Phase 1', 'Cours interactifs', 'En cours'],
  ['Phase 2', 'TD / TP', 'Disponible'],
  ['Phase 3', 'Examens corrigés', 'Bientôt'],
]

function getSlugFromHash() {
  const match = window.location.hash.match(/^#\/(.+)$/)
  return match ? match[1] : null
}

export default function App() {
  const [slug, setSlug] = useState(getSlugFromHash)

  useEffect(() => {
    const onHash = () => {
      if (window.location.hash.startsWith('#/')) setSlug(getSlugFromHash())
      else if (!window.location.hash || window.location.hash === '#accueil') setSlug(null)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const chapter = slug ? CHAPTER_ROUTES[slug] : null
  if (chapter) return <ChapterViewer chapter={chapter} />
  if (slug === 'playground') return <PlaygroundPage />
  if (slug === 'td-tp') return <TdTpPage />
  if (slug === 'examens') return <ExamensPage />

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
              className="rounded-lg border-[3px] border-ink bg-accent px-3 py-2 font-mono text-sm font-black shadow-hardSm outline-none focus-visible:ring-4 focus-visible:ring-primary sm:px-4"
            >
              Accueil
            </a>
            <a
              href="#chapitres"
              className="rounded-lg border-[3px] border-ink bg-white px-3 py-2 font-mono text-sm font-black outline-none focus-visible:ring-4 focus-visible:ring-primary sm:px-4"
            >
              Cours
            </a>
            <a
              href="#/playground"
              className="rounded-lg border-[3px] border-ink bg-coral px-3 py-2 font-mono text-sm font-black shadow-hardSm outline-none focus-visible:ring-4 focus-visible:ring-primary sm:px-4"
            >
              Playground
            </a>
            <a
              href="#/td-tp"
              className="rounded-lg border-[3px] border-ink bg-success px-3 py-2 font-mono text-sm font-black shadow-hardSm outline-none focus-visible:ring-4 focus-visible:ring-primary sm:px-4"
            >
              TD/TP
            </a>
            <a
              href="#/examens"
              className="rounded-lg border-[3px] border-ink bg-white px-3 py-2 font-mono text-sm font-black outline-none transition hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-primary sm:px-4"
            >
              Examens
            </a>
          </div>
        </nav>
      </header>

      <main id="accueil">
        <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20">
          <div>
            <span className="inline-flex rounded-full border-[3px] border-ink bg-coral px-4 py-2 font-mono text-sm font-black shadow-hardSm">
              Démo live • Cours + TD/TP + Quiz
            </span>
            <h1 className="mt-6 max-w-4xl font-mono text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Comprends les structures de données sans dormir en cours.
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 sm:text-xl">
              Un mini-site interactif pour apprendre la complexité, les tris,
              les pointeurs, les listes, les piles et les files avec des exemples
              visuels.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#/chapitre-3-tris"
                className="rounded-xl border-[3px] border-ink bg-success px-6 py-4 text-center font-mono font-black shadow-hard outline-none transition hover:-translate-y-1 focus-visible:ring-4 focus-visible:ring-primary"
              >
                Commencer avec les tris
              </a>
              <a
                href="#roadmap"
                className="rounded-xl border-[3px] border-ink bg-white px-6 py-4 text-center font-mono font-black shadow-hard outline-none transition hover:-translate-y-1 focus-visible:ring-4 focus-visible:ring-primary"
              >
                Voir le programme
              </a>
              <a
                href="#/playground"
                className="rounded-xl border-[3px] border-ink bg-coral px-6 py-4 text-center font-mono font-black shadow-hard outline-none transition hover:-translate-y-1 focus-visible:ring-4 focus-visible:ring-primary"
              >
                Playground interactif
              </a>
            </div>
          </div>

          <div className="rounded-xl border-[3px] border-ink bg-white p-5 shadow-hard">
            <div className="grid gap-3 font-mono text-sm font-black">
              {['tableau', 'pile', 'file', 'liste'].map((label, index) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-lg border-[3px] border-ink bg-paper p-3"
                >
                  <span>{label}</span>
                  <span className="rounded-md border-[3px] border-ink bg-accent px-3 py-1">
                    O({index < 2 ? '1' : 'n'})
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="chapitres" className="border-y-[3px] border-ink bg-primary py-12 text-ink">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-mono text-3xl font-black text-white sm:text-4xl">
              Chapitres
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {chapters.map((chapter) => (
                <ChapterCard key={chapter.number} chapter={chapter} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="font-mono text-3xl font-black sm:text-4xl">
            Pourquoi ce site ?
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {reasons.map((reason) => (
              <article
                key={reason}
                className="rounded-xl border-[3px] border-ink bg-white p-5 shadow-hard"
              >
                <h3 className="text-2xl font-black leading-tight">{reason}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="roadmap" className="border-t-[3px] border-ink bg-accent py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-mono text-3xl font-black sm:text-4xl">Roadmap</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {roadmap.map(([phase, title, status]) => (
                <article
                  key={phase}
                  className="rounded-xl border-[3px] border-ink bg-white p-5 shadow-hard"
                >
                  <p className="font-mono text-sm font-black uppercase">{phase}</p>
                  <h3 className="mt-3 text-2xl font-black">{title}</h3>
                  <p className="mt-4 inline-flex rounded-lg border-[3px] border-ink bg-paper px-3 py-2 font-mono text-sm font-black">
                    {status}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t-[3px] border-ink bg-ink px-4 py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 font-mono font-black sm:flex-row sm:items-center sm:justify-between">
          <p>SupNum Data Structure Demo</p>
          <p>Frontend-only MVP</p>
        </div>
      </footer>
    </div>
  )
}

function PlaygroundPage() {
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
            Playground interactif
          </span>
          <h1 className="mt-4 font-mono text-4xl font-black leading-tight sm:text-5xl">
            Playground interactif
          </h1>
          <p className="mt-4 max-w-2xl text-lg font-semibold leading-8">
            Expérimente les algorithmes de tri directement dans le navigateur.
          </p>
        </div>

        <SortingRace />

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
