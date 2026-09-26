# FitLog — Workout Library

FitLog is a responsive workout-library and daily-training planner built with Next.js. It lets users browse exercises, inspect workout details, build a five-lift daily plan, save workouts, and track completed lifts.

## Technologies

- Next.js 15 App Router
- React 19 + TypeScript
- Tailwind CSS
- Lucide React
- React Context API
- Browser localStorage
- FitLog REST API with a local fallback dataset

## Key Features

1. **Responsive workout library** — exercise cards adapt to mobile, tablet, and desktop layouts.
2. **Workout detail pages** — equipment, difficulty, sets, reps, duration, calories, rating, and instructions are shown for each lift.
3. **Today's Plan** — add up to five exercises and view live exercise, minute, and calorie totals.
4. **Saved workouts** — keep exercises for later from the detail page and access them from My Plan.
5. **Workout actions** — mark planned exercises as done, remove items, and receive toast feedback.
6. **Sorting** — sort the library and My Plan lists by duration, calories, or rating.
7. **Persistent state** — plan, saved items, and completed workouts survive browser reloads through localStorage.
8. **404 handling and loading states** — invalid routes and asynchronous workout loading have dedicated UI states.

## API

Primary endpoint:

`https://api.abcz.workers.dev/api/fitlog`

Alternative endpoint:

`https://api.api-store.workers.dev/api/fitlog`

If the API cannot be reached, FitLog uses the included workout dataset so the deployed UI remains usable.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
npm start
```
