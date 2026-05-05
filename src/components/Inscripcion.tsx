"use client";

import { institution } from "@/lib/data";
import { useState } from "react";

export default function Inscripcion() {
  const [form, setForm] = useState({
    fapat: "",
    famat: "",
    fname: "",
    fbirth: "",
    fphone: "",
    femail: "",
    fprof: "",
    fresid: "",
    fci: "",
    fcourse: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.fname || !form.fphone || !form.fcourse) {
      alert("Por favor completa al menos tu nombre, teléfono y el curso de interés.");
      return;
    }
    const msg = encodeURIComponent(
      `*Nueva inscripción — Corporación Boliviana*\n\n` +
        `*Nombre:* ${form.fname} ${form.fapat} ${form.famat}\n` +
        `*C.I.:* ${form.fci || "No especificado"}\n` +
        `*Nacimiento:* ${form.fbirth || "No especificado"}\n` +
        `*Teléfono:* ${form.fphone}\n` +
        `*Email:* ${form.femail || "No especificado"}\n` +
        `*Profesión:* ${form.fprof || "No especificado"}\n` +
        `*Residencia:* ${form.fresid || "No especificado"}\n` +
        `*Carrera/Curso:* ${form.fcourse}`
    );
    window.open(`https://wa.me/${institution.whatsapp}?text=${msg}`, "_blank");
  };

  return (
    <section id="inscripcion" className="section-pad" style={{ background: "var(--c-night)" }}>
      <div className="container">
        <div className="inscripcion-grid">
          <div data-reveal="left">
            <div className="eyebrow">
              <i className="fas fa-pen-to-square"></i> Inscripciones abiertas
            </div>
            <h2 className="section-title">
              Reserva tu <em>Inscripción</em>
            </h2>
            <p className="section-sub">
              El proceso es rápido y sencillo. Un asesor te contactará en menos
              de 24 horas para guiarte en todo el proceso.
            </p>
            <div className="ins-benefits">
              <div className="ins-benefit">
                <div className="ins-ben-ico">
                  <i className="fas fa-id-card"></i>
                </div>
                <div>
                  <strong>Solo tu C.I.</strong>
                  <span>Solo necesitas tu carnet de identidad para reservar</span>
                </div>
              </div>
              <div className="ins-benefit">
                <div className="ins-ben-ico">
                  <i className="fas fa-coins"></i>
                </div>
                <div>
                  <strong>Facilidades de pago</strong>
                  <span>Cuotas accesibles y financiamiento con banco aliado</span>
                </div>
              </div>
              <div className="ins-benefit">
                <div className="ins-ben-ico">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <div>
                  <strong>Inicio inmediato</strong>
                  <span>
                    Nuevas cohortes disponibles cada mes en todas las modalidades
                  </span>
                </div>
              </div>
            </div>
            <a
              href={`https://wa.me/${institution.whatsapp}?text=Hola,%20deseo%20inscribirme%20en%20un%20curso`}
              className="btn btn-wa"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: "8px" }}
            >
              <i className="fab fa-whatsapp"></i> Consultar por WhatsApp
            </a>
          </div>
          <div className="form-box" data-reveal="right">
            <div className="form-title">Formulario de Inscripción</div>
            <p className="form-sub">
              Completa tus datos y te contactamos enseguida.
            </p>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Apellido Paterno</label>
                <input
                  id="fapat"
                  type="text"
                  className="form-input"
                  placeholder="Apellido paterno"
                  value={form.fapat}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Apellido Materno</label>
                <input
                  id="famat"
                  type="text"
                  className="form-input"
                  placeholder="Apellido materno"
                  value={form.famat}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Nombres</label>
              <input
                id="fname"
                type="text"
                className="form-input"
                placeholder="Tus nombres completos"
                value={form.fname}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Fecha de Nacimiento</label>
                <input
                  id="fbirth"
                  type="date"
                  className="form-input"
                  value={form.fbirth}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Celular</label>
                <input
                  id="fphone"
                  type="tel"
                  className="form-input"
                  placeholder="77101440"
                  value={form.fphone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Correo Electrónico</label>
              <input
                id="femail"
                type="email"
                className="form-input"
                placeholder="tu@correo.com"
                value={form.femail}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Profesión / Nivel Académico</label>
                <input
                  id="fprof"
                  type="text"
                  className="form-input"
                  placeholder="Ej: Bachiller, Técnico..."
                  value={form.fprof}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Lugar de Residencia</label>
                <input
                  id="fresid"
                  type="text"
                  className="form-input"
                  placeholder="Ciudad / Municipio"
                  value={form.fresid}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Carnet de Identidad</label>
              <input
                id="fci"
                type="text"
                className="form-input"
                placeholder="N° de C.I."
                value={form.fci}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Carrera / Curso de Interés</label>
              <select id="fcourse" className="form-input" value={form.fcourse} onChange={handleChange}>
                <option value="" disabled>
                  Selecciona una opción
                </option>
                <optgroup label="CENACAP">
                  <option>Sistemas de Gestión Ambiental</option>
                  <option>Sistemas de Gestión de Calidad</option>
                  <option>Diseño Gráfico y Producción Audiovisual</option>
                  <option>Supervisión y Liderazgo en Prevención de Riesgos</option>
                  <option>Microsoft Project</option>
                  <option>Sistemas Tácticos Deportivos</option>
                  <option>Deporte de Alto Rendimiento y Competición</option>
                  <option>Deporte Competitivo</option>
                  <option>Informática Industrial (CENACAP)</option>
                </optgroup>
                <optgroup label="INFOCADE">
                  <option>Arbitraje de Fútbol Amateur</option>
                  <option>Arbitraje de Voleyball en Cancha</option>
                  <option>Comunicación y Periodismo Deportivo</option>
                  <option>Entrenador de Fútbol</option>
                  <option>Entrenador de Beach Voley</option>
                  <option>Marketing Deportivo</option>
                  <option>Auditoría de Organizaciones Deportivas</option>
                  <option>Dirigencia Deportiva</option>
                  <option>Gestión de Eventos Deportivos y Protocolo</option>
                  <option>Escuela de Negocios Industriales</option>
                  <option>Informática Industrial (INFOCADE)</option>
                  <option>Otros / Consultar</option>
                </optgroup>
              </select>
            </div>
            <button className="btn btn-wa btn-full" onClick={handleSubmit} style={{ marginTop: "8px" }}>
              <i className="fab fa-whatsapp"></i> Enviar por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
