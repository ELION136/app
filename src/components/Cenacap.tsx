"use client";

import { useState } from "react";
import { cenacapCarreras } from "@/lib/data";

export default function Cenacap() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="cenacap" className="section-pad" style={{ background: "var(--c-dark)" }}>
      <div className="container">
        <div data-reveal>
          <div className="section-brand-row">
            <div className="brand-mark green">
              <img
              src={cenacapCarreras.cenacapLogo}
              alt="CENACAP"
              className="brand-logo"
              />
            </div>
            <div className="eyebrow" style={{ margin: 0}}>
              <span>CENACAP</span>
            </div>
          </div>
          <h2 className="section-title">
            Centro de Capacitación <em>Técnica Privado</em>
          </h2>
          <p className="section-sub">
            Formación técnica de excelencia orientada al mundo laboral con
            certificación oficial del Ministerio de Educación.
          </p>
        </div>
        <div className="tabs-row" data-reveal>
          {cenacapCarreras.carreras.map((cat, i) => (
            <button
              className={`tab-btn${i === activeTab ? " active" : ""}`}
              onClick={() => setActiveTab(i)}
              key={i}
            >
              <i className={`fas ${cat.icono}`}></i>
              {cat.categoria}
            </button>
          ))}
        </div>
        {cenacapCarreras.carreras.map((cat, ci) => (
          <div
            className={`tab-panel${ci === activeTab ? " active" : ""}`}
            key={ci}
          >
            {cat.cursos.map((c, i) => (
              <div className="course-card" key={i}>
                <div className="course-img">
                  <img src={c.imagen} alt={c.nombre} loading="lazy" />
                  <span
                    className="chip chip-green"
                    style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                    }}
                  >
                    {cenacapCarreras.nombre}
                  </span>
                </div>
                <div className="course-body">
                  <div className="course-name">{c.nombre}</div>
                  <p className="course-desc">{c.desc}</p>
                  <div className="course-meta">
                    <span className="course-meta-item">
                      <i className="fas fa-clock"></i> Consultar
                    </span>
                    <span className="course-meta-item">
                      <i className="fas fa-chalkboard-user"></i> {c.modalidad}
                    </span>
                  </div>
                  <div className="course-foot">
                    {c.certificado && (
                      <span className="course-cert">
                        <i className="fas fa-certificate"></i>Certificado Oficial
                      </span>
                    )}
                    <a href="#inscripcion" className="course-link">
                      Inscribirse <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
        <div style={{ textAlign: "center", marginTop: "40px" }} data-reveal>
          <a href="#cenacap" className="btn btn-ghost">
            <i className="fas fa-grid-2"></i> Ver todas las carreras CENACAP
          </a>
        </div>
      </div>
    </section>
  );
}
