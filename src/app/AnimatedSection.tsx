"use client";

import React from "react";
import { useInView } from "./useInView";

export default function AnimatedSection({
  title,
  children,
  delayMs = 0,
}: {
  title: string;
  children: React.ReactNode;
  delayMs?: number;
}) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.12 });

  return (
    <section
      ref={ref}
      style={{ animationDelay: `${delayMs}ms` }}
      className={
        "rounded-2xl border border-zinc-200/70 bg-white/70 p-6 backdrop-blur transition " +
        "hover:-translate-y-0.5 hover:shadow-lg dark:border-zinc-800/70 dark:bg-black/20 " +
        (isInView ? "animate-fadeUp" : "opacity-0 translate-y-2")
      }
    >
      <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

