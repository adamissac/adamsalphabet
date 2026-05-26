"use client";

import { useCallback, useEffect, useState } from "react";

export type ProgressItem = { id: string; label: string };

export type UnitProgressState = {
  unitId: string;
  completed: Record<string, boolean>;
};

const storageKey = (unitId: string) => `aa.progress.${unitId}`;

function read(unitId: string): UnitProgressState {
  if (typeof window === "undefined") return { unitId, completed: {} };
  try {
    const raw = window.localStorage.getItem(storageKey(unitId));
    if (!raw) return { unitId, completed: {} };
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object" && parsed.completed) {
      return { unitId, completed: parsed.completed };
    }
  } catch {}
  return { unitId, completed: {} };
}

function write(state: UnitProgressState) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(storageKey(state.unitId), JSON.stringify(state));
    window.dispatchEvent(
      new CustomEvent("aa:progress", { detail: { unitId: state.unitId } })
    );
  } catch {}
}

export function useUnitProgress(unitId: string, items: ProgressItem[]) {
  const [state, setState] = useState<UnitProgressState>({ unitId, completed: {} });
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setState(read(unitId));
    setHydrated(true);
  }, [unitId]);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail?.unitId !== unitId) return;
      setState(read(unitId));
    };
    window.addEventListener("aa:progress", handler);
    return () => window.removeEventListener("aa:progress", handler);
  }, [unitId]);

  const total = items.length;
  const completedCount = items.filter((it) => state.completed[it.id]).length;
  const percent = total > 0 ? Math.round((completedCount / total) * 100) : 0;

  const toggle = useCallback(
    (id: string) => {
      setState((s) => {
        const next = {
          unitId,
          completed: { ...s.completed, [id]: !s.completed[id] },
        };
        if (!next.completed[id]) delete next.completed[id];
        write(next);
        return next;
      });
    },
    [unitId]
  );

  const reset = useCallback(() => {
    const next = { unitId, completed: {} };
    write(next);
    setState(next);
  }, [unitId]);

  const isComplete = (id: string) => !!state.completed[id];

  return { hydrated, percent, completedCount, total, toggle, reset, isComplete };
}
