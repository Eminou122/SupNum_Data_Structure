import { useState } from 'react'
import { tdtpItems } from '../data/tdtp.js'

const FILTERS = ['Tout', 'TD', 'TP']
const MAX_CHIPS = 5

function TypeBadge({ type }) {
  const cls =
    type === 'TD'
      ? 'bg-primary text-white'
      : 'bg-coral text-ink'
  return (
    <span className={`inline-flex rounded-md border-[3px] border-ink px-2 py-0.5 font-mono text-xs font-black shadow-hardSm ${cls}`}>
      {type}
    </span>
  )
}

function StatusBadge({ status }) {
  return status === 'available' ? (
    <span className="inline-flex rounded-md border-[3px] border-ink bg-success px-2 py-0.5 font-mono text-xs font-black shadow-hardSm">
      Disponible
    </span>
  ) : (
    <span className="inline-flex rounded-md border-[3px] border-ink bg-paper px-2 py-0.5 font-mono text-xs font-black text-ink/50">
      Bientôt
    </span>
  )
}

function ThemeChips({ themes }) {
  const visible = themes.slice(0, MAX_CHIPS)
  const extra = themes.length - MAX_CHIPS
  return (
    <div className="flex flex-wrap gap-1.5">
      {visible.map((t) => (
        <span
          key={t}
          className="rounded-md border-2 border-ink bg-accent px-2 py-0.5 font-mono text-xs font-bold"
        >
          {t}
        </span>
      ))}
      {extra > 0 && (
        <span className="rounded-md border-2 border-ink bg-paper px-2 py-0.5 font-mono text-xs font-bold">
          +{extra}
        </span>
      )}
    </div>
  )
}

function TdTpCard({ item, expanded, onToggle }) {
  const isComingSoon = item.status === 'coming-soon'

  return (
    <article
      className={`rounded-xl border-[3px] border-ink bg-white shadow-hard transition-opacity ${isComingSoon ? 'opacity-60' : ''}`}
    >
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2">
          <TypeBadge type={item.type} />
          <StatusBadge status={item.status} />
        </div>

        <h3 className="mt-3 font-mono text-xl font-black leading-tight">
          {item.title}
        </h3>
        <p className="mt-0.5 font-mono text-sm font-bold text-ink/60">{item.topic}</p>
        <p className="mt-3 text-sm font-semibold leading-relaxed">{item.description}</p>

        <div className="mt-3">
          <ThemeChips themes={item.themes} />
        </div>

        <div className="mt-3 flex flex-wrap gap-2 font-mono text-xs">
          <span className="rounded border-2 border-ink/30 px-2 py-0.5 text-ink/50">
            Source : {item.sourceFile}
          </span>
          {item.attachments.map((a) => (
            <span
              key={a.filename}
              className="rounded border-2 border-ink bg-paper px-2 py-0.5 font-bold"
            >
              Squelette {a.language}
            </span>
          ))}
        </div>

        <div className="mt-4">
          {isComingSoon ? (
            <button
              type="button"
              disabled
              className="cursor-not-allowed rounded-lg border-[3px] border-ink bg-paper px-4 py-2 font-mono text-sm font-black opacity-50"
            >
              Bientôt
            </button>
          ) : (
            <button
              type="button"
              onClick={onToggle}
              className="rounded-lg border-[3px] border-ink bg-accent px-4 py-2 font-mono text-sm font-black shadow-hardSm outline-none transition hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-primary"
              aria-expanded={expanded}
            >
              {expanded ? 'Masquer les détails ↑' : 'Voir les détails ↓'}
            </button>
          )}
        </div>
      </div>

      {expanded && !isComingSoon && (
        <div className="border-t-[3px] border-ink bg-paper p-5">
          <section>
            <h4 className="font-mono text-sm font-black uppercase tracking-wider">Thèmes</h4>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {item.themes.map((t) => (
                <span
                  key={t}
                  className="rounded-md border-2 border-ink bg-accent px-2 py-0.5 font-mono text-xs font-bold"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>

          <section className="mt-5">
            <h4 className="font-mono text-sm font-black uppercase tracking-wider">Exercices</h4>
            <ul className="mt-2 space-y-1.5">
              {item.tasks.map((task, i) => (
                <li key={i} className="flex gap-2 text-sm font-semibold leading-snug">
                  <span className="mt-0.5 shrink-0 font-mono text-xs font-black text-primary">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </section>

          {item.attachments.length > 0 && (
            <section className="mt-5">
              <h4 className="font-mono text-sm font-black uppercase tracking-wider">Fichiers joints</h4>
              <ul className="mt-2 space-y-2">
                {item.attachments.map((a) => (
                  <li
                    key={a.filename}
                    className="flex items-center justify-between rounded-lg border-[3px] border-ink bg-white p-3"
                  >
                    <div>
                      <p className="font-mono text-sm font-black">{a.filename}</p>
                      <p className="font-mono text-xs text-ink/50">{a.label} • {a.language}</p>
                    </div>
                    <span className="rounded-md border-2 border-ink/30 px-3 py-1.5 font-mono text-xs font-bold text-ink/40">
                      Téléchargement bientôt disponible
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {item.codePreview && (
            <section className="mt-5">
              <h4 className="font-mono text-sm font-black uppercase tracking-wider">Aperçu du squelette</h4>
              <pre className="mt-2 overflow-x-auto rounded-lg border-[3px] border-ink bg-ink p-4 font-mono text-xs leading-relaxed text-white">
                <code>{item.codePreview}</code>
              </pre>
            </section>
          )}
        </div>
      )}
    </article>
  )
}

export default function TdTpPage() {
  const [filter, setFilter] = useState('Tout')
  const [expandedId, setExpandedId] = useState(null)

  const visible =
    filter === 'Tout' ? tdtpItems : tdtpItems.filter((i) => i.type === filter)

  function toggle(id) {
    setExpandedId((prev) => (prev === id ? null : id))
  }

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
            Gate 5 • catalogue réel
          </span>
          <h1 className="mt-4 font-mono text-4xl font-black leading-tight sm:text-5xl">
            TD / TP
          </h1>
          <p className="mt-3 max-w-2xl text-lg font-semibold leading-8">
            Exercices et travaux pratiques du cours
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filtrer par type">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => {
                setFilter(f)
                setExpandedId(null)
              }}
              className={`rounded-lg border-[3px] border-ink px-4 py-2 font-mono text-sm font-black outline-none transition focus-visible:ring-4 focus-visible:ring-primary ${
                filter === f
                  ? 'bg-primary text-white shadow-hardSm'
                  : 'bg-white hover:-translate-y-0.5'
              }`}
              aria-pressed={filter === f}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {visible.map((item) => (
            <TdTpCard
              key={item.id}
              item={item}
              expanded={expandedId === item.id}
              onToggle={() => toggle(item.id)}
            />
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
