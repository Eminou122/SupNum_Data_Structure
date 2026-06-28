import { useState, useEffect, useRef } from 'react'

// --- Algorithm frame precomputation ---

function bubbleFrames(arr) {
  const a = [...arr]
  const frames = [{ arr: [...a], ops: 0, comparing: [] }]
  let ops = 0
  const n = a.length
  for (let i = 0; i < n - 1; i++) {
    let swapped = false
    for (let j = 0; j < n - 1 - i; j++) {
      ops++
      if (a[j] > a[j + 1]) {
        ;[a[j], a[j + 1]] = [a[j + 1], a[j]]
        swapped = true
      }
      frames.push({ arr: [...a], ops, comparing: [j, j + 1] })
    }
    if (!swapped) break
  }
  frames.push({ arr: [...a], ops, comparing: [] })
  return frames
}

function mergeFrames(arr) {
  const a = [...arr]
  const frames = [{ arr: [...a], ops: 0, comparing: [] }]
  let ops = 0

  function merge(arr, l, m, r) {
    const left = arr.slice(l, m + 1)
    const right = arr.slice(m + 1, r + 1)
    let i = 0, j = 0, k = l
    while (i < left.length && j < right.length) {
      ops++
      if (left[i] <= right[j]) { arr[k++] = left[i++] }
      else { arr[k++] = right[j++] }
      frames.push({ arr: [...arr], ops, comparing: [k - 1] })
    }
    while (i < left.length) { arr[k++] = left[i++]; frames.push({ arr: [...arr], ops, comparing: [k - 1] }) }
    while (j < right.length) { arr[k++] = right[j++]; frames.push({ arr: [...arr], ops, comparing: [k - 1] }) }
  }

  function sort(arr, l, r) {
    if (l >= r) return
    const m = Math.floor((l + r) / 2)
    sort(arr, l, m)
    sort(arr, m + 1, r)
    merge(arr, l, m, r)
  }

  sort(a, 0, a.length - 1)
  frames.push({ arr: [...a], ops, comparing: [] })
  return frames
}

