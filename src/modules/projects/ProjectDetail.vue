<template>
  <!-- Fallback project als project undefined is -->
  <ProjectBanner :project="project || fallbackProject">
    <p class="project-description">{{ project?.category || 'No description available' }}</p>
  </ProjectBanner>

  <!-- Dynamische layout renderen als die bestaat -->
  <component :is="projectLayout" v-if="projectLayout" />
</template>

<script setup lang="ts">
import { computed, ref, markRaw, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from 'axios';
import ProjectBanner from "@/modules/projects/ProjectBanner.vue";

interface Project {
  title: string;
  category: string;
  year: number;
  cover: string;
  description: string;
  slug: string;
  layout: string | null; // layout kan een string zijn of null als het niet beschikbaar is
}


// Fallback project voor als de project niet gevonden wordt
const fallbackProject = {
  title: "Unknown Project",
  category: "Unknown",
  year: 2023,
  cover: "/path/to/default/image.jpg",
  description: "No description available",
  slug: "#"
};

const route = useRoute();
const project = ref<Project | null>(null);
 // Gebruik een ref om het project dynamisch in te laden
const projectLayout = ref(null);
const baseUrl = "http://localhost:1337"; // Je base URL
// Laad de projecten van Strapi op basis van de slug
const fetchProject = async () => {
  try {
    const response = await axios.get(`http://localhost:1337/api/projects?filters[slug][$eq]=${route.params.slug}&populate=cover`);
    const projectData = response.data.data[0]; // Er wordt maar 1 project verwacht met de opgegeven slug
    console.log('response:', response.data.data[0]);
    if (projectData) {
      project.value = {
        title: projectData.title,
        category: projectData.category,
        year: Number(projectData.year), // Zorg ervoor dat 'year' een nummer is
        cover: projectData.cover
        ? `${baseUrl}${projectData.cover.url}` // Voeg de base URL toe aan de cover URL
        : 'empty',
        description: projectData.description || 'No description available', // Voeg fallback toe als description ontbreekt
        slug: projectData.slug,
        layout: projectData.layout || '', // Als er geen layout is, laat het leeg
      };
    } else {
      project.value = null; // Als het project niet gevonden wordt, gebruik null
    }
  } catch (error) {
    console.error('Fout bij het ophalen van het project:', error);
    project.value = null; // Foutafhandeling, stel in op null
  }
};

// Dynamisch de layout importeren
const loadLayout = async () => {
  if (project.value?.layout) {
    const layoutName = project.value.layout; // Bijvoorbeeld "project-a-layout"
    
    try {
      // Dynamische import van de layout
      const module = await import(`../projects/layouts/${layoutName}.vue`);
      projectLayout.value = markRaw(module.default); // Markeer de geïmporteerde component als raw
    } catch (err) {
      console.error("Layout niet gevonden:", err);
      projectLayout.value = null;
    }
  }
};

onMounted(async () => {
  await fetchProject();  // Haal het project op bij het laden
  await loadLayout();    // Laad de layout als deze bestaat
});
</script>

<style scoped>
/* Optionele styling voor je component */
</style>
