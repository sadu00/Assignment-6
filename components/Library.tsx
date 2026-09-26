'use client';

import Link from 'next/link';
import { ArrowDownUp, Clock3, Flame, Star } from 'lucide-react';
import { useMemo, useState, type ReactNode } from 'react';
import type { Workout } from '@/lib/data';

type SortMode = 'duration' | 'calories' | 'rating';

const SORTERS: Record<SortMode, (a: Workout, b: Workout) => number> = {
  duration: (a, b) => a.duration - b.duration,
  calories: (a, b) => a.caloriesBurned - b.caloriesBurned,
  rating: (a, b) => b.rating - a.rating,
};

export default function Library({ workouts }: { workouts: Workout[] }) {
  const [sortMode, setSortMode] = useState<SortMode>('duration');

  const visibleWorkouts = useMemo(
    () => [...workouts].sort(SORTERS[sortMode]),
    [workouts, sortMode],
  );

  return (
    <section id="library" className="px-4 pb-2 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <header className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold tracking-[0.2em] text-[#ccff00]">
              WORKOUT LIBRARY
            </p>
            <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
              THE LIBRARY
            </h2>
            <p className="mt-2 text-sm text-zinc-400 sm:text-base">
              Twelve lifts covering every major muscle group.
            </p>
          </div>

          <label className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Sort By
            </span>
            <span className="relative">
              <ArrowDownUp
                size={15}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
              />
              <select
                aria-label="Sort workouts"
                value={sortMode}
                onChange={(e) => setSortMode(e.target.value as SortMode)}
                className="appearance-none rounded-full border border-zinc-700 bg-zinc-900 py-2 pl-9 pr-9 text-sm font-medium text-white outline-none focus:border-[#ccff00]"
              >
                <option value="duration">Duration</option>
                <option value="calories">Calories</option>
                <option value="rating">Rating</option>
              </select>
            </span>
          </label>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleWorkouts.map((workout) => (
            <Link key={workout.id} href={`/workout/${workout.id}`} className="group block">
              <article className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition duration-300 hover:-translate-y-1 hover:border-zinc-600">
                <div className="relative h-[200px] overflow-hidden bg-zinc-900">
                  <img
                    src={workout.image}
                    alt={workout.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {workout.muscleGroups.map((group) => (
                      <span
                        key={group}
                        className="rounded-full bg-[#ccff00] px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-black"
                      >
                        {group}
                      </span>
                    ))}
                  </div>

                  <h3 className="display text-lg font-bold uppercase tracking-[0.45px] text-white">
                    {workout.name}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-500">{workout.equipment}</p>

                  <div className="mt-5 grid grid-cols-3 items-center border-t border-zinc-800 pt-4">
                    <Stat icon={<Clock3 size={14} />} value={`${workout.duration} min`} />
                    <Stat center icon={<Flame size={14} />} value={`${workout.caloriesBurned} kcal`} />
                    <Stat right icon={<Star size={14} />} value={workout.rating} />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({
  icon,
  value,
  center = false,
  right = false,
}: {
  icon: ReactNode;
  value: React.ReactNode;
  center?: boolean;
  right?: boolean;
}) {
  return (
    <div className={`flex items-center gap-1.5 text-xs text-[#ccff00] ${center ? 'justify-center' : ''} ${right ? 'justify-end' : ''}`}>
      {icon}
      <span className="text-zinc-300">{value}</span>
    </div>
  );
}
