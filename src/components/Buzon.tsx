"use client";

import { institution } from "@/lib/data";
import { useState } from "react";

export default function Buzon() {
  const [tipo, setTipo] = useState("");
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = () => {
    if (!tipo || !mensaje) {
      alert("Por favor selecciona el tipo y escribe tu mensaje.");
      return;
    }
    const msg = encodeURIComponent(
      `*Buzón de Sugerencias — Corporación Boliviana*\n\n` +
        `*Tipo:* ${tipo}\n*De:* ${nombre || "Anónimo"}\n*Mensaje:* ${mensaje}`
    );
    window.open(
      `https://wa.me/${institution.whatsapp}?text=${msg}`,
      "_blank"
    );
  };

  return (
    <section
      id="buzon"
      className="section-pad"
      style={{ background: "var(--c-forest)", position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 80% at 30% 50%, rgba(22,176,126,0.1), transparent)",
        }}
      ></div>
      <div className="container">
        <div className="buzon-grid">
          <div data-reveal="left">
            <div className="eyebrow" style={{ color: "var(--c-mint)" }}>
              <i className="fas fa-inbox"></i> Tu voz importa
            </div>
            <h2 className="section-title">
              Buzón de <em>Sugerencias</em>
            </h2>
            <p
              className="section-sub"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Queremos escucharte. Tu opinión nos ayuda a mejorar continuamente
              nuestros servicios.
            </p>
            <div className="buzon-opts">
              <div className="buzon-opt">
                <i className="fas fa-lightbulb"></i>
                <span>Sugerencia</span>
              </div>
              <div className="buzon-opt">
                <i className="fas fa-triangle-exclamation"></i>
                <span>Reclamo</span>
              </div>
              <div className="buzon-opt">
                <i className="fas fa-star"></i>
                <span>Felicitación</span>
              </div>
              <div className="buzon-opt">
                <i className="fas fa-circle-question"></i>
                <span>Consulta</span>
              </div>
            </div>
          </div>
          <div className="buzon-form-box" data-reveal="right">
            <div className="form-title">Enviar mensaje</div>
            <p
              className="form-sub"
              style={{
                color: "rgba(255,255,255,0.35)",
                marginBottom: "24px",
              }}
            >
              Tu mensaje es confidencial y llega directamente a las autoridades.
            </p>
            <div className="form-group">
              <label className="form-label">Tipo de mensaje</label>
              <select
                id="btype"
                className="form-input"
                style={{ background: "rgba(255,255,255,0.05)" }}
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
              >
                <option value="" disabled>
                  Selecciona el tipo
                </option>
                <option>Sugerencia</option>
                <option>Reclamo</option>
                <option>Felicitación</option>
                <option>Consulta general</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Nombre (opcional)</label>
              <input
                id="bname"
                type="text"
                className="form-input"
                placeholder="Tu nombre o déjalo en blanco"
                style={{ background: "rgba(255,255,255,0.05)" }}
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Mensaje</label>
              <textarea
                id="bmessage"
                rows={4}
                className="form-input"
                placeholder="Escribe aquí tu mensaje..."
                style={{
                  resize: "vertical",
                  background: "rgba(255,255,255,0.05)",
                }}
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
              ></textarea>
            </div>
            <button className="btn btn-wa btn-full" onClick={handleSubmit}>
              <i className="fab fa-whatsapp"></i> Enviar mensaje
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
