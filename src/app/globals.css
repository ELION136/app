@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700&display=swap');

:root {
  /* ─── PALETA DE COLORES ─────── */
  --c-primary: #0F1F2E;
  --c-primary-light: #162840;
  --c-secondary: #1A5C38;
  --c-accent: #4A5568;
  --c-accent-dark: #162840;
  --c-white: #ffffff;
  --c-surface: #F7F3EC;
  --c-card: #ffffff;
  --c-border: #d4c9b8;
  --c-border-light: #e8e0d2;
  --c-text: #0F1F2E;
  --c-text-secondary: #4A5568;
  --c-muted: #718096;
  --c-gold: #C9A84C;
  --c-success: #1A5C38;
  --c-info: #0F1F2E;
  --c-gradient-start: #0F1F2E;
  --c-gradient-end: #162840;
  /*--f-display: 'Merriweather', Georgia, 'Times New Roman', serif;*/
  --f-display:  'Playfair', serif;
  /*--f-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;*/
  --f-body: 'Roboto', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  --f-alt: 'Roboto', sans-serif;
  --r-xs: 2px;
  --r-sm: 4px;
  --r-md: 8px;
  --r-lg: 12px;
  --r-xl: 20px;
  --r-full: 9999px;
  --sh-card: 0 1px 3px rgba(0, 0, 0, 0.08);
  --sh-hover: 0 4px 12px rgba(0, 0, 0, 0.12);
  --sh-glow: 0 0 24px rgba(15, 31, 46, 0.08);
  --hero-overlay-start: rgba(10, 18, 30, 0.45);
  --hero-overlay-end:   rgba(10, 18, 30, 0.75);
  --dur: 0.25s;
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--f-body);
  background: var(--c-white);
  color: var(--c-text);
  line-height: 1.6;
  overflow-x: hidden;
  font-weight: 400;
  font-size: 16px;
}

::selection {
  background: var(--c-primary);
  color: var(--c-white);
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--c-surface);
}

::-webkit-scrollbar-thumb {
  background: var(--c-muted);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--c-text-secondary);
}

img {
  max-width: 100%;
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  cursor: pointer;
  border: none;
  background: none;
  font-family: inherit;
}

/* ─── LAYOUT ─────────────────────────────────── */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
}

.section-pad {
  padding: 80px 0;
}

.section-pad-sm {
  padding: 56px 0;
}

/* ─── DIVIDERS ───────────────────────────────── */
.section-divider {
  width: 60px;
  height: 3px;
  background: var(--c-gold);
  margin: 0 auto 32px;
}

/* ─── TYPOGRAPHY ─────────────────────────────── */
.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--f-body);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--c-gold);
  margin-bottom: 16px;
}

.eyebrow::before {
  content: '';
  width: 20px;
  height: 1.5px;
  background: var(--c-gold);
  flex-shrink: 0;
}

.section-title {
  font-family: var(--f-display);
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 700;
  line-height: 1.2;
  color: var(--c-primary);
  margin-bottom: 16px;
}

.section-title em {
  font-style: normal;
  color: var(--c-gold);
}

.section-sub {
  font-size: 1rem;
  color: var(--c-text-secondary);
  max-width: 600px;
  line-height: 1.7;
  font-weight: 400;
}


 
/* ─── BTN ROBOTO ─────────────────────────────────────────────────────────── */
.btn-roboto {
  font-family: var(--f-alt);
  font-weight: 500;
  letter-spacing: 0.04em;
}
 
/* ─── BUTTONS ────────────────────────────────── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: var(--r-sm);
  font-family: var(--f-body);
  font-weight: 600;
  font-size: 0.85rem;
  transition: all var(--dur) var(--ease);
  white-space: nowrap;
  cursor: pointer;
  letter-spacing: 0.02em;
  border: 2px solid transparent;
}

.btn-primary {
  background: var(--c-primary);
  color: var(--c-white);
  box-shadow: 0 2px 8px rgba(15, 31, 46, 0.15);
}

.btn-red{
  background: rgb(233, 117, 40);
  color: var(--c-white);
  box-shadow: 0 2px 8px rgba(87, 53, 40, 0.15);
}
.btn-red:hover {
  background: rgb(243, 67, 67);
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(27, 23, 9, 0.25);
}

.btn-primary:hover {
  background: var(--c-primary-light);
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(15, 31, 46, 0.25);
}

.btn-ghost {
  border-color: var(--c-border);
  color: var(--c-primary);
}

.btn-ghost:hover {
  border-color: var(--c-primary);
  color: var(--c-primary);
  background: rgba(15, 31, 46, 0.03);
  transform: translateY(-1px);
}

.btn-wa {
  background: #25d366;
  color: #ffffff;
}

.btn-wa:hover {
  background: #1db954;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(37, 211, 102, 0.3);
}

.btn-sm {
  padding: 8px 16px;
  font-size: 0.8rem;
}

.btn-full {
  width: 100%;
  justify-content: center;
}

/* ─── CHIPS ──────────────────────────────────── */
.chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: var(--r-full);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.chip-green {
  background: rgba(26, 92, 56, 0.08);
  color: #1A5C38;
  border: 1px solid rgba(26, 92, 56, 0.15);
}

.chip-gold {
  background: rgba(201, 168, 76, 0.1);
  color: #8b7340;
  border: 1px solid rgba(201, 168, 76, 0.2);
}

.chip-blue {
  background: rgba(15, 31, 46, 0.06);
  color: var(--c-primary);
  border: 1px solid rgba(15, 31, 46, 0.12);
}

.chip-conf {
  background: rgba(113, 128, 150, 0.08);
  color: var(--c-text-secondary);
  border: 1px solid rgba(113, 128, 150, 0.12);
}

/* ─── CARD ───────────────────────────────────── */
.card {
  background: var(--c-card);
  border: 1px solid var(--c-border-light);
  border-radius: var(--r-md);
  overflow: hidden;
  transition: all var(--dur) var(--ease);
  box-shadow: var(--sh-card);
}

.card:hover {
  border-color: var(--c-border);
  box-shadow: var(--sh-hover);
  transform: translateY(-2px);
}

/* ─── PRELOADER ──────────────────────────────── */
#preloader {
  position: fixed;
  inset: 0;
  background: var(--c-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: opacity 0.5s var(--ease), visibility 0.5s;
}

#preloader.hidden {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.pre-logo {
  font-family: var(--f-display);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: var(--c-primary);
  text-align: center;
  line-height: 1.2;
  margin-bottom: 4px;
}

.pre-logo em {
  font-style: italic;
  color: var(--c-gold);
}

.pre-sub {
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--c-muted);
  margin-bottom: 32px;
}

.pre-ring {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid var(--c-border-light);
  border-top-color: var(--c-primary);
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* ─── WA FLOAT ───────────────────────────────── */
.wa-float {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 500;
  width: 50px;
  height: 50px;
  background: #25d366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 1.3rem;
  box-shadow: 0 4px 16px rgba(37, 211, 102, 0.25);
  transition: all var(--dur) var(--ease);
}

.wa-float:hover {
  transform: scale(1.08);
  box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4);
}

/* ─── TICKER (con imágenes reales) ──────────── */
/* ─── TICKER OSCURO CON IMÁGENES REALES ─── */
.ticker-section {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 14px 0;
  background: var(--c-primary, #0f172a); /* fondo oscuro */
  overflow: hidden;
  position: relative;
}

/* Etiqueta lateral */
.ticker-label {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.6);
  padding-left: 1.5rem;
}

.ticker-label span {
  writing-mode: vertical-rl;
  rotate: 180deg; /* lectura hacia arriba */
}

.ticker-label-line {
  width: 1px;
  height: 3.5rem;
  background: linear-gradient(to bottom, rgba(255,255,255,0.2), transparent);
}

/* Contenedor del carrusel */
.ticker-stage {
  flex: 1;
  position: relative;
  overflow: hidden;
  min-width: 0;
}

/* Degradados laterales que se funden con el fondo */
.ticker-fade {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 4rem;
  z-index: 2;
  pointer-events: none;
}

