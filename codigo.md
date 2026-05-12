src/components/
about.tsx
"use client";

export default function About() {
  return (
    <section id="about" className="section-pad" style={{ background: "var(--c-dark)" }}>
      <div className="container">
        <div className="about-grid">
          <div className="about-img-col" data-reveal="left">
            <div className="about-img-frame">
              <img
                src="/assets/img/equipo-corporativo.jpg"
                alt="Equipo corporativo"
              />
              <div className="about-accent-line"></div>
            </div>
            <div className="about-years">
              <strong>+15</strong>
              <span>
                Años de
                <br />
                trayectoria
              </span>
            </div>
          </div>
          <div data-reveal="right">
            <div className="eyebrow">
              <i className="fas fa-building-columns"></i> Misión y Visión
            </div>
            <h2 className="section-title">
              Corporación Boliviana de
              <br />
              <em>Talento y Formación Integral</em>
            </h2>
            <p className="section-sub">
              Somos una institución comprometida con el desarrollo integral de las
              personas, integrando formación técnica de vanguardia con programas
              deportivos de alto nivel.
            </p>
            <div className="mv-cards">
              <div className="mv-card">
                <h4>
                  <i className="fas fa-bullseye"></i> Misión
                </h4>
                <p>
                  Promover el desarrollo integral mediante actividades de
                  formación con enfoque deportivo y programas educativos
                  innovadores, impulsando el aprendizaje, la salud física, el
                  bienestar emocional y la inclusión social.
                </p>
              </div>
              <div className="mv-card">
                <h4>
                  <i className="fas fa-eye"></i> Visión
                </h4>
                <p>
                  Ser una institución de referencia nacional reconocida por su
                  excelencia, promoviendo un ecosistema de formación integral de
                  talento deportivo de alto rendimiento y bienestar comunitario.
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "28px",
                flexWrap: "wrap",
              }}
            >
              <a href="#cenacap" className="btn btn-primary">
                <i className="fas fa-arrow-right"></i> Ver CENACAP
              </a>
              <a href="#infocade" className="btn btn-ghost">
                <i className="fas fa-arrow-right"></i> Ver INFOCADE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


Autoridades.tsx
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
buzon.tsx
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

Cambio.tsx
"use client";

export default function Cambio() {
  return (
    <section id="cambio" style={{ background: "var(--c-forest)", borderBlock: "1px solid var(--c-line)", padding: "32px 0" }}>
      <div className="container">
        <div className="cambio-inner">
          <span className="cambio-label">Tipo de Cambio Referencial</span>
          <div className="cambio-sep"></div>
          <div className="cambio-item">
            <div className="cambio-flag">🇺🇸</div>
            <div>
              <div className="cambio-curr">USD</div>
              <div className="cambio-rate">Bs. 6.97</div>
            </div>
          </div>
          <div className="cambio-sep"></div>
          <div className="cambio-item">
            <div className="cambio-flag">🇪🇺</div>
            <div>
              <div className="cambio-curr">EUR</div>
              <div className="cambio-rate">Bs. ~7.60</div>
            </div>
          </div>
          <div className="cambio-sep"></div>
          <span style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.2)" }}>
            Referencial · Consultar actualización
          </span>
        </div>
      </div>
    </section>
  );
}

Cenacap.tsx
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

Contacto.tsx
"use client";

import { institution } from "@/lib/data";

