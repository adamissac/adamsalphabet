import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { IBM_Plex_Sans } from "next/font/google";
import AuthProvider from "../components/AuthProvider";
import HashScrollHandler from "../components/HashScrollHandler";
import Navbar from "../components/Navbar";
import ConditionalFooter from "../components/ConditionalFooter";
import { ROOT_METADATA } from "../lib/metadata";
import "./globals.css";

// One family, weight-driven hierarchy — deliberately skips the generic
// "heading font + body font" Google Fonts pairing. IBM Plex Sans has real
// design heritage (IBM's design system) and slightly technical letterforms
// that suit a math site without reading as a templated AI/SaaS pick.
const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = ROOT_METADATA;

export const viewport: Viewport = {
  themeColor: "#FBFAF7",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={plexSans.variable} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased" suppressHydrationWarning>
        <a href="#main" className="skip-link">Skip to main content</a>
        <AuthProvider>
          <HashScrollHandler />
          <Navbar />
          <main id="main" className="flex-1 pt-[4.25rem]">{children}</main>
          <ConditionalFooter />
          <Analytics />
        </AuthProvider>
      </body>
    </html>
  );
}
