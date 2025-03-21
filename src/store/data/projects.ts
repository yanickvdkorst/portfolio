import axios from 'axios';

const baseUrl = "http://localhost:1337"; // Je base URL

export const fetchProjects = async () => {
  try {
    const response = await axios.get('http://localhost:1337/api/projects?populate=*');
    return response.data.data.map((project: any) => ({
      slug: project.slug,
      title: project.title,
      Category: project.Category.map((cat: any) => ({
        Categorie: cat.Categorie
      })),
      year: Number(project.year), // Zorg ervoor dat year een number is
      cover: project.cover
        ? `${baseUrl}${project.cover.url}` // Voeg de base URL toe aan de cover URL
        : 'empty', // Lege string als cover niet aanwezig is
      layout: project.layout,
    }
  )
  
);
    
  } catch (error) {
    console.error('Fout bij het ophalen van projecten:', error);
    return [];
  }
};
