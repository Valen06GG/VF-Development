import Reveal from "../components/reveal/reveal";

const services = [
  { icon: "🌐", title: "Desarrollo Web", desc: "Sitios modernos, rápidos y adaptados a cualquier dispositivo." },
  { icon: "🛒", title: "E-commerce", desc: "Tiendas online diseñadas para vender y facilitar la compra." },
  { icon: "⚛️", title: "Aplicaciones Web", desc: "Sistemas y plataformas a medida según cada necesidad." },
  { icon: "🎨", title: "UI/UX", desc: "Interfaces intuitivas y pensadas para que se disfrute usarlas." },
  { icon: "🔧", title: "Mantenimiento", desc: "Mejoras, actualizaciones, correcciones y soporte continuo." },
  { icon: "📱", title: "Responsive", desc: "Experiencias optimizadas para PC, tablets y celulares." },
];

export default function Services() {
  return (
    <section id="servicios">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="tag">SERVICIOS</span>
          <h2>Soluciones digitales para ideas ambiciosas.</h2>
          <p>Seis formas de ayudarte a construir presencia digital real, sin vueltas ni relleno.</p>
        </Reveal>
        <Reveal className="services-grid" >
          <>
            {services.map((s) => (
              <div className="service-card" key={s.title}>
                <span className="service-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </>
        </Reveal>
      </div>
    </section>
  );
}