'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import type { Workout } from '@/lib/data';

type FitLogState = {
  plan: Workout[];
  saved: Workout[];
  done: number[];
  ready: boolean;
  addToPlan: (workout: Workout) => void;
  save: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;
  removeSaved: (id: number) => void;
  markDone: (id: number) => void;
  toast: (message: string) => void;
};

const FitLogContext = createContext<FitLogState | undefined>(undefined);

const STORAGE_KEYS = {
  plan: 'fitlog-plan',
  saved: 'fitlog-saved',
  done: 'fitlog-done',
} as const;

function load<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;

  try {
    const value = localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function FitLogProvider({ children }: { children: React.ReactNode }) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [done, setDone] = useState<number[]>([]);
  const [ready, setReady] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setPlan(load<Workout[]>(STORAGE_KEYS.plan, []));
    setSaved(load<Workout[]>(STORAGE_KEYS.saved, []));
    setDone(load<number[]>(STORAGE_KEYS.done, []));
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem(STORAGE_KEYS.plan, JSON.stringify(plan));
  }, [plan, ready]);

  useEffect(() => {
    if (ready) localStorage.setItem(STORAGE_KEYS.saved, JSON.stringify(saved));
  }, [saved, ready]);

  useEffect(() => {
    if (ready) localStorage.setItem(STORAGE_KEYS.done, JSON.stringify(done));
  }, [done, ready]);

  const toast = (nextMessage: string) => {
    setMessage(nextMessage);
    window.setTimeout(() => setMessage(''), 2200);
  };

  const value = useMemo<FitLogState>(() => ({
    plan,
    saved,
    done,
    ready,

    addToPlan: (workout) => {
      if (plan.some((item) => item.id === workout.id)) {
        toast('Already in today’s plan');
        return;
      }

      if (plan.length === 5) {
        toast('Today’s plan is full — 5 lifts max');
        return;
      }

      setPlan((current) => current.concat(workout));
      toast('Added to today’s plan');
    },

    save: (workout) => {
      if (saved.some((item) => item.id === workout.id)) {
        toast('Already saved');
        return;
      }

      setSaved((current) => current.concat(workout));
      toast('Saved for later');
    },

    removeFromPlan: (id) => {
      setPlan((current) => current.filter((item) => item.id !== id));
      toast('Removed from today’s plan');
    },

    removeSaved: (id) => {
      setSaved((current) => current.filter((item) => item.id !== id));
      toast('Removed from saved');
    },

    markDone: (id) => {
      setDone((current) => current.includes(id) ? current : [...current, id]);
      toast('Workout marked as done');
    },

    toast,
  }), [plan, saved, done, ready]);

  return (
    <FitLogContext.Provider value={value}>
      {children}
      {message && (
        <div
          role="status"
          aria-live="polite"
          className="fixed right-4 top-20 z-[100] flex items-center gap-2 rounded-xl border border-[#3d3d3d] bg-[#161616] px-4 py-3 text-sm font-bold text-white shadow-2xl"
        >
          <CheckCircle2 size={18} className="shrink-0 text-[#22c55e]" />
          {message}
        </div>
      )}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  const context = useContext(FitLogContext);
  if (!context) throw new Error('useFitLog must be inside FitLogProvider');
  return context;
}
