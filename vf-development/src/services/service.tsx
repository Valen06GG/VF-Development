const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export async function getProjects() {
  const response = await fetch(`${API}/projects`);

  if (!response.ok) {
    throw new Error('Error al obtener los proyectos');
  }

  return response.json();
}

export async function getProjectById(id: number | string) {
  const response = await fetch(`${API}/projects/${id}`);

  if (!response.ok) {
    throw new Error('Proyecto no encontrado');
  }

  return response.json();
}

export async function createProject(data: any) {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API}/projects`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Error al crear el proyecto');
  }

  return response.json();
}

export async function updateProject(id: number | string, data: any) {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API}/projects/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Error al actualizar el proyecto');
  }

  return response.json();
}

export async function deleteProject(id: number | string) {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API}/projects/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    },
  });

  if (!response.ok) {
    throw new Error('Error al eliminar el proyecto');
  }

  return response.json();
}