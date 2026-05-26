import type { Metadata, Viewport } from "next";
import { Inter, Lexend } from "next/font/google";
import AuthProvider from "../components/AuthProvider";
import Navbar from "../components/Navbar";
import ConditionalFooter from "../components/ConditionalFooter";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adamsalphabet.com"),
  title: {
    default: "Adam's Alphabet — Free 6th Grade Math",
    template: "%s · Adam's Alphabet",
  },
  description:
    "Free, beginner-friendly Grade 6 math resources: lessons, video walkthroughs, worksheets, and quizzes. Built by a student tutor for students who learn differently.",
  keywords: [
    "6th grade math",
    "free math resources",
    "Grade 6",
    "math tutoring",
    "Khan Academy alternatives",
    "GADOE",
  ],
  openGraph: {
    title: "Adam's Alphabet — Free 6th Grade Math",
    description:
      "Free Grade 6 math lessons, videos, worksheets, and quizzes — built by a student tutor.",
    type: "website",
    siteName: "Adam's Alphabet",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#FBFAF7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${lexend.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased" suppressHydrationWarning>
        <a href="#main" className="skip-link">Skip to main content</a>
        <AuthProvider>
          <Navbar />
          <main id="main" className="flex-1">{children}</main>
          <ConditionalFooter />
        </AuthProvider>
      </body>
    </html>
  );
}
