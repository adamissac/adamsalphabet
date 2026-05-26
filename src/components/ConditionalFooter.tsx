"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

const AUTH_PATHS = new Set(["/login", "/signup", "/forgot-password"]);

export default function ConditionalFooter() {
  const pathname = usePathname();
  if (AUTH_PATHS.has(pathname)) return null;
  return <Footer />;
}
