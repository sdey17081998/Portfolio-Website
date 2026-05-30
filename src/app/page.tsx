"use client";

import React from "react";

const linkedinUrl = "https://www.linkedin.com/in/sayan-dey-328188181/";
const email = "sayan17081998dey@gmail.com";
const phone = "+91 9062414676";

function Section({
  title,
  children,
  delayMs = 0,
}: {
  title: string;
  children: React.ReactNode;
  delayMs?: number;
}) {
  return (
    <section
      className="animate-fadeUp rounded-2xl border border-zinc-200/70 bg-white/70 p-6 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-lg dark:border-zinc-800/70 dark:bg-black/20"
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-sm font-medium text-zinc-800 shadow-sm transition hover:bg-white dark:border-zinc-800 dark:bg-black/20 dark:text-zinc-200">
      {children}
    </span>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 list-disc space-y-2 pl-5 text-zinc-800 dark:text-zinc-200">
      {items.map((it, idx) => (
        <li key={idx} className="leading-relaxed">
          {it}
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  const [role, setRole] = React.useState("Data Engineer");
  const [tech, setTech] = React.useState("Databricks");
  const [location, setLocation] = React.useState("Kolkata");

  const results = React.useMemo(() => {
    const roleText = role.toLowerCase();
    const techText = tech.toLowerCase();

    const isDataEng = roleText.includes("data engineer") || roleText.includes("engineering");
    const isSupport = roleText.includes("support");
    const isDbx = techText.includes("databricks") || techText.includes("pyspark") || techText.includes("sql");

    if (isSupport) {
      return {
        primaryRoute: "/contact",
        headline: "Support-first match",
        bullets: [
          "Incident + SLA handling experience",
          "SQL-based troubleshooting + RCA",
          "Cross-team coordination (JIRA / ServiceNow / BMC Helix)",
        ],
      };
    }

    // Data Engineering
    if (isDataEng && isDbx) {
      return {
        primaryRoute: "/projects",
        headline: "Databricks / PySpark match",
        bullets: [
          "ETL pipelines on Databricks (SQL + PySpark)",
          "Transformation, validation, and data quality improvements",
          "Lakehouse-style design patterns",
        ],
      };
    }

    return {
      primaryRoute: "/projects",
      headline: "Best-fit projects",
      bullets: [
        "Pipeline engineering + transformation experience",
        "Strong SQL/Python foundations",
        "Cloud-ready mindset (Azure Data Lake)",
      ],
    };
  }, [role, tech]);

  return (
    <div className="min-h-dvh bg-gradient-to-b from-zinc-50 to-white font-sans text-zinc-900 dark:from-black dark:to-zinc-950 dark:text-zinc-50">
      {/* Top Nav */}
      <div className="sticky top-0 z-50">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mt-3 flex items-center justify-between rounded-2xl border border-zinc-200/70 bg-white/60 px-4 py-3 backdrop-blur dark:border-zinc-800/70 dark:bg-black/20">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 via-indigo-400/10 to-cyan-500/10 ring-1 ring-indigo-500/20">
                <span className="text-sm font-bold">SD</span>
              </div>
              <div>
                <p className="text-sm font-semibold leading-tight">SAYAN DEY</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Data Engineering</p>
              </div>
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <a
                href="/"
                className="rounded-full px-4 py-2 text-sm font-semibold transition hover:bg-white/80 dark:hover:bg-black/30"
                aria-current="page"
              >
                Home
              </a>
              <a
                href="/projects"
                className="rounded-full border border-zinc-200 bg-white/60 px-4 py-2 text-sm font-semibold transition hover:bg-white/80 dark:border-zinc-800 dark:bg-black/20 dark:hover:bg-black/30"
              >
                Projects
              </a>
              <a
                href="/contact"
                className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900"
              >
                Contact
              </a>

            </div>

            <div className="flex items-center gap-2 sm:hidden">
              <a
                href="/projects"
                className="rounded-full border border-zinc-200 bg-white/60 p-2 text-sm font-semibold transition hover:bg-white/80 dark:border-zinc-800 dark:bg-black/20 dark:hover:bg-black/30"
                aria-label="Projects"
              >
                P
              </a>
              <a
                href="/contact"
                className="rounded-full bg-zinc-900 p-2 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900"
                aria-label="Contact"
              >
                C
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Hero */}
        <header className="relative overflow-hidden rounded-3xl border border-zinc-200/70 bg-white/60 p-6 backdrop-blur dark:border-zinc-800/70 dark:bg-black/20 sm:p-10">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-200/50 via-transparent to-transparent dark:from-indigo-900/30" />
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-indigo-400/15 blur-2xl animate-floaty" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/15 blur-2xl animate-floaty" />

          {/* subtle “coding” background lines */}
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-[0.22] mix-blend-multiply dark:mix-blend-screen"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(99,102,241,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(34,211,238,0.35) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />


          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="flex-1">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">SAYAN DEY</h1>
                </div>

                {/* image on right of the name */}
                <div className="relative h-32 w-32 overflow-hidden rounded-2xl ring-1 ring-zinc-200/70 dark:ring-zinc-800/70 md:h-44 md:w-44 lg:h-56 lg:w-56 flex-shrink-0">
                  <img
                    src="/image.JPG"
                    alt="Sayan Dey"
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
              </div>

              <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-700 dark:text-zinc-200">

                Data Engineer • Databricks ETL (SQL + PySpark) • Azure data lake transformations • Lakehouse architecture
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="flex flex-wrap gap-2">

                  <Badge>{email}</Badge>
                  <Badge>{phone}</Badge>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-sm font-medium text-zinc-800 shadow-sm transition hover:bg-white dark:border-zinc-800 dark:bg-black/20 dark:text-zinc-200"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center rounded-full bg-zinc-900 px-3 py-1 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
                  >
                    Resume
                  </a>

                </div>
              </div>
            </div>


          </div>
        </header>

        {/* Content (smaller but still present) */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="lg:col-span-2">
            <Section title="Profile Summary" delayMs={0}>
              <p className="text-zinc-800 dark:text-zinc-200 leading-relaxed">
                I am currently working at Tata Consultancy Services with close to 5 years of experience. I started my career as an Application Support Analyst where I worked extensively on incident management, service requests, SQL-based troubleshooting, SLA handling, and coordination with multiple teams using tools like JIRA, BMC Helix, and ServiceNow.
              </p>
              <p className="mt-3 text-zinc-800 dark:text-zinc-200 leading-relaxed">
                During this time, I developed strong interest in data processing and analytics, which motivated me to transition into Data Engineering. For the last 2 years, I have been working on Databricks-based ETL solutions using SQL and Python, focusing on data transformation, data quality improvement, and pipeline optimization.
              </p>
              <p className="mt-3 text-zinc-800 dark:text-zinc-200 leading-relaxed">
                I completed the Databricks Data Engineer Associate certification and Microsoft Azure AZ-900 to strengthen my cloud and data engineering knowledge.
              </p>
            </Section>
          </div>

          <Section title="Skills" delayMs={80}>
            <div className="space-y-5">
              <div>
                <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">Cloud Platforms</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Badge>Azure Data Lake Gen 2</Badge>
                  <Badge>Azure Blob Storage</Badge>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">Data Architecture</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Badge>Medallion Architecture (Bronze / Silver / Gold)</Badge>
                  <Badge>Schema Evolution</Badge>
                  <Badge>Schema Enforcement</Badge>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">Programming</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Badge>Python</Badge>
                  <Badge>PySpark</Badge>
                  <Badge>SQL</Badge>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">Data Engineering</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Badge>Lakehouse Architecture</Badge>
                  <Badge>Data Warehousing</Badge>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">Tools</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Badge>Git</Badge>
                  <Badge>JIRA</Badge>
                </div>
              </div>
            </div>
          </Section>

          <Section title="Experience" delayMs={160}>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Data Engineer • Tata Consultancy Services, Kolkata</p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">Dec 24 - Present</p>
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

              <div>
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Application Support Analyst • Tata Consultancy Services, Kolkata</p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">Aug 21 - Dec 24</p>
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
          </Section>

          <Section title="Education" delayMs={240}>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">Maulana Abul Kalam Azad University of Technology (West Bengal, India)</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">Masters of Computer Application; CGPA: 9.43 — Jun 2019 - Jun 2021</p>
            </div>
          </Section>

          <Section title="Certificates" delayMs={320}>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-zinc-800 dark:text-zinc-200">
              <li>Databricks Certified Data Engineer Associate</li>
              <li>Microsoft Azure Fundamentals AZ-900</li>
              <li>IIT Kharagpur AI4ICPS — Hands-on approach to AI for real world application</li>
            </ul>
          </Section>

          <div className="lg:col-span-2">
            <Section title="Contact" delayMs={400}>
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-zinc-800 dark:text-zinc-200">Interested in hiring? I’m open to Data Engineering roles focused on scalable cloud data platforms.</p>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">Fastest response via email.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white/70 px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-white dark:border-zinc-800 dark:bg-black/20 dark:text-zinc-50"
                  >
                    {email}
                  </a>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </Section>
          </div>
        </div>

        <footer className="mt-10 text-center text-xs text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} Sayan Dey • Built with Next.js
        </footer>
      </div>
    </div>
  );
}

