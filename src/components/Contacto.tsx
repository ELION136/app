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
