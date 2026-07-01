import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import AuthProvider from "../components/AuthProvider";
import HashScrollHandler from "../components/HashScrollHandler";
import Navbar from "../components/Navbar";
import ConditionalFooter from "../components/ConditionalFooter";
import { ROOT_METADATA } from "../lib/metadata";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
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
    <html lang="en" className={`${manrope.variable} ${plusJakarta.variable}`} suppressHydrationWarning>
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
