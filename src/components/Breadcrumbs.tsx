import Link from "next/link";

export type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm max-w-full">
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[var(--color-ink-muted)]">
        {items.map((item, idx) => {
          const last = idx === items.length - 1;
          return (
            <li key={`${item.label}-${idx}`} className="flex items-center gap-1.5">
              {item.href && !last ? (
                <Link href={item.href} className="hover:text-[var(--color-brand-600)] transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className={last ? "text-[var(--color-ink)] font-medium break-words" : "break-words"} aria-current={last ? "page" : undefined}>
                  {item.label}
                </span>
              )}
              {!last && <span aria-hidden className="text-[var(--color-ink-soft)]">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
