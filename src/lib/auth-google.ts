/**
 * Google sign-in helpers — production hosts use redirect (popups are
 * unreliable on custom domains, mobile Safari, and strict browsers).
 */

export function preferGoogleRedirect(): boolean {
  if (typeof window === "undefined") return false;
  const host = window.location.hostname;
  return host !== "localhost" && host !== "127.0.0.1";
}

export function authNotConfiguredMessage(): string {
  if (typeof window === "undefined") {
    return "Firebase is not configured.";
  }
  const local =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1";
  if (local) {
    return "Auth is not configured yet. Add your Firebase keys to .env.local and restart the dev server.";
  }
  return "Firebase is not configured on this site. In Vercel → Settings → Environment Variables, add all NEXT_PUBLIC_FIREBASE_* keys, then redeploy.";
}
