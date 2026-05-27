type Props = {
  driveFileId: string;
  title: string;
  description?: string;
};

export default function WorksheetCard({ driveFileId, title, description }: Props) {
  const preview = `https://drive.google.com/file/d/${driveFileId}/preview`;
  const view = `https://drive.google.com/file/d/${driveFileId}/view`;
  return (
    <article className="card card-interactive overflow-hidden flex flex-col">
      <div className="relative bg-[var(--color-surface-2)]" style={{ aspectRatio: "8.5 / 11" }}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={preview}
          allow="autoplay"
          title={`${title} preview`}
          loading="lazy"
        />
      </div>
      <div className="p-5 flex flex-col gap-2">
        <h3 className="font-display font-semibold text-lg leading-[1.4]">{title}</h3>
        {description && <p className="small text-[var(--color-ink-muted)]">{description}</p>}
        <div className="mt-2 flex gap-2 flex-wrap btn-stack-mobile">
          <a
            href={view}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            Open in Drive
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M7 17L17 7" /><path d="M7 7h10v10" />
            </svg>
          </a>
          <a
            href={`https://drive.google.com/uc?export=download&id=${driveFileId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
          >
            Download
          </a>
        </div>
      </div>
    </article>
  );
}
