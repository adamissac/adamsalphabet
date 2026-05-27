"use client";

import { useState, type ReactNode } from "react";

/* ---------- Input field with show/hide password support ---------- */

export function AuthInput({
  id,
  label,
  type = "text",
  required,
  value,
  onChange,
  placeholder,
  error,
  autoComplete,
  rightHint,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  error?: string;
  autoComplete?: string;
  rightHint?: ReactNode;
}) {
  const isPassword = type === "password";
  const [revealed, setRevealed] = useState(false);
  const effectiveType = isPassword ? (revealed ? "text" : "password") : type;

  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="label" htmlFor={id}>
          {label}
          {required && <span className="ml-1 text-[var(--color-danger)]">*</span>}
        </label>
        {rightHint && <div className="text-xs">{rightHint}</div>}
      </div>
      <div className="relative">
        <input
          id={id}
          name={id}
          type={effectiveType}
          className={`input ${isPassword ? "pr-12" : ""}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          required={required}
          autoComplete={autoComplete}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setRevealed((v) => !v)}
            aria-label={revealed ? "Hide password" : "Show password"}
            className="absolute right-1 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] grid place-items-center text-xs font-semibold tracking-wide text-[var(--color-ink-muted)] hover:text-[var(--color-brand-700)] transition-colors uppercase"
          >
            {revealed ? "Hide" : "Show"}
          </button>
        )}
      </div>
      {error && (
        <p id={`${id}-error`} className="error-text mt-1.5">
          {error}
        </p>
      )}
    </div>
  );
}

/* ---------- Google sign-in button ---------- */

export function GoogleButton({
  onClick,
  disabled,
  label,
}: {
  onClick: () => void;
  disabled?: boolean;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="btn btn-outline w-full"
    >
      <GoogleMark />
      {label}
    </button>
  );
}

/* ---------- Divider ---------- */

export function OrDivider() {
  return (
    <div className="flex items-center gap-3 my-2 text-[var(--color-ink-soft)]">
      <span className="flex-1 h-px bg-[var(--color-border)]" />
      <span className="caption uppercase tracking-wider">or</span>
      <span className="flex-1 h-px bg-[var(--color-border)]" />
    </div>
  );
}

/* ---------- Alert (used for errors + reset confirmations) ---------- */

export function Alert({
  tone = "danger",
  title,
  children,
}: {
  tone?: "danger" | "success";
  title: string;
  children?: ReactNode;
}) {
  const palette =
    tone === "success"
      ? { border: "#C8E1D2", bg: "#F2F9F4", color: "var(--color-success)" }
      : { border: "#F1C5C1", bg: "#FDF1F0", color: "var(--color-danger)" };
  return (
    <div
      role="alert"
      className="rounded-md p-4 animate-fade-up"
      style={{ borderWidth: 1, borderColor: palette.border, background: palette.bg }}
    >
      <p className="small font-semibold" style={{ color: palette.color }}>
        {title}
      </p>
      {children && (
        <p className="caption text-[var(--color-ink-muted)] mt-1 leading-relaxed">{children}</p>
      )}
    </div>
  );
}

/* ---------- Submit button with built-in spinner ---------- */

export function SubmitButton({
  loading,
  children,
}: {
  loading?: boolean;
  children: ReactNode;
}) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="btn btn-primary btn-lg w-full"
    >
      {loading ? (
        <>
          <Spinner /> Please wait…
        </>
      ) : (
        <>
          {children}
          <Arrow />
        </>
      )}
    </button>
  );
}

/* ---------- Icons ---------- */

function Spinner() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      aria-hidden
      className="animate-spin"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </svg>
  );
}

function GoogleMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden>
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  );
}
