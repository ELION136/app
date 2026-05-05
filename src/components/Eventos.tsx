"use client";

import { eventos } from "@/lib/data";

const tipoClasses: Record<string, string> = {
  conferencia: "chip-blue",
  seminario: "chip-gold",
  taller: "chip-green",
  curso: "chip-green",
};

export default function Eventos() {
  return (
    <section id="eventos" className="section-pad" style={{ background: "var(--c-dark)" }}>
      <div className="container">
        <div data-reveal>
          <div className="eyebrow">
            <i className="fas fa-calendar-days"></i> Agenda
          </div>
          <h2 className="section-title">
            Próximos <em>Seminarios y Eventos</em>
          </h2>
          <p className="section-sub">
            Conferencias, talleres y seminarios para ampliar tus conocimientos
            con expertos del sector.
          </p>
        </div>
        <div className="eventos-grid">
          {eventos.map((e, i) => (
            <div className="evento-card" data-reveal key={i}>
              <div className="evento-date">
                <div className="day">{e.dia}</div>
                <div className="mon">{e.mes}</div>
              </div>
              <div>
                <div
                  className={`chip ${tipoClasses[e.tipo] || "chip-conf"}`}
                  style={{ marginBottom: "8px" }}
                >
                  {e.tipoLabel}
                </div>
                <div className="evento-title">{e.titulo}</div>
                <div className="evento-meta">
                  <span>
                    <i className="fas fa-clock"></i>
                    {e.hora}
                  </span>
                  <span>
                    <i className="fas fa-location-dot"></i>
                    {e.lugar}
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
