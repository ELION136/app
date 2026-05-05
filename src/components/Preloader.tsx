"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="preloader" className={hidden ? "hidden" : ""}>
      <div className="pre-logo">
        Corporación Boliviana de
        <br />
        <em>Talento y Formación Integral</em>
      </div>
      <div className="pre-sub">CENACAP &nbsp;·&nbsp; INFOCADE</div>
      <div className="pre-ring"></div>
    </div>
  );
}
