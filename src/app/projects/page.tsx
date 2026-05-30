"use client";

import React from "react";
import Link from "next/link";

const email = "sayan17081998dey@gmail.com";

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">{children}</div>
  );
}

function Card({
  title,
  subtitle,
  bullets,
  delayMs,
}: {
  title: string;
  subtitle: string;
  bullets: string[];
  delayMs: number;
}) {
  return (
    <section
      className="animate-fadeUp rounded-2xl border border-zinc-200/70 bg-white/70 p-6 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-lg dark:border-zinc-800/70 dark:bg-black/20"
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          {title}
        </h2>
        <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">{subtitle}</p>
      </div>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-800 dark:text-zinc-200">
        {bullets.map((b, idx) => (
          <li key={idx} className="leading-relaxed">
            {b}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <div className="min-h-dvh bg-gradient-to-b from-zinc-50 to-white font-sans text-zinc-900 dark:from-black dark:to-zinc-950 dark:text-zinc-50">
      <Container>
        <header className="relative mb-8 overflow-hidden rounded-3xl border border-zinc-200/70 bg-white/60 p-8 backdrop-blur dark:border-zinc-800/70 dark:bg-black/20">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-200/40 via-transparent to-transparent dark:from-indigo-900/20" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl animate-fadeUp">Projects</h1>
          <p
            className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-700 dark:text-zinc-200 animate-fadeUp"
            style={{ animationDelay: "90ms" }}
          >
            A couple of highlights showcasing my Databricks / PySpark / SQL pipeline engineering work.
          </p>

          <div
            className="mt-6 flex flex-wrap gap-2 animate-fadeUp"
            style={{ animationDelay: "160ms" }}
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-white dark:border-zinc-800 dark:bg-black/20 dark:text-zinc-50"
            >
              Back to Home
            </Link>

            <a
              href={`mailto:${email}`}
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900"
            >
              Contact Me
            </a>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card
            delayMs={0}
            title="End to End Pipeline Engineering"
            subtitle="Databricks (Free edition) • PySpark"
            bullets={[
              "Built an end-to-end data pipeline on Databricks to ingest, process, and store unstructured business documents.",
              "Leveraged PySpark for scalable data transformation and transformation-friendly preprocessing.",
              "Designed the pipeline for reliability with clean processing steps from ingestion to persistence.",
            ]}
          />

          <Card
            delayMs={140}
            title="Data Transformation & Cleansing"
            subtitle="PySpark • CSV ingestion"
            bullets={[
              "Developed custom PySpark scripts to automate extraction of critical metadata (amounts, dates) from complex, multi-file CSV datasets.",
              "Implemented robust data cleansing routines to improve accuracy and downstream analysis readiness.",
              "Focused on repeatability so transformations produce consistent outputs across batches.",
            ]}
          />
        </div>
      </Container>

      <footer className="pb-10 text-center text-xs text-zinc-500 dark:text-zinc-400">
        © {new Date().getFullYear()} Sayan Dey • Built with Next.js
      </footer>
    </div>
  );
}

