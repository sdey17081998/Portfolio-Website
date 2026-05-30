"use client";

import React from "react";
import AnimatedSection from "./AnimatedSection";
import NavBar from "./components/NavBar";
import Reveal from "./components/Reveal";
import Typewriter from "./components/Typewriter";
import Counter from "./components/Counter";
import Marquee from "./components/Marquee";
import MagneticButton from "./components/MagneticButton";

const linkedinUrl = "https://www.linkedin.com/in/sayan-dey-328188181/";
const email = "sayan17081998dey@gmail.com";
const phone = "+91 9062414676";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="lift inline-flex items-center rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-sm font-medium text-zinc-800 shadow-sm hover:shadow-md dark:border-zinc-800 dark:bg-black/20 dark:text-zinc-200">
      {children}
    </span>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 space-y-2 text-zinc-800 dark:text-zinc-200">
      {items.map((it, idx) => (
        <Reveal
          as="li"
          key={idx}
          direction="left"
          delayMs={idx * 70}
          className="flex gap-2 leading-relaxed"
        >
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
          <span>{it}</span>
        </Reveal>
      ))}
    </ul>
  );
}

const skillsMarquee = [
  "Python",
  "PySpark",
  "SQL",
  "Databricks",
  "Azure Data Lake Gen2",
  "Azure Blob Storage",
  "Medallion Architecture",
  "Lakehouse",
  "ETL Pipelines",
  "Data Warehousing",
  "Schema Evolution",
  "Git",
  "JIRA",
];

