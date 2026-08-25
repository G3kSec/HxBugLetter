import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

// Same pairing as the rest of the HxHunt family, so the sites read as
// one design language rather than unrelated projects.
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "HxBugLetter | by HxHunt",
    template: "%s · HxBugLetter",
  },
  description:
    "A curated archive of bug bounty writeups and research. Every entry verified against its source, filterable by bug type and year.",
  keywords: [
    "bug bounty",
    "bug hunting",
    "writeups",
    "vulnerabilities",
    "web security",
    "appsec",
  ],
  authors: [{ name: "HxHunt", url: "https://hxhunt.com" }],
  openGraph: {
    title: "HxBugLetter — Curated bug bounty archive",
    description:
      "A curated archive of bug bounty writeups and research. Every entry verified against its source.",
    type: "website",
  },
};

/**
 * There is no inline theme-bootstrap script on purpose.
 *
 * CSS resolves the default through `prefers-color-scheme`, so almost nobody
 * sees a flash. Only someone who explicitly picked the opposite of their
 * system theme gets one frame of the other theme, and ThemeToggle corrects it
 * on hydration.
 *
 * In exchange the site never needs 'unsafe-inline' in its CSP — a good trade
 * for a security project.
 */
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