.ticker-fade--left {
  left: 0;
  background: linear-gradient(to right, var(--c-primary, #0f172a), transparent);
}

.ticker-fade--right {
  right: 0;
  background: linear-gradient(to left, var(--c-primary, #0f172a), transparent);
}

/* Pista animada */
.ticker-track-logos {
  display: flex;
  gap: 2rem;
  width: max-content;
  animation: ticker-scroll 30s linear infinite;
}

.ticker-track-logos:hover {
  animation-play-state: paused;
}

/* Animación: mueve exactamente un tercio (porque el contenido está triplicado) */
@keyframes ticker-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-33.333%); }
}

/* Ítem de logo */
.ticker-logo-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 20px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  white-space: nowrap;
  flex-shrink: 0;
  transition: border-color 0.3s, background 0.3s;
}

.ticker-logo-item:hover {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
}

/* Marco flexible para la imagen (no un cuadrado fijo) */
.ticker-logo-frame {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;          /* altura uniforme para todos los logos */
  flex-shrink: 0;
}

.ticker-logo-frame img {
  display: block;
  height: 100%;          /* ocupa toda la altura del marco */
  width: auto;           /* el ancho se adapta a la proporción real */
  object-fit: contain;
  border-radius: 2px;
  filter: brightness(0.95);
  transition: filter 0.3s;
}

.ticker-logo-item:hover .ticker-logo-frame img {
  filter: brightness(1);
}

/* Fallback cuando la imagen no carga (iniciales) */
.ticker-logo-fallback {
  display: none;               /* se mostrará via JS con display:flex */
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 36px;
  background: var(--c-gold, #f59e0b);
  border-radius: 4px;
  font-weight: 800;
  font-size: 0.7rem;
  color: white;
  text-transform: uppercase;
}

/* Nombre debajo del logo */
.ticker-logo-name {
  font-size: 0.7rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
}

/* Responsive: etiqueta horizontal en móviles */
@media (max-width: 768px) {
  .ticker-section {
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem 1rem;
  }

  .ticker-label {
    flex-direction: row;
    padding-left: 0;
  }

  .ticker-label span {
    writing-mode: horizontal-tb;
    rotate: 0deg;
  }

  .ticker-label-line {
    width: 2rem;
    height: 1px;
    background: linear-gradient(to right, rgba(255,255,255,0.2), transparent);
  }
}


/* ─── FEATURES ───────────────────────────────── */
.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--c-border);
  border: 1px solid var(--c-border);
  border-radius: var(--r-md);
  overflow: hidden;
  margin-top: 48px;
}

.feat-card {
  background: var(--c-card);
  padding: 32px 24px;
  transition: all var(--dur) var(--ease);
  position: relative;
}

.feat-card:hover {
  background: var(--c-surface);
}

.feat-num {
  font-family: var(--f-display);
  font-size: 2.5rem;
  font-weight: 700;
  color: rgba(15, 31, 46, 0.06);
  line-height: 1;
  margin-bottom: 12px;
  transition: color var(--dur);
}

.feat-card:hover .feat-num {
  color: rgba(201, 168, 76, 0.15);
}

.feat-icon {
  width: 40px;
  height: 40px;
  background: rgba(15, 31, 46, 0.04);
  border-radius: var(--r-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--c-gold);
  font-size: 1rem;
  margin-bottom: 16px;
  transition: all var(--dur);
}

.feat-card:hover .feat-icon {
  background: var(--c-primary);
  color: var(--c-white);
}

.feat-title {
  font-family: var(--f-body);
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--c-primary);
  margin-bottom: 8px;
}

.feat-text {
  font-size: 0.8rem;
  color: var(--c-text-secondary);
  line-height: 1.6;
}

/* ─── ABOUT ──────────────────────────────────── */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 64px;
  align-items: center;
}

.about-img-col {
  position: relative;
}

.about-img-frame {
  border-radius: var(--r-md);
  overflow: hidden;
  aspect-ratio: 3/4;
  position: relative;
  box-shadow: var(--sh-card);
}

.about-img-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-img-frame::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(15, 31, 46, 0.5) 0%, transparent 50%);
  z-index: 1;
}

.about-years {
  position: absolute;
  bottom: -16px;
  right: -16px;
  width: 90px;
  height: 90px;
  background: var(--c-gold);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  box-shadow: 0 0 0 6px var(--c-white);
}

.about-years strong {
  font-family: var(--f-display);
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--c-white);
  line-height: 1;
}

.about-years span {
  font-size: 0.55rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  line-height: 1.2;
  text-transform: uppercase;
}

.about-accent-line {
  position: absolute;
  top: 32px;
  left: -12px;
  width: 3px;
  height: 48px;
  background: var(--c-gold);
  border-radius: 2px;
}

.mv-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 28px;
}

.mv-card {
  background: var(--c-card);
  border: 1px solid var(--c-border-light);
  border-radius: var(--r-md);
  padding: 20px;
  border-left: 3px solid var(--c-gold);
  box-shadow: var(--sh-card);
  transition: all var(--dur);
}

.mv-card:hover {
  border-left-color: var(--c-primary);
  box-shadow: var(--sh-hover);
}

.mv-card h4 {
  font-family: var(--f-body);
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--c-gold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.mv-card p {
  font-size: 0.78rem;
  color: var(--c-text-secondary);
  line-height: 1.6;
}

/* ═══════════════════════════════════════════════
   AUTORIDADES v2 — tarjetas dinámicas + modal
   Agrega este archivo a styles/ e importa en globals.css:
   @import './styles/autoridades.css';
════════════════════════════════════════════════ */

/* ─── SECCIÓN ────────────────────────────────── */
.aut-section {
  background: var(--c-white);
  position: relative;
  overflow: hidden;
}

/* Textura sutil de fondo */
.aut-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 60% 40% at 80% 20%, rgba(201,168,76,0.06) 0%, transparent 60%),
    radial-gradient(ellipse 40% 50% at 10% 80%, rgba(26,92,56,0.05) 0%, transparent 60%);
  pointer-events: none;
}

/* ─── GRID ───────────────────────────────────── */
.aut-grid-v2 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  position: relative;
  z-index: 1;
}

/* ─── TARJETA ────────────────────────────────── */
.aut-card-v2 {
  position: relative;
  background: var(--c-card);
  border: 1px solid var(--c-border-light);
  border-radius: 16px;
  padding: 32px 24px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;
  transition:
    transform 0.35s cubic-bezier(0.4,0,0.2,1),
    box-shadow 0.35s cubic-bezier(0.4,0,0.2,1),
    border-color 0.35s cubic-bezier(0.4,0,0.2,1);
  box-shadow: var(--sh-card);
  cursor: default;
}

.aut-card-v2:hover {
  transform: translateY(-8px);
  border-color: var(--aut-color, var(--c-gold));
  box-shadow:
    0 16px 40px rgba(0,0,0,0.10),
    0 0 0 1px var(--aut-color, var(--c-gold)),
    0 0 32px color-mix(in srgb, var(--aut-color, var(--c-gold)) 15%, transparent);
}

/* Barra de color superior que aparece en hover */
.aut-card-bg {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: var(--aut-color, var(--c-gold));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1);
  border-radius: 16px 16px 0 0;
}
.aut-card-v2:hover .aut-card-bg { transform: scaleX(1); }

/* ─── FOTO ───────────────────────────────────── */
.aut-card-photo-wrap {
  position: relative;
  margin-bottom: 20px;
}

/* Anillo animado */
.aut-card-photo-ring {
  position: absolute;
  inset: -5px;
  border-radius: 50%;
  border: 2px solid transparent;
  border-top-color: var(--aut-color, var(--c-gold));
  border-right-color: var(--aut-color, var(--c-gold));
  opacity: 0;
  transition: opacity 0.3s;
  animation: none;
}
.aut-card-v2:hover .aut-card-photo-ring {
  opacity: 1;
  animation: spinRing 2s linear infinite;
}
@keyframes spinRing {
  to { transform: rotate(360deg); }
}

.aut-card-photo {
  width: 96px; height: 96px;
  border-radius: 50%;
  overflow: hidden;
  background: var(--c-surface);
  border: 3px solid var(--c-border-light);
  position: relative;
  transition: border-color 0.3s;
  display: flex; align-items: center; justify-content: center;
}
.aut-card-v2:hover .aut-card-photo {
  border-color: var(--aut-color, var(--c-gold));
}
.aut-card-photo img {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1);
}
.aut-card-v2:hover .aut-card-photo img { transform: scale(1.06); }

/* Iniciales (fallback cuando no carga la imagen) */
.aut-card-initials {
  font-family: var(--f-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--c-primary);
  opacity: 0.25;
  user-select: none;
  pointer-events: none;
}

