"use client";

import { tickerData } from "@/lib/data";

export default function Ticker() {
  const items = [...tickerData, ...tickerData];

  return (
    <div className="ticker-wrap">
      <div className="ticker-track" id="tickerTrack">
        {items.map((b, i) => (
          <div className="ticker-item" key={i}>
            <div className="ticker-icon">{b.abbr.charAt(0)}</div>
            <span className="ticker-name">{b.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
