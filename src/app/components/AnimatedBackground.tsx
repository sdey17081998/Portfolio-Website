"use client";

import React from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

export default function AnimatedBackground() {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: Particle[] = [];
    let raf = 0;
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(
        90,
        Math.max(28, Math.floor((width * height) / 16000))
      );
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // gentle attraction to cursor
        const dxm = mouse.x - p.x;
        const dym = mouse.y - p.y;
        const dm = Math.hypot(dxm, dym);
        if (dm < 140 && dm > 0.001) {
          p.x += (dxm / dm) * 0.25;
          p.y += (dym / dm) * 0.25;
        }
      }

      // links
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.5;
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // dots
      for (const p of particles) {
        ctx.fillStyle = "rgba(34, 211, 238, 0.9)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.7, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);

    if (reduce) {
      // draw a single static frame
      draw();
      cancelAnimationFrame(raf);
    } else {
      raf = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-white to-zinc-50 dark:from-black dark:via-zinc-950 dark:to-black" />

      {/* aurora blobs */}
      <div className="animate-floaty-big absolute -left-32 top-[-10%] h-[28rem] w-[28rem] rounded-full bg-indigo-400/25 blur-3xl dark:bg-indigo-600/20" />
      <div className="animate-floaty-big absolute right-[-12%] top-1/4 h-[26rem] w-[26rem] rounded-full bg-cyan-400/20 blur-3xl dark:bg-cyan-500/15" />
      <div className="animate-floaty-big absolute bottom-[-12%] left-1/3 h-[30rem] w-[30rem] rounded-full bg-purple-400/20 blur-3xl dark:bg-purple-600/15" />

      {/* moving grid */}
      <div
        className="animate-aurora absolute inset-0 opacity-[0.18] mix-blend-multiply dark:mix-blend-screen"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(99,102,241,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(34,211,238,0.35) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* particle network */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
