"use client";

import { testimonios } from "@/lib/data";

export default function Testimonios() {
  const items = [...testimonios, ...testimonios];

  return (
    <section
      id="testimonios"
      className="section-pad"
      style={{ background: "var(--c-dark)", overflow: "hidden" }}
    >
      <div className="container">
        <div data-reveal className="center">
          <div className="eyebrow">
            <i className="fas fa-comments"></i> Testimonios
          </div>
          <h2 className="section-title">
            Lo que dicen nuestros <em>egresados</em>
          </h2>
          <p className="section-sub" style={{ marginInline: "auto" }}>
            Historias reales de personas que transformaron su vida con la
            Corporación Boliviana.
          </p>
        </div>
      </div>
      <div className="testi-wrap" style={{ marginTop: "48px" }}>
        <div className="testi-track" id="testiTrack">
          {items.map((t, i) => (
            <div className="testi-card" key={i}>
              <div className="testi-stars">
                {Array.from({ length: t.estrellas }).map((_, si) => (
                  <i className="fas fa-star" key={si}></i>
                ))}
              </div>
              <p className="testi-text">&ldquo;{t.texto}&rdquo;</p>
              <div className="testi-author">
                <div className="testi-avatar">{t.nombre.charAt(0)}</div>
                <div className="testi-info">
                  <strong>{t.nombre}</strong>
                  <span>{t.rol}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
