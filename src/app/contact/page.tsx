"use client";

import React from "react";
import NavBar from "../components/NavBar";
import Reveal from "../components/Reveal";
import TiltCard from "../components/TiltCard";
import MagneticButton from "../components/MagneticButton";

const email = "sayan17081998dey@gmail.com";
const phone = "+91 9062414676";
const linkedinUrl = "https://www.linkedin.com/in/sayan-dey-328188181/";

export default function ContactPage() {
  return (
    <div className="relative min-h-dvh font-sans text-zinc-900 dark:text-zinc-50">
      <NavBar />
      <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="card-sheen relative mb-8 overflow-hidden rounded-3xl border border-zinc-200/70 bg-white/60 p-8 backdrop-blur dark:border-zinc-800/70 dark:bg-black/20">
          <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-cyan-400/15 blur-2xl animate-floaty" />
          <Reveal direction="left">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="text-gradient-animated">Contact</span>
            </h1>
          </Reveal>
          <Reveal direction="left" delayMs={90}>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-700 dark:text-zinc-200">
              Reach out for Data Engineering opportunities or collaboration.
            </p>
          </Reveal>
        </header>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal direction="left">
            <TiltCard className="card-sheen spotlight h-full rounded-2xl border border-zinc-200/70 bg-white/70 p-6 backdrop-blur hover:shadow-2xl hover:shadow-indigo-500/10 dark:border-zinc-800/70 dark:bg-black/20">
              <h2 className="text-lg font-semibold tracking-tight">
                Quick Details
              </h2>
              <div className="mt-4 space-y-3">
                <a
                  href={`mailto:${email}`}
                  className="lift block rounded-xl border border-zinc-200 bg-white/70 px-4 py-3 text-sm font-semibold text-zinc-900 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-black/20 dark:text-zinc-50"
                >
                  Email: {email}
                </a>
                <a
                  href={`tel:${phone.replaceAll(" ", "")}`}
                  className="lift block rounded-xl border border-zinc-200 bg-white/70 px-4 py-3 text-sm font-semibold text-zinc-900 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-black/20 dark:text-zinc-50"
                >
                  Phone: {phone}
                </a>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lift block rounded-xl border border-zinc-200 bg-white/70 px-4 py-3 text-sm font-semibold text-zinc-900 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-black/20 dark:text-zinc-50"
                >
                  LinkedIn Profile
                </a>
              </div>
            </TiltCard>
          </Reveal>

          <Reveal direction="right" delayMs={120}>
            <TiltCard className="card-sheen spotlight h-full rounded-2xl border border-zinc-200/70 bg-white/70 p-6 backdrop-blur hover:shadow-2xl hover:shadow-indigo-500/10 dark:border-zinc-800/70 dark:bg-black/20">
              <h2 className="text-lg font-semibold tracking-tight">
                What to send
              </h2>
              <ul className="mt-4 space-y-2 text-zinc-800 dark:text-zinc-200">
                {[
                  "Role details (title + tech stack)",
                  "Project scope (data scale, sources, delivery expectations)",
                  "Timeline + interview process",
                ].map((it) => (
                  <li key={it} className="flex gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <MagneticButton
                  href="/projects"
                  className="rounded-full border border-zinc-200 bg-white/70 px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-white dark:border-zinc-800 dark:bg-black/20 dark:text-zinc-50"
                >
                  View Projects
                </MagneticButton>
                <MagneticButton
                  href="/resume.pdf"
                  download
                  className="rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-md hover:shadow-indigo-500/30 dark:bg-zinc-50 dark:text-zinc-900"
                >
                  Download Resume (.PDF)
                </MagneticButton>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </div>

      <footer className="pb-10 text-center text-xs text-zinc-500 dark:text-zinc-400">
        © {new Date().getFullYear()} Sayan Dey • Built with Next.js
      </footer>
    </div>
  );
}
