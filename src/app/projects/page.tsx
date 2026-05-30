"use client";

import React from "react";
import NavBar from "../components/NavBar";
import Reveal from "../components/Reveal";
import TiltCard from "../components/TiltCard";
import MagneticButton from "../components/MagneticButton";

const email = "sayan17081998dey@gmail.com";

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
    <Reveal direction="up" delayMs={delayMs}>
      <TiltCard className="card-sheen spotlight h-full rounded-2xl border border-zinc-200/70 bg-white/70 p-6 backdrop-blur hover:shadow-2xl hover:shadow-indigo-500/10 dark:border-zinc-800/70 dark:bg-black/20">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            {title}
          </h2>
          <p className="text-sm font-medium text-gradient-animated">
            {subtitle}
          </p>
        </div>
        <ul className="mt-4 space-y-2 text-zinc-800 dark:text-zinc-200">
          {bullets.map((b, idx) => (
            <li key={idx} className="flex gap-2 leading-relaxed">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </TiltCard>
    </Reveal>
  );
}

export default function ProjectsPage() {
  return (
    <div className="relative min-h-dvh font-sans text-zinc-900 dark:text-zinc-50">
      <NavBar />
      <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="card-sheen relative mb-8 overflow-hidden rounded-3xl border border-zinc-200/70 bg-white/60 p-8 backdrop-blur dark:border-zinc-800/70 dark:bg-black/20">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-indigo-400/15 blur-2xl animate-floaty" />
          <Reveal direction="left">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="text-gradient-animated">Projects</span>
            </h1>
          </Reveal>
          <Reveal direction="left" delayMs={90}>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-700 dark:text-zinc-200">
              A couple of highlights showcasing my Databricks / PySpark / SQL
              pipeline engineering work.
            </p>
          </Reveal>

          <Reveal direction="up" delayMs={160}>
            <div className="mt-6 flex flex-wrap gap-3">
              <MagneticButton
                href="/"
                className="rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-white dark:border-zinc-800 dark:bg-black/20 dark:text-zinc-50"
              >
                Back to Home
              </MagneticButton>
              <MagneticButton
                href={`mailto:${email}`}
                className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow-md hover:shadow-indigo-500/30 dark:bg-zinc-50 dark:text-zinc-900"
              >
                Contact Me
              </MagneticButton>
            </div>
          </Reveal>
        </header>

        <div className="grid items-stretch gap-6 lg:grid-cols-2">
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
      </div>

      <footer className="pb-10 text-center text-xs text-zinc-500 dark:text-zinc-400">
        © {new Date().getFullYear()} Sayan Dey • Built with Next.js
      </footer>
    </div>
  );
}
