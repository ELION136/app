import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Corporación Boliviana de Talento y Formación Integral — CENACAP e INFOCADE",
  description:
    "Corporación Boliviana de Talento y Formación Integral. Formación técnica, deportiva e integral en Cochabamba, Bolivia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Preconnects */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet"></link>

        {/* ─── FUENTES ───────────────────────────────────────────────────────────
            • Noto Sans Medefaidrin → títulos grandes del hero/slider
            • Inter               → navegación, párrafos, botones (mayoría)
            • Roboto              → botones específicos con clase .btn-roboto
        ──────────────────────────────────────────────────────────────────────── */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Medefaidrin:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700;800;900&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />

        {/* ─── PHOSPHOR ICONS (modernos, línea fina, no genérico) ─────────────── */}
        <script
          src="https://unpkg.com/@phosphor-icons/web@2.1.1/src/index.js"
          async
        />

        {/* Font Awesome como fallback para iconos existentes en el código */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}