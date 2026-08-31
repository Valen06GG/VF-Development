export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Catálogo de Productos',
    description: 'Filtros dinámicos y búsqueda en tiempo real construida con arquitectura modular.',
    imageUrl: '/projects/catalogo.png',
    tags: ['Next.js', 'NestJS', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://tu-demo.com',
    githubUrl: 'https://github.com/Valen06GG/tu-repo',
  },
  // Agregá más proyectos acá
];