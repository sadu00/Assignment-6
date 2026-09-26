# 🏋️ FitLog — Workout Library

<p align="center">
  <strong>Train with intent. Log every set.</strong>
</p>

FitLog is a modern, responsive workout library and workout planning web application. It allows users to explore different exercises, view detailed workout information, create a personalized daily workout plan, save workouts for later, and track completed workouts.

The application is designed with a clean and modern dark-themed interface to provide a simple and engaging workout management experience.

---

## 🚀 Technologies Used

- **Next.js 15** — Used as the main React framework and application structure.
- **React 19** — Used to build reusable and interactive UI components.
- **TypeScript** — Used for type-safe and maintainable development.
- **Tailwind CSS** — Used for responsive styling and modern UI design.
- **Lucide React** — Used for icons throughout the application.
- **LocalStorage** — Used to persist the user's workout plan, saved workouts, and completed workout status.
- **REST API / Fallback Data** — Used for retrieving and displaying workout information.

---

## ✨ Key Features

### 1. 🏋️ Workout Library

FitLog provides a curated workout library containing exercises for different major muscle groups.

Each workout card displays important information such as:

- Workout name
- Target muscle groups
- Equipment
- Duration
- Calories burned
- Rating
- Workout image

Users can easily browse the available workouts from the main library.

---

### 2. 🔄 Workout Sorting

The workout library includes a sorting system that allows users to organize workouts based on different criteria.

Users can sort workouts by:

- **Duration**
- **Calories burned**
- **Rating**

This makes it easier to find suitable workouts quickly.

---

### 3. 📖 Detailed Workout Information

Users can select any workout from the library to view its detailed information.

The workout details page provides:

- Workout description
- Target muscle groups
- Equipment
- Difficulty level
- Sets and repetitions
- Step-by-step instructions

This gives users a better understanding of how each exercise should be performed.

---

### 4. 📅 Today's Workout Plan

FitLog allows users to create and manage a personalized daily workout plan.

Users can:

- Add workouts to Today's Plan
- View their planned workouts
- Remove workouts from the plan
- Manage up to **5 lifts** in the daily plan

This feature helps users organize their workout session in one place.

---

### 5. ⭐ Save & Track Workouts

Users can save workouts that they want to access later and track their workout progress.

The application allows users to:

- Save workouts
- Remove saved workouts
- Mark planned workouts as completed
- Keep their workout data after refreshing the browser

The application uses **LocalStorage** to preserve the user's plan, saved workouts, and completion status.

---

## 🎨 User Interface

FitLog uses a modern fitness-focused interface with:

- Dark-themed design
- Responsive layout
- Clean workout cards
- Interactive navigation
- Smooth hover effects
- Clear typography
- Responsive desktop and mobile layouts

The interface is designed to keep the workout information easy to understand and navigate.

---

## 📂 Project Structure

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
