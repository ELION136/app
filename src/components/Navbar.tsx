"use client";

import { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      if (y > 500) {
        setHidden(y > lastY.current + 4);
      } else {
        setHidden(false);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileLink = () => {
    setMobileOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <nav
        id="navbar"
        className={[
          scrolled ? "scrolled" : "transparent",
          hidden && !mobileOpen ? "nav-hidden" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="container">
          <div className="nav-wrap">
            {/* Logo — imagen directa, sin nav-mark para evitar el cuadrado */}
            <a href="#hero" className="nav-logo">
              <img
                src="/assets/img/logo.png"
                alt="Logo CBTI"
                className="nav-logo-img"
              />
              <div className="nav-logotype">
                <strong>Corporación Boliviana</strong>
                <span>de Talento y Formación Integral</span>
              </div>
            </a>

            {/* Links desktop */}
            <div className="nav-links">
              <div className="nav-item">
                <button className="nav-link">
                  <i className="ph ph-buildings" /> Nosotros{" "}
                  <i className="ph ph-caret-down chevron" />
                </button>
                <div className="nav-drop">
                  <div className="drop-label">Institución</div>
                  <a href="#about" className="drop-link"><i className="ph ph-target" /> Misión y Visión</a>
                  <a href="#autoridades" className="drop-link"><i className="ph ph-users-three" /> Autoridades</a>
                  <a href="#valores" className="drop-link"><i className="ph ph-heart" /> Valores Corporativos</a>
                  <a href="#modelo" className="drop-link"><i className="ph ph-graduation-cap" /> Modelo Educativo</a>
                  <a href="#convenios" className="drop-link"><i className="ph ph-handshake" /> Convenios Suscritos</a>
                </div>
              </div>

              <div className="nav-item">
                <button className="nav-link">
                  <i className="ph ph-books" /> Carreras{" "}
                  <i className="ph ph-caret-down chevron" />
                </button>
                <div className="nav-drop">
                  <div className="drop-label">CENACAP — Formación Técnica</div>
                  <a href="#cenacap" className="drop-link"><i className="ph ph-leaf" /> Gestión Ambiental y Calidad</a>
                  <a href="#cenacap" className="drop-link"><i className="ph ph-palette" /> Diseño Gráfico y Audiovisual</a>
                  <a href="#cenacap" className="drop-link"><i className="ph ph-trophy" /> Deporte de Alto Rendimiento</a>
                  <div className="drop-divider" />
                  <div className="drop-label">INFOCADE — Deporte y Negocios</div>
                  <a href="#infocade" className="drop-link"><i className="ph ph-whistle" /> Arbitraje y Entrenadores</a>
                  <a href="#infocade" className="drop-link"><i className="ph ph-chart-line-up" /> Marketing y Negocios</a>
                </div>
              </div>

              <div className="nav-item">
                <button className="nav-link">
                  <i className="ph ph-calendar-dots" /> Seminarios{" "}
                  <i className="ph ph-caret-down chevron" />
                </button>
                <div className="nav-drop">
                  <a href="#eventos" className="drop-link"><i className="ph ph-clock" /> Próximos Eventos</a>
                  <a href="#eventos" className="drop-link"><i className="ph ph-microphone-stage" /> Conferencias</a>
                  <a href="#eventos" className="drop-link"><i className="ph ph-chalkboard-teacher" /> Talleres</a>
                </div>
              </div>

              <a href="#noticias" className="nav-link"><i className="ph ph-newspaper" /> Noticias</a>
              <a href="#contacto" className="nav-link"><i className="ph ph-map-pin" /> Contacto</a>
            </div>

            {/* CTA */}
            <a href="#inscripcion" className="btn btn-primary nav-cta btn-sm">
              <i className="ph ph-pencil-simple" /> Inscribirse
            </a>

            {/* Hamburger */}
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
              <span /><span /><span />
            </div>
          </div>
        </div>
        <div className="nav-scroll-line" id="navScrollLine" />
      </nav>

      {/* Mobile Nav */}
      <div className={`mobile-nav${mobileOpen ? " open" : ""}`} id="mobileNav">
        <div className="mob-sec">Nosotros</div>
        <a href="#about" className="mob-link sub" onClick={handleMobileLink}><i className="ph ph-target" /> Misión y Visión</a>
        <a href="#autoridades" className="mob-link sub" onClick={handleMobileLink}><i className="ph ph-users-three" /> Autoridades</a>
        <a href="#valores" className="mob-link sub" onClick={handleMobileLink}><i className="ph ph-heart" /> Valores</a>
        <a href="#modelo" className="mob-link sub" onClick={handleMobileLink}><i className="ph ph-graduation-cap" /> Modelo Educativo</a>
        <a href="#convenios" className="mob-link sub" onClick={handleMobileLink}><i className="ph ph-handshake" /> Convenios</a>

        <div className="mob-sec">CENACAP</div>
        <a href="#cenacap" className="mob-link sub" onClick={handleMobileLink}><i className="ph ph-leaf" /> Gestión y Calidad</a>
        <a href="#cenacap" className="mob-link sub" onClick={handleMobileLink}><i className="ph ph-palette" /> Diseño y Tecnología</a>

        <div className="mob-sec">INFOCADE</div>
        <a href="#infocade" className="mob-link sub" onClick={handleMobileLink}><i className="ph ph-whistle" /> Arbitraje y Entrenadores</a>
        <a href="#infocade" className="mob-link sub" onClick={handleMobileLink}><i className="ph ph-chart-line-up" /> Negocios y Gestión</a>

        <div className="mob-sec">Más</div>
        <a href="#eventos" className="mob-link" onClick={handleMobileLink}><i className="ph ph-calendar-dots" /> Seminarios y Eventos</a>
        <a href="#noticias" className="mob-link" onClick={handleMobileLink}><i className="ph ph-newspaper" /> Noticias</a>
        <a href="#contacto" className="mob-link" onClick={handleMobileLink}><i className="ph ph-map-pin" /> Contacto</a>

        <div className="mob-cta">
          <a href="#inscripcion" className="btn btn-primary btn-full" onClick={handleMobileLink}>
            <i className="ph ph-pencil-simple" /> Inscribirse Ahora
          </a>
        </div>
      </div>
    </>
  );
}