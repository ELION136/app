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
          Formación integral
          <br />
          para el <em>futuro</em> de Bolivia
        </h1>
        <p className="hero-desc">
          Impulsamos el aprendizaje, la salud física, el bienestar y la inclusión
          social a través de programas educativos y deportivos de excelencia con{" "}
          <strong style={{ color: "#00000" }}>CENACAP</strong> e{" "}
          <strong style={{ color: "#00000" }}>INFOCADE</strong>.
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
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-mouse"></div>
        <span className="scroll-text">Explorar</span>
      </div>
    </section>
  );
}
