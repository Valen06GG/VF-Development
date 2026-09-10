'use client';

import React from 'react';

export default function ServicesSection() {
  const services = [
    {
      icon: '🌐',
      title: 'Desarrollo Web',
      description: 'Sitios modernos, rápidos y adaptados a cualquier dispositivo.',
    },
    {
      icon: '🛒',
      title: 'E-commerce',
      description: 'Tiendas online diseñadas para vender y facilitar la compra.',
    },
    {
      icon: '⚛️',
      title: 'Aplicaciones Web',
      description: 'Sistemas y plataformas a medida según cada necesidad.',
    },
    {
      icon: '🎨',
      title: 'UI/UX',
      description: 'Interfaces intuitivas y pensadas para que se disfrute usarlas.',
    },
    {
      icon: '🔧',
      title: 'Mantenimiento',
      description: 'Mejoras, actualizaciones, correcciones y soporte continuo.',
    },
    {
      icon: '📱',
      title: 'Responsive',
      description: 'Experiencias optimizadas para PC, tablets y celulares.',
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-zinc-50 dark:bg-[#09090b] text-zinc-900 dark:text-white transition-colors duration-300">
      <div className="wrap max-w-6xl mx-auto px-4">
        <div className="section-head mb-12 reveal">
          <span className="tag text-purple-600 dark:text-purple-400 font-semibold tracking-widest text-xs uppercase block mb-3">
            SERVICIOS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-white">
            Soluciones digitales para ideas ambiciosas.
          </h2>
          <p className="text-zinc-600 dark:text-gray-400 max-w-2xl text-base md:text-lg">
            Seis formas de ayudarte a construir presencia digital real, sin vueltas ni relleno.
          </p>
        </div>

        {/* Grilla de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-3 bg-white dark:bg-[#0d0d0e] border border-zinc-200 dark:border-[#222226] rounded-2xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-zinc-200 dark:divide-[#222226] shadow-sm dark:shadow-none transition-colors duration-300">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-8 flex flex-col justify-between hover:bg-zinc-50 dark:hover:bg-[#121215] transition-colors duration-200 ${
                index >= 3 ? 'md:border-t border-zinc-200 dark:border-[#222226]' : ''
              }`}
            >
              <div>
                <div className="text-2xl mb-6 bg-purple-50 dark:bg-[#18181c] w-12 h-12 flex items-center justify-center rounded-xl border border-purple-100 dark:border-[#2a2a30]">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-zinc-600 dark:text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}