/* ─── TEXTO ──────────────────────────────────── */
.aut-card-info { flex: 1; width: 100%; }

.aut-card-cargo {
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--aut-color, var(--c-gold));
  margin-bottom: 6px;
  transition: color 0.2s;
}

.aut-card-nombre {
  font-family: var(--f-body);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--c-primary);
  line-height: 1.25;
  margin-bottom: 10px;
}

.aut-card-desc {
  font-size: 0.74rem;
  color: var(--c-text-secondary);
  line-height: 1.65;
  /* Clamp a 3 líneas */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ─── FOOTER TARJETA ─────────────────────────── */
.aut-card-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid var(--c-border-light);
}

.aut-card-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--aut-color, var(--c-gold));
  box-shadow: 0 0 8px color-mix(in srgb, var(--aut-color, var(--c-gold)) 60%, transparent);
  animation: pulseAut 2.5s ease-in-out infinite;
}
@keyframes pulseAut {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.5; transform: scale(0.75); }
}

.aut-card-cta {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-family: var(--f-body);
  font-size: 0.74rem;
  font-weight: 600;
  color: var(--c-primary);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: color 0.2s, gap 0.2s;
}
.aut-card-cta:hover {
  color: var(--aut-color, var(--c-gold));
  gap: 8px;
}
.aut-card-cta i { font-size: 0.8rem; transition: transform 0.2s; }
.aut-card-cta:hover i { transform: translateX(3px); }

/* ════════════════════════════════════════════════
   MODAL
════════════════════════════════════════════════ */
.aut-modal-backdrop {
  position: fixed; inset: 0;
  background: rgba(10,18,30,0.65);
  backdrop-filter: blur(6px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: backdropIn 0.25s var(--ease) both;
}
@keyframes backdropIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

.aut-modal {
  background: var(--c-card);
  border: 1px solid var(--c-border-light);
  border-radius: 20px;
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 32px 80px rgba(0,0,0,0.2);
  animation: modalIn 0.3s cubic-bezier(0.34,1.56,0.64,1) both;
}
@keyframes modalIn {
  from { opacity: 0; transform: scale(0.92) translateY(16px); }
  to   { opacity: 1; transform: none; }
}

/* Cerrar */
.aut-modal-close {
  position: absolute; top: 16px; right: 16px;
  width: 32px; height: 32px;
  border-radius: 50%;
  background: var(--c-surface);
  border: 1px solid var(--c-border-light);
  display: flex; align-items: center; justify-content: center;
  font-size: 1rem; color: var(--c-text-secondary);
  cursor: pointer; z-index: 10;
  transition: all 0.2s;
}
.aut-modal-close:hover { background: var(--c-primary); color: #fff; border-color: var(--c-primary); }

/* Header */
.aut-modal-header {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 28px 28px 20px;
  border-bottom: 1px solid var(--c-border-light);
  position: relative;
}
.aut-modal-header::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; height: 3px;
  background: var(--aut-color, var(--c-gold));
  border-radius: 20px 20px 0 0;
}

.aut-modal-photo {
  width: 72px; height: 72px;
  border-radius: 50%; overflow: hidden;
  flex-shrink: 0;
  background: var(--c-surface);
  border: 3px solid var(--aut-color, var(--c-gold));
  position: relative;
  display: flex; align-items: center; justify-content: center;
}
.aut-modal-photo img {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover; object-position: top;
}
.aut-modal-initials {
  font-family: var(--f-display);
  font-size: 1.3rem; font-weight: 700;
  color: var(--c-primary); opacity: 0.2;
}

.aut-modal-cargo {
  font-size: 0.62rem; font-weight: 700;
  letter-spacing: 0.12em; text-transform: uppercase;
  margin-bottom: 4px;
}
.aut-modal-nombre {
  font-family: var(--f-body);
  font-size: 1.1rem; font-weight: 700;
  color: var(--c-primary); line-height: 1.2;
}

/* Bio */
.aut-modal-bio {
  padding: 20px 28px;
  font-size: 0.83rem;
  color: var(--c-text-secondary);
  line-height: 1.75;
  border-bottom: 1px solid var(--c-border-light);
}

/* Logros */
.aut-modal-logros { padding: 18px 28px; border-bottom: 1px solid var(--c-border-light); }
.aut-modal-logros-title {
  font-size: 0.65rem; font-weight: 700;
  letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--c-muted); margin-bottom: 12px;
  display: flex; align-items: center; gap: 6px;
}
.aut-modal-logros-title i { color: var(--c-gold); }

.aut-modal-logros ul { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 8px; }
.aut-modal-logros li {
  display: flex; align-items: center; gap: 8px;
  font-size: 0.8rem; color: var(--c-primary); font-weight: 500;
}
.aut-modal-logros li i { font-size: 0.85rem; flex-shrink: 0; }

/* Footer modal */
.aut-modal-footer {
  padding: 18px 28px;
  display: flex; gap: 10px; flex-wrap: wrap;
}
.aut-modal-btn {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 8px 16px;
  background: var(--aut-color, var(--c-gold));
  color: #fff; border-radius: var(--r-sm);
  font-size: 0.76rem; font-weight: 600;
  transition: opacity 0.2s, transform 0.2s;
  flex: 1; justify-content: center;
}
.aut-modal-btn:hover { opacity: 0.88; transform: translateY(-1px); }

.aut-modal-btn-ghost {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 8px 16px;
  border: 1.5px solid var(--c-border);
  color: var(--c-primary); border-radius: var(--r-sm);
  font-size: 0.76rem; font-weight: 600;
  transition: all 0.2s;
  flex: 1; justify-content: center;
}
.aut-modal-btn-ghost:hover { border-color: var(--c-primary); background: rgba(15,31,46,0.03); }

/* ─── RESPONSIVE ─────────────────────────────── */
@media (max-width: 1024px) {
  .aut-grid-v2 { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .aut-grid-v2 { grid-template-columns: 1fr 1fr; gap: 12px; }
  .aut-card-v2 { padding: 24px 16px 18px; }
  .aut-card-desc { display: none; }
  .aut-modal { border-radius: 16px; }
  .aut-modal-header { padding: 20px 20px 16px; gap: 14px; }
  .aut-modal-bio,
  .aut-modal-logros,
  .aut-modal-footer { padding-left: 20px; padding-right: 20px; }
}
@media (max-width: 380px) {
  .aut-grid-v2 { grid-template-columns: 1fr; }
}

/* ─── VALORES ────────────────────────────────── */
.valores-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: start;
  margin-top: 48px;
}

.valores-left {
  position: relative;
  border-radius: var(--r-md);
  overflow: hidden;
  aspect-ratio: 1;
  background: var(--c-surface);
  border: 1px solid var(--c-border-light);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--sh-card);
}

.valores-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, rgba(15, 31, 46, 0.04), rgba(22, 40, 64, 0.02));
  position: absolute;
  inset: 0;
  justify-content: center;
}

.valores-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.accordion {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.acc-item {
  border: 1px solid var(--c-border-light);
  border-radius: var(--r-sm);
  overflow: hidden;
  background: var(--c-card);
  transition: border-color var(--dur), box-shadow var(--dur);
}

.acc-item.open {
  border-color: var(--c-border);
  box-shadow: var(--sh-card);
}

.acc-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 18px;
  cursor: pointer;
  user-select: none;
  background: var(--c-card);
  transition: background var(--dur);
}

.acc-item.open .acc-head {
  background: var(--c-surface);
}

.acc-head-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.acc-ico {
  width: 32px;
  height: 32px;
  background: rgba(15, 31, 46, 0.04);
  border-radius: var(--r-xs);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--c-gold);
  font-size: 0.85rem;
  transition: all var(--dur);
  flex-shrink: 0;
}

.acc-item.open .acc-ico {
  background: var(--c-primary);
  color: var(--c-white);
}

.acc-title {
  font-family: var(--f-body);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--c-primary);
}

.acc-sub {
  font-size: 0.7rem;
  color: var(--c-text-secondary);
  margin-top: 1px;
}

.acc-chev {
  color: var(--c-gold);
  font-size: 0.7rem;
  transition: transform var(--dur);
}

.acc-item.open .acc-chev {
  transform: rotate(180deg);
}

.acc-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s var(--ease);
}

.acc-inner {
  padding: 0 18px 16px 62px;
  font-size: 0.8rem;
  color: var(--c-text-secondary);
  line-height: 1.7;
}

