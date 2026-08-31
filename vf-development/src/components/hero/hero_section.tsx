"use client";

import { useRef } from "react";
import Terminal from "../terminal/terminal";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect || !spotlightRef.current) return;
    const x = e.clientX - rect.left - 260;
    const y = e.clientY - rect.top - 260;
    spotlightRef.current.style.transform = `translate(${x}px, ${y}px)`;
  }

  return (
    <section className="hero" ref={heroRef} onMouseMove={handleMouseMove}>
      <div className="grid-bg"></div>
      <div className="spotlight" ref={spotlightRef}></div>
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <span className="eyebrow">DISPONIBLE PARA NUEVOS PROYECTOS</span>
            <h1>
              Sitios que cargan rápido, se ven <span className="grad">increíbles</span> y consiguen
              clientes.
            </h1>
            <p className="lead">
              Diseño y desarrollo web para profesionales y negocios que necesitan verse tan bien
              como el trabajo que hacen. Sin plantillas genéricas.
            </p>
            <div className="hero-ctas">
              <a href="#contacto" className="btn-primary">
                Empezar un proyecto →
              </a>
              <a href="#proyectos" className="btn-secondary">
                Ver proyectos
              </a>
            </div>
          </div>
          <Terminal />
        </div>
      </div>
    </section>
  );
}