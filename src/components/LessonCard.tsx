"use client";

import { useState } from "react";
import Card from "./Card";
import type { UnitLesson } from "../data/unitLessons";

export default function LessonCard({
  lesson,
  index,
}: {
  lesson: UnitLesson;
  index: number;
}) {
  const [expanded, setExpanded] = useState(index === 1);

  return (
    <Card className="overflow-hidden">
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className="w-full flex items-start gap-4 p-5 sm:p-6 text-left hover:bg-[var(--color-surface-2)]/50 transition-colors min-h-[44px]"
      >
        <span
          aria-hidden
          className="w-9 h-9 rounded-full bg-[var(--color-brand-500)] text-white grid place-items-center font-display font-bold text-sm flex-shrink-0"
        >
          {index}
        </span>
        <span className="flex-1 min-w-0">
          <span className="font-display font-semibold text-lg text-[var(--color-ink)] leading-snug">
            {lesson.title}
          </span>
          <span className="block small text-[var(--color-ink-muted)] mt-1 leading-relaxed">
            {lesson.summary}
          </span>
        </span>
        <span
          aria-hidden
          className={[
            "mt-1 text-[var(--color-ink-soft)] transition-transform flex-shrink-0",
            expanded ? "rotate-180" : "",
          ].join(" ")}
        >
          <Chevron />
        </span>
      </button>

      {expanded && (
        <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-[var(--color-border)] animate-fade-up">
          <div className="pt-4 grid gap-3">
            {lesson.body.map((para, i) => (
              <p key={i} className="small sm:body text-[var(--color-ink)] leading-relaxed">
                {para}
              </p>
            ))}

            {lesson.tryIt && (
              <div className="rounded-md p-3.5 sm:p-4 bg-[var(--color-brand-50)] border border-[var(--color-brand-100)]">
                <p className="caption font-semibold uppercase tracking-wider text-[var(--color-brand-700)]">
                  Try it
                </p>
                <p className="small text-[var(--color-ink)] mt-1 leading-relaxed">{lesson.tryIt}</p>
              </div>
            )}

            {lesson.tip && (
              <p className="caption sm:small text-[var(--color-ink-muted)] leading-relaxed">
                <span className="font-semibold text-[var(--color-accent-700)]">Tip: </span>
                {lesson.tip}
              </p>
            )}
          </div>
        </div>
      )}
    </Card>
  );
}

function Chevron() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
