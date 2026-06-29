import { useState } from 'react'
import { exampleItems } from '../data/examples/index.js'

const FILTERS = ['Tout', 'Tri', 'Liste', 'Pile-File', 'Arbre']

const CATEGORY_COLORS = {
  Tri: 'bg-primary text-white',
  Liste: 'bg-coral text-ink',
  'Pile-File': 'bg-accent text-ink',
  Arbre: 'bg-success text-ink',
}

function CategoryBadge({ category }) {
  return (
    <span
      className={`inline-flex rounded-md border-[3px] border-ink px-2 py-0.5 font-mono text-xs font-black shadow-hardSm ${CATEGORY_COLORS[category] ?? 'bg-white text-ink'}`}
    >
      {category}
    </span>
  )
}

function ExampleCard({ item }) {
  const isAvailable = item.status === 'available'
  return (
    <article
      className={`rounded-xl border-[3px] border-ink bg-white p-5 shadow-hard transition-opacity ${isAvailable ? '' : 'opacity-60'}`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <CategoryBadge category={item.category} />
        {isAvailable && (
          <span className="inline-flex rounded-md border-[3px] border-ink bg-success px-2 py-0.5 font-mono text-xs font-black shadow-hardSm">
            Disponible
          </span>
        )}
      </div>
      <h3 className="mt-3 font-mono text-xl font-black leading-tight">{item.title}</h3>
      <p className="mt-2 text-sm font-semibold leading-relaxed">{item.description}</p>
      <div className="mt-4">
        {isAvailable ? (
          <a
            href={item.route}
            className="inline-flex rounded-lg border-[3px] border-ink bg-success px-4 py-2 font-mono text-sm font-black shadow-hardSm outline-none transition hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-primary"
          >
            Voir l'exemple →
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="cursor-not-allowed rounded-lg border-[3px] border-ink bg-paper px-4 py-2 font-mono text-sm font-black opacity-50"
          >
            Bientôt
          </button>
        )}
      </div>
    </article>
  )
}

export default function ExamplesPage() {
  const [filter, setFilter] = useState('Tout')

  const visible =
    filter === 'Tout' ? exampleItems : exampleItems.filter((i) => i.category === filter)

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
          <a
            href="#accueil"
            className="rounded-lg border-[3px] border-ink bg-white px-4 py-2 font-mono text-sm font-black shadow-hardSm outline-none transition hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-primary"
          >
            ← Accueil
          </a>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-flex rounded-full border-[3px] border-ink bg-coral px-4 py-2 font-mono text-sm font-black shadow-hardSm">
            v1.4 • Labo d'exemples
          </span>
          <h1 className="mt-4 font-mono text-4xl font-black leading-tight sm:text-5xl">
            Labo d'exemples interactifs
          </h1>
          <p className="mt-3 max-w-2xl text-lg font-semibold leading-8">
            Regarde les algorithmes et les structures de données bouger étape par étape. Clique sur{' '}
            <span className="font-black">Étape suivante</span> et observe ce qui se passe vraiment.
          </p>
        </div>

        <div
          className="mb-8 flex flex-wrap gap-2"
          role="group"
          aria-label="Filtrer par catégorie"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`rounded-lg border-[3px] border-ink px-4 py-2 font-mono text-sm font-black outline-none transition focus-visible:ring-4 focus-visible:ring-primary ${
                filter === f
                  ? 'bg-primary text-white shadow-hardSm'
                  : 'bg-white hover:-translate-y-0.5'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {visible.map((item) => (
            <ExampleCard key={item.id} item={item} />
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
        <div className="mx-auto flex max-w-7xl flex-col gap-2 font-mono font-black sm:flex-row sm:items-center sm:justify-between">
          <p>SupNum Data Structure Demo</p>
          <p>Frontend-only MVP</p>
        </div>
      </footer>
    </div>
  )
}
