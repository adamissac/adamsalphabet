"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, type ReactNode } from "react";
import { useAuth } from "./AuthProvider";

/**
 * Mirror image of <ProtectedRoute>: if the visitor is already
 * authenticated, push them to /dashboard (or the `?next=` they came from)
 * instead of letting them re-see the login/signup screens.
 */
export default function RedirectIfAuthed({ children }: { children: ReactNode }) {
  const { user, loading, configured } = useAuth();
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get("next");

  useEffect(() => {
    if (!configured) return;
    if (loading) return;
    if (user) {
      const target = next && next.startsWith("/") ? next : "/dashboard";
      router.replace(target);
    }
  }, [configured, loading, user, router, next]);

  return <>{children}</>;
}
