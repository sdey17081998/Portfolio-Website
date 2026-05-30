"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div
          className={
            "mt-3 flex items-center justify-between rounded-2xl border px-4 py-3 backdrop-blur transition-all duration-300 " +
            (scrolled
              ? "border-zinc-200/80 bg-white/80 shadow-lg dark:border-zinc-800/80 dark:bg-black/40"
              : "border-zinc-200/60 bg-white/50 dark:border-zinc-800/60 dark:bg-black/20")
          }
        >
          <Link href="/" className="group flex items-center gap-3">
            <div className="animate-pulse-glow flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/30 via-indigo-400/20 to-cyan-500/20 ring-1 ring-indigo-500/30 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
              <span className="text-sm font-bold">SD</span>
            </div>
            <div>
              <p className="text-sm font-semibold leading-tight">SAYAN DEY</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Data Engineer
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 sm:flex">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={
                    "link-underline rounded-full px-4 py-2 text-sm font-semibold transition-colors " +
                    (active
                      ? "text-indigo-600 dark:text-cyan-400"
                      : "text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white")
                  }
                  aria-current={active ? "page" : undefined}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <nav className="flex items-center gap-2 sm:hidden">
            {links.slice(1).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full border border-zinc-200 bg-white/60 px-3 py-2 text-xs font-semibold transition hover:bg-white/90 dark:border-zinc-800 dark:bg-black/20"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
