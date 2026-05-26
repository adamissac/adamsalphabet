"use client";

/**
 * Shown on auth pages when NEXT_PUBLIC_FIREBASE_* env vars are missing.
 * Gives a short, actionable checklist instead of a cryptic error on click.
 */
export default function FirebaseSetupNotice() {
  return (
    <div
      role="status"
      className="rounded-lg border border-[#E8DFC8] bg-[#FFFBF2] p-4 mb-5"
    >
      <p className="small font-semibold text-[var(--color-ink)]">
        Firebase setup required
      </p>
      <ol className="mt-2 grid gap-1.5 caption text-[var(--color-ink-muted)] list-decimal list-inside leading-relaxed">
        <li>
          Create a project at{" "}
          <a
            href="https://console.firebase.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="link font-medium"
          >
            console.firebase.google.com
          </a>
        </li>
        <li>
          Enable <strong className="text-[var(--color-ink)]">Email/Password</strong> and{" "}
          <strong className="text-[var(--color-ink)]">Google</strong> under Authentication →
          Sign-in method
        </li>
        <li>
          Register a Web app, copy the config into{" "}
          <code className="text-[var(--color-ink)]">.env.local</code>
        </li>
        <li>
          Restart the dev server (<code className="text-[var(--color-ink)]">npm run dev</code>)
        </li>
      </ol>
      <p className="caption text-[var(--color-ink-soft)] mt-2">
        Run <code className="text-[var(--color-ink)]">npm run auth:setup</code> for a guided
        walkthrough.
      </p>
    </div>
  );
}
