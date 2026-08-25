import Link from "next/link";

import { ThemeToggle } from "./theme-toggle";

const NAV = [
  { href: "/writeups", label: "Writeups" },
  { href: "/sources", label: "Sources" },
  { href: "/setup", label: "Bot" },
  { href: "/contribute", label: "Contribute" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line-subtle bg-ground/85 backdrop-blur-md">
      {/* On mobile the nav drops to its own row: four items don't fit beside
          the logo, and a nav that clips without warning hides sections. */}
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-2.5 sm:h-14 sm:gap-6 sm:py-0">
        <Link
          href="/"
          className="flex shrink-0 items-baseline gap-px font-mono text-[0.9375rem] font-semibold tracking-tight"
        >
          <span className="text-accent">Hx</span>
          <span className="text-ink">BugLetter</span>
        </Link>

        <nav className="hidden flex-1 items-center gap-1 sm:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-sm px-2.5 py-1.5 text-sm text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 sm:ml-0">
          <ThemeToggle />
        </div>
      </div>

      <nav className="flex items-center gap-0.5 overflow-x-auto px-4 pb-2 sm:hidden">
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-sm px-2 py-1 text-sm text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
