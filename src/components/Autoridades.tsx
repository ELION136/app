"use client";

import { useState } from "react";
import { autoridades, type Autoridad } from "@/lib/data";

/* ════════════════════════════════════════════════
   MODAL DE DETALLE
════════════════════════════════════════════════ */
function Modal({ aut, onClose }: { aut: Autoridad; onClose: () => void }) {
  return (
    <div className="aut-modal-backdrop" onClick={onClose}>
      <div
        className="aut-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={aut.nombre}
      >
        <button className="aut-modal-close" onClick={onClose} aria-label="Cerrar">
          <i className="ph ph-x" />
        </button>

        {/* Header */}
        <div
          className="aut-modal-header"
          style={{ "--aut-color": aut.color } as React.CSSProperties}
        >
          <div className="aut-modal-photo">
            <img
              src={aut.foto}
              alt={aut.nombre}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="aut-modal-initials">{aut.iniciales}</div>
          </div>
          <div className="aut-modal-id">
            <div className="aut-modal-cargo" style={{ color: aut.color }}>
              {aut.cargo}
            </div>
            <h3 className="aut-modal-nombre">{aut.nombre}</h3>
          </div>
        </div>

        {/* Bio */}
        <p className="aut-modal-bio">{aut.descripcionLarga}</p>

        {/* Logros */}
        <div className="aut-modal-logros">
          <div className="aut-modal-logros-title">
            <i className="ph ph-star" /> Destacados
          </div>
          <ul>
            {aut.logros.map((l, i) => (
              <li key={i}>
                <i className="ph ph-check-circle" style={{ color: aut.color }} />
                {l}
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div className="aut-modal-footer">
          <a
            href={`mailto:${aut.redes.email}`}
            className="aut-modal-btn"
            style={{ "--aut-color": aut.color } as React.CSSProperties}
          >
            <i className="ph ph-envelope" /> {aut.redes.email}
          </a>
          <a
            href={aut.redes.linkedin}
            className="aut-modal-btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ph ph-linkedin-logo" /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════
   TARJETA
════════════════════════════════════════════════ */
function AutCard({
  aut,
  index,
  onOpen,
}: {
  aut: Autoridad;
  index: number;
  onOpen: () => void;
}) {
  return (
    <div
      className="aut-card-v2"
      data-reveal
      style={
        {
          transitionDelay: `${index * 100}ms`,
          "--aut-color": aut.color,
        } as React.CSSProperties
      }
    >
      <div className="aut-card-bg" />

      {/* Foto */}
      <div className="aut-card-photo-wrap">
        <div className="aut-card-photo-ring" />
        <div className="aut-card-photo">
          <img
            src={aut.foto}
            alt={aut.nombre}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <div className="aut-card-initials">{aut.iniciales}</div>
        </div>
      </div>

      {/* Info */}
      <div className="aut-card-info">
        <div className="aut-card-cargo">{aut.cargo}</div>
        <div className="aut-card-nombre">{aut.nombre}</div>
        <p className="aut-card-desc">{aut.descripcionCorta}</p>
      </div>

      {/* Footer */}
      <div className="aut-card-foot">
        <div className="aut-card-dot" />
        <button className="aut-card-cta" onClick={onOpen}>
          Conocer más <i className="ph ph-arrow-right" />
        </button>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════
   SECCIÓN PRINCIPAL
════════════════════════════════════════════════ */
export default function Autoridades() {
  const [selected, setSelected] = useState<Autoridad | null>(null);

  return (
    <section id="autoridades" className="section-pad aut-section">
      <div className="container">
        <div data-reveal className="center" style={{ marginBottom: "48px" }}>
          <div className="eyebrow">
            <i className="ph ph-users-three" /> Equipo directivo
          </div>
          <h2 className="section-title">
            Nuestras <em>Autoridades</em>
          </h2>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            El equipo que lidera la Corporación Boliviana de Talento y Formación
            Integral.
          </p>
        </div>

        <div className="aut-grid-v2">
          {autoridades.map((a, i) => (
            <AutCard
              key={i}
              aut={a}
              index={i}
              onOpen={() => setSelected(a)}
            />
          ))}
        </div>
      </div>

      {selected && (
        <Modal aut={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}