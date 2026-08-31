import React from 'react';

export default function ProcessSection() {
  return (
    <section id="proceso">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="tag">PROCESO</span>
          <h2>De la idea a un producto en producción.</h2>
        </div>
        <div className="process-grid reveal">
          <div className="process-step">
            <div className="process-num">01</div>
            <h3>Descubrimos</h3>
            <p>Entendemos tu negocio, tus objetivos y qué necesitás resolver.</p>
          </div>
          <div className="process-step">
            <div className="process-num">02</div>
            <h3>Diseñamos</h3>
            <p>Creamos la estructura y la experiencia visual del proyecto.</p>
          </div>
          <div className="process-step">
            <div className="process-num">03</div>
            <h3>Desarrollamos</h3>
            <p>Convertimos el diseño en un producto funcional y optimizado.</p>
          </div>
          <div className="process-step">
            <div className="process-num">04</div>
            <h3>Lanzamos</h3>
            <p>Publicamos el proyecto y confirmamos que todo funcione bien.</p>
          </div>
        </div>
      </div>
    </section>
  );
}