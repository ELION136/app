"use client";

import { institution } from "@/lib/data";
import { useEffect, useRef, useState, useCallback } from "react";

/* ─── Imágenes del carrusel ────────────────────────────────────────────────
   Ajusta estos paths a tus imágenes reales en /public/assets/img/
   Se pueden agregar tantas como quieras.
──────────────────────────────────────────────────────────────────────────── */
const HERO_SLIDES = [
  {
    src: institution.heroImage,
    title: "Formación Integral",
    subtitle: "Para el Futuro de Bolivia",
  },
  {
    src: "/assets/img/hu.png",
    title: "Excelencia Deportiva",
    subtitle: "Alto rendimiento y competición",
  },
  {
    src: "/assets/img/lu.png",
    title: "Certificación Oficial",
    subtitle: "Ministerio de Educación de Bolivia",
  },
  {
    src: "/assets/img/corp.JPG",
    title: "Talento Humano",
    subtitle: "Docentes de nivel internacional",
  },
];

const SLIDE_DURATION = 20000; // ms por slide

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  /* ── Partículas flotantes ── */
  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    const count = window.matchMedia("(max-width: 640px)").matches ? 12 : 24;
    for (let i = 0; i < count; i++) {
      const dot = document.createElement("span");
      Object.assign(dot.style, {
        position: "absolute",
        left: Math.random() * 100 + "vw",
        top: Math.random() * 100 + "%",
        width: 1 + Math.random() * 2.5 + "px",
        height: 1 + Math.random() * 2.5 + "px",
        borderRadius: "50%",
        background: "rgba(201, 168, 76, 0.55)",
        opacity: "0",
        animation: `particleRise ${6 + Math.random() * 6}s ${Math.random() * 8}s infinite linear`,
      });
      container.appendChild(dot);
    }
  }, []);

  /* ── Avance de slide ── */
  const goTo = useCallback(
    (idx: number) => {
      if (animating) return;
      setAnimating(true);
      setCurrent(idx);
      setTimeout(() => setAnimating(false), 800);
    },
    [animating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % HERO_SLIDES.length);
  }, [current, goTo]);

  /* ── Autoplay ── */
  useEffect(() => {
    intervalRef.current = setInterval(next, SLIDE_DURATION);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [next]);

  const resetTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, SLIDE_DURATION);
  };

  const handleDot = (idx: number) => {
    goTo(idx);
    resetTimer();
  };

  const handlePrev = () => {
    goTo((current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    resetTimer();
  };

  const handleNext = () => {
    next();
    resetTimer();
  };

  return (
    <section id="hero" className="hero-carousel">
      {/* ── Slides de fondo ── */}
      <div className="hero-slides-bg">
        {HERO_SLIDES.map((slide, i) => (
          <div
            key={i}
            className={`hero-slide-bg${i === current ? " active" : ""}${
              i === (current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length
                ? " leaving"
                : ""
            }`}
          >
            <img
              src={slide.src}
              alt={slide.title}
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* ── Overlay en capas (foco en imagen + legibilidad) ── */}
      <div className="hero-overlay-radial" />
      <div className="hero-overlay-bottom" />
      <div className="hero-overlay-vignette" />

      {/* ── Partículas ── */}
      <div
        ref={particlesRef}
        className="hero-particles"
        aria-hidden="true"
      />

      {/* ── Orbs decorativos ── */}
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />

      {/* ── Contenido principal ── */}
      <div className="hero-content">
        <div className="hero-badge" data-animate="fadeDown">
          <span className="hero-badge-dot" />
          Resolución Ministerial 0286/2025 — Cochabamba, Bolivia
        </div>

        {/* Título que cambia con el slide */}
        <div className="hero-title-wrap" key={current}>
          {/*<span className="hero-kicker" data-animate="fadeDown">
            Corporación Boliviana de Talento y Formación Integral
          </span>*/}
          <h1 className="hero-title" data-animate="fadeUp">
            {HERO_SLIDES[current].title}
            <br />
            <em>{HERO_SLIDES[current].subtitle}</em>
          </h1>
        </div>

        <p className="hero-desc" data-animate="fadeUp">
          Impulsamos el Aprendizaje, la Salud Física, el Bienestar y la Inclusión
          Social a través de programas educativos y deportivos de excelencia con{" "}
          <strong>INFOCADE</strong>, <strong>CENACAP</strong> y{" "}
          <strong>Nuestras Fundaciones</strong>
        </p>

        <div className="hero-actions" data-animate="fadeUp">
          <a href="#cenacap" className="btn btn-primary">
            <i className="ph ph-books" /> Ver Carreras
          </a>
          <a href="#inscripcion" className="btn btn-red">
            <i className="ph ph-user-plus" /> Inscribirse
          </a>
          <a
            href={`https://wa.me/${institution.whatsapp}?text=Hola,%20quiero%20información`}
            className="btn btn-wa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ph ph-whatsapp-logo" /> WhatsApp
          </a>
        </div>

        {/* Pills de unidades */}
        <div className="hero-brands" data-animate="fadeUp">
          <span className="hero-brands-sep">Nuestras unidades</span>
           <a href="#infocade" className="hero-pill">
            <span className="hero-pill-dot hero-pill-dot--blue" />
            <div>
              <span className="hero-pill-name">INFOCADE</span>
              <span className="hero-pill-sub">Instituto de Formación Deportiva</span>
            </div>
          </a>
          <a href="#cenacap" className="hero-pill">
            <span className="hero-pill-dot hero-pill-dot--green" />
            <div>
              <span className="hero-pill-name">CENACAP</span>
              <span className="hero-pill-sub">Centro de Capacitación Técnica</span>
            </div>
          </a>
         
          <a href="#infocade" className="hero-pill">
            <span className="hero-pill-dot hero-pill-dot--gold" />
            <div>
              <span className="hero-pill-name">FUNDACIÓN 1</span>
              <span className="hero-pill-sub">Desarrollo Comunitario</span>
            </div>
          </a>
          <a href="#infocade" className="hero-pill">
            <span className="hero-pill-dot hero-pill-dot--gold" />
            <div>
              <span className="hero-pill-name">FUNDACIÓN 2</span>
              <span className="hero-pill-sub">Desarrollo Comunitario</span>
            </div>
          </a>
        </div>
      </div>

      {/* ── Controles carrusel ── */}
      <button
        className="hero-arrow hero-arrow--prev"
        onClick={handlePrev}
        aria-label="Imagen anterior"
      >
        <i className="ph ph-caret-left" />
      </button>
      <button
        className="hero-arrow hero-arrow--next"
        onClick={handleNext}
        aria-label="Imagen siguiente"
      >
        <i className="ph ph-caret-right" />
      </button>

      {/* ── Dots de navegación ── */}
      <div className="hero-dots" role="tablist">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            className={`hero-dot${i === current ? " active" : ""}`}
            onClick={() => handleDot(i)}
            role="tab"
            aria-label={`Ir a slide ${i + 1}`}
            aria-selected={i === current}
          >
            <span className="hero-dot-bar" />
          </button>
        ))}
      </div>

      {/* ── Progress bar ── */}
      <div className="hero-progress">
        <div
          className="hero-progress-bar"
          key={current}
          style={{ animationDuration: `${SLIDE_DURATION}ms` }}
        />
      </div>

      {/* ── Scroll hint ── */}
      <div className="hero-scroll">
        <div className="scroll-mouse" />
        <span className="scroll-text">Explorar</span>
      </div>
    </section>
  );
}