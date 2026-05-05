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
