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
