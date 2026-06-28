# SupNum_Data_Structure

Interactive demo website for SupNum second-year students learning data structures.

## Stack

- Vite
- React
- Tailwind CSS
- Frontend-only static deployment

## Current gate

Gate 5: real TD/TP catalog page.

- **Real TD/TP catalog**: `src/components/TdTpPage.jsx` + `src/data/tdtp.js`
  - 6 items: 2 TDs + 3 available TPs + 1 coming-soon TP
  - Filter by type (Tout / TD / TP)
  - Expandable detail cards with themes, tasks, and C++ code skeleton previews
  - Route: `#/td-tp`
- Reusable quiz system: `src/components/Quiz.jsx` + `src/data/chapter3Quiz.js`
- Chapter 3 quiz: 10 questions in French, immediate feedback with explanations
- Interactive sorting race: bubble sort vs merge sort (`La Course des Algorithmes`)
- Hash-based routing — no router dependency
- Chapter 3 content: sélection, insertion, bulles, fusion
- SortingRace + Quiz embedded in Chapter 3; SortingRace also at `#/playground`

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

## Public URL

https://supnum-data-structure.vercel.app

## Repository

https://github.com/Eminou122/SupNum_Data_Structure

## Vercel

Deploy as a static Vite app to the `eminouhaddou-1126` Vercel scope.

## Intentionally not built

- Correction engine / automatic grading
- Real downloadable file handling
- Code runner / compiler
- Exam system
- Backend / Database / Authentication
- Dashboard
- Dark mode
- PDF viewer or parser
- Fake solutions or model answers
