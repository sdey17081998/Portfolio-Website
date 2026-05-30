"use client";

import React from "react";

export default function MagneticButton({
  children,
  href,
  download,
  target,
  rel,
  className = "",
  strength = 0.35,
}: {
  children: React.ReactNode;
  href: string;
  download?: boolean;
  target?: string;
  rel?: string;
  className?: string;
  strength?: number;
}) {
  const ref = React.useRef<HTMLAnchorElement | null>(null);

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0px, 0px)";
  };

  return (
    <a
      ref={ref}
      href={href}
      download={download}
      target={target}
      rel={rel}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`inline-flex items-center justify-center transition-transform duration-200 ease-out ${className}`}
    >
      {children}
    </a>
  );
}
