import type { Metadata } from "next";

import { notFound } from "next/navigation";

import Link from "next/link";

import Section from "../../../components/Section";

import Card from "../../../components/Card";

import Badge from "../../../components/Badge";

import Breadcrumbs from "../../../components/Breadcrumbs";

import VideoEmbed from "../../../components/VideoEmbed";

import WorksheetCard from "../../../components/WorksheetCard";

import ResourceLinkCard from "../../../components/ResourceLinkCard";

import Quiz from "../../../components/Quiz";

import LessonCard from "../../../components/LessonCard";

import UnitStudyPanel from "../../../components/UnitStudyPanel";

import ColorBand from "../../../components/ColorBand";

import Reveal from "../../../components/Reveal";

import MathBackdrop from "../../../components/MathBackdrop";

import { UnitSymbol } from "../../../components/UnitSymbol";

import Container from "../../../components/Container";

import { UNITS, getUnit, getUnitIndex } from "../../../data/units";

import { getUnitLessons } from "../../../data/unitLessons";



type Params = { unit: string };



export function generateStaticParams() {

  return UNITS.map((u) => ({ unit: u.slug }));

}



export async function generateMetadata({

  params,

}: {

  params: Promise<Params>;

}): Promise<Metadata> {

  const { unit } = await params;

  const u = getUnit(unit);

  if (!u) return { title: "Unit not found" };

  return {

    title: `Unit ${u.number} · ${u.title}`,

    description: u.description,

  };

}



