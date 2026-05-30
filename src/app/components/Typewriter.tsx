"use client";

import React from "react";

export default function Typewriter({
  words,
  className = "",
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseMs = 1400,
}: {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
}) {
  const [index, setIndex] = React.useState(0);
  const [text, setText] = React.useState("");
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const current = words[index % words.length] ?? "";

    let delay = typingSpeed;
    let action: () => void;

    if (!deleting && text === current) {
      // finished typing -> pause, then start deleting
      delay = pauseMs;
      action = () => setDeleting(true);
    } else if (deleting && text === "") {
      // finished deleting -> advance to next word
      delay = typingSpeed;
      action = () => {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      };
    } else {
      delay = deleting ? deletingSpeed : typingSpeed;
      const next = deleting
        ? current.slice(0, text.length - 1)
        : current.slice(0, text.length + 1);
      action = () => setText(next);
    }

    const t = setTimeout(action, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words, typingSpeed, deletingSpeed, pauseMs]);

  return (
    <span className={className} aria-live="polite">
      {text}
      <span className="caret bg-indigo-500 dark:bg-cyan-400" aria-hidden="true">
        &nbsp;
      </span>
    </span>
  );
}
