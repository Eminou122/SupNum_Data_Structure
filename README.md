# SupNum_Data_Structure

Interactive demo website for SupNum second-year students learning data structures.

## Stack

- Vite
- React
- Tailwind CSS
- Frontend-only static deployment

## Demo status

Ready for presentation as a frontend-only MVP.

## Current gate

Gate 7: final polish.

### Features

- **Homepage**: roadmap, course cards, "Pourquoi ce site ?"
- **Chapter 3 course viewer**: interactive sorting chapter with Big-O explanations — `#/chapitre-3-tris`
- **SortingRace visualizer**: bubble sort vs merge sort, adjustable size — `#/playground`
- **Chapter 3 quiz**: 10 questions in French, immediate feedback with explanations
- **Playground**: standalone SortingRace page — `#/playground`
- **Real TD/TP catalog**: 6 items, filters, expandable cards with C++ skeleton previews — `#/td-tp`
- **Examens placeholder**: honest coming-soon page, no fake content — `#/examens`
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
