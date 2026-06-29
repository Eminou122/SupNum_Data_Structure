# SupNum_Data_Structure

Interactive demo website for SupNum second-year students learning data structures.

## Version

`v1.3 Gate 15 — TP 1 Listes chaînées guided practice`

## Stack

- Vite
- React
- Tailwind CSS
- Frontend-only static deployment (no backend, no database, no auth)

## Public URL

https://supnum-data-structure.vercel.app

Resources are served statically by Vercel from the `public/resources` folder.

## Features

- **Chapter 1** — interactive lesson + PseudoTracer + quiz — `#/chapitre-1-intro`
- **Chapter 2** — interactive lesson + ComplexityViz + quiz — `#/chapitre-2-complexite`
- **Chapter 3** — sorting lesson + SortingRace + quiz — `#/chapitre-3-tris`
- **Chapter 4** — interactive lesson + MemoryViz + quiz — `#/chapitre-4-pointeurs-structures`
- **Playground** — standalone SortingRace page — `#/playground`
- **TD/TP catalog** — 6 items, filters, expandable cards, real download links — `#/td-tp`
- **TD 01 guided practice** — first guided practice page — `#/pratique/td-01`
  - 5 exercises with hints, hidden solutions, and explanations
  - Chapter links to relevant interactive chapters
  - No auto-correction, no backend, no progress saving
- **TD Révision guided practice** — second guided practice page — `#/pratique/td-revision`
  - 4 exercises with hints, hidden solutions, and explanations
  - No auto-correction, no backend, no progress saving
- **TP 1 guided practice** — third guided practice page — `#/pratique/tp-1-listes`
  - 5 exercises with hints, hidden solutions, and explanations
  - No auto-correction, no backend, no progress saving
- **Examens** — honest coming-soon placeholder — `#/examens`
- **Resources** — all course/TD/TP files as direct download links — `#/ressources`
- Hash-based routing — no router dependency

## Resource folder structure

```
public/resources/courses/   — Course slides and PDFs (Chapitres 1–4)
public/resources/tds/       — TD PDFs (TD-01, TD-Revision)
public/resources/tps/       — TP PDFs and C++ source skeletons
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
- Examens: `http://localhost:5173/#/examens`
- Resources: `http://localhost:5173/#/ressources`

## Repository

https://github.com/Eminou122/SupNum_Data_Structure

## Vercel

Deploy as a static Vite app to the `eminouhaddou-1126` Vercel scope.

## Intentionally not built

- Backend / Database / Authentication
- Upload system / Google Drive integration
- PDF parser / embedded PDF viewer
- Correction engine / exam questions
- Code runner / compiler
- Dashboard
- Dark mode
- Fake solutions or model answers
