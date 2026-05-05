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