export default function Contacto() {
  return (
    <section id="contacto" className="section-pad" style={{ background: "var(--c-night)" }}>
      <div className="container">
        <div className="contacto-grid">
          <div data-reveal="left">
            <div className="eyebrow">
              <i className="fas fa-location-dot"></i> Encuéntranos
            </div>
            <h2 className="section-title">
              ¿Dónde <em>estamos?</em>
            </h2>
            <p className="section-sub">
              Visítanos o contáctanos por cualquiera de nuestros canales
              disponibles.
            </p>
            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-ico">
                  <i className="fas fa-location-dot"></i>
                </div>
                <div>
                  <div className="contact-lbl">Dirección</div>
                  <div className="contact-val">
                    Calle Reza Nro. 0236, entre España y Baptista
                    <br />
                    Cochabamba – Bolivia
                  </div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-ico">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <div className="contact-lbl">Teléfono / WhatsApp</div>
                  <div className="contact-val">
                    <a href={`tel:+${institution.whatsapp}`} style={{ color: "inherit" }}>
                      {institution.phone}
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-ico">
                  <i className="fas fa-clock"></i>
                </div>
                <div>
                  <div className="contact-lbl">Horario de atención</div>
                  <div className="contact-val">
                    Lunes a Viernes: 8:00 – 20:00
                    <br />
                    Sábados: 8:00 – 14:00
                  </div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-ico">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <div className="contact-lbl">Correo</div>
                  <div className="contact-val">{institution.email}</div>
                </div>
              </div>
            </div>
            <div className="socials">
              <a href="#" className="social-btn" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-btn" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href={`https://wa.me/${institution.whatsapp}`} className="social-btn" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#" className="social-btn" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="social-btn" aria-label="TikTok">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
          <div data-reveal="right">
            <div className="map-wrap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.7946789698453!2d-66.1572!3d-17.3935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCalle+Reza+0236+Cochabamba!5e0!3m2!1ses!2sbo!4v1614000000000"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación CENACAP Cochabamba"
              ></iframe>
              <div className="map-chip">
                <i className="fas fa-location-dot"></i>
                <span>Calle Reza 0236, Cochabamba</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Convenios.tsx
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

Eventos.tsx
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

Features.tsx
"use client";

import { features } from "@/lib/data";

export default function Features() {
  return (
    <section id="features" className="section-pad" style={{ background: "var(--c-night)" }}>
      <div className="container">
        <div data-reveal>
          <div className="eyebrow">
            <i className="fas fa-star"></i> Por qué elegirnos
          </div>
          <h2 className="section-title">
            Formación integral de <em>calidad real</em>
          </h2>
          <p className="section-sub">
            Combinamos educación técnica de vanguardia con desarrollo deportivo y
            humano para prepararte íntegramente.
          </p>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div
              className="feat-card"
              data-reveal
              key={i}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="feat-num">{f.num}</div>
              <div className="feat-icon">
                <i className={`fas ${f.icon}`}></i>
              </div>
              <div className="feat-title">{f.title}</div>
              <p className="feat-text">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


Footer.tsx


"use client";

import { institution } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="footer" style={{ background: "#00000", borderTop: "1px solid var(--c-line)", padding: "60px 0 32px" }}>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <strong>
              Corporación <em>Boliviana</em>
            </strong>
            <div className="sub">
              de Talento y Formación Integral · CENACAP · INFOCADE
            </div>
            <p>
              Promovemos el desarrollo integral de las personas mediante
              formación técnica y deportiva de excelencia en Cochabamba, Bolivia.
            </p>
            <div className="socials" style={{ marginTop: "16px" }}>
              <a href="#" className="social-btn">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-btn">
                <i className="fab fa-instagram"></i>
              </a>
              <a href={`https://wa.me/${institution.whatsapp}`} className="social-btn">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#" className="social-btn">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Institución</div>
            <ul className="footer-links">
              <li>
                <a href="#about">
                  <i className="fas fa-chevron-right"></i>Misión y Visión
                </a>
              </li>
              <li>
                <a href="#autoridades">
                  <i className="fas fa-chevron-right"></i>Autoridades
                </a>
              </li>
              <li>
                <a href="#valores">
                  <i className="fas fa-chevron-right"></i>Valores
                </a>
              </li>
              <li>
                <a href="#modelo">
                  <i className="fas fa-chevron-right"></i>Modelo Educativo
                </a>
              </li>
              <li>
                <a href="#convenios">
                  <i className="fas fa-chevron-right"></i>Convenios
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Carreras</div>
            <ul className="footer-links">
              <li>
                <a href="#cenacap">
                  <i className="fas fa-chevron-right"></i>CENACAP
                </a>
              </li>
              <li>
                <a href="#infocade">
                  <i className="fas fa-chevron-right"></i>INFOCADE
                </a>
              </li>
              <li>
                <a href="#eventos">
                  <i className="fas fa-chevron-right"></i>Seminarios
                </a>
              </li>
              <li>
                <a href="#inscripcion">
                  <i className="fas fa-chevron-right"></i>Inscripciones
                </a>
              </li>
              <li>
                <a href="#noticias">
                  <i className="fas fa-chevron-right"></i>Noticias
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Contacto</div>
            <ul className="footer-links">
              <li>
                <a href={`tel:+${institution.whatsapp}`}>
                  <i className="fas fa-phone"></i>77101440
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${institution.whatsapp}`}>
                  <i className="fab fa-whatsapp"></i>WhatsApp
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-envelope"></i>
                  {institution.email}
                </a>
              </li>
              <li>
                <a href="#contacto">
                  <i className="fas fa-location-dot"></i>Calle Reza 0236
                </a>
              </li>
              <li>
                <a href="#contacto">
                  <i className="fas fa-map-marker-alt"></i>Cochabamba, Bolivia
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">
            © 2025 <em>Corporación Boliviana de Talento y Formación Integral</em>{" "}
            · CENACAP · INFOCADE · Todos los derechos reservados.
          </p>
          <p className="footer-copy">
            Desarrollado con <em>♥</em> para Bolivia
          </p>
        </div>
      </div>
    </footer>
  );
}


Hero.tsx
"use client";

import { institution } from "@/lib/data";
import { useEffect, useRef } from "react";

export default function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    const count = window.matchMedia("(max-width: 640px)").matches ? 15 : 30;
    for (let i = 0; i < count; i++) {
      const dot = document.createElement("span");
      Object.assign(dot.style, {
        position: "absolute",
        left: Math.random() * 100 + "vw",
        top: Math.random() * 100 + "vh",
        width: 1 + Math.random() * 2.5 + "px",
        height: 1 + Math.random() * 2.5 + "px",
        borderRadius: "50%",
        background: "rgba(77,218,170,0.6)",
        opacity: "0",
        animation: `particleRise ${5 + Math.random() * 5}s ${Math.random() * 6}s infinite linear`,
      });
      container.appendChild(dot);
    }
  }, []);

  return (
    <section id="hero">
      <div className="hero-media">
        <img
          id="heroImg"
          src={institution.heroImage}
          alt="Formación deportiva y técnica en Bolivia"
        />
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-grid-bg"></div>
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>
      <div
        ref={particlesRef}
        id="heroParticles"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      ></div>
      <div className="hero-content">
        <div className="hero-badge">
          <div className="dot"></div> Resolucion Ministerial 0286/2025 — Cochabamba, Bolivia
        </div>
        <h1 className="hero-title">
          <span className="kicker">
            Corporación Boliviana de Talento y Formación Integral
          </span>{" "}
          Formación Integral
          <br />
          Para el <em>Futuro</em> de Bolivia
        </h1>
        <p className="hero-desc">
          Impulsamos el Aprendizaje, la Salud Física, el Bienestar y la Inclusión
          Social a Través de Programas Educativos y Deportivos de Excelencia con{" "}
          <strong style={{ color: "#00000" }}>CENACAP</strong> ,{" "}
          <strong style={{ color: "#00000" }}>INFOCADE</strong> Y {" "}
          <strong style={{ color: "#00000" }}>NUESTRAS FUNDACIONES</strong>
        </p>
        <div className="hero-actions">
          <a href="#cenacap" className="btn btn-primary">
            <i className="fas fa-book-open"></i> Ver Carreras
          </a>
          <a href="#inscripcion" className="btn btn-red">
            <i className="fas fa-user-plus"></i> Inscribirse
          </a>
          <a
            href={`https://wa.me/${institution.whatsapp}?text=Hola,%20quiero%20información`}
            className="btn btn-wa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp"></i> WhatsApp
          </a>
        </div>
        <div className="hero-brands">
          <span className="hero-brands-sep">Nuestras unidades</span>
          <a href="#cenacap" className="hero-pill">
            <span className="hero-pill-name">CENACAP</span>
            <span className="hero-pill-sub">Centro de Capacitación Técnica</span>
          </a>
          <a href="#infocade" className="hero-pill">
            <span className="hero-pill-name">INFOCADE</span>
            <span className="hero-pill-sub">Instituto de Formación Deportiva</span>
          </a>
          <a href="#infocade" className="hero-pill">
            <span className="hero-pill-name">FUNDACION 1</span>
            <span className="hero-pill-sub">Instituto de Formación Deportiva</span>
          </a>
          <a href="#infocade" className="hero-pill">
            <span className="hero-pill-name">FUNDACION 2</span>
            <span className="hero-pill-sub">Instituto de Formación Deportiva</span>
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-mouse"></div>
        <span className="scroll-text">Explorar</span>
      </div>
    </section>
  );
}


Infocade.tsx
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


Inscripcion.tsx
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


Modelo.tsx
"use client";

export default function Modelo() {
  return (
    <section
      id="modelo"
      className="section-pad"
      style={{ background: "var(--c-forest)" }}
    >
      <div className="container">
        <div className="modelo-grid">
          <div className="modelo-visual" data-reveal="left">
            <div className="play-wrap">
              <div className="play-ring">
                <i className="fas fa-play"></i>
              </div>
              <span>Video institucional</span>
            </div>
          </div>
          <div data-reveal="right">
            <div className="eyebrow" style={{ color: "var(--c-mint)" }}>
              <i className="fas fa-graduation-cap"></i> Modelo educativo
            </div>
            <h2 className="section-title">
              Marco conceptual y
              <br />
              <em>operativo</em> de excelencia
            </h2>
            <p
              className="section-sub"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              El Modelo Institucional orienta nuestras actividades hacia el
              mejoramiento continuo, integrando procesos de capacitación y
              formación para fortalecer competencias y brindar servicios
              educativos pertinentes.
            </p>
            <div className="modelo-brands">
              <a href="#cenacap" className="modelo-brand">
                <div className="brand-abbr">CENACAP</div>
                <div className="brand-full">
                  Centro de Capacitación Técnica Privado
                </div>
                <div className="brand-cta">
                  <i className="fas fa-arrow-right"></i> Ver carreras
                </div>
              </a>
              <a href="#infocade" className="modelo-brand">
                <div className="brand-abbr">INFOCADE</div>
                <div className="brand-full">
                  Instituto de Formación Deportiva y Empresarial
                </div>
                <div className="brand-cta">
                  <i className="fas fa-arrow-right"></i> Ver carreras
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Navbar.tsx
"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (y > 400) {
        setHidden(y > lastY);
      } else {
        setHidden(false);
      }
      setLastY(y);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  const handleMobileLink = () => {
    setMobileOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <nav
        id="navbar"
        className={scrolled ? "scrolled" : ""}
        style={{
          transform: hidden && !mobileOpen ? "translateY(-100%)" : "translateY(0)",
        }}
      >
        <div className="container">
          <div className="nav-wrap">
            <a href="#hero" className="nav-logo">
              <div className="nav-mark">CBTI</div>
              <div className="nav-logotype">
                <strong>Corporación Boliviana</strong>
                <span>de Talento y Formación Integral</span>
              </div>
            </a>
            <div className="nav-links">
              <div className="nav-item">
                <button className="nav-link">
                  <i className="fas fa-building-columns"></i> Nosotros{" "}
                  <i className="fas fa-chevron-down chevron"></i>
                </button>
                <div className="nav-drop">
                  <div className="drop-label">Institución</div>
                  <a href="#about" className="drop-link">
                    <i className="fas fa-bullseye"></i> Misión y Visión
                  </a>
                  <a href="#autoridades" className="drop-link">
                    <i className="fas fa-users"></i> Autoridades
                  </a>
                  <a href="#valores" className="drop-link">
                    <i className="fas fa-heart"></i> Valores Corporativos
                  </a>
                  <a href="#modelo" className="drop-link">
                    <i className="fas fa-graduation-cap"></i> Modelo Educativo
                  </a>
                  <a href="#convenios" className="drop-link">
                    <i className="fas fa-handshake"></i> Convenios Suscritos
                  </a>
                </div>
              </div>
              <div className="nav-item">
                <button className="nav-link">
                  <i className="fas fa-book-open"></i> Carreras{" "}
                  <i className="fas fa-chevron-down chevron"></i>
                </button>
                <div className="nav-drop">
                  <div className="drop-label">CENACAP — Formación Técnica</div>
                  <a href="#cenacap" className="drop-link">
                    <i className="fas fa-leaf"></i> Gestión Ambiental y Calidad
                  </a>
                  <a href="#cenacap" className="drop-link">
                    <i className="fas fa-palette"></i> Diseño Gráfico y Audiovisual
                  </a>
                  <a href="#cenacap" className="drop-link">
                    <i className="fas fa-trophy"></i> Deporte de Alto Rendimiento
                  </a>
                  <div className="drop-divider"></div>
                  <div className="drop-label">INFOCADE — Deporte y Negocios</div>
                  <a href="#infocade" className="drop-link">
                    <i className="fas fa-whistle"></i> Arbitraje y Entrenadores
                  </a>
                  <a href="#infocade" className="drop-link">
                    <i className="fas fa-chart-line"></i> Marketing y Negocios
                  </a>
                </div>
              </div>
              <div className="nav-item">
                <button className="nav-link">
                  <i className="fas fa-calendar-days"></i> Seminarios{" "}
                  <i className="fas fa-chevron-down chevron"></i>
                </button>
                <div className="nav-drop">
                  <a href="#eventos" className="drop-link">
                    <i className="fas fa-clock"></i> Próximos Eventos
                  </a>
                  <a href="#eventos" className="drop-link">
                    <i className="fas fa-microphone-lines"></i> Conferencias
                  </a>
                  <a href="#eventos" className="drop-link">
                    <i className="fas fa-chalkboard-teacher"></i> Talleres
                  </a>
                </div>
              </div>
              <a href="#noticias" className="nav-link">
                <i className="fas fa-newspaper"></i> Noticias
              </a>
              <a href="#contacto" className="nav-link">
                <i className="fas fa-location-dot"></i> Contacto
              </a>
            </div>
            <a href="#inscripcion" className="btn btn-primary nav-cta btn-sm">
              <i className="fas fa-pen-to-square"></i> Inscribirse
            </a>
            <div
              className={`nav-toggle${mobileOpen ? " open" : ""}`}
              onClick={() => {
                const open = !mobileOpen;
                setMobileOpen(open);
                document.body.style.overflow = open ? "hidden" : "";
              }}
              role="button"
              aria-label="Menú"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div className={`mobile-nav${mobileOpen ? " open" : ""}`} id="mobileNav">
        <div className="mob-sec">Nosotros</div>
        <a href="#about" className="mob-link sub" onClick={handleMobileLink}>
          <i className="fas fa-bullseye"></i> Misión y Visión
        </a>
        <a href="#autoridades" className="mob-link sub" onClick={handleMobileLink}>
          <i className="fas fa-users"></i> Autoridades
        </a>
        <a href="#valores" className="mob-link sub" onClick={handleMobileLink}>
          <i className="fas fa-heart"></i> Valores
        </a>
        <a href="#modelo" className="mob-link sub" onClick={handleMobileLink}>
          <i className="fas fa-graduation-cap"></i> Modelo Educativo
        </a>
        <a href="#convenios" className="mob-link sub" onClick={handleMobileLink}>
          <i className="fas fa-handshake"></i> Convenios
        </a>
        <div className="mob-sec">CENACAP</div>
        <a href="#cenacap" className="mob-link sub" onClick={handleMobileLink}>
          <i className="fas fa-leaf"></i> Gestión y Calidad
        </a>
        <a href="#cenacap" className="mob-link sub" onClick={handleMobileLink}>
          <i className="fas fa-palette"></i> Diseño y Tecnología
        </a>
        <div className="mob-sec">INFOCADE</div>
        <a href="#infocade" className="mob-link sub" onClick={handleMobileLink}>
          <i className="fas fa-whistle"></i> Arbitraje y Entrenadores
        </a>
        <a href="#infocade" className="mob-link sub" onClick={handleMobileLink}>
          <i className="fas fa-chart-line"></i> Negocios y Gestión
        </a>
        <div className="mob-sec">Más</div>
        <a href="#eventos" className="mob-link" onClick={handleMobileLink}>
          <i className="fas fa-calendar-days"></i> Seminarios y Eventos
        </a>
        <a href="#noticias" className="mob-link" onClick={handleMobileLink}>
          <i className="fas fa-newspaper"></i> Noticias
        </a>
        <a href="#contacto" className="mob-link" onClick={handleMobileLink}>
          <i className="fas fa-location-dot"></i> Contacto
        </a>
        <div className="mob-cta">
          <a href="#inscripcion" className="btn btn-primary btn-full" onClick={handleMobileLink}>
            <i className="fas fa-pen-to-square"></i> Inscribirse Ahora
          </a>
        </div>
      </div>
    </>
  );
}


Noticias.tsx
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


Preloader.tsx
"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="preloader" className={hidden ? "hidden" : ""}>
      <div className="pre-logo">
        Corporación Boliviana de
        <br />
        <em>Talento y Formación Integral</em>
      </div>
      <div className="pre-sub">CENACAP &nbsp;·&nbsp; INFOCADE</div>
      <div className="pre-ring"></div>
    </div>
  );
}




