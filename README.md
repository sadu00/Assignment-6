# 🏋️ FitLog — Workout Library

> **Train with intent. Log every set.**

FitLog is a modern and responsive workout library web application designed to help users explore exercises, view detailed workout information, create a daily workout plan, save workouts, and track completed exercises.

The project provides a clean, dark-themed fitness interface that makes discovering and organizing workouts simple and convenient.

---

## ✨ Features

### 🏋️ 1. Workout Library

Explore a curated collection of workouts covering different major muscle groups.

Each workout provides useful information such as:

- Muscle groups
- Equipment
- Duration
- Calories burned
- Rating
- Workout image

---

### 🔄 2. Workout Sorting

Users can easily sort workouts according to different criteria.

Available sorting options include:

- **Duration**
- **Calories**
- **Rating**

This helps users quickly find workouts based on their preferred criteria.

---

### 📋 3. Detailed Workout Information

Users can click on any workout to view its complete details.

The workout details page includes:

- Workout description
- Difficulty level
- Equipment
- Sets and repetitions
- Step-by-step instructions
- Target muscle groups

---

### 📅 4. Today's Workout Plan

Users can create their own daily workout plan by adding exercises from the workout library.

The application allows users to:

- Add workouts to Today's Plan
- View planned workouts
- Remove workouts from the plan
- Manage up to **5 lifts** in the daily plan

---

### ⭐ 5. Save & Track Workouts

Users can save workouts for later and keep track of their workout progress.

They can:

- Save workouts
- Remove saved workouts
- Mark planned workouts as completed
- Keep their workout data after refreshing the browser

The application uses **LocalStorage** to persist the user's plan, saved workouts, and completion status.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **Next.js 15** | React framework and application structure |
| **React 19** | Building interactive user interfaces |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Styling and responsive design |
| **Lucide React** | Icons and UI elements |
| **LocalStorage** | Persistent browser-side workout data |
| **REST API / Fallback Data** | Loading workout information |

---

## 🎨 Design Highlights

- Modern dark-themed interface
- Responsive layout
- Clean workout cards
- Interactive navigation
- Smooth hover effects
- Fitness-focused visual design
- Mobile and desktop friendly

---

## 📂 Main Project Structure

```text
FitLog/
│
├── app/
│   ├── my-plan/
│   ├── workout/
│   │   └── [id]/
│   ├── page.tsx
│   └── layout.tsx
│
├── components/
│   ├── Library.tsx
│   ├── WorkoutCard.tsx
│   ├── WorkoutDetailClient.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ToastHost.tsx
│
├── context/
│   └── FitLogContext.tsx
│
├── lib/
│   └── data.ts
│
├── public/
│   └── assets/
│
└── README.md
