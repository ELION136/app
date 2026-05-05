"use client";

import { features } from "@/lib/data";

export default function Features() {
  return (
    <section id="features" className="section-pad" style={{ background: "var(--c-night)" }}>
      <div className="container">
        <div data-reveal>
          <div className="eyebrow">
            <i className="fas fa-star"></i> Por qué elegirnos
          </div>
          <h2 className="section-title">
            Formación integral de <em>calidad real</em>
          </h2>
          <p className="section-sub">
            Combinamos educación técnica de vanguardia con desarrollo deportivo y
            humano para prepararte íntegramente.
          </p>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div
              className="feat-card"
              data-reveal
              key={i}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="feat-num">{f.num}</div>
              <div className="feat-icon">
                <i className={`fas ${f.icon}`}></i>
              </div>
              <div className="feat-title">{f.title}</div>
              <p className="feat-text">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