Stats.tsx
"use client";

import { useEffect, useRef } from "react";
import { stats } from "@/lib/data";

export default function Stats() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const counters = grid.querySelectorAll<HTMLElement>(".counter");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !e.target.getAttribute("data-counted")) {
            e.target.setAttribute("data-counted", "1");
            const target = parseInt(e.target.getAttribute("data-target") || "0");
            const dur = 2000;
            let start: number | null = null;
            const step = (ts: number) => {
              if (!start) start = ts;
              const prog = Math.min((ts - start) / dur, 1);
              const ease = 1 - Math.pow(1 - prog, 3);
              e.target.textContent = Math.floor(ease * target).toString();
              if (prog < 1) requestAnimationFrame(step);
              else e.target.textContent = target.toString();
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="stats" className="section-pad-sm" style={{ background: "var(--c-night)" }}>
      <div className="container">
        <div className="stats-grid" ref={gridRef}>
          {stats.map((s, i) => (
            <div
              className="stat-item"
              data-reveal
              key={i}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="stat-icon">
                <i className={`fas ${s.icon}`}></i>
              </div>
              <div className="stat-num">
                <span className="counter" data-target={s.value}>
                  0
                </span>
                <span className="suf">{s.suffix}</span>
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


Testimonios.tsx
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


Ticker.tsx
"use client";

import { tickerData } from "@/lib/data";

export default function Ticker() {
  const items = [...tickerData, ...tickerData];

  return (
    <div className="ticker-wrap">
      <div className="ticker-track" id="tickerTrack">
        {items.map((b, i) => (
          <div className="ticker-item" key={i}>
            <div className="ticker-icon">{b.abbr.charAt(0)}</div>
            <span className="ticker-name">{b.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}


Valores.tsx
"use client";

import { useState } from "react";
import { valores } from "@/lib/data";

export default function Valores() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAcc = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="valores" className="section-pad" style={{ background: "var(--c-dark)" }}>
      <div className="container">
        <div data-reveal>
          <div className="eyebrow">
            <i className="fas fa-heart"></i> Nuestros valores
          </div>
          <h2 className="section-title">
            Valores <em>Corporativos</em>
          </h2>
        </div>
        <div className="valores-grid">
          <div className="valores-left" data-reveal="left">
            <div className="valores-placeholder">
              <img
                src="/assets/img/valores-grupo.jpg"
                alt="Equipo y valores institucionales"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="accordion" id="valoresAccordion" data-reveal="right">
            {valores.map((v, i) => (
              <div className={`acc-item${openIndex === i ? " open" : ""}`} key={i}>
                <div className="acc-head" onClick={() => toggleAcc(i)}>
                  <div className="acc-head-left">
                    <div className="acc-ico">
                      <i className={`fas ${v.icon}`}></i>
                    </div>
                    <div>
                      <div className="acc-title">{v.title}</div>
                      <div className="acc-sub">{v.subtitle}</div>
                    </div>
                  </div>
                  <i className="fas fa-chevron-down acc-chev"></i>
                </div>
                <div
                  className="acc-body"
                  style={{
                    maxHeight: openIndex === i ? "200px" : "0",
                  }}
                >
                  <div className="acc-inner">{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


whatsAppFloat.tsx
"use client";

import { institution } from "@/lib/data";

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${institution.whatsapp}?text=Hola,%20deseo%20información%20sobre%20los%20cursos`}
      className="wa-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
}

src/hooks/useReveal.ts

"use client";

import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}


src/lib/data.ts
export const institution = {
  name: "Corporación Boliviana de Talento y Formación Integral",
  shortName: "CBTI",
  whatsapp: "59177101440",
  phone: "+591 77101440",
  email: "info@cenacap.edu.bo",
  address: "Calle Reza Nro. 0236, entre España y Baptista, Cochabamba – Bolivia",
  heroImage: "/assets/img/lan.png",
};

export const tickerData = [
  { abbr: "CB", name: "Corporación Boliviana" },
  { abbr: "CE", name: "CENACAP" },
  { abbr: "IN", name: "INFOCADE" },
  { abbr: "CB", name: "Cochabamba, Bolivia" },
  { abbr: "ED", name: "Educación Técnica" },
  { abbr: "DE", name: "Deporte de Alto Rendimiento" },
  { abbr: "FO", name: "Formación Integral" },
  { abbr: "CE", name: "Certificación Oficial" },
];

export const features = [
  {
    num: "01",
    icon: "fa-briefcase",
    title: "Orientado al Empleo",
    text: "Programas diseñados con el sector productivo para garantizar las competencias que el mercado laboral realmente necesita.",
  },
  {
    num: "02",
    icon: "fa-trophy",
    title: "Excelencia Deportiva",
    text: "Programas de alto rendimiento, arbitraje, entrenamiento y gestión deportiva con metodologías internacionales.",
  },
  {
    num: "03",
    icon: "fa-medal",
    title: "Certificación Oficial",
    text: "Títulos reconocidos por el Ministerio de Educación de Bolivia y entidades aliadas nacionales e internacionales.",
  },
  {
    num: "04",
    icon: "fa-users",
    title: "Inclusión y Bienestar",
    text: "Promovemos igualdad de oportunidades, diversidad y hábitos saludables en toda la comunidad educativa.",
  },
];

export const autoridades = [
  { nombre: "Mg. Juan Carlos Rojas", cargo: "Director General", foto: "" },
  { nombre: "Lic. María Elena Vargas", cargo: "Directora Académica", foto: "" },
  { nombre: "Prof. Roberto Quispe", cargo: "Director Deportivo INFOCADE", foto: "" },
  { nombre: "Ing. Sandra Mamani", cargo: "Directora Técnica CENACAP", foto: "" },
];

export const valores = [
  {
    icon: "fa-heart",
    title: "Integridad",
    subtitle: "Ética y honestidad",
    desc: "Actuamos con rectitud, verdad y coherencia entre lo que pensamos, decimos y hacemos. La integridad es el fundamento de nuestra reputación institucional.",
  },
  {
    icon: "fa-lightbulb",
    title: "Innovación",
    subtitle: "Mejora continua",
    desc: "Buscamos constantemente nuevas metodologías, tecnologías y enfoques para ofrecer una formación de vanguardia que responda a los desafíos actuales.",
  },
  {
    icon: "fa-users",
    title: "Compromiso Social",
    subtitle: "Impacto en la comunidad",
    desc: "Trabajamos para generar un impacto positivo en la sociedad boliviana, formando profesionales que contribuyan al desarrollo del país.",
  },
  {
    icon: "fa-star",
    title: "Excelencia",
    subtitle: "Calidad superior",
    desc: "Nos esforzamos por alcanzar los más altos estándares de calidad en todos nuestros procesos educativos y de servicio.",
  },
  {
    icon: "fa-hands-holding-child",
    title: "Inclusión",
    subtitle: "Igualdad de oportunidades",
    desc: "Garantizamos el acceso equitativo a la educación técnica y deportiva, sin distinción de género, origen o condición socioeconómica.",
  },
  {
    icon: "fa-handshake",
    title: "Colaboración",
    subtitle: "Trabajo en equipo",
    desc: "Fomentamos alianzas estratégicas con instituciones públicas y privadas para enriquecer la experiencia formativa de nuestros estudiantes.",
  },
];

export const stats = [
  { icon: "fa-users", value: 3500, suffix: "+", label: "Estudiantes formados" },
  { icon: "fa-graduation-cap", value: 45, suffix: "", label: "Carreras técnicas" },
  { icon: "fa-trophy", value: 120, suffix: "", label: "Campeones formados" },
  { icon: "fa-handshake", value: 25, suffix: "", label: "Convenios activos" },
];

export const cenacapCarreras = {
  nombre: "CENACAP",
  cenacapLogo:"/assets/img/logocenacap.png",
  carreras: [
    {
      categoria: "Gestión y Calidad",
      icono: "fa-leaf",
      cursos: [
        { nombre: "Sistemas de Gestión Ambiental", desc: "Gestión ambiental empresarial, normativas ISO 14001 y desarrollo sostenible.", modalidad: "Presencial / Virtual", certificado: true, imagen: "/assets/img/1.png" },
        { nombre: "Sistemas de Gestión de Calidad", desc: "Implementación de normas ISO 9001, auditoría de calidad y mejora continua.", modalidad: "Presencial", certificado: true, imagen: "/assets/img/2.png" },
        { nombre: "Supervisión y Liderazgo en Prevención de Riesgos", desc: "Gestión de riesgos laborales, seguridad industrial y salud ocupacional.", modalidad: "Presencial", certificado: true, imagen: "/assets/img/5.png" },
      ],
    },
    {
      categoria: "Diseño y Tecnología",
      icono: "fa-palette",
      cursos: [
        { nombre: "Diseño Gráfico y Producción Audiovisual", desc: "Adobe Creative Suite, motion graphics, edición de video y producción digital.", modalidad: "Presencial / Virtual", certificado: true, imagen: "/assets/img/6.png" },
        { nombre: "Microsoft Project", desc: "Gestión de proyectos con MS Project, planificación y control de cronogramas.", modalidad: "Virtual", certificado: true, imagen: "/assets/img/3.png" },
      ],
    },
    {
      categoria: "Deporte y Rendimiento",
      icono: "fa-trophy",
      cursos: [
        { nombre: "Sistemas Tácticos Deportivos", desc: "Análisis táctico, estrategias de juego y preparación deportiva especializada.", modalidad: "Presencial", certificado: true, imagen: "/assets/img/4.png" },
        { nombre: "Deporte de Alto Rendimiento y Competición", desc: "Preparación física, mental y técnica para deportistas de élite.", modalidad: "Presencial", certificado: true, imagen: "/assets/img/8.png" },
       ],
    },
  ],
};

export const infocadeCarreras = {
  nombre: "INFOCADE",
  infoLogo:"/assets/img/infoLogo.jpg",
  carreras: [
    { icono: "fa-whistle", nombre: "Arbitraje de Fútbol Amateur", desc: "Formación de árbitros con las reglas FIFA, control de partidos y gestión de incidencias." },
    { icono: "fa-volleyball", nombre: "Arbitraje de Voleyball en Cancha", desc: "Árbitros certificados para competencias de voleibol indoor y playa." },
    { icono: "fa-microphone", nombre: "Comunicación y Periodismo Deportivo", desc: "Relatos deportivos, cobertura mediática y producción de contenido." },
    { icono: "fa-futbol", nombre: "Entrenador de Fútbol", desc: "Licencia de entrenador, metodologías de entrenamiento y gestión de equipos." },
    { icono: "fa-umbrella-beach", nombre: "Entrenador de Beach Voley", desc: "Especialización en vóley playa, tácticas y preparación física específica." },
    { icono: "fa-chart-line", nombre: "Marketing Deportivo", desc: "Estrategias de marketing aplicadas al deporte, patrocinios y gestión de marcas." },
    { icono: "fa-clipboard-check", nombre: "Auditoría de Organizaciones Deportivas", desc: "Control y auditoría de entidades deportivas, cumplimiento normativo." },
    { icono: "fa-users-gear", nombre: "Dirigencia Deportiva", desc: "Gestión de clubes, federaciones y organizaciones deportivas." },
    { icono: "fa-calendar-check", nombre: "Gestión de Eventos Deportivos y Protocolo", desc: "Organización de eventos, logística, protocolo y ceremonias." },
    { icono: "fa-industry", nombre: "Escuela de Negocios Industriales", desc: "Gestión empresarial aplicada al sector industrial y deportivo." },
    { icono: "fa-laptop-code", nombre: "Informática Industrial", desc: "Tecnología de la información aplicada a la gestión deportiva y empresarial." },
  ],
};

export const eventos = [
  { dia: "15", mes: "MAY", tipo: "seminario", tipoLabel: "Seminario", titulo: "Seminario de Gestión Deportiva Internacional", hora: "09:00 - 13:00", lugar: "Auditorio CENACAP" },
  { dia: "22", mes: "MAY", tipo: "conferencia", tipoLabel: "Conferencia", titulo: "Inteligencia Artificial en el Deporte", hora: "19:00 - 21:00", lugar: "Virtual - Zoom" },
  { dia: "05", mes: "JUN", tipo: "taller", tipoLabel: "Taller", titulo: "Taller de Arbitraje FIFA 2025", hora: "08:00 - 18:00", lugar: "Canchas INFOCADE" },
  { dia: "12", mes: "JUN", tipo: "curso", tipoLabel: "Curso", titulo: "Curso de Marketing Digital Deportivo", hora: "19:00 - 22:00", lugar: "Aula Virtual" },
];

export const convenios = [
  { abbr: "MINEDU", name: "Ministerio de Educación", desc: "Reconocimiento oficial de títulos y certificados técnicos." },
  { abbr: "FCB", name: "Federación de Fútbol", desc: "Convenio para arbitraje, entrenamiento y desarrollo deportivo." },
  { abbr: "UCB", name: "U. Católica Boliviana", desc: "Articulación para continuidad de estudios universitarios." },
  { abbr: "CEP", name: "Comité Olímpico", desc: "Programas de alto rendimiento y deporte competitivo." },
  { abbr: "SIE", name: "Sistema de Información", desc: "Certificación en tecnologías de información empresarial." },
  { abbr: "CBC", name: "Cámara de Comercio", desc: "Prácticas profesionales e inserción laboral." },
  { abbr: "FIFA", name: "FIFA Forward", desc: "Programa de desarrollo del fútbol base." },
  { abbr: "IBN", name: "Instituto Boliviano", desc: "Investigación y colaboración académica." },
];

export const testimonios = [
  { nombre: "Carlos M.", rol: "Egresado CENACAP", estrellas: 5, texto: "La formación que recibí en CENACAP cambió mi vida profesional. Hoy trabajo como gerente de calidad en una multinacional gracias a las competencias adquiridas." },
  { nombre: "Ana L.", rol: "Entrenadora INFOCADE", estrellas: 5, texto: "INFOCADE me dio las herramientas para convertir mi pasión por el deporte en una carrera profesional. Las metodologías de enseñanza son de nivel internacional." },
  { nombre: "Pedro R.", rol: "Árbitro Certificado", estrellas: 5, texto: "El curso de arbitraje fue excepcional. Los instructores son profesionales activos y las instalaciones de primer nivel. Totalmente recomendado." },
  { nombre: "Lucía G.", rol: "Diseñadora Gráfica", estrellas: 4, texto: "El programa de Diseño Gráfico está actualizado con las últimas tendencias del mercado. Aprendí Adobe Creative Suite a profundidad." },
  { nombre: "Marcos T.", rol: "Gestor Ambiental", estrellas: 5, texto: "Gracias a la certificación en Gestión Ambiental, pude liderar proyectos de sostenibilidad en importantes empresas del país." },
  { nombre: "Diana S.", rol: "Egresada Marketing", estrellas: 5, texto: "El enfoque práctico del marketing deportivo me permitió trabajar con clubes profesionales desde el primer año de egreso." },
];

export const noticias = [
  { tipo: "actividad", tipoLabel: "Actividad", titulo: "Nueva cohorte de Entrenadores de Fútbol 2025", desc: "Abierta la convocatoria para la nueva generación de entrenadores certificados. Inscripciones hasta el 30 de mayo.", fecha: "3 May 2025", tag: "INFOCADE", tagIcon: "fa-futbol" },
  { tipo: "deportivo", tipoLabel: "Deportivo", titulo: "Torneo Interinstitucional de Vóley Playa", desc: "Nuestros estudiantes de Beach Voley participarán en el torneo nacional este fin de semana.", fecha: "1 May 2025", tag: "Deporte", tagIcon: "fa-trophy" },
  { tipo: "curso", tipoLabel: "Nuevo Curso", titulo: "Curso Intensivo de Gestión de Calidad ISO 9001", desc: "Aprende a implementar sistemas de gestión de calidad en solo 4 semanas. Certificación internacional.", fecha: "28 Abr 2025", tag: "CENACAP", tagIcon: "fa-leaf" },
];


