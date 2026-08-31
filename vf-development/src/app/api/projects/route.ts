import { NextResponse } from 'next/server';

// Si usás MongoDB/Mongoose:
// import { connectDB } from '@/lib/db';
// import { Project } from '@/models/Project';

export async function GET() {
  try {
    // await connectDB();
    // const projects = await Project.find().sort({ createdAt: -1 });

    // Ejemplo de respuesta mientras conectás la base de datos:
    const projects = [
      {
        id: '1',
        title: 'E-commerce App',
        description: 'Catálogo de productos interactivo con filtros dinámicos y panel de administración.',
        imageUrl: '/projects/catalog.png',
        tags: ['Next.js', 'TypeScript', 'Tailwind', 'NestJS'],
        liveUrl: 'https://ejemplo.com',
        githubUrl: 'https://github.com/...',
      },
    ];

    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al obtener los proyectos' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, description, imageUrl, tags, liveUrl, githubUrl } = body;

    if (!title || !description || !imageUrl) {
      return NextResponse.json(
        { error: 'Título, descripción e imagen son requeridos' },
        { status: 400 }
      );
    }

    // await connectDB();
    // const newProject = await Project.create({ title, description, imageUrl, tags, liveUrl, githubUrl });

    return NextResponse.json({ success: true, project: body }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al guardar el proyecto' },
      { status: 500 }
    );
  }
}