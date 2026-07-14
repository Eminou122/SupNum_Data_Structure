# SupNum_Data_Structure

Interactive educational website for SupNum second-year students learning data structures and algorithmic complexity.

## Version

`v1.4.0 — Interactive Examples Lab`

Current development gate: `v1.5 Gate 25 — Tests & Exams catalog foundation`.
This is not the final v1.5 release.

## Stack

- Vite
- React
- Tailwind CSS
- Frontend-only static deployment (no backend, no database, no auth)

## Public URL

https://supnum-data-structure.vercel.app

Resources are served statically by Vercel from the `public/resources` folder.

## Features

### Interactive chapters (4)

- **Chapter 1** — Intro & pseudo-code + PseudoTracer visualizer + quiz — `#/chapitre-1-intro`
- **Chapter 2** — Algorithmic complexity + ComplexityViz visualizer + quiz — `#/chapitre-2-complexite`
- **Chapter 3** — Sorting algorithms + SortingRace visualizer + quiz — `#/chapitre-3-tris`
- **Chapter 4** — Pointers & structures + MemoryViz visualizer + quiz — `#/chapitre-4-pointeurs-structures`

Each chapter includes an interactive visualizer and a short quiz.

### Guided practice (5 pages)

- **TD 01** — `#/pratique/td-01` — 5 exercises on pointers, recursion, complexity, linked lists
- **TD Révision** — `#/pratique/td-revision` — 4 exercises on arrays, search, merge, sorting
- **TP 1** — `#/pratique/tp-1-listes` — 5 exercises on singly linked lists in C++
- **TP 2/3** — `#/pratique/tp-2-3-piles-files` — 5 exercises on stacks and queues (linked list + array)
- **TP Tri** — `#/pratique/tp-tri` — 5 exercises on file I/O, selection sort, merge sort, time measurement

All practice pages: hints, hidden solutions, explanations, chapter links.
No auto-correction, no backend, no progress saving.

### Interactive Examples Lab (v1.4.0)

- **Examples catalog** — all 8 planned examples active — `#/exemples`
- **Sorting examples** — 4 active step-by-step examples
- **Tri sélection** — step-by-step bar chart visualizer on `{1,5,3,9,0}` — `#/exemples/tri-selection`
- **Tri insertion** — step-by-step visualizer on `{1,5,3,9,0}` — `#/exemples/tri-insertion`
- **Tri à bulles** — step-by-step visualizer on `{7,3,1,5,2}` — `#/exemples/tri-bulle`
- **Tri fusion** — step-by-step visualizer on `{38,27,43,3,9,82,10}` — `#/exemples/tri-fusion`
- **Liste chaînée — insertion en fin** — pointer-based step-by-step visualizer on `2 → 6 → 4 → 9` — `#/exemples/liste-insertion`
- **Pile — tableau** — LIFO step-by-step visualizer — `#/exemples/pile-tableau`
- **File — tableau** — FIFO step-by-step visualizer — `#/exemples/file-tableau`
- **ABR — insertion** — binary search tree insertion visualizer — `#/exemples/abr-insertion`

No code runner, no compiler, no backend, no progress saving. Watch-only step-by-step lessons.

All 8 planned examples are active in v1.4.0.

### Tests & Exams catalog (v1.5 Gate 25)

- **Catalog** — 4 original SupNum papers — `#/examens`
- **Tests** — 2 original papers
- **Exams** — 2 original papers
- **PDF sources** — `public/resources/exams/`

No correction pages are available yet, and no official solution is claimed.
There is no timer, scoring, backend, authentication, database, or progress saving.

### Other pages

- **Playground** — interactive SortingRace — `#/playground`
- **TD/TP catalog** — 6 items, filters, expandable cards, download links — `#/td-tp`
- **Tests & Exams** — 4 original papers with type filters and PDF links — `#/examens`
- **Resources** — all course/TD/TP files as direct download links — `#/ressources`

### Routing

Hash-based routing — no router dependency.

## Resource folder structure

```
public/resources/courses/   — Course slides and PDFs (Chapitres 1–4)
public/resources/tds/       — TD PDFs (TD-01, TD-Revision)
public/resources/tps/       — TP PDFs and C++ source skeletons
public/resources/exams/     — Original test and exam PDFs
```

## Filename mapping (renamed for web safety)

| Original | Web-safe name |
|---|---|
| `Chapitre2_Complexité.pptx` | `Chapitre2_Complexite.pptx` |
| `Chapitre2_Complexité_Khadhraoui.pdf` | `Chapitre2_Complexite_Khadhraoui.pdf` |
| `Chapitre3_Algorithmes de tri_KHADHRAOUI.pdf` | `Chapitre3_Algorithmes-de-tri_KHADHRAOUI.pdf` |
| `Chapitre4_Pointeurs et Structures de données_Khadhraoui.pdf` | `Chapitre4_Pointeurs-et-Structures-de-donnees_Khadhraoui.pdf` |
| `Chapitre4_Pointeurs et Structures de données_partie1_Khadhraoui.pdf` | `Chapitre4_Pointeurs-et-Structures-de-donnees_partie1_Khadhraoui.pdf` |
| `TD-Révision.pdf` | `TD-Revision.pdf` |
| `TP 1.pdf` | `TP-1.pdf` |
| `listechaine.txt.txt` | `listechaine.txt` |
| Tests `2024-2025.pdf` | `test-2024-2025.pdf` |
| Tests `2023-2024.pdf` | `test-2023-2024.pdf` |
| Exams `2024-2025.pdf` | `exam-2024-2025.pdf` |
| Exams `2023-2024 (1).pdf` | `exam-2023-2024.pdf` |

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

- Homepage: `http://localhost:5173`
- Chapter 1: `http://localhost:5173/#/chapitre-1-intro`
- Chapter 2: `http://localhost:5173/#/chapitre-2-complexite`
- Chapter 3: `http://localhost:5173/#/chapitre-3-tris`
- Chapter 4: `http://localhost:5173/#/chapitre-4-pointeurs-structures`
- Playground: `http://localhost:5173/#/playground`
- TD/TP: `http://localhost:5173/#/td-tp`
- TD 01 practice: `http://localhost:5173/#/pratique/td-01`
- TD Révision practice: `http://localhost:5173/#/pratique/td-revision`
- TP 1 practice: `http://localhost:5173/#/pratique/tp-1-listes`
- TP 2/3 practice: `http://localhost:5173/#/pratique/tp-2-3-piles-files`
- TP Tri practice: `http://localhost:5173/#/pratique/tp-tri`
- Examens: `http://localhost:5173/#/examens`
- Resources: `http://localhost:5173/#/ressources`

## Repository

https://github.com/Eminou122/SupNum_Data_Structure

## Vercel

Deploy as a static Vite app to the `eminouhaddou-1126` Vercel scope.

## Intentionally not built

- Backend / Database / Authentication
- Progress saving / scoring / auto-grading
- Upload system / Google Drive integration
- PDF parser / embedded PDF viewer
- Correction engine / code runner / compiler
- Dashboard / dark mode
