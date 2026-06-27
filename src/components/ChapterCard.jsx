export default function ChapterCard({ chapter }) {
  const isActive = chapter.status === 'actif'

  return (
    <article
      className={`flex min-h-48 flex-col justify-between rounded-xl border-[3px] border-ink p-5 shadow-hard transition ${
        isActive
          ? 'bg-accent hover:-translate-y-1 focus-within:-translate-y-1'
          : 'bg-white opacity-75'
      }`}
    >
      <div>
        <p className="font-mono text-sm font-bold uppercase">{chapter.number}</p>
        <h3 className="mt-3 text-2xl font-black leading-tight">{chapter.title}</h3>
      </div>

      {isActive ? (
        <a
          href={`#/${chapter.slug}`}
          className="mt-6 inline-flex w-fit rounded-lg border-[3px] border-ink bg-success px-4 py-2 font-mono text-sm font-black shadow-hardSm outline-none transition hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-primary"
        >
          Commencer →
        </a>
      ) : (
        <span className="mt-6 inline-flex w-fit rounded-lg border-[3px] border-ink bg-paper px-4 py-2 font-mono text-sm font-black">
          Bientôt
        </span>
      )}
    </article>
  )
}
