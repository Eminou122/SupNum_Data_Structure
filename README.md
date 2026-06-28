# SupNum_Data_Structure

Interactive demo website for SupNum second-year students learning data structures.

## Stack

- Vite
- React
- Tailwind CSS
- Frontend-only static deployment

## Current version

`v1.1.0-resources-downloads`

## Public URL

https://supnum-data-structure.vercel.app

Resources are served statically by Vercel from the `public/resources` folder.

## Features

- **Homepage**: roadmap, course cards, CTA to resources — `#accueil`
- **Chapter 3 course viewer**: interactive sorting chapter with Big-O explanations — `#/chapitre-3-tris`
- **SortingRace visualizer**: bubble sort vs merge sort, adjustable size
- **Chapter 3 quiz**: 10 questions in French, immediate feedback with explanations
- **Playground**: standalone SortingRace page — `#/playground`
- **Real TD/TP catalog**: 6 items, filters, expandable cards, real download links — `#/td-tp`
- **Examens placeholder**: honest coming-soon page — `#/examens`
- **Resources page**: all course/TD/TP files as direct download links — `#/ressources`
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
- Chapter 3: `http://localhost:5173/#/chapitre-3-tris`
- Playground: `http://localhost:5173/#/playground`
- TD/TP: `http://localhost:5173/#/td-tp`
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
