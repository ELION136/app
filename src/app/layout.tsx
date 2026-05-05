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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
