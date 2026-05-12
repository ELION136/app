// src/hooks/useScrollProgress.ts
// Alimenta la línea de progreso del Navbar
// Úsalo en Navbar.tsx con: useScrollProgress("navScrollLine")

"use client";
import { useEffect } from "react";

export function useScrollProgress(elementId: string) {
  useEffect(() => {
    const el = document.getElementById(elementId);
    if (!el) return;

    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      el.style.width = pct + "%";
    };

    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [elementId]);
}