/* ─── MODELO EDUCATIVO ───────────────────────── */
#modelo {
  position: relative;
  overflow: hidden;
}

.modelo-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: center;
  position: relative;
}

.modelo-visual {
  border-radius: var(--r-md);
  overflow: hidden;
  aspect-ratio: 16/10;
  background: var(--c-surface);
  border: 1px solid var(--c-border-light);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  box-shadow: var(--sh-card);
}

.play-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  transition: all var(--dur);
}

.play-ring {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(15, 31, 46, 0.04);
  border: 2px solid rgba(15, 31, 46, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--dur);
}

.play-ring i {
  font-size: 1.3rem;
  color: var(--c-gold);
  padding-left: 3px;
}

.modelo-visual:hover .play-ring {
  background: var(--c-primary);
  border-color: var(--c-primary);
  transform: scale(1.08);
}

.modelo-visual:hover .play-ring i {
  color: var(--c-white);
}

.play-wrap span {
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--c-muted);
}

.modelo-brands {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 28px;
}

.modelo-brand {
  background: var(--c-card);
  border: 1px solid var(--c-border-light);
  border-radius: var(--r-md);
  padding: 18px;
  cursor: pointer;
  transition: all var(--dur);
  display: block;
  box-shadow: var(--sh-card);
}

.modelo-brand:hover {
  background: var(--c-surface);
  border-color: var(--c-gold);
  transform: translateY(-1px);
}

.brand-abbr {
  font-family: var(--f-display);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--c-primary);
  line-height: 1;
  margin-bottom: 4px;
}

.brand-full {
  font-size: 0.72rem;
  color: var(--c-text-secondary);
  line-height: 1.4;
}

.brand-cta {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.68rem;
  color: var(--c-gold);
  margin-top: 8px;
  font-weight: 600;
}

/* ─── STATS ──────────────────────────────────── */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  border: 1px solid var(--c-border-light);
  border-radius: var(--r-md);
  overflow: hidden;
  background: var(--c-card);
  box-shadow: var(--sh-card);
}

.stat-item {
  padding: 40px 24px;
  text-align: center;
  border-right: 1px solid var(--c-border-light);
  position: relative;
  overflow: hidden;
  transition: background var(--dur);
}

.stat-item:last-child {
  border-right: none;
}

.stat-item:hover {
  background: var(--c-surface);
}

.stat-icon {
  font-size: 1.2rem;
  color: var(--c-gold);
  margin-bottom: 12px;
  opacity: 0.7;
}

.stat-num {
  font-family: var(--f-display);
  font-size: clamp(2rem, 3vw, 3rem);
  font-weight: 700;
  color: var(--c-primary);
  line-height: 1;
}

.stat-num .suf {
  color: var(--c-gold);
}

.stat-label {
  font-size: 0.7rem;
  color: var(--c-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: 8px;
}

/* ─── CENACAP ────────────────────────────────── */
.section-brand-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
}

.brand-mark {
  width: 120px;
  height: 120px;
  border-radius: 70%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
}

.brand-logo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.brand-mark.green {
  background: var(--c-success);
}

.brand-mark.blue {
  background: var(--c-primary);
  color: var(--c-white);
}

.tabs-row {
  display: flex;
  gap: 4px;
  margin: 32px 0 24px;
  background: var(--c-surface);
  border: 1px solid var(--c-border-light);
  padding: 4px;
  border-radius: var(--r-sm);
  width: fit-content;
}

.tab-btn {
  padding: 8px 16px;
  border-radius: var(--r-xs);
  font-weight: 600;
  font-size: 0.78rem;
  color: var(--c-text-secondary);
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 6px;
}

.tab-btn.active {
  background: var(--c-primary);
  color: var(--c-white);
  box-shadow: 0 2px 8px rgba(15, 31, 46, 0.2);
}

.tab-btn:not(.active):hover {
  color: var(--c-primary);
  background: rgba(15, 31, 46, 0.03);
}

.tab-panel {
  display: none;
}

.tab-panel.active {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.course-card {
  background: var(--c-card);
  border: 1px solid var(--c-border-light);
  border-radius: var(--r-md);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all var(--dur) var(--ease);
  box-shadow: var(--sh-card);
}

.course-card:hover {
  transform: translateY(-4px);
  border-color: var(--c-border);
  box-shadow: var(--sh-hover);
}

.course-img {
  position: relative;
  overflow: hidden;
}

.course-img img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  transition: transform 0.5s var(--ease);
}

.course-card:hover .course-img img {
  transform: scale(1.04);
}

.course-body {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.course-name {
  font-family: var(--f-body);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--c-primary);
  margin-bottom: 8px;
  line-height: 1.3;
}

.course-desc {
  font-size: 0.78rem;
  color: var(--c-text-secondary);
  line-height: 1.6;
  margin-bottom: 16px;
  flex: 1;
}

.course-meta {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  padding-top: 12px;
  border-top: 1px solid var(--c-border-light);
  margin-bottom: 14px;
}

.course-meta-item {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.7rem;
  color: var(--c-text-secondary);
}

.course-meta-item i {
  color: var(--c-gold);
  font-size: 0.65rem;
}

.course-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.course-cert {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--c-success);
}

.course-link {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--c-primary);
  display: flex;
  align-items: center;
  gap: 4px;
  transition: gap 0.2s;
}

.course-link:hover {
  gap: 8px;
}

/* ─── INFOCADE ───────────────────────────────── */
.infocade-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.info-card {
  background: var(--c-card);
  border: 1px solid var(--c-border-light);
  border-radius: var(--r-md);
  padding: 20px;
  transition: all var(--dur) var(--ease);
  display: flex;
  flex-direction: column;
  box-shadow: var(--sh-card);
}

.info-card:hover {
  border-color: var(--c-border);
  transform: translateY(-2px);
  box-shadow: var(--sh-hover);
}

.info-ico {
  width: 36px;
  height: 36px;
  background: rgba(15, 31, 46, 0.04);
  border-radius: var(--r-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--c-gold);
  font-size: 0.9rem;
  margin-bottom: 12px;
  transition: all var(--dur);
}

.info-card:hover .info-ico {
  background: var(--c-primary);
  color: var(--c-white);
}

.info-name {
  font-family: var(--f-body);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--c-primary);
  margin-bottom: 6px;
  line-height: 1.3;
}

.info-desc {
  font-size: 0.76rem;
  color: var(--c-text-secondary);
  line-height: 1.6;
  flex: 1;
  margin-bottom: 12px;
}

.info-link {
  font-size: 0.74rem;
  font-weight: 600;
  color: var(--c-primary);
  display: flex;
  align-items: center;
  gap: 4px;
  transition: gap 0.2s;
}

.info-link:hover {
  gap: 8px;
}

/* ─── EVENTOS ────────────────────────────────── */
.eventos-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 40px;
}

.evento-card {
  background: var(--c-card);
  border: 1px solid var(--c-border-light);
  border-radius: var(--r-md);
  padding: 20px;
  display: flex;
  gap: 16px;
  transition: all var(--dur) var(--ease);
  box-shadow: var(--sh-card);
}

.evento-card:hover {
  border-color: var(--c-border);
  transform: translateY(-2px);
  box-shadow: var(--sh-hover);
}

.evento-date {
  background: var(--c-primary);
  color: var(--c-white);
  border-radius: var(--r-sm);
  width: 56px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px 4px;
  text-align: center;
}

.evento-date .day {
  font-family: var(--f-display);
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
}

.evento-date .mon {
  font-size: 0.55rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  opacity: 0.85;
  margin-top: 2px;
}

.evento-title {
  font-family: var(--f-body);
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--c-primary);
  margin: 6px 0;
  line-height: 1.3;
}

.evento-meta {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.evento-meta span {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.7rem;
  color: var(--c-text-secondary);
}

.evento-meta i {
  color: var(--c-gold);
  font-size: 0.6rem;
}

/* ─── CONVENIOS ───────────────────────────────── */
.convenios-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-top: 40px;
}

.conv-card {
  background: var(--c-card);
  border: 1px solid var(--c-border-light);
  border-radius: var(--r-md);
  padding: 20px 16px;
  text-align: center;
  transition: all var(--dur) var(--ease);
  box-shadow: var(--sh-card);
}

.conv-card:hover {
  border-color: var(--c-border);
  transform: translateY(-2px);
  box-shadow: var(--sh-hover);
}

