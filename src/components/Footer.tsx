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