export default function Home() {
  return (
    <div className="relative min-h-dvh font-sans text-zinc-900 dark:text-zinc-50">
      <NavBar />

      <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Hero */}
        <header className="card-sheen relative overflow-hidden rounded-3xl border border-zinc-200/70 bg-white/60 p-6 backdrop-blur dark:border-zinc-800/70 dark:bg-black/20 sm:p-10">
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-indigo-400/15 blur-2xl animate-floaty" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/15 blur-2xl animate-floaty" />

          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="flex-1">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <Reveal direction="left">
                    <p className="mb-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                      <span className="animate-wave mr-1">👋</span> Hi, I&apos;m
                    </p>
                  </Reveal>
                  <Reveal direction="left" delayMs={80}>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                      <span className="text-gradient-animated">SAYAN DEY</span>
                    </h1>
                  </Reveal>
                  <Reveal direction="left" delayMs={160}>
                    <p className="mt-2 text-lg font-semibold text-zinc-700 dark:text-zinc-200 sm:text-xl">
                      <Typewriter
                        words={[
                          "Data Engineer",
                          "Databricks ETL Developer",
                          "PySpark + SQL",
                          "Azure Data Lake",
                          "Lakehouse Builder",
                        ]}
                      />
                    </p>
                  </Reveal>
                </div>

                <Reveal
                  direction="zoom"
                  delayMs={120}
                  className="relative h-32 w-32 flex-shrink-0 md:h-44 md:w-44 lg:h-56 lg:w-56"
                >
                  <div className="animate-spin-slow absolute -inset-1 rounded-full bg-[conic-gradient(from_0deg,#6366f1,#22d3ee,#a855f7,#6366f1)] opacity-70 blur-[2px]" />
                  <div className="relative h-full w-full overflow-hidden rounded-full ring-2 ring-white/60 dark:ring-black/40">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/image.JPG"
                      alt="Sayan Dey"
                      className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                </Reveal>
              </div>

              <Reveal direction="up" delayMs={220}>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-200">
                  Databricks ETL (SQL + PySpark) • Azure data lake
                  transformations • Lakehouse architecture
                </p>
              </Reveal>

              <Reveal direction="up" delayMs={300}>
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <Badge>{email}</Badge>
                  <Badge>{phone}</Badge>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lift inline-flex items-center rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-sm font-medium text-zinc-800 shadow-sm hover:shadow-md dark:border-zinc-800 dark:bg-black/20 dark:text-zinc-200"
                  >
                    LinkedIn
                  </a>
                  <MagneticButton
                    href="/resume.pdf"
                    download
                    className="rounded-full bg-zinc-900 px-4 py-1.5 text-sm font-semibold text-white shadow-md hover:shadow-indigo-500/30 dark:bg-zinc-50 dark:text-zinc-900"
                  >
                    Download Resume
                  </MagneticButton>
                </div>
              </Reveal>
            </div>
          </div>
        </header>

        {/* Animated stats */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { to: 5, suffix: "+", label: "Years Experience" },
            { to: 2, suffix: "+", label: "Years in Data Eng" },
            { to: 99, suffix: "%", label: "App Uptime" },
            { to: 95, suffix: "%", label: "Tickets in SLA" },
          ].map((s, idx) => (
            <Reveal key={s.label} direction="zoom" delayMs={idx * 100}>
              <div className="lift card-sheen rounded-2xl border border-zinc-200/70 bg-white/60 p-5 text-center backdrop-blur dark:border-zinc-800/70 dark:bg-black/20">
                <p className="text-3xl font-bold text-gradient-animated">
                  <Counter to={s.to} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Skills marquee */}
        <div className="mt-8 space-y-3 rounded-2xl border border-zinc-200/70 bg-white/50 p-4 backdrop-blur dark:border-zinc-800/70 dark:bg-black/20">
          <Marquee items={skillsMarquee} />
          <Marquee items={[...skillsMarquee].reverse()} reverse />
        </div>

        {/* Content */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="lg:col-span-2">
            <AnimatedSection title="Profile Summary" delayMs={0}>
              <p className="leading-relaxed text-zinc-800 dark:text-zinc-200">
                I am currently working at Tata Consultancy Services with close to
                5 years of experience. I started my career as an Application
                Support Analyst where I worked extensively on incident
                management, service requests, SQL-based troubleshooting, SLA
                handling, and coordination with multiple teams using tools like
                JIRA, BMC Helix, and ServiceNow.
              </p>
              <p className="mt-3 leading-relaxed text-zinc-800 dark:text-zinc-200">
                During this time, I developed strong interest in data processing
                and analytics, which motivated me to transition into Data
                Engineering. For the last 2 years, I have been working on
                Databricks-based ETL solutions using SQL and Python, focusing on
                data transformation, data quality improvement, and pipeline
                optimization.
              </p>
              <p className="mt-3 leading-relaxed text-zinc-800 dark:text-zinc-200">
                I completed the Databricks Data Engineer Associate certification
                and Microsoft Azure AZ-900 to strengthen my cloud and data
                engineering knowledge.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection title="Skills" delayMs={80}>
            <div className="space-y-5">
              {[
                {
                  label: "Cloud Platforms",
                  items: ["Azure Data Lake Gen 2", "Azure Blob Storage"],
                },
                {
                  label: "Data Architecture",
                  items: [
                    "Medallion Architecture (Bronze / Silver / Gold)",
                    "Schema Evolution",
                    "Schema Enforcement",
                  ],
                },
                { label: "Programming", items: ["Python", "PySpark", "SQL"] },
                {
                  label: "Data Engineering",
                  items: ["Lakehouse Architecture", "Data Warehousing"],
                },
                { label: "Tools", items: ["Git", "JIRA"] },
              ].map((group, gi) => (
                <Reveal key={group.label} direction="up" delayMs={gi * 60}>
                  <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                    {group.label}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {group.items.map((it) => (
                      <Badge key={it}>{it}</Badge>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection title="Experience" delayMs={160}>
            <div className="space-y-6">
              <div className="relative border-l border-zinc-200 pl-5 dark:border-zinc-700">
                <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20" />
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  Data Engineer • Tata Consultancy Services, Kolkata
                </p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                  Dec 24 - Present
                </p>
                <BulletList
                  items={[
                    "Developed and maintained ETL pipelines on Databricks using SQL and PySpark for processing business-critical datasets.",
                    "Performed data transformation, cleansing, and validation to improve data accuracy and consistency across reporting systems.",
                    "Worked with cross-functional teams to gather requirements and deliver scalable data solutions aligned with business needs.",
                    "Troubleshot pipeline failures and resolved data-related issues to ensure reliable data delivery.",
                    "Used GitHub for version control and collaborated within Agile sprint cycles using JIRA.",
                  ]}
                />
              </div>

              <div className="relative border-l border-zinc-200 pl-5 dark:border-zinc-700">
                <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-cyan-500 ring-4 ring-cyan-500/20" />
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  Application Support Analyst • Tata Consultancy Services,
                  Kolkata
                </p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                  Aug 21 - Dec 24
                </p>
                <BulletList
                  items={[
                    "Resolved 95% of support tickets within SLA, enhancing team efficiency.",
                    "Delivered 99% uptime for critical applications, boosting user satisfaction.",
                    "Collaborated with cross-functional teams to implement system upgrades.",
                    "Developed documentation that reduced onboarding time by 40%.",
                  ]}
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection title="Education" delayMs={240}>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                Maulana Abul Kalam Azad University of Technology (West Bengal,
                India)
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                Masters of Computer Application; CGPA: 9.43 — Jun 2019 - Jun 2021
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection title="Certificates" delayMs={320}>
            <BulletList
              items={[
                "Databricks Certified Data Engineer Associate",
                "Microsoft Azure Fundamentals AZ-900",
                "IIT Kharagpur AI4ICPS — Hands-on approach to AI for real world application",
              ]}
            />
          </AnimatedSection>

          <div className="lg:col-span-2">
            <AnimatedSection title="Contact" delayMs={400}>
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-zinc-800 dark:text-zinc-200">
                    Interested in hiring? I&apos;m open to Data Engineering roles
                    focused on scalable cloud data platforms.
                  </p>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                    Fastest response via email.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <MagneticButton
                    href={`mailto:${email}`}
                    className="rounded-full border border-zinc-200 bg-white/70 px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-white dark:border-zinc-800 dark:bg-black/20 dark:text-zinc-50"
                  >
                    {email}
                  </MagneticButton>
                  <MagneticButton
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-md hover:shadow-indigo-500/30 dark:bg-zinc-50 dark:text-zinc-900"
                  >
                    LinkedIn Profile
                  </MagneticButton>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <footer className="mt-10 text-center text-xs text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} Sayan Dey • Built with Next.js
        </footer>
      </div>
    </div>
  );
}
