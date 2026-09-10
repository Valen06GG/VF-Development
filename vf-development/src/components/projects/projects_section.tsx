'use client';

import React from 'react';
import Image from 'next/image';

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'América Aromas - Catálogo Web',
      description: 'Catálogo web interactivo con filtro por categorías y buscador en tiempo real para la visualización de productos de decoración y esencias.',
      imageUrl: '/amorica.jpg',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'NestJS'],
      liveUrl: 'https://tu-demo-o-link.com',
      githubUrl: 'https://github.com/tu-usuario/america-aromas',
    },
    {
      id: 2,
      title: 'KINO - Plataforma de Cine',
      description: 'Plataforma web para exploración de cartelera, cotización de entradas, reserva de tickets y gestión de usuarios.',
      imageUrl: '/kino.jpg',
      tags: ['Next.js', 'NestJS', 'TypeScript', 'Tailwind CSS', 'API REST'],
      liveUrl: 'https://tu-demo-o-link.com',
      githubUrl: 'https://github.com/tu-usuario/kino',
    },
  ];

  return (
    <section id="proyectos" className="py-24 bg-zinc-50 dark:bg-[#09090b] text-zinc-900 dark:text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-[#8b5cf6] font-semibold text-xs uppercase tracking-widest block mb-4">
            PROYECTOS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            Trabajo real, no maquetas.
          </h2>
          <p className="text-zinc-600 dark:text-[#a1a1aa] text-base max-w-xl leading-relaxed">
            Estos son algunos de los proyectos y soluciones web que he realizado, desarrollados con enfoque en arquitectura limpia, rendimiento y buena experiencia de usuario.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white dark:bg-[#121215] border border-zinc-200 dark:border-[#27272a] rounded-2xl overflow-hidden flex flex-col justify-between hover:border-zinc-300 dark:hover:border-[#3f3f46] transition-all duration-300 group shadow-sm dark:shadow-none"
            >
              <div>
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative w-full h-64 border-b border-zinc-200 dark:border-[#27272a] overflow-hidden bg-zinc-100 dark:bg-[#18181b]"
                >
                  <Image
                    src={proj.imageUrl}
                    alt={proj.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    unoptimized
                  />
                </a>

                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 tracking-tight">
                    {proj.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-[#a1a1aa] text-sm leading-relaxed mb-6">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-zinc-100 dark:bg-[#18181b] border border-zinc-200 dark:border-[#27272a] text-purple-700 dark:text-[#a78bfa] text-xs font-medium px-3 py-1 rounded-md"
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
                    className="text-xs font-semibold text-white bg-[#8b5cf6] hover:bg-[#7c3aed] px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    Ver Sitio Live →
                  </a>
                )}
                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-zinc-600 dark:text-[#a1a1aa] hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-[#27272a] hover:border-zinc-300 dark:hover:border-[#3f3f46] px-4 py-2.5 rounded-lg transition-colors"
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