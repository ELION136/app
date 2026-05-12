"use client";

import { tickerData } from "@/lib/data";

export default function Ticker() {
  // Triplicamos para garantizar loop visual perfecto sin saltos
  const items = [...tickerData, ...tickerData, ...tickerData];

  return (
    <section className="ticker-section" aria-label="Instituciones aliadas">
      {/* Label lateral */}
      <div className="ticker-label">
        <span>Avalado por</span>
        <div className="ticker-label-line" />
      </div>

      {/* Carrusel */}
      <div className="ticker-stage">
        <div className="ticker-fade ticker-fade--left" />
        <div className="ticker-fade ticker-fade--right" />

        <div className="ticker-track-logos">
          {items.map((item, i) => (
            <div className="ticker-logo-item" key={i}>
              <div className="ticker-logo-frame">
                <img
                  src={item.logo}
                  alt={item.name}
                  loading="lazy"
                  onError={(e) => {
                    const el = e.currentTarget;
                    el.style.display = "none";
                    const fb = el.nextElementSibling as HTMLElement | null;
                    if (fb) fb.style.display = "flex";
                  }}
                />
                <div className="ticker-logo-fallback" style={{ display: "none" }}>
                  {item.name.split(" ").slice(0, 2).map((w) => w[0]).join("")}
                </div>
              </div>
              <span className="ticker-logo-name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}