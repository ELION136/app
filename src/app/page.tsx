"use client";

import { useReveal } from "@/hooks/useReveal";
import Preloader from "@/components/Preloader";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Features from "@/components/Features";
import About from "@/components/About";
import Autoridades from "@/components/Autoridades";
import Valores from "@/components/Valores";
import Modelo from "@/components/Modelo";
import Stats from "@/components/Stats";
import Cenacap from "@/components/Cenacap";
import Infocade from "@/components/Infocade";
import Eventos from "@/components/Eventos";
import Convenios from "@/components/Convenios";
import Testimonios from "@/components/Testimonios";
import Cambio from "@/components/Cambio";
import Inscripcion from "@/components/Inscripcion";
import Noticias from "@/components/Noticias";
import Buzon from "@/components/Buzon";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  useReveal();

  return (
    <>
      <Preloader />
      <WhatsAppFloat />
      <Navbar />
      <Hero />
      <Ticker />
      <Features />
      <About />
      <Autoridades />
      <Valores />
      <Modelo />
      <Stats />
      <Cenacap />
      <Infocade />
      <Eventos />
      <Convenios />
      <Testimonios />
      <Cambio />
      <Inscripcion />
      <Noticias />
      <Buzon />
      <Contacto />
      <Footer />
    </>
  );
}
