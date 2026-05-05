"use client";

import { useEffect, useRef } from "react";
import { stats } from "@/lib/data";

export default function Stats() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const counters = grid.querySelectorAll<HTMLElement>(".counter");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !e.target.getAttribute("data-counted")) {
            e.target.setAttribute("data-counted", "1");
            const target = parseInt(e.target.getAttribute("data-target") || "0");
            const dur = 2000;
            let start: number | null = null;
            const step = (ts: number) => {
              if (!start) start = ts;
              const prog = Math.min((ts - start) / dur, 1);
              const ease = 1 - Math.pow(1 - prog, 3);
              e.target.textContent = Math.floor(ease * target).toString();
              if (prog < 1) requestAnimationFrame(step);
              else e.target.textContent = target.toString();
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="stats" className="section-pad-sm" style={{ background: "var(--c-night)" }}>
      <div className="container">
        <div className="stats-grid" ref={gridRef}>
          {stats.map((s, i) => (
            <div
              className="stat-item"
              data-reveal
              key={i}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="stat-icon">
                <i className={`fas ${s.icon}`}></i>
              </div>
              <div className="stat-num">
                <span className="counter" data-target={s.value}>
                  0
                </span>
                <span className="suf">{s.suffix}</span>
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
