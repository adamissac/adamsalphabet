import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Container from "../../components/Container";
import Section from "../../components/Section";
import Badge from "../../components/Badge";
import Breadcrumbs from "../../components/Breadcrumbs";
import Button from "../../components/Button";
import MathBackdrop from "../../components/MathBackdrop";
import ColorBand from "../../components/ColorBand";
import Reveal from "../../components/Reveal";
import VisualPanel from "../../components/VisualPanel";
import { DocSymbol, UnitSymbol } from "../../components/UnitSymbol";
import { UNITS, type Unit } from "../../data/units";

export const metadata: Metadata = {
  title: "Mathematics",
  description:
    "Grade 6 Mathematics — seven units of videos, worksheets, and quizzes aligned to Georgia DOE standards.",
};

export default function MathematicsHub() {
  const totalMinutes = UNITS.reduce((s, u) => s + u.estimatedMinutes, 0);
  const totalVideos = UNITS.reduce((s, u) => s + u.videos.length, 0);
  const totalWorksheets = UNITS.reduce((s, u) => s + u.worksheets.length, 0);

  return (
    <>
      {/* HERO — editorial, no card grid */}
      <section className="hero-surface relative overflow-hidden">
        <MathBackdrop variant="paper" density="dense" fadeEdges />
        <Container size="xl" className="relative pt-10 pb-16 sm:pb-20">
          <div className="flex justify-center">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Mathematics" }]} />
          </div>
          <Reveal className="mt-8 text-center max-w-3xl mx-auto" variant="up">
            <Badge tone="brand" className="mb-5">Grade 6 · GADOE aligned</Badge>
            <h1 className="h-display">
              The full Grade 6 curriculum, in one place.
            </h1>
            <p className="lede mt-5 mx-auto max-w-[52ch]">
              Each unit follows the same rhythm — watch a short video, try a worksheet,
              take a quick check at the end. Jump to any topic; there&apos;s no &ldquo;right&rdquo; order.
            </p>
            <div className="proof-row mt-8 justify-center">
              <span><strong>{UNITS.length}</strong>units</span>
              <span><strong>{totalVideos}</strong>videos</span>
              <span><strong>{totalWorksheets}</strong>worksheets</span>
              <span><strong>~{Math.round(totalMinutes / 60)}h</strong>total</span>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* UNIT LIBRARY — card stack */}
      <Section tone="muted" size="sm" containerSize="xl" decorated="muted" decoratedDensity="medium" decoratedContentSafe reveal={false}>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-8">
            <Reveal>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
                <div>
                  <p className="eyebrow">The library</p>
                  <h2 className="h2 mt-2">All seven units</h2>
                  <p className="small text-[var(--color-ink-muted)] mt-2 max-w-xl leading-relaxed">
                    Each row is a full unit — videos, practice, and a short quiz. Open whichever one
                    you&apos;re working on in class right now.
                  </p>
                </div>
                <p className="caption font-semibold text-[var(--color-brand-600)] shrink-0">
                  {UNITS.length} units · pick any to start
                </p>
              </div>
            </Reveal>

            <Reveal stagger className="grid gap-3 sm:gap-4">
              {UNITS.map((u, i) => (
                <UnitLibraryCard key={u.id} unit={u} index={i} />
              ))}
            </Reveal>
          </div>

          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-20 grid gap-4">
              <VisualPanel
                variant="compact"
                title="How each unit works"
                subtitle="Watch → practice → quiz. Same shape every time so you always know what's next."
                stats={[
                  { value: "1", label: "Watch" },
                  { value: "2", label: "Practice" },
                  { value: "3", label: "Quiz" },
                  { value: "4", label: "Done" },
                ]}
              />
              <Link
                href="/mathematics/curriculum-frameworks"
                className="card card-interactive group p-5 flex items-center gap-4 no-underline bg-[var(--color-surface)]"
              >
                <DocSymbol />
                <span className="min-w-0">
                  <span className="caption font-semibold uppercase tracking-wider text-[var(--color-brand-600)]">
                    Reference
                  </span>
                  <span className="block font-semibold text-[var(--color-ink)] mt-0.5">
                    GADOE frameworks
                  </span>
                </span>
                <span aria-hidden className="text-[var(--color-ink-soft)] group-hover:text-[var(--color-brand-600)] ml-auto">→</span>
              </Link>
            </div>
          </aside>
        </div>

        <Reveal delay={100} className="mt-8 lg:hidden">
          <Link
            href="/mathematics/curriculum-frameworks"
            className="card card-interactive group p-5 sm:p-6 flex items-center gap-5 no-underline bg-[var(--color-surface)]"
          >
            <DocSymbol className="flex-shrink-0" />
            <span className="min-w-0 flex-1">
              <span className="caption font-semibold tracking-wider uppercase text-[var(--color-brand-600)]">
                Reference
              </span>
              <span className="block font-display font-semibold text-base sm:text-lg mt-1">
                GADOE Curriculum Frameworks
              </span>
              <span className="block small text-[var(--color-ink-muted)] mt-1">
                Official Georgia DOE unit frameworks (PDF) — useful for parents and teachers.
              </span>
            </span>
            <span aria-hidden className="text-[var(--color-ink-soft)] group-hover:text-[var(--color-brand-600)] transition-colors text-xl">→</span>
          </Link>
        </Reveal>
      </Section>

      {/* HOW EACH UNIT IS BUILT — brand band */}
      <ColorBand variant="brand" containerSize="xl">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <p className="eyebrow text-[var(--color-accent-300)]">What&apos;s inside</p>
            <h2 className="h2 mt-3 text-white">A consistent shape, so you always know where to go next.</h2>
            <p className="small text-white/75 mt-4 max-w-sm leading-relaxed">
              Open any unit and you&apos;ll see the same four sections in the same order. Skim,
              skip, or follow it straight through — it&apos;s built to fit how you study.
            </p>
          </div>
          <ol className="lg:col-span-8 divide-y divide-white/15">
            {STEPS.map((s, i) => (
              <li key={s.title} className="py-5 grid grid-cols-[auto_1fr] gap-5 items-start">
                <span
                  aria-hidden
                  className="font-display text-2xl font-bold text-[var(--color-accent-300)] tabular-nums"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block font-display font-semibold text-lg text-white">{s.title}</span>
                  <span className="block small text-white/75 mt-1 leading-relaxed max-w-2xl">
                    {s.body}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </ColorBand>

      {/* CTA */}
      <ColorBand variant="dark" size="sm">
          <div className="grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8">
              <h2 className="font-display font-bold text-2xl sm:text-3xl leading-[1.2]">
                Need help on something specific?
              </h2>
              <p className="mt-2 text-white/75">Book a free 1:1 session with Adam — online or in-person.</p>
            </div>
            <div className="md:col-span-4 md:justify-self-end btn-stack-mobile md:flex-row md:justify-end">
              <Button href="/book" rightIcon={<Arrow />}>Book a class</Button>
            </div>
          </div>
      </ColorBand>
    </>
  );
}

const STEPS: { title: string; body: string }[] = [
  { title: "Learning objectives", body: "What you’ll know by the end — written in plain language, not standard codes." },
  { title: "Video walk-throughs", body: "Hand-picked videos from teachers students actually like. Multiple takes on each concept so you can find the one that lands." },
  { title: "Worksheets & practice", body: "Printable problem sets from Adam, plus curated links to external worksheet libraries." },
  { title: "Self-check quiz", body: "A short quiz at the end with explanations on every question. Retake it as many times as you want." },
];

function UnitLibraryCard({ unit: u, index }: { unit: Unit; index: number }) {
  return (
    <Link
      href={`/mathematics/${u.slug}`}
      className={[
        "group relative flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5",
        "p-5 sm:p-6 rounded-xl no-underline",
        "bg-[var(--color-surface)] border border-[var(--color-border)]",
        "shadow-[var(--shadow-card)]",
        "transition-[border-color,box-shadow,transform,background] duration-200 ease-out",
        "hover:border-[var(--color-brand-200)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-500)]",
      ].join(" ")}
      aria-label={`Open Unit ${u.number}: ${u.title}`}
    >
      <div className="flex items-center gap-4 sm:gap-5 shrink-0">
        <span
          aria-hidden
          className="font-display font-bold text-sm tabular-nums w-9 text-center text-[var(--color-brand-600)] group-hover:text-[var(--color-brand-700)] transition-colors"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <UnitSymbol symbol={u.icon} size="md" className="group-hover:bg-[var(--color-brand-100)] transition-colors" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="font-display font-semibold text-lg sm:text-xl text-[var(--color-ink)] group-hover:text-[var(--color-brand-700)] transition-colors leading-snug">
            {u.title}
          </span>
          <span className="caption font-semibold uppercase tracking-wider text-[var(--color-brand-600)] bg-[var(--color-brand-50)] px-2 py-0.5 rounded">
            Unit {u.number}
          </span>
        </div>
        <p className="small text-[var(--color-ink-muted)] mt-2 leading-relaxed line-clamp-2">
          {u.short}
        </p>
        <ul className="mt-3 flex flex-wrap gap-2 list-none p-0 m-0" aria-label="Unit contents">
          <StatPill>{u.videos.length} video{u.videos.length === 1 ? "" : "s"}</StatPill>
          {u.worksheets.length > 0 && (
            <StatPill>
              {u.worksheets.length} worksheet{u.worksheets.length === 1 ? "" : "s"}
            </StatPill>
          )}
          <StatPill>{u.quiz.length}-question quiz</StatPill>
          <StatPill>~{u.estimatedMinutes} min</StatPill>
        </ul>
      </div>

      <span
        aria-hidden
        className={[
          "self-end sm:self-center shrink-0 w-10 h-10 rounded-full grid place-items-center",
          "bg-[var(--color-surface-2)] text-[var(--color-ink-muted)] border border-[var(--color-border)]",
          "group-hover:bg-[var(--color-brand-600)] group-hover:border-[var(--color-brand-600)] group-hover:text-white",
          "transition-[background,border-color,color,transform] duration-200 group-hover:translate-x-0.5",
        ].join(" ")}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="13 6 19 12 13 18" />
        </svg>
      </span>
    </Link>
  );
}

function StatPill({ children }: { children: ReactNode }) {
  return (
    <li>
      <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium text-[var(--color-ink-muted)] bg-[var(--color-bg)] border border-[var(--color-border)]">
        {children}
      </span>
    </li>
  );
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </svg>
  );
}
