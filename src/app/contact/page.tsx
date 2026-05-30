"use client";

import React from "react";

const email = "sayan17081998dey@gmail.com";
const phone = "+91 9062414676";
const linkedinUrl = "https://www.linkedin.com/in/sayan-dey-328188181/";

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">{children}</div>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-dvh bg-gradient-to-b from-zinc-50 to-white font-sans text-zinc-900 dark:from-black dark:to-zinc-950 dark:text-zinc-50">
      <Container>
        <header className="relative mb-8 overflow-hidden rounded-3xl border border-zinc-200/70 bg-white/60 p-8 backdrop-blur dark:border-zinc-800/70 dark:bg-black/20">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-200/40 via-transparent to-transparent dark:from-indigo-900/20" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl animate-fadeUp">Contact</h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-700 dark:text-zinc-200 animate-fadeUp" style={{ animationDelay: "90ms" }}>
            Reach out for Data Engineering opportunities or collaboration.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-2">
          <section className="animate-fadeUp rounded-2xl border border-zinc-200/70 bg-white/70 p-6 backdrop-blur dark:border-zinc-800/70 dark:bg-black/20" style={{ animationDelay: "0ms" }}>
            <h2 className="text-lg font-semibold tracking-tight">Quick Details</h2>
            <div className="mt-4 space-y-3">
              <a
                href={`mailto:${email}`}
                className="block rounded-xl border border-zinc-200 bg-white/70 px-4 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-white dark:border-zinc-800 dark:bg-black/20 dark:text-zinc-50"
              >
                Email: {email}
              </a>
              <a
                href={`tel:${phone.replaceAll(" ", "")}`}
                className="block rounded-xl border border-zinc-200 bg-white/70 px-4 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-white dark:border-zinc-800 dark:bg-black/20 dark:text-zinc-50"
              >
                Phone: {phone}
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-zinc-200 bg-white/70 px-4 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-white dark:border-zinc-800 dark:bg-black/20 dark:text-zinc-50"
              >
                LinkedIn Profile
              </a>
            </div>
          </section>

          <section className="animate-fadeUp rounded-2xl border border-zinc-200/70 bg-white/70 p-6 backdrop-blur dark:border-zinc-800/70 dark:bg-black/20" style={{ animationDelay: "120ms" }}>
            <h2 className="text-lg font-semibold tracking-tight">What to send</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-800 dark:text-zinc-200">
              <li className="leading-relaxed">Role details (title + tech stack)</li>
              <li className="leading-relaxed">Project scope (data scale, sources, delivery expectations)</li>
              <li className="leading-relaxed">Timeline + interview process</li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/projects"
                className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white/70 px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-white dark:border-zinc-800 dark:bg-black/20 dark:text-zinc-50"
              >
                View Projects
              </a>

              {/* Download only the PDF resume */}
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                Download Resume (.PDF)
              </a>







            </div>
          </section>
        </div>
      </Container>

      <footer className="pb-10 text-center text-xs text-zinc-500 dark:text-zinc-400">
        © {new Date().getFullYear()} Sayan Dey • Built with Next.js
      </footer>
    </div>
  );
}