// ponytail: deterministic shuffle via seeded LCG — no extra dep needed
function shuffle(arr) {
  const a = [...arr]
  let seed = Date.now() % 999983
  const rand = () => { seed = (seed * 16807 + 0) % 2147483647; return seed / 2147483647 }
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function makeArray(size) {
  return shuffle(Array.from({ length: size }, (_, i) => i + 1))
}

const SPEEDS = { lent: 120, normal: 40, rapide: 10 }

// --- Sub-components ---

function Bar({ value, max, isComparing }) {
  const pct = Math.round((value / max) * 100)
  return (
    <div
      role="presentation"
      style={{ height: `${pct}%` }}
      className={`w-full rounded-t transition-[height] duration-75 ${
        isComparing
          ? 'bg-coral border-[2px] border-ink'
          : 'bg-primary border-[2px] border-ink'
      }`}
    />
  )
}

function Lane({ name, badge, frame, status, totalOps }) {
  const arr = frame?.arr ?? []
  const comparing = new Set(frame?.comparing ?? [])
  const ops = frame?.ops ?? 0
  const max = arr.length

  const statusLabel = status === 'idle' ? 'prêt' : status === 'running' ? 'en cours' : 'terminé'
  const statusColor =
    status === 'idle' ? 'bg-white' : status === 'running' ? 'bg-accent' : 'bg-success'

  return (
    <article className="flex flex-col gap-3 rounded-xl border-[3px] border-ink bg-white p-5 shadow-hard flex-1 min-w-0">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <h3 className="font-mono text-xl font-black">{name}</h3>
        <span className="rounded-lg border-[3px] border-ink bg-ink px-3 py-1 font-mono text-sm font-black text-white">
          {badge}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span
          className={`rounded-lg border-[3px] border-ink px-3 py-1 font-mono text-xs font-black ${statusColor}`}
        >
          {statusLabel}
        </span>
        <span className="font-mono text-xs font-black text-ink/60">
          {ops.toLocaleString()} opérations
          {totalOps > 0 && status === 'done' && ` / ${totalOps.toLocaleString()} total`}
        </span>
      </div>

      {/* Bar chart */}
      <div
        className="flex h-40 items-end gap-[2px] rounded-lg border-[3px] border-ink bg-paper p-2"
        aria-label={`Tableau de ${max} valeurs pour ${name}`}
        role="img"
      >
        {arr.map((v, i) => (
          <Bar key={i} value={v} max={max} isComparing={comparing.has(i)} />
        ))}
      </div>

      <p className="sr-only">
        {name}: {arr.join(', ')}
      </p>
    </article>
  )
}

// --- Main component ---

export default function SortingRace() {
  const [size, setSize] = useState(20)
  const [speedKey, setSpeedKey] = useState('normal')
  const [race, setRace] = useState(() => {
    const arr = makeArray(20)
    return { initArr: arr, bFrames: bubbleFrames(arr), mFrames: mergeFrames(arr) }
  })
  const { initArr, bFrames, mFrames } = race

  const [bIdx, setBIdx] = useState(0)
  const [mIdx, setMIdx] = useState(0)
  const [bStatus, setBStatus] = useState('idle')
  const [mStatus, setMStatus] = useState('idle')
  const [showResult, setShowResult] = useState(false)

  const bTimer = useRef(null)
  const mTimer = useRef(null)

  function clearTimers() {
    clearInterval(bTimer.current)
    clearInterval(mTimer.current)
  }

  useEffect(() => () => clearTimers(), [])

  function buildFromArr(arr) {
    setRace({ initArr: arr, bFrames: bubbleFrames(arr), mFrames: mergeFrames(arr) })
    setBIdx(0)
    setMIdx(0)
  }

  function handleShuffle() {
    clearTimers()
    setBStatus('idle')
    setMStatus('idle')
    setShowResult(false)
    buildFromArr(makeArray(size))
  }

  function handleReset() {
    clearTimers()
    setBStatus('idle')
    setMStatus('idle')
    setShowResult(false)
    buildFromArr(initArr)
  }

  function handleStart() {
    if (bStatus === 'running' || mStatus === 'running') return
    clearTimers()
    setShowResult(false)
    setBStatus('running')
    setMStatus('running')

    const delay = SPEEDS[speedKey]

    let bi = bIdx, mi = mIdx

    bTimer.current = setInterval(() => {
      bi++
      setBIdx(bi)
      if (bi >= bFrames.length - 1) {
        clearInterval(bTimer.current)
        setBStatus('done')
        setBIdx(bFrames.length - 1)
      }
    }, delay)

    mTimer.current = setInterval(() => {
      mi++
      setMIdx(mi)
      if (mi >= mFrames.length - 1) {
        clearInterval(mTimer.current)
        setMStatus('done')
        setMIdx(mFrames.length - 1)
        setShowResult(true)
      }
    }, delay)
  }

  function handleSizeChange(e) {
    const s = Number(e.target.value)
    clearTimers()
    setBStatus('idle')
    setMStatus('idle')
    setShowResult(false)
    setSize(s)
    buildFromArr(makeArray(s))
  }

  const isRunning = bStatus === 'running' || mStatus === 'running'
  const isDone = bStatus === 'done' && mStatus === 'done'

  const bFinalOps = bFrames[bFrames.length - 1]?.ops ?? 0
  const mFinalOps = mFrames[mFrames.length - 1]?.ops ?? 0

  return (
    <section className="rounded-xl border-[3px] border-ink bg-paper p-6 shadow-hard">
      <h2 className="font-mono text-3xl font-black">La Course des Algorithmes</h2>
      <p className="mt-2 font-semibold text-base leading-7">
        Même tableau au départ, deux stratégies différentes. Regarde le compteur d'opérations exploser.
      </p>

      {/* Controls */}
      <div className="mt-5 flex flex-wrap gap-4 items-end">
        <div className="flex flex-col gap-1">
          <label htmlFor="size-slider" className="font-mono text-xs font-black uppercase">
            Taille : {size}
          </label>
          <input
            id="size-slider"
            type="range"
            min="8"
            max="50"
            value={size}
            onChange={handleSizeChange}
            disabled={isRunning}
            className="w-36 accent-primary cursor-pointer disabled:opacity-50"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="speed-select" className="font-mono text-xs font-black uppercase">
            Vitesse
          </label>
          <select
            id="speed-select"
            value={speedKey}
            onChange={(e) => setSpeedKey(e.target.value)}
            disabled={isRunning}
            className="rounded-lg border-[3px] border-ink bg-white px-3 py-2 font-mono text-sm font-black shadow-hardSm outline-none focus-visible:ring-4 focus-visible:ring-primary disabled:opacity-50 cursor-pointer"
          >
            <option value="lent">lent</option>
            <option value="normal">normal</option>
            <option value="rapide">rapide</option>
          </select>
        </div>

        <div className="flex gap-2 flex-wrap">
          <button
            type="button"
            onClick={handleShuffle}
            disabled={isRunning}
            className="rounded-lg border-[3px] border-ink bg-accent px-4 py-2 font-mono text-sm font-black shadow-hardSm outline-none transition hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-primary disabled:opacity-50 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
          >
            Mélanger
          </button>
          <button
            type="button"
            onClick={handleStart}
            disabled={isRunning || isDone}
            className="rounded-lg border-[3px] border-ink bg-success px-4 py-2 font-mono text-sm font-black shadow-hardSm outline-none transition hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-primary disabled:opacity-50 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
          >
            Démarrer la course
          </button>
          <button
            type="button"
            onClick={handleReset}
            disabled={isRunning}
            className="rounded-lg border-[3px] border-ink bg-white px-4 py-2 font-mono text-sm font-black shadow-hardSm outline-none transition hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-primary disabled:opacity-50 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
          >
            Réinitialiser
          </button>
        </div>
      </div>

      {/* Lanes */}
      <div className="mt-6 flex flex-col gap-4 sm:flex-row">
        <Lane
          name="Tri à bulles"
          badge="O(n²)"
          frame={bFrames[bIdx]}
          status={bStatus}
          totalOps={bFinalOps}
        />
        <Lane
          name="Tri par fusion"
          badge="O(n log n)"
          frame={mFrames[mIdx]}
          status={mStatus}
          totalOps={mFinalOps}
        />
      </div>

      {/* Result explanation */}
      {showResult && (
        <div className="mt-6 rounded-xl border-[3px] border-ink bg-coral p-5 shadow-hard" role="status" aria-live="polite">
          <p className="font-mono text-lg font-black">Résultat de la course</p>
          <p className="mt-2 font-semibold leading-7">
            Le tri à bulles a effectué{' '}
            <strong>{bFinalOps.toLocaleString()} opérations</strong> — il
            compare chaque paire de voisins encore et encore.{' '}
            Le tri par fusion n'en a fait que{' '}
            <strong>{mFinalOps.toLocaleString()}</strong> — il divise le
            tableau, trie chaque moitié, puis fusionne. À taille n=
            {size}, la différence est déjà visible ; à n=1 000 000, c'est
            astronomique.
          </p>
        </div>
      )}
    </section>
  )
}
