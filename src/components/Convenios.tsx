"use client";

import { convenios } from "@/lib/data";

export default function Convenios() {
  return (
    <section id="convenios" className="section-pad" style={{ background: "var(--c-night)" }}>
      <div className="container">
        <div data-reveal className="center">
          <div className="eyebrow">
            <i className="fas fa-handshake"></i> Red de alianzas
          </div>
          <h2 className="section-title">
            Convenios <em>Suscritos</em>
          </h2>
          <p className="section-sub" style={{ marginInline: "auto" }}>
            Trabajamos con entidades nacionales e internacionales para garantizar
            la calidad y el reconocimiento de nuestros programas.
          </p>
        </div>
        <div className="convenios-grid">
          {convenios.map((c, i) => (
            <div
              className="conv-card"
              data-reveal
              key={i}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="conv-logo">{c.abbr}</div>
              <div className="conv-name">{c.name}</div>
              <p className="conv-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