.conv-logo {
  width: 56px;
  height: 56px;
  background: var(--c-surface);
  border: 1px solid var(--c-border-light);
  border-radius: var(--r-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px;
  font-family: var(--f-body);
  font-weight: 800;
  font-size: 0.75rem;
  color: var(--c-gold);
  transition: all var(--dur);
}

.conv-card:hover .conv-logo {
  background: rgba(15, 31, 46, 0.04);
  border-color: var(--c-gold);
}

.conv-name {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--c-primary);
  margin-bottom: 4px;
  line-height: 1.3;
}

.conv-desc {
  font-size: 0.7rem;
  color: var(--c-text-secondary);
  line-height: 1.5;
}

/* ─── TESTIMONIOS ────────────────────────────── */
.testi-wrap {
  margin-top: 40px;
  overflow: hidden;
  position: relative;
}

.testi-wrap::before,
.testi-wrap::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 80px;
  z-index: 2;
}

.testi-wrap::before {
  left: 0;
  background: linear-gradient(90deg, var(--c-white), transparent);
}

.testi-wrap::after {
  right: 0;
  background: linear-gradient(-90deg, var(--c-white), transparent);
}

.testi-track {
  display: flex;
  gap: 16px;
  animation: ticker 40s linear infinite;
  width: max-content;
}

.testi-track:hover {
  animation-play-state: paused;
}

.testi-card {
  background: var(--c-card);
  border: 1px solid var(--c-border-light);
  border-radius: var(--r-md);
  padding: 20px;
  width: 300px;
  flex-shrink: 0;
  transition: all var(--dur);
  box-shadow: var(--sh-card);
}

.testi-card:hover {
  border-color: var(--c-border);
  transform: translateY(-2px);
}

.testi-stars {
  display: flex;
  gap: 2px;
  color: var(--c-gold);
  font-size: 0.75rem;
  margin-bottom: 10px;
}

.testi-text {
  font-size: 0.8rem;
  color: var(--c-text-secondary);
  line-height: 1.7;
  margin-bottom: 16px;
  font-style: italic;
  font-family: var(--f-display);
  font-weight: 400;
}

.testi-author {
  display: flex;
  align-items: center;
  gap: 10px;
}

.testi-avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: var(--c-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--f-body);
  font-weight: 700;
  color: var(--c-white);
  font-size: 0.8rem;
  flex-shrink: 0;
}

.testi-info strong {
  display: block;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--c-primary);
}

.testi-info span {
  font-size: 0.68rem;
  color: var(--c-text-secondary);
}

/* ─── TIPO DE CAMBIO ─────────────────────────── */
#cambio {
  border-top: 1px solid var(--c-border-light);
  border-bottom: 1px solid var(--c-border-light);
  padding: 24px 0;
  background: var(--c-surface);
}

.cambio-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
}

.cambio-label {
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--c-muted);
}

.cambio-sep {
  width: 1px;
  height: 28px;
  background: var(--c-border);
}

.cambio-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.cambio-flag {
  width: 28px;
  height: 28px;
  border-radius: var(--r-xs);
  background: var(--c-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
}

.cambio-curr {
  font-family: var(--f-body);
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--c-primary);
}

.cambio-rate {
  font-size: 0.7rem;
  color: var(--c-gold);
  font-weight: 500;
}

/* ─── INSCRIPCION ────────────────────────────── */
.inscripcion-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: start;
}

.ins-benefits {
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.ins-benefit {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px;
  background: var(--c-card);
  border: 1px solid var(--c-border-light);
  border-radius: var(--r-md);
  transition: all var(--dur);
  box-shadow: var(--sh-card);
}

.ins-benefit:hover {
  border-color: var(--c-border);
  box-shadow: var(--sh-hover);
}

.ins-ben-ico {
  width: 30px;
  height: 30px;
  background: rgba(15, 31, 46, 0.04);
  border-radius: var(--r-xs);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--c-gold);
  flex-shrink: 0;
  font-size: 0.8rem;
}

.ins-benefit strong {
  display: block;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--c-primary);
  margin-bottom: 2px;
}

.ins-benefit span {
  font-size: 0.74rem;
  color: var(--c-text-secondary);
}

/* ─── FORM ───────────────────────────────────── */
.form-box {
  background: var(--c-white);
  border: 1px solid var(--c-border-light);
  border-radius: var(--r-md);
  padding: 32px;
  box-shadow: var(--sh-card);
}

.form-title {
  font-family: var(--f-display);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--c-primary);
  margin-bottom: 4px;
}

.form-sub {
  font-size: 0.78rem;
  color: var(--c-text-secondary);
  margin-bottom: 24px;
}

.form-group {
  margin-bottom: 14px;
}

.form-label {
  display: block;
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--c-text-secondary);
  margin-bottom: 6px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.form-input {
  width: 100%;
  padding: 10px 12px;
  background: var(--c-surface);
  border: 1.5px solid var(--c-border-light);
  border-radius: var(--r-sm);
  font-family: var(--f-body);
  font-size: 0.85rem;
  color: var(--c-primary);
  transition: all 0.2s;
  outline: none;
}

.form-input::placeholder {
  color: var(--c-muted);
}

.form-input:focus {
  border-color: var(--c-primary);
  background: var(--c-white);
  box-shadow: 0 0 0 3px rgba(15, 31, 46, 0.06);
}

.form-input option {
  background: var(--c-white);
  color: var(--c-primary);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

/* ─── NOTICIAS ───────────────────────────────── */
.noticias-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;
}

.news-card {
  background: var(--c-card);
  border: 1px solid var(--c-border-light);
  border-radius: var(--r-md);
  overflow: hidden;
  transition: all var(--dur) var(--ease);
  box-shadow: var(--sh-card);
}

.news-card:hover {
  transform: translateY(-2px);
  border-color: var(--c-border);
  box-shadow: var(--sh-hover);
}

.news-top {
  padding: 16px 16px 0;
}

.news-body {
  padding: 12px 16px 16px;
}

.news-title {
  font-family: var(--f-body);
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--c-primary);
  margin-bottom: 6px;
  line-height: 1.3;
}

.news-desc {
  font-size: 0.76rem;
  color: var(--c-text-secondary);
  line-height: 1.6;
  margin-bottom: 12px;
}

.news-meta {
  display: flex;
  gap: 12px;
  font-size: 0.68rem;
  color: var(--c-muted);
}

.news-meta i {
  color: var(--c-gold);
  margin-right: 2px;
}

/* ─── BUZON ──────────────────────────────────── */
.buzon-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: center;
  position: relative;
}

.buzon-opts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 24px;
}

.buzon-opt {
  background: var(--c-card);
  border: 1px solid var(--c-border-light);
  border-radius: var(--r-md);
  padding: 14px;
  text-align: center;
  cursor: pointer;
  transition: all var(--dur);
  box-shadow: var(--sh-card);
}

.buzon-opt:hover {
  border-color: var(--c-primary);
  background: var(--c-surface);
}

.buzon-opt i {
  font-size: 1.2rem;
  color: var(--c-gold);
  margin-bottom: 6px;
  display: block;
}

.buzon-opt span {
  font-size: 0.72rem;
  color: var(--c-text-secondary);
  font-weight: 500;
}

.buzon-form-box {
  background: var(--c-card);
  border: 1px solid var(--c-border-light);
  border-radius: var(--r-md);
  padding: 32px;
  box-shadow: var(--sh-card);
}

/* ─── CONTACTO ───────────────────────────────── */
.contacto-grid {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 56px;
  align-items: start;
}

.contact-items {
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px;
  background: var(--c-card);
  border: 1px solid var(--c-border-light);
  border-radius: var(--r-md);
  transition: all var(--dur);
  box-shadow: var(--sh-card);
}

.contact-item:hover {
  border-color: var(--c-border);
  box-shadow: var(--sh-hover);
}

.contact-ico {
  width: 36px;
  height: 36px;
  background: rgba(15, 31, 46, 0.04);
  border-radius: var(--r-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--c-gold);
  font-size: 0.85rem;
  flex-shrink: 0;
}

.contact-lbl {
  font-size: 0.6rem;
  font-weight: 700;
  color: var(--c-gold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 2px;
}

.contact-val {
  font-size: 0.82rem;
  color: var(--c-primary);
  font-weight: 500;
  line-height: 1.5;
}

.socials {
  display: flex;
  gap: 6px;
  margin-top: 20px;
}

.social-btn {
  width: 38px;
  height: 38px;
  border-radius: var(--r-sm);
  background: var(--c-surface);
  border: 1px solid var(--c-border-light);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--c-text-secondary);
  font-size: 0.85rem;
  transition: all var(--dur);
}

