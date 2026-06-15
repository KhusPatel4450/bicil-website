"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  bestX: number;
  bestY: number;
  bestFitness: number;
  color: string;
  size: number;
}

const COLORS = [
  "#CC0000",
  "#D4A017",
  "#FF4444",
  "#EBB830",
  "#FF6B6B",
  "#F5C842",
  "#FF3333",
];

function evalFitness(x: number, y: number, w: number, h: number): number {
  const nx = x / w;
  const ny = y / h;
  return -(
    Math.sin(nx * Math.PI * 3) * Math.cos(ny * Math.PI * 2) +
    Math.sin(nx * Math.PI * 2) * Math.sin(ny * Math.PI * 3)
  );
}

export default function SwarmCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0, inside: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const isMobile = window.innerWidth < 768;
    const COUNT = isMobile ? 45 : 70;
    const MAX_SPEED = 3.5;
    const CONNECTION_DIST = isMobile ? 70 : 100;

    let particles: Particle[] = [];
    let gBestX = 0;
    let gBestY = 0;
    let gBestFitness = Infinity;
    let frame = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = (e.clientX - rect.left) * (canvas.width / rect.width);
      mouseRef.current.y = (e.clientY - rect.top) * (canvas.height / rect.height);
      mouseRef.current.inside = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.inside = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouseRef.current.x = (e.touches[0].clientX - rect.left) * (canvas.width / rect.width);
        mouseRef.current.y = (e.touches[0].clientY - rect.top) * (canvas.height / rect.height);
        mouseRef.current.inside = true;
      }
    };

    const handleTouchEnd = () => {
      mouseRef.current.inside = false;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("touchmove", handleTouchMove, { passive: true });
    canvas.addEventListener("touchend", handleTouchEnd);

    function init() {
      const w = canvas!.width;
      const h = canvas!.height;
      particles = [];
      gBestFitness = Infinity;

      for (let i = 0; i < COUNT; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        const f = evalFitness(x, y, w, h);
        const p: Particle = {
          x,
          y,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          bestX: x,
          bestY: y,
          bestFitness: f,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          size: Math.random() * 1.6 + 0.7,
        };
        particles.push(p);
        if (f < gBestFitness) {
          gBestFitness = f;
          gBestX = x;
          gBestY = y;
        }
      }

      if (prefersReduced) {
        ctx!.fillStyle = "#0A0F1E";
        ctx!.fillRect(0, 0, w, h);
        for (const p of particles) {
          ctx!.beginPath();
          ctx!.arc(p.x, p.y, p.size * 1.5, 0, Math.PI * 2);
          ctx!.fillStyle = p.color;
          ctx!.globalAlpha = 0.55;
          ctx!.fill();
        }
        ctx!.globalAlpha = 1;
      }
    }

    function resize() {
      canvas!.width = canvas!.offsetWidth;
      canvas!.height = canvas!.offsetHeight;
      init();
    }

    function animate() {
      if (prefersReduced) return;
      const w = canvas!.width;
      const h = canvas!.height;
      frame++;

      ctx!.fillStyle = "rgba(10, 15, 30, 0.13)";
      ctx!.fillRect(0, 0, w, h);

      const inertia = 0.72;
      const c1 = 1.49;
      const c2 = 1.49;

      // When mouse is inside canvas, treat it as the global attractor
      const effectiveGBestX = mouseRef.current.inside ? mouseRef.current.x : gBestX;
      const effectiveGBestY = mouseRef.current.inside ? mouseRef.current.y : gBestY;

      for (const p of particles) {
        const r1 = Math.random();
        const r2 = Math.random();

        p.vx =
          inertia * p.vx +
          c1 * r1 * (p.bestX - p.x) +
          c2 * r2 * (effectiveGBestX - p.x);
        p.vy =
          inertia * p.vy +
          c1 * r1 * (p.bestY - p.y) +
          c2 * r2 * (effectiveGBestY - p.y);

        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (spd > MAX_SPEED) {
          p.vx = (p.vx / spd) * MAX_SPEED;
          p.vy = (p.vy / spd) * MAX_SPEED;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) { p.x = 0; p.vx = Math.abs(p.vx); }
        if (p.x > w) { p.x = w; p.vx = -Math.abs(p.vx); }
        if (p.y < 0) { p.y = 0; p.vy = Math.abs(p.vy); }
        if (p.y > h) { p.y = h; p.vy = -Math.abs(p.vy); }

        if (!mouseRef.current.inside) {
          const f = evalFitness(p.x, p.y, w, h);
          if (f < p.bestFitness) {
            p.bestFitness = f;
            p.bestX = p.x;
            p.bestY = p.y;
            if (f < gBestFitness) {
              gBestFitness = f;
              gBestX = p.x;
              gBestY = p.y;
            }
          }
        }

        const glow = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 5);
        glow.addColorStop(0, p.color + "99");
        glow.addColorStop(1, p.color + "00");
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size * 5, 0, Math.PI * 2);
        ctx!.fillStyle = glow;
        ctx!.fill();

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = p.color;
        ctx!.globalAlpha = 0.92;
        ctx!.fill();
        ctx!.globalAlpha = 1;
      }

      if (frame % 2 === 0 && !isMobile) {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < CONNECTION_DIST) {
              ctx!.beginPath();
              ctx!.moveTo(particles[i].x, particles[i].y);
              ctx!.lineTo(particles[j].x, particles[j].y);
              ctx!.strokeStyle = `rgba(204, 0, 0, ${0.14 * (1 - dist / CONNECTION_DIST)})`;
              ctx!.lineWidth = 0.5;
              ctx!.stroke();
            }
          }
        }
      }

      // Draw cursor attractor indicator
      if (mouseRef.current.inside) {
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;
        const cursorGlow = ctx!.createRadialGradient(mx, my, 0, mx, my, 90);
        cursorGlow.addColorStop(0, "rgba(212, 160, 23, 0.14)");
        cursorGlow.addColorStop(1, "rgba(212, 160, 23, 0)");
        ctx!.beginPath();
        ctx!.arc(mx, my, 90, 0, Math.PI * 2);
        ctx!.fillStyle = cursorGlow;
        ctx!.fill();

        ctx!.beginPath();
        ctx!.arc(mx, my, 2.5, 0, Math.PI * 2);
        ctx!.fillStyle = "rgba(212, 160, 23, 0.75)";
        ctx!.fill();
      }

      if (!mouseRef.current.inside && frame % 280 === 0) {
        gBestX = Math.random() * w;
        gBestY = Math.random() * h;
        gBestFitness = evalFitness(gBestX, gBestY, w, h) - 3;
      }

      rafRef.current = requestAnimationFrame(animate);
    }

    resize();
    if (!prefersReduced) animate();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full cursor-crosshair"
      style={{ background: "#0A0F1E" }}
      aria-hidden="true"
    />
  );
}
