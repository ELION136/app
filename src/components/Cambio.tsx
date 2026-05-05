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
