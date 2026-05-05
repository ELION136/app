"use client";

import { institution } from "@/lib/data";

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${institution.whatsapp}?text=Hola,%20deseo%20información%20sobre%20los%20cursos`}
      className="wa-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
}
