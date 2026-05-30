"use client";

import React from "react";

export default function Marquee({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const row = [...items, ...items];
  return (
    <div className="marquee-group relative overflow-hidden py-1">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent dark:from-zinc-950"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent dark:from-zinc-950"
        aria-hidden="true"
      />
      <div className={`marquee gap-3 ${reverse ? "marquee-reverse" : ""}`}>
        {row.map((item, idx) => (
          <span
            key={`${item}-${idx}`}
            className="inline-flex shrink-0 items-center rounded-full border border-zinc-200/80 bg-white/70 px-4 py-1.5 text-sm font-medium text-zinc-800 shadow-sm dark:border-zinc-800/80 dark:bg-black/30 dark:text-zinc-200"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