export default async function UnitPage({ params }: { params: Promise<Params> }) {

  const { unit } = await params;

  const u = getUnit(unit);

  if (!u) notFound();



  const lessons = getUnitLessons(u.id);

  const idx = getUnitIndex(unit);

  const prev = idx > 0 ? UNITS[idx - 1] : null;

  const next = idx < UNITS.length - 1 ? UNITS[idx + 1] : null;



  const progressItems = [

    ...(lessons.length > 0 ? [{ id: "lessons", label: "Read the written lessons" }] : []),

    { id: "objectives", label: "Review learning objectives" },

    ...(u.videos.length > 0 ? [{ id: "videos", label: "Watch the video walkthroughs" }] : []),

    ...(u.worksheets.length > 0 ? [{ id: "worksheets", label: "Try the worksheets" }] : []),

    ...(u.externalPractice.length > 0 ? [{ id: "extra", label: "Explore extra practice" }] : []),

    ...(u.quiz.length > 0 ? [{ id: "quiz", label: "Pass the unit quiz" }] : []),

  ];



  const navLinks = [

    ...(lessons.length > 0 ? [{ href: "#lessons", label: "Written lessons" }] : []),

    { href: "#objectives", label: "Objectives & vocabulary" },

    ...(u.videos.length > 0 ? [{ href: "#videos", label: "Video walkthroughs" }] : []),

    ...(u.worksheets.length > 0 ? [{ href: "#worksheets", label: "Worksheets" }] : []),

    ...(u.externalPractice.length > 0 ? [{ href: "#extra", label: "Extra practice" }] : []),

    ...(u.quiz.length > 0 ? [{ href: "#quiz", label: "Unit quiz" }] : []),

  ];



  return (

    <>

      {/* HERO */}

      <section className="hero-surface relative overflow-hidden">

        <MathBackdrop variant="paper" density="dense" fadeEdges />

        <Container size="xl" className="relative pt-10 pb-14 sm:pb-16">

          <Breadcrumbs

            items={[

              { label: "Home", href: "/" },

              { label: "Mathematics", href: "/mathematics" },

              { label: `Unit ${u.number}` },

            ]}

          />



          <Reveal className="mt-6 max-w-4xl" variant="up">

            <div className="flex items-center gap-3 flex-wrap">

              <Badge tone="brand">Unit {u.number}</Badge>

              <span className="caption text-[var(--color-ink-muted)]">~{u.estimatedMinutes} min</span>

              {lessons.length > 0 && (

                <span className="caption text-[var(--color-ink-muted)]">

                  {lessons.length} lessons · {u.videos.length} videos

                </span>

              )}

              {u.frameworkUrl && (

                <a

                  href={u.frameworkUrl}

                  target="_blank"

                  rel="noopener noreferrer"

                  className="caption text-[var(--color-brand-600)] hover:underline inline-flex items-center gap-1"

                >

                  GADOE framework

                  <span aria-hidden>↗</span>

                </a>

              )}

            </div>



            <h1 className="h-display mt-5 min-w-0 break-words">{u.title}</h1>



            <p className="lede mt-5">{u.description}</p>



            <div className="mt-6 flex flex-wrap gap-2">

              {lessons.length > 0 && (

                <a href="#lessons" className="btn btn-primary btn-sm">

                  Start with lessons →

                </a>

              )}

              {u.videos.length > 0 && (

                <a href="#videos" className="btn btn-outline btn-sm">

                  Jump to videos

                </a>

              )}

              {u.quiz.length > 0 && (
                <a href="#quiz" className="btn btn-ghost btn-sm">
                  Take the quiz
                </a>
              )}

            </div>

          </Reveal>

        </Container>

      </section>



      <UnitStudyPanel
        unitId={u.id}
        unitTitle={`Unit ${u.number}: ${u.title}`}
        progressItems={progressItems}
        navLinks={navLinks}
      >

      <Section tone="default" size="sm" containerSize="xl" decorated="paper" decoratedDensity="medium" reveal={false}>

        <div className="grid gap-14 lg:gap-16">

          {/* WRITTEN LESSONS */}

          {lessons.length > 0 && (

            <section id="lessons" aria-labelledby="lessons-h">

              <Reveal>

                <span className="eyebrow">Step 1 · Learn</span>

                <h2 id="lessons-h" className="h2 mt-2">Written lessons</h2>

                <p className="lede mt-2 max-w-3xl">
                  Quick read-throughs in plain language — then hit the videos below.
                </p>

              </Reveal>

              <Reveal stagger className="mt-8 grid gap-4">

                {lessons.map((lesson, i) => (

                  <LessonCard key={lesson.id} lesson={lesson} index={i + 1} />

                ))}

              </Reveal>

            </section>

          )}



          {/* OBJECTIVES */}

          <section id="objectives" aria-labelledby="objectives-h">

            <Reveal>

              <span className="eyebrow">Goals</span>

              <h2 id="objectives-h" className="h2 mt-2">Learning objectives</h2>

              <p className="lede mt-2">By the end of this unit, you should be able to:</p>

            </Reveal>

            <ul className="mt-6 grid gap-3">

              {u.objectives.map((o) => (

                <li key={o} className="flex items-start gap-3">

                  <span aria-hidden className="mt-1 w-5 h-5 rounded-full bg-[var(--color-brand-500)] text-white grid place-items-center text-xs font-bold flex-shrink-0">✓</span>

                  <span className="text-[var(--color-ink)] leading-relaxed">{o}</span>

                </li>

              ))}

            </ul>



            {u.vocabulary && u.vocabulary.length > 0 && (

              <div className="mt-10">

                <h3 className="h3">Key vocabulary</h3>

                <dl className="mt-4 grid sm:grid-cols-2 gap-3">

                  {u.vocabulary.map((v) => (

                    <Card key={v.term} className="p-4">

                      <dt className="font-semibold text-[var(--color-ink)]">{v.term}</dt>

                      <dd className="small text-[var(--color-ink-muted)] mt-1">{v.meaning}</dd>

                    </Card>

                  ))}

                </dl>

              </div>

            )}

          </section>

        </div>

      </Section>



      {u.videos.length > 0 && (

      <Section tone="muted" size="sm" containerSize="xl" decorated="muted" decoratedDensity="medium" reveal={false}>

            <section id="videos" aria-labelledby="videos-h">

              <Reveal>

                <span className="eyebrow">Step 2 · Watch</span>

                <h2 id="videos-h" className="h2 mt-2">Video walkthroughs</h2>

                <p className="lede mt-2">

                  Each video covers one topic from this unit — read the short blurb below to find the right one.

                </p>

              </Reveal>

              <Reveal stagger className="mt-8 grid sm:grid-cols-2 gap-5">

                {u.videos.map((v) => (

                  <VideoEmbed

                    key={v.videoId + v.title}

                    videoId={v.videoId}

                    title={v.title}

                    source={v.source}

                    description={v.description}

                  />

                ))}

              </Reveal>

            </section>

      </Section>

          )}



      {(u.worksheets.length > 0 || u.externalPractice.length > 0) && (

      <Section tone="muted" size="sm" containerSize="xl" decorated="muted" decoratedDensity="medium" reveal={false}>

        <div className="grid gap-14 lg:gap-16">

          {u.worksheets.length > 0 && (

            <section id="worksheets" aria-labelledby="worksheets-h">

              <Reveal>

                <span className="eyebrow">Step 3 · Practice</span>

                <h2 id="worksheets-h" className="h2 mt-2">Practice worksheets</h2>

                <p className="lede mt-2">

                  Adam&apos;s curated problem sets — preview here or open in Google Drive.

                </p>

              </Reveal>

              <Reveal stagger className="mt-8 grid md:grid-cols-2 gap-5">

                {u.worksheets.map((w) => (

                  <WorksheetCard key={w.driveFileId} {...w} />

                ))}

              </Reveal>

            </section>

          )}



          {u.externalPractice.length > 0 && (

            <section id="extra" aria-labelledby="extra-h">

              <Reveal>

                <span className="eyebrow">More practice</span>

                <h2 id="extra-h" className="h2 mt-2">External resources</h2>

                <p className="lede mt-2">

                  Hand-picked links from Khan Academy and trusted worksheet libraries.

                </p>

              </Reveal>

              <Reveal stagger className="mt-8 grid sm:grid-cols-2 gap-4">

                {u.externalPractice.map((r) => (

                  <ResourceLinkCard

                    key={r.href}

                    href={r.href}

                    title={r.title}

                    description={r.description}

                    source={r.source}

                  />

                ))}

              </Reveal>

            </section>

          )}

        </div>

      </Section>

      )}



      {u.quiz.length > 0 && (

      <ColorBand variant="dark" containerSize="xl" reveal={false}>

            <section id="quiz" aria-labelledby="quiz-h">

              <Reveal>

                <span className="caption font-semibold tracking-wider uppercase text-[var(--color-brand-300)]">Step 4 · Check</span>

                <h2 id="quiz-h" className="font-display font-bold text-2xl sm:text-3xl mt-2 text-white">Unit {u.number} quiz</h2>

                <p className="mt-2 max-w-xl text-white/75 leading-relaxed">

                  A few quick questions to make sure the big ideas stuck. Retake as many times as you want.

                </p>

              </Reveal>

              <div className="mt-8">

                <Quiz title={`Unit ${u.number}: ${u.title}`} questions={u.quiz} />

              </div>

            </section>

      </ColorBand>

          )}



      {/* PREV / NEXT */}

      <Section tone="muted" size="sm" decorated="muted" decoratedDensity="medium">

        <div className="grid sm:grid-cols-2 gap-4">

          {prev ? (

            <PrevNextCard

              direction="prev"

              label={`Unit ${prev.number}`}

              title={prev.title}

              href={`/mathematics/${prev.slug}`}

            />

          ) : (

            <Link href="/mathematics" className="card card-interactive p-6 flex items-center gap-3 no-underline">

              <span aria-hidden>←</span>

              <span>

                <span className="caption text-[var(--color-ink-muted)] uppercase tracking-wider">Back to</span>

                <span className="block font-semibold text-[var(--color-ink)]">Mathematics library</span>

              </span>

            </Link>

          )}

          {next ? (

            <PrevNextCard

              direction="next"

              label={`Unit ${next.number}`}

              title={next.title}

              href={`/mathematics/${next.slug}`}

            />

          ) : (

            <div className="card p-6 flex items-center gap-3 bg-[var(--color-brand-50)] border-[var(--color-brand-100)]">

              <UnitSymbol symbol="★" size="sm" className="bg-[var(--color-brand-100)] border-[var(--color-brand-200)] text-[var(--color-brand-700)]" />

              <span>

                <span className="caption uppercase tracking-wider text-[var(--color-brand-700)]">You finished</span>

                <span className="block font-semibold text-[var(--color-ink)]">All seven units</span>

              </span>

            </div>

          )}

        </div>

      </Section>

      </UnitStudyPanel>

    </>

  );

}



function PrevNextCard({

  direction,

  label,

  title,

  href,

}: {

  direction: "prev" | "next";

  label: string;

  title: string;

  href: string;

}) {

  const arrow = direction === "prev" ? "←" : "→";

  return (

    <Link

      href={href}

      className={`card card-interactive p-6 flex items-center gap-4 no-underline ${

        direction === "next" ? "sm:flex-row-reverse sm:text-right" : ""

      }`}

    >

      <span aria-hidden className="text-[var(--color-ink-soft)] text-xl">{arrow}</span>

      <span className="flex-1">

        <span className="caption text-[var(--color-ink-muted)] uppercase tracking-wider">

          {direction === "prev" ? "Previous" : "Next up"} · {label}

        </span>

        <span className="block font-semibold text-[var(--color-ink)] mt-0.5">{title}</span>

      </span>

    </Link>

  );

}


