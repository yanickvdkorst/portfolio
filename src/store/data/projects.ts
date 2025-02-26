import axios from 'axios';

export const fetchProjects = async () => {
  try {
    const response = await axios.get('http://localhost:1337/api/projects');
    return response.data.data.map((project: any) => ({
      slug: project.slug,
      title: project.title,
      category: project.category,
      year: Number(project.year), // Zorg ervoor dat year een number is
      cover: project.cover,
      layout: project.layout,
    }));
  } catch (error) {
    console.error('Fout bij het ophalen van projecten:', error);
    return []; // Geef een lege array terug bij een fout
  }
};
