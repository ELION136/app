"use client";

import { noticias } from "@/lib/data";

const tipoClasses: Record<string, string> = {
  actividad: "chip-green",
  deportivo: "chip-gold",
  curso: "chip-blue",
};

export default function Noticias() {
  return (
    <section id="noticias" className="section-pad" style={{ background: "var(--c-dark)" }}>
      <div className="container">
        <div data-reveal className="center">
          <div className="eyebrow">
            <i className="fas fa-newspaper"></i> Noticias
          </div>
          <h2 className="section-title">
            Actividades y <em>Novedades</em>
          </h2>
          <p className="section-sub" style={{ marginInline: "auto" }}>
            Entérate de las últimas noticias, actividades, tips deportivos y
            nuevos cursos disponibles.
          </p>
        </div>
        <div className="noticias-grid">
          {noticias.map((n, i) => (
            <div
              className="news-card"
              data-reveal
              key={i}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="news-top">
                <span className={`chip ${tipoClasses[n.tipo] || "chip-conf"}`}>
                  {n.tipoLabel}
                </span>
              </div>
              <div className="news-body">
                <div className="news-title">{n.titulo}</div>
                <p className="news-desc">{n.desc}</p>
                <div className="news-meta">
                  <span>
                    <i className="fas fa-calendar"></i>
                    {n.fecha}
                  </span>
                  <span>
                    <i className={n.tagIcon}></i>
                    {n.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
