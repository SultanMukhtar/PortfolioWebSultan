"use client";

import { useEffect, useRef } from "react";

export function AnimatedBackground() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = Math.max(
      window.innerHeight,
      document.body.scrollHeight
    ));
    const particles = Array.from({ length: 60 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 1 + Math.random() * 2,
      vx: -0.3 + Math.random() * 0.6,
      vy: -0.3 + Math.random() * 0.6,
    }));

    const bg = getComputedStyle(document.documentElement).getPropertyValue(
      "--background"
    );
    const pri = getComputedStyle(document.documentElement).getPropertyValue(
      "--primary"
    );

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = Math.max(
        window.innerHeight,
        document.body.scrollHeight
      );
    };
    window.addEventListener("resize", onResize);

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      // background subtly filled to avoid overlay flicker
      ctx.fillStyle = bg || "#fff";
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = (pri && pri.trim()) || "#3b82f6";
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        ctx.globalAlpha = 0.08;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
