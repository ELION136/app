"use client";

import { autoridades } from "@/lib/data";

export default function Autoridades() {
  return (
    <section id="autoridades" className="section-pad" style={{ background: "var(--c-night)" }}>
      <div className="container">
        <div data-reveal className="center">
          <div className="eyebrow">
            <i className="fas fa-users"></i> Equipo directivo
          </div>
          <h2 className="section-title">
            Nuestras <em>Autoridades</em>
          </h2>
          <p className="section-sub">
            El equipo que lidera la Corporación Boliviana de Talento y Formación
            Integral.
          </p>
        </div>
        <div className="autoridades-grid" id="autoridadesGrid">
          {autoridades.map((a, i) => (
            <div
              className="aut-card"
              data-reveal
              key={i}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="aut-photo">
                {a.foto ? (
                  <img src={a.foto} alt={a.nombre} />
                ) : (
                  <div className="aut-placeholder">
                    <i className="fas fa-user-tie"></i>
                    <span>Foto pendiente</span>
                  </div>
                )}
              </div>
              <div className="aut-name">{a.nombre}</div>
              <div className="aut-cargo">{a.cargo}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
