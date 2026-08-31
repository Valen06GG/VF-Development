import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="logo-small">VF Development</div>
            <div className="tagline-small">Digital solutions built to grow.</div>
          </div>
          <ul>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#proceso">Proceso</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
          <span className="copy">© 2026 VF Development</span>
        </div>
      </div>
    </footer>
  );
}