.social-btn:hover {
  background: var(--c-primary);
  border-color: var(--c-primary);
  color: var(--c-white);
  transform: translateY(-2px);
}

.map-wrap {
  border-radius: var(--r-md);
  overflow: hidden;
  border: 1px solid var(--c-border-light);
  height: 350px;
  position: relative;
  box-shadow: var(--sh-card);
}

.map-wrap iframe {
  width: 100%;
  height: 100%;
  border: none;
  filter: grayscale(30%) brightness(0.95);
}

.map-chip {
  position: absolute;
  top: 12px;
  left: 12px;
  background: var(--c-white);
  border: 1px solid var(--c-border-light);
  border-radius: var(--r-sm);
  padding: 8px 12px;
  color: var(--c-primary);
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: var(--sh-card);
}

.map-chip i {
  color: var(--c-gold);
}

.map-chip span {
  font-size: 0.72rem;
  font-weight: 500;
}

/* ─── FOOTER ─────────────────────────────────── */
#footer {
  border-top: 4px solid var(--c-gold);
  padding: 56px 0 28px;
  background: var(--c-primary);
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}

.footer-brand strong {
  font-family: var(--f-display);
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffffff;
  display: block;
  margin-bottom: 2px;
}

.footer-brand strong em {
  font-style: italic;
  color: #E8C87A;
}

.footer-brand .sub {
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.06em;
  margin-bottom: 12px;
}

.footer-brand p {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.4);
  line-height: 1.7;
  max-width: 260px;
  margin-top: 8px;
}

.footer-col-title {
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #E8C87A;
  margin-bottom: 16px;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 7px;
}

.footer-links a {
  font-size: 0.76rem;
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 5px;
}

.footer-links a:hover {
  color: #ffffff;
  padding-left: 4px;
}

.footer-links a i {
  font-size: 0.5rem;
  color: #E8C87A;
  opacity: 0.6;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
}

.footer-copy {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.3);
}

.footer-copy em {
  color: #E8C87A;
  font-style: normal;
}

/* ─── NAVBAR ─────────────────────────────────── */
#navbar {
  position: fixed;
  top: 0;
  inset-inline: 0;
  z-index: 1000;
  transition: all var(--dur) var(--ease);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--c-border-light);
}

#navbar.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height:30px;
}

/*.nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
}*/

.nav-mark {
  background: none !important;
  border: none !important;
  border-radius: 0 !important;
  width: auto !important;
  height: auto !important;
  padding: 0 !important;
  box-shadow: none !important;
  display: none; /* ya no se usa; el logo es .nav-logo-img */
}


/* Imagen del logo: transparencia natural del PNG, sin fondo */
.nav-logo-img {
  height: 60px;          /* Ajusta a la altura que necesites */
  width: auto;
  display: block;
  object-fit: contain;
  flex-shrink: 0;
  /* Sin background, sin border, sin border-radius */
  background: transparent;
  border: none;
  /* En modo transparente (sobre hero) el logo se ve tal cual.
     Si tu logo es oscuro y no se ve sobre el hero oscuro,
     usa filter: brightness(0) invert(1) solo en modo transparente: */
}
 
/* Logo blanco automático cuando navbar está sobre el hero oscuro */
#navbar.transparent .nav-logo-img {
  filter: brightness(0) invert(1);
}
 
/* Logo normal (colores reales) cuando navbar está scrolled */
#navbar.scrolled .nav-logo-img {
  filter: none;
}
 
/* Alineación del logo con el texto a la derecha */
.nav-logo {
  display: flex;
  align-items: center;
  gap: 0px;
  text-decoration: none;
}

.nav-logotype {
  line-height: 1.15;
  margin-left: 0px;
}

.nav-logotype strong {
  display: block;
  font-family: var(--f-body);
  font-weight: 700;
  font-size: 0.88rem;
  color: var(--c-primary);
  letter-spacing: -0.01em;
}

.nav-logotype span {
  font-size: 0.55rem;
  color: var(--c-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-weight: 400;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2px;
}

.nav-item {
  position: relative;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 7px 12px;
  border-radius: var(--r-xs);
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--c-text-secondary);
  transition: all var(--dur) var(--ease);
  white-space: nowrap;
}

.nav-link:hover {
  color: var(--c-primary);
  background: rgba(15, 31, 46, 0.03);
}

.nav-link .chevron {
  font-size: 0.55rem;
  transition: transform var(--dur) var(--ease);
}

.nav-item:hover .chevron {
  transform: rotate(180deg);
}

.nav-drop {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  min-width: 260px;
  background: var(--c-white);
  border: 1px solid var(--c-border-light);
  border-radius: var(--r-sm);
  padding: 6px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(6px) scale(0.98);
  transition: all 0.2s var(--ease);
  z-index: 999;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
}

.nav-item:hover .nav-drop {
  opacity: 1;
  visibility: visible;
  transform: none;
}

.drop-label {
  font-size: 0.55rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--c-gold);
  padding: 6px 10px 4px;
}

.drop-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  border-radius: var(--r-xs);
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--c-text-secondary);
  transition: all 0.15s;
}

.drop-link:hover {
  background: rgba(15, 31, 46, 0.03);
  color: var(--c-primary);
}

.drop-link i {
  width: 12px;
  color: var(--c-gold);
  font-size: 0.7rem;
  opacity: 0.7;
}

.drop-divider {
  height: 1px;
  background: var(--c-border-light);
  margin: 4px 0;
}

.nav-cta {
  margin-left: 10px;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: 6px;
  cursor: pointer;
  border-radius: var(--r-xs);
  transition: background 0.2s;
}

.nav-toggle:hover {
  background: rgba(15, 31, 46, 0.03);
}

.nav-toggle span {
  display: block;
  width: 20px;
  height: 2px;
  background: var(--c-primary);
  border-radius: 1px;
  transition: all 0.3s;
}

.nav-toggle.open span:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}

.nav-toggle.open span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.nav-toggle.open span:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

.mobile-nav {
  display: none;
  position: fixed;
  top: 64px;
  inset-inline: 0;
  bottom: 0;
  background: var(--c-white);
  padding: 16px 24px 28px;
  overflow-y: auto;
  z-index: 998;
  transform: translateX(100%);
  transition: transform 0.3s var(--ease);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
}

.mobile-nav.open {
  transform: none;
}

.mob-sec {
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--c-gold);
  padding: 16px 0 4px;
}

.mob-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 0;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--c-text-secondary);
  border-bottom: 1px solid var(--c-border-light);
  transition: color 0.2s;
}

.mob-link:hover {
  color: var(--c-primary);
}

.mob-link i {
  width: 14px;
  color: var(--c-gold);
  font-size: 0.75rem;
}

.mob-link.sub {
  padding-left: 16px;
  font-size: 0.8rem;
  color: var(--c-muted);
}

.mob-cta {
  margin-top: 20px;
}

/* ─── HERO ───────────────────────────────────── */
#hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--c-white);
}

.hero-media {
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: 0.8;
}

.hero-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: brightness(1);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0%, transparent 40%, rgba(255, 255, 255, 0.95) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 120px 28px 80px;
  max-width: 800px;
  margin: 0 auto;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(250, 249, 248, 0.06);
  border: 1px solid rgba(46, 43, 38, 0.15);
  color: var(--c-primary-light);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 6px 16px;
  border-radius: var(--r-full);
  margin-bottom: 24px;
}

.hero-title {
  font-family: var(--f-display);
  font-size: clamp(2.5rem, 5.5vw, 4.5rem);
  font-weight: 700;
  line-height: 1.1;
  color: var(--c-primary);
  margin-bottom: 20px;
}
 /* 
.hero-title em {
   font-weight: 600;
  letter-spacing: 0.5px;
  font-style: normal;
  color: #649fe6;o tu dorado claro 
}*/

.hero-title .kicker {
  display: block;
  font-family: var(--f-body);
  font-size: clamp(0.8rem, 1.2vw, 0.9rem);
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--c-primary-light);
  margin-bottom: 12px;
  font-style: normal;
}

.hero-desc {
  font-size: clamp(0.95rem, 1.3vw, 1.1rem);
  color: var(--c-text-secondary);
  max-width: 550px;
  line-height: 1.7;
  margin-bottom: 36px;
  font-weight: 400;
}

