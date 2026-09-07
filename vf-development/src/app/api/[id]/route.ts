import { NextResponse } from 'next/server';

const NEST_API_URL = process.env.NEST_API_URL || 'http://localhost:3001';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const res = await fetch(`${NEST_API_URL}/projects/${id}`, {
      method: 'DELETE',
    });

    if (!res.ok) {
      throw new Error(`Error en el servidor: ${res.statusText}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'No se pudo eliminar el proyecto' },
      { status: 500 }
    );
  }
}