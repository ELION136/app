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
