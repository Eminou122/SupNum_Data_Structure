# SupNum_Data_Structure

Interactive demo website for SupNum second-year students learning data structures.

## Stack

- Vite
- React
- Tailwind CSS
- Frontend-only static deployment

## Current gate

Gate 4: reusable quiz system + Chapter 3 quiz.

- Reusable quiz system: `src/components/Quiz.jsx` + `src/data/chapter3Quiz.js`
- Chapter 3 quiz: 10 questions in French, immediate feedback with explanations
- Interactive sorting race: bubble sort vs merge sort (`La Course des Algorithmes`)
- Hash-based routing (`#/chapitre-3-tris`, `#/playground`) — no router dependency
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

## Public URL

https://supnum-data-structure.vercel.app

## Repository

https://github.com/Eminou122/SupNum_Data_Structure

## Vercel

Deploy as a static Vite app to the `eminouhaddou-1126` Vercel scope.

## Intentionally not built

- TD/TP logic
- Exam logic
- Backend / Database / Authentication
- Dashboard
- Dark mode