.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}

.hero-brands {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 48px;
  flex-wrap: wrap;
  justify-content: center;
}

.hero-brands-sep {
  font-size: 0.58rem;
  color: var(--c-muted);
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.hero-pill {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--c-white);
  border: 1px solid var(--c-border-light);
  border-radius: var(--r-full);
  padding: 7px 18px;
  transition: all 0.3s;
  box-shadow: var(--sh-card);
}

.hero-pill:hover {
  border-color: var(--c-gold);
}

.hero-pill-name {
  font-family: var(--f-body);
  font-weight: 700;
  font-size: 0.82rem;
  color: var(--c-primary);
}

.hero-pill-sub {
  font-size: 0.58rem;
  color: var(--c-muted);
  letter-spacing: 0.04em;
}

.hero-scroll {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  z-index: 2;
}

.scroll-mouse {
  width: 20px;
  height: 30px;
  border: 2px solid var(--c-muted);
  border-radius: var(--r-full);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 5px;
}

.scroll-mouse::after {
  content: '';
  width: 3px;
  height: 5px;
  background: var(--c-gold);
  border-radius: var(--r-full);
  animation: scrollDot 2s ease-in-out infinite;
}

@keyframes scrollDot {
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(8px); }
}

.scroll-text {
  font-size: 0.55rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--c-muted);
}

/* ─── REVEAL ANIMATIONS ──────────────────────── */
[data-reveal] {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s var(--ease), transform 0.6s var(--ease);
}

[data-reveal="left"] {
  transform: translateX(-24px);
}

[data-reveal="right"] {
  transform: translateX(24px);
}

[data-reveal="scale"] {
  transform: scale(0.96);
}

[data-reveal].visible {
  opacity: 1;
  transform: none;
}

/* ─── RESPONSIVE ─────────────────────────────── */
@media (max-width: 1024px) {
  .features-grid { grid-template-columns: repeat(2, 1fr); }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .stat-item:nth-child(2) { border-right: none; }
  .convenios-grid { grid-template-columns: repeat(2, 1fr); }
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 28px; }
  .autoridades-grid { grid-template-columns: repeat(2, 1fr); }
  .infocade-grid { grid-template-columns: repeat(2, 1fr); }
  .noticias-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 900px) {
  .nav-links, .nav-cta { display: none; }
  .nav-toggle { display: flex; }
  .mobile-nav { display: block; }
  .hero-title { font-size: clamp(2rem, 6vw, 3rem); }
  .about-grid, .modelo-grid, .valores-grid, .inscripcion-grid, .buzon-grid, .contacto-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .about-img-col { display: none; }
  .tab-panel.active { grid-template-columns: 1fr 1fr; }
  .eventos-grid { grid-template-columns: 1fr; }
}

@media (max-width: 640px) {
  .features-grid { grid-template-columns: 1fr; }
  .tab-panel.active { grid-template-columns: 1fr; }
  .convenios-grid { grid-template-columns: 1fr 1fr; }
  .stats-grid { grid-template-columns: 1fr 1fr; }
  .footer-grid { grid-template-columns: 1fr; }
  .form-row { grid-template-columns: 1fr; }
  .form-box { padding: 20px 16px; }
  .hero-actions { flex-direction: column; align-items: center; }
  .hero-actions .btn { width: 100%; max-width: 280px; justify-content: center; }
  .mv-cards { grid-template-columns: 1fr; }
  .infocade-grid { grid-template-columns: 1fr; }
  .noticias-grid { grid-template-columns: 1fr; }
  .autoridades-grid { grid-template-columns: 1fr 1fr; }
  .modelo-brands { grid-template-columns: 1fr; }
  .buzon-opts { grid-template-columns: 1fr 1fr; }
  .cambio-inner { gap: 16px; }
  .section-pad { padding: 56px 0; }
}


/* ══════════════════════════════════════════════════════════════════════════
   NAVBAR — transparente sobre hero, sólido al hacer scroll
══════════════════════════════════════════════════════════════════════════ */
#navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  /* Estado transparente por defecto (sobre el hero) */
  background: transparent;
  border-bottom: 1px solid transparent;
  padding: 20px 0;
  transition:
    background 0.45s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.45s cubic-bezier(0.4, 0, 0.2, 1),
    padding 0.35s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.45s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
 
/* Logo y links blancos sobre hero (navbar transparente) */
#navbar.transparent .nav-mark,
#navbar.transparent .nav-logotype strong,
#navbar.transparent .nav-link,
#navbar.transparent .nav-cta {
  color: #ffffff;
}
#navbar.transparent .nav-logotype span {
  color: rgba(255, 255, 255, 0.65);
}
#navbar.transparent .nav-cta.btn-primary {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(8px);
  color: #fff;
}
#navbar.transparent .nav-cta.btn-primary:hover {
  background: var(--c-gold);
  border-color: var(--c-gold);
  color: #fff;
}
 
/* Toggle hamburger blanco sobre hero */
#navbar.transparent .nav-toggle span {
  background: #ffffff;
}
 
/* Estado scrolled — sólido */
#navbar.scrolled {
  background: rgba(255, 255, 255, 0.97);
  border-bottom: 1px solid var(--c-border-light);
  padding: 12px 0;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(12px);
}
#navbar.scrolled .nav-mark,
#navbar.scrolled .nav-logotype strong,
#navbar.scrolled .nav-link {
  color: var(--c-primary);
}
#navbar.scrolled .nav-logotype span {
  color: var(--c-muted);
}
 
/* Ocultar navbar al bajar */
#navbar.nav-hidden {
  transform: translateY(-100%);
}
 
/* Línea de progreso de scroll */
.nav-scroll-line {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--c-gold), var(--c-secondary));
  width: 0%;
  transition: width 0.1s linear;
}
 
/* Drop en modo transparente */
#navbar.transparent .nav-drop {
  background: rgba(10, 18, 30, 0.92);
  border-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
}
#navbar.transparent .drop-link {
  color: rgba(255, 255, 255, 0.8);
}
#navbar.transparent .drop-link:hover {
  color: var(--c-gold);
  background: rgba(255, 255, 255, 0.06);
}
#navbar.transparent .drop-label {
  color: rgba(255, 255, 255, 0.35);
}
 
/* Hover de nav-link: subrayado animado */
.nav-link {
  position: relative;
  font-family: var(--f-body);
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 1.5px;
  background: var(--c-gold);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.nav-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
 
/* ══════════════════════════════════════════════════════════════════════════
   HERO CAROUSEL
   La sección ahora se llama .hero-carousel en Hero.tsx
══════════════════════════════════════════════════════════════════════════ */
.hero-carousel {
  position: relative;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
 
/* ── Slides de fondo ── */
.hero-slides-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}
 
.hero-slide-bg {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: opacity, transform;
}
.hero-slide-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  /* Ken Burns sutil en el slide activo */
  transform: scale(1.06);
  transition: transform 8s ease-out;
}
.hero-slide-bg.active {
  opacity: 1;
  z-index: 1;
}
.hero-slide-bg.active img {
  transform: scale(1);
}
.hero-slide-bg.leaving {
  opacity: 0;
  z-index: 0;
}
 
/* ── Overlays en capas (foco en imagen + legibilidad) ── */
/* Radial centrado: imagen visible al centro, oscuro en bordes */
.hero-overlay-radial {
  position: absolute;
  inset: 0;
  z-index: 2;
  background: radial-gradient(
    ellipse 70% 65% at 50% 42%,
    rgba(5, 12, 22, 0.08) 0%,
    rgba(5, 12, 22, 0.52) 100%
  );
}
/* Degradé inferior: anclaje de texto */
.hero-overlay-bottom {
  position: absolute;
  inset: 0;
  z-index: 2;
  background: linear-gradient(
    to top,
    rgba(5, 12, 22, 0.82) 0%,
    rgba(5, 12, 22, 0.28) 42%,
    transparent 65%
  );
}
/* Viñeta lateral */
.hero-overlay-vignette {
  position: absolute;
  inset: 0;
  z-index: 2;
  background: linear-gradient(
    to right,
    rgba(5, 12, 22, 0.35) 0%,
    transparent 30%,
    transparent 70%,
    rgba(5, 12, 22, 0.35) 100%
  );
}
 
