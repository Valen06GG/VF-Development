import React from 'react';

export default function ProjectsSection() {
  return (
    <section id="proyectos">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="tag">PROYECTOS</span>
          <h2>Trabajo real, no maquetas.</h2>
          <p>
            Esta sección está lista para tus primeros casos — cargá capturas, stack usado y un link a cada proyecto a medida que los sumes.
          </p>
        </div>
        <div className="projects-grid reveal">
          <div className="project-placeholder">
            <span className="plus">+</span>
            <span className="ptitle">Proyecto 01</span>
            <span className="pdesc">Espacio reservado para tu primer trabajo</span>
          </div>
          <div className="project-placeholder">
            <span className="plus">+</span>
            <span className="ptitle">Proyecto 02</span>
            <span className="pdesc">Agregá capturas y stack cuando lo tengas</span>
          </div>
          <div className="project-placeholder">
            <span className="plus">+</span>
            <span className="ptitle">Proyecto 03</span>
            <span className="pdesc">Cada card puede linkear al proyecto en vivo</span>
          </div>
        </div>
      </div>
    </section>
  );
}