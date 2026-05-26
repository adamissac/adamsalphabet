"use client";

import { useState } from "react";

type Props = {
  videoId: string;
  title: string;
  description?: string;
  source?: string;
  className?: string;
};

export default function VideoEmbed({ videoId, title, description, source, className = "" }: Props) {
  const [active, setActive] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  const embed = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  const watchUrl = `https://youtu.be/${videoId}`;

  return (
    <article className={`card card-interactive overflow-hidden flex flex-col ${className}`}>
      <div className="relative aspect-video bg-[var(--color-surface-2)]">
        {active ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={embed}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <button
            type="button"
            onClick={() => setActive(true)}
            className="group absolute inset-0 w-full h-full focus:outline-none"
            aria-label={`Play video: ${title}`}
          >
            <img
              src={thumb}
              alt=""
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <span className="absolute inset-0 bg-black/25 transition-opacity group-hover:bg-black/35" />
            <span className="absolute inset-0 grid place-items-center">
              <span className="grid place-items-center w-14 h-14 rounded-full bg-white/95 text-[var(--color-brand-700)] shadow-lg ring-1 ring-black/5 transition-transform group-hover:scale-105">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        {source && (
          <span className="caption font-semibold tracking-wider uppercase text-[var(--color-brand-600)]">
            {source}
          </span>
        )}
        <h3 className="font-display font-semibold text-lg text-[var(--color-ink)] leading-[1.4]">
          {title}
        </h3>
        {description ? (
          <p className="small text-[var(--color-ink-soft)] leading-relaxed flex-1">{description}</p>
        ) : null}
        <a
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="link small mt-1 inline-flex items-center gap-1"
        >
          Watch on YouTube
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M7 17L17 7" /><path d="M7 7h10v10" />
          </svg>
        </a>
      </div>
    </article>
  );
}