/* ── Partículas ── */
.hero-particles {
  position: absolute;
  inset: 0;
  z-index: 3;
  overflow: hidden;
  pointer-events: none;
}
 
/* ── Orbs decorativos ── */
.hero-orb {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 3;
  filter: blur(60px);
}
.hero-orb-1 {
  width: 380px;
  height: 380px;
  background: radial-gradient(circle, rgba(201, 168, 76, 0.18), transparent 70%);
  top: -80px;
  right: -80px;
  animation: orbFloat 12s ease-in-out infinite alternate;
}
.hero-orb-2 {
  width: 280px;
  height: 280px;
  background: radial-gradient(circle, rgba(26, 92, 56, 0.15), transparent 70%);
  bottom: 100px;
  left: -60px;
  animation: orbFloat 16s ease-in-out infinite alternate-reverse;
}
 
/* ── Contenido ── */
.hero-content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 130px 28px 100px;
  max-width: 860px;
  margin: 0 auto;
}
 
/* Badge */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  padding: 6px 16px;
  border-radius: var(--r-full);
  margin-bottom: 24px;
  backdrop-filter: blur(8px);
  animation: fadeDown 0.7s var(--ease) both;
}
.hero-badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--c-gold);
  flex-shrink: 0;
  box-shadow: 0 0 8px var(--c-gold);
  animation: pulseDot 2s ease-in-out infinite;
}
 
/* Kicker */
.hero-kicker {
  display: block;
  font-family: var(--f-body);
  font-size: clamp(0.7rem, 1vw, 0.82rem);
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--c-gold);
  margin-bottom: 14px;
  animation: fadeDown 0.7s 0.1s var(--ease) both;
}
 
/* Título principal — Noto Sans Medefaidrin */
.hero-title {
  font-family: var(--f-display); /* Noto Sans Medefaidrin */
  font-size: clamp(2.6rem, 6vw, 5rem);
  font-weight: 700;
  line-height: 1.08;
  color: #ffffff;
  margin-bottom: 22px;
  text-shadow: 0 2px 32px rgba(0, 0, 0, 0.35);
  animation: fadeUp 0.75s 0.15s var(--ease) both;
}
.hero-title em {
  font-style: italic;
  color: #f6f8fa;
  text-shadow: 0 0 40px rgba(20, 20, 19, 0.4);
}
 
/* Transición del bloque de título cuando cambia el slide */
.hero-title-wrap {
  animation: slideTextIn 0.75s var(--ease) both;
}
 
/* Descripción */
.hero-desc {
  font-family: var(--f-body);
  font-size: clamp(0.92rem, 1.3vw, 1.08rem);
  color: rgba(255, 255, 255, 0.72);
  max-width: 580px;
  line-height: 1.75;
  margin-bottom: 36px;
  animation: fadeUp 0.8s 0.25s var(--ease) both;
}
.hero-desc strong {
  color: #ffffff;
  font-weight: 600;
}
 
/* Acciones */
.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 44px;
  animation: fadeUp 0.85s 0.35s var(--ease) both;
}
 
/* Pills de unidades */
.hero-brands {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  animation: fadeUp 0.9s 0.45s var(--ease) both;
}
.hero-brands-sep {
  font-size: 0.58rem;
  color: rgba(255, 255, 255, 0.38);
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.hero-pill {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: var(--r-full);
  padding: 8px 20px;
  transition: all 0.3s var(--ease);
  backdrop-filter: blur(10px);
  text-align: left;
}
.hero-pill:hover {
  background: rgba(255, 255, 255, 0.14);
  border-color: var(--c-gold);
  transform: translateY(-2px);
}
.hero-pill-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.hero-pill-dot--green { background: #4ADE80; box-shadow: 0 0 8px rgba(74,222,128,0.5); }
.hero-pill-dot--blue  { background: #60A5FA; box-shadow: 0 0 8px rgba(96,165,250,0.5); }
.hero-pill-dot--gold  { background: var(--c-gold); box-shadow: 0 0 8px rgba(201,168,76,0.5); }
.hero-pill-name {
  display: block;
  font-family: var(--f-body);
  font-weight: 700;
  font-size: 0.8rem;
  color: #ffffff;
  line-height: 1;
}
.hero-pill-sub {
  display: block;
  font-size: 0.56rem;
  color: rgba(255, 255, 255, 0.48);
  letter-spacing: 0.04em;
  margin-top: 2px;
}
 
/* ── Flechas carrusel ── */
.hero-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.22);
  color: #ffffff;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  backdrop-filter: blur(8px);
  transition: all 0.25s var(--ease);
}
.hero-arrow:hover {
  background: var(--c-gold);
  border-color: var(--c-gold);
  transform: translateY(-50%) scale(1.08);
}
.hero-arrow--prev { left: 28px; }
.hero-arrow--next { right: 28px; }
 
/* ── Dots ── */
.hero-dots {
  position: absolute;
  bottom: 64px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  display: flex;
  gap: 8px;
}
.hero-dot {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 0;
  width: 32px;
  display: flex;
  align-items: center;
}
.hero-dot-bar {
  display: block;
  height: 3px;
  width: 100%;
  border-radius: 99px;
  background: rgba(255, 255, 255, 0.28);
  transition: background 0.3s, width 0.3s;
}
.hero-dot.active .hero-dot-bar {
  background: var(--c-gold);
  width: 100%;
}
.hero-dot:hover .hero-dot-bar {
  background: rgba(255, 255, 255, 0.6);
}
 
/* ── Progress bar ── */
.hero-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: rgba(255, 255, 255, 0.08);
  z-index: 20;
}
.hero-progress-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--c-gold), #e2b94a);
  width: 0%;
  animation: progressGrow linear both;
}
@keyframes progressGrow {
  from { width: 0%; }
  to   { width: 100%; }
}
 
/* ── Scroll hint ── */
.hero-scroll {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
/* Mover scroll hint para no chocar con dots */
.hero-carousel .hero-scroll {
  bottom: 14px;
}
 
/* ══════════════════════════════════════════════════════════════════════════
   ANIMACIONES
══════════════════════════════════════════════════════════════════════════ */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: none; }
}
@keyframes fadeDown {
  from { opacity: 0; transform: translateY(-16px); }
  to   { opacity: 1; transform: none; }
}
@keyframes slideTextIn {
  from { opacity: 0; transform: translateY(18px) scale(0.98); }
  to   { opacity: 1; transform: none; }
}
@keyframes orbFloat {
  from { transform: translate(0, 0) rotate(0deg); }
  to   { transform: translate(20px, 16px) rotate(6deg); }
}
@keyframes pulseDot {
  0%, 100% { box-shadow: 0 0 6px var(--c-gold); }
  50%       { box-shadow: 0 0 16px var(--c-gold), 0 0 32px rgba(201,168,76,0.4); }
}
@keyframes particleRise {
  0%   { opacity: 0; transform: translateY(0) scale(1); }
  20%  { opacity: 0.7; }
  80%  { opacity: 0.4; }
  100% { opacity: 0; transform: translateY(-60vh) scale(0.6); }
}
 
/* ── Hover de cards con imagen target (Infocade, Convenios, etc.) ── */
/* Añade la clase .card-img-hover al elemento para activar */
.card-img-hover {
  position: relative;
  overflow: hidden;
}
.card-img-hover .card-hover-img {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.45s var(--ease);
  z-index: 0;
}
.card-img-hover .card-hover-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-img-hover .card-hover-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(10, 18, 30, 0.88) 0%, rgba(10,18,30,0.1) 60%);
  opacity: 0;
  transition: opacity 0.45s var(--ease);
  z-index: 1;
}
.card-img-hover .card-content {
  position: relative;
  z-index: 2;
  transition: transform 0.35s var(--ease);
}
.card-img-hover:hover .card-hover-img,
.card-img-hover:hover .card-hover-overlay {
  opacity: 1;
}
.card-img-hover:hover .card-content {
  transform: translateY(-4px);
}
 
/* ── Responsive ── */
@media (max-width: 768px) {
  .hero-arrow { width: 40px; height: 40px; font-size: 1.1rem; }
  .hero-arrow--prev { left: 12px; }
  .hero-arrow--next { right: 12px; }
  .hero-title { font-size: clamp(2rem, 7vw, 3rem); }
  .hero-brands { gap: 8px; }
  .hero-pill { padding: 6px 14px; }
}
@media (max-width: 480px) {
  .hero-arrow { display: none; }
}