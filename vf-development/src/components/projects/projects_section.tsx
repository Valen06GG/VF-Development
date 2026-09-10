'use client';

import React from 'react';

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'América Aromas - Catálogo Web',
      description: 'Catálogo web interactivo con filtro por categorías y buscador en tiempo real para la visualización de productos de decoración y esencias.',
      imageUrl: '/amorica.jpg',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'NestJS'],
      liveUrl: 'https://amorica-aromas.vercel.app', 
      githubUrl: 'https://github.com/Valen06GG/Amorica-Aromas', 
    },
    {
      id: 2,
      title: 'KINO - Plataforma de Cine',
      description: 'Plataforma web para exploración de cartelera, cotización de entradas, reserva de tickets y gestión de usuarios.',
      imageUrl: '/kino.jpg',
      tags: ['Next.js', 'NestJS', 'TypeScript', 'Tailwind CSS', 'API REST'],
      liveUrl: 'https://kino-henry-pf.vercel.app',
      githubUrl: 'https://github.com/kino-henry-pf/kino-henry-pf', 
    },
  ];

  return (
    <section id="proyectos" className="py-24 bg-[#09090b] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 reveal">
          <span className="text-[#8b5cf6] font-semibold text-xs uppercase tracking-widest block mb-4">
            PROYECTOS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Trabajo real, no maquetas.
          </h2>
          <p className="text-[#a1a1aa] text-base max-w-xl leading-relaxed">
            Estos son algunos de los proyectos y soluciones web que he realizado, desarrollados con enfoque en arquitectura limpia, rendimiento y buena experiencia de usuario.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="bg-[#121215] border border-[#27272a] rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#3f3f46] transition-all duration-300 group"
            >
              <div>
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden relative border-b border-[#27272a]"
                >
                  <img
                    src={proj.imageUrl}
                    alt={proj.title}
                    className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </a>

                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {proj.title}
                  </h3>
                  <p className="text-[#a1a1aa] text-sm leading-relaxed mb-6">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-[#18181b] border border-[#27272a] text-[#a78bfa] text-xs font-medium px-3 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 flex items-center gap-4">
                {proj.liveUrl && (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-white bg-[#8b5cf6] hover:bg-[#7c3aed] px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    Ver Sitio Live →
                  </a>
                )}
                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-[#a1a1aa] hover:text-white border border-[#27272a] hover:border-[#3f3f46] px-4 py-2.5 rounded-lg transition-colors"
                  >
                    Código GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}