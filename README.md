# SupNum_Data_Structure

Interactive demo website for SupNum second-year students learning data structures.

## Stack

- Vite
- React
- Tailwind CSS
- Frontend-only static deployment

## Current gate

Gate 6: examens placeholder page.

### Features

- **Examens placeholder**: `src/components/ExamensPage.jsx`
  - Honest coming-soon page; no fake exam content
  - Route: `#/examens`
- **Real TD/TP catalog**: `src/components/TdTpPage.jsx` + `src/data/tdtp.js`
  - 6 items: 2 TDs + 3 available TPs + 1 coming-soon TP
  - Filter by type (Tout / TD / TP)
  - Expandable detail cards with themes, tasks, and C++ code skeleton previews
  - Route: `#/td-tp`
- **Chapter 3 viewer**: interactive sorting chapter with Big-O explanations
  - Route: `#/chapitre-3-tris`
- **Interactive sorting race**: bubble sort vs merge sort (`La Course des Algorithmes`)
  - Route: `#/playground`
- **Chapter 3 quiz**: 10 questions in French, immediate feedback with explanations
- Hash-based routing — no router dependency

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

## Public URL

https://supnum-data-structure.vercel.app

## Repository

https://github.com/Eminou122/SupNum_Data_Structure

## Vercel

Deploy as a static Vite app to the `eminouhaddou-1126` Vercel scope.

## Intentionally not built

- Real exam questions / correction engine / automatic grading
- Timer mode / score system
- Real downloadable file handling
- Code runner / compiler
- Backend / Database / Authentication
- Dashboard
- Dark mode
- PDF viewer or parser
- Fake solutions or model answers
