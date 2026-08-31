import React from 'react';

export default function AboutSection() {
  return (
    <section id="sobre">
      <div className="wrap">
        <div className="about-grid reveal">
          <div>
            <h2>Tecnología con propósito.</h2>
            <p>
              VF Development nace con una idea simple: crear soluciones digitales que no solo se vean bien, sino que realmente funcionen — rápidas, prolijas y pensadas para convertir visitas en clientes.
            </p>
            <p>
              Trabajo con Next.js, TypeScript, Tailwind, React, Node y Nest para construir productos web modernos de punta a punta, con atención personalizada en cada proyecto.
            </p>
          </div>
          <div className="about-code">
            <div><span className="key">stack</span>: [</div>
            <div>&nbsp;&nbsp;<span className="str">"Next.js"</span>, <span className="str">"React"</span>, <span className="str">"TypeScript"</span>,</div>
            <div>&nbsp;&nbsp;<span className="str">"JavaScript"</span>, <span className="str">"Nest.js"</span>, <span className="str">"Node"</span>,</div>
            <div>&nbsp;&nbsp;<span className="str">"Tailwind"</span>, <span className="str">"HTML"</span>, <span className="str">"CSS"</span></div>
            <div>]</div>
            <div><span className="key">enfoque</span>: <span className="str">"rendimiento + diseño"</span></div>
            <div><span className="key">disponibilidad</span>: <span className="str">"abierta"</span></div>
            <div><span className="key">respuesta</span>: <span className="str">"&lt; 24hs"</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}