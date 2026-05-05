"use client";

import { infocadeCarreras } from "@/lib/data";

export default function Infocade() {
  return (
    <section id="infocade" className="section-pad" style={{ background: "var(--c-night)" }}>
      <div className="container">
        <div data-reveal>
          <div className="section-brand-row">
            <div className="brand-mark blue">
              <img
                src={infocadeCarreras .infoLogo}
                alt="INFOCADE"
                className="brand-logo"
                />
            </div>
            <div className="eyebrow" style={{ margin: 0, color: "#7aabf0" }}>
              <i className="fas fa-futbol"></i> INFOCADE 
            </div>
          </div>
          <h2 className="section-title">
            Instituto <em>Tecnológico de Formación y Adiestramiento en Deportes</em>
          </h2>
          <p className="section-sub">
            Formación en arbitraje, entrenamiento, gestión deportiva y negocios
            con metodologías reconocidas nacional e internacionalmente.
          </p>
        </div>
        <div className="infocade-grid" style={{ marginTop: "40px" }}>
          {infocadeCarreras.carreras.map((c, i) => (
            <div
              className="info-card"
              data-reveal
              key={i}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="info-ico">
                <i className={`fas ${c.icono}`}></i>
              </div>
              <div className="info-name">{c.nombre}</div>
              <p className="info-desc">{c.desc}</p>
              <a href="#inscripcion" className="info-link">
                Inscribirse <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "40px" }} data-reveal>
          <a
            href="#infocade"
            className="btn btn-ghost"
            style={{ borderColor: "rgba(45,109,201,0.4)", color: "#7aabf0" }}
          >
            <i className="fas fa-grid-2"></i> Ver todas las carreras INFOCADE
          </a>
        </div>
      </div>
    </section>
  );
}
