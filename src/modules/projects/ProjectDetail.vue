<template>
  <div class="wrapper">
    <ProjectBanner :project="projectWithCategories || fallbackProject">
      <!-- Loop door de categories en maak voor elke een nieuwe <p> -->
      <div v-if="projectWithCategories?.category?.length">
        <p v-for="(cat, index) in projectWithCategories.category" :key="index" class="project-description">
          {{ cat || 'No description available' }}
        </p>
      </div>
    </ProjectBanner>

    <!-- Dynamische layout renderen als die bestaat -->
    <component :is="projectLayout" v-if="projectLayout" />

    <!-- Dynamische paginablokken renderen -->
    <component v-for="(component, index) in components" :key="index" :is="componentMap[component.__component]"
      v-bind="component" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, markRaw, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from 'axios';
import ProjectBanner from "@/modules/projects/ProjectBanner.vue";

import BannerComp from '@/components/BannerComp.vue';
import TekstAfbeeldingComp from '@/components/TekstAfbeeldingComp.vue';
import TextComp from '@/components/TextComp.vue';
import UspsComp from '@/components/UspsComp.vue';
import ProjectFeaturedComp from '@/components/ProjectFeaturedComp.vue';
import ImageComp from '@/components/ImageComp.vue';
import ProjectOverview from '@/components/ProjectOverview.vue';
import ImageGaleryComp from "@/components/ImageGaleryComp.vue";

interface Project {
  title: string;
  category: string[]; // Veranderd naar een array van strings
  year: number;
  cover: string;
  description: string;
  slug: string;
  layout: string | null; // layout kan een string zijn of null als het niet beschikbaar is
  Content: any[]; // Voeg Content toe als array van blokken
}

interface Component {
  __component: string;
  [key: string]: any;
}

// Fallback project voor als de project niet gevonden wordt
const fallbackProject = {
  title: "Unknown Project",
  category: ["Unknown"],
  year: 2023,
  cover: "/path/to/default/image.jpg",
  description: "No description available",
  slug: "#",
  layout: null,
  Content: []
};

const route = useRoute();
const project = ref<Project | null>(null);
// Gebruik een ref om het project dynamisch in te laden
const projectLayout = ref(null);
const baseUrl = "http://localhost:1337"; // Je base URL

// Computed property om de categorieën om te zetten naar een array van strings
const projectWithCategories = computed(() => {
  if (project.value) {
    return {
      ...project.value,
      category: project.value.category.map(cat => cat)
    };
  }
  return null;
});

// Laad de projecten van Strapi op basis van de slug
const fetchProject = async () => {
  try {
    const response = await axios.get(`http://localhost:1337/api/projects?filters[slug][$eq]=${route.params.slug}&pLevel=10`);
    const projectData = response.data.data[0]; // Er wordt maar 1 project verwacht met de opgegeven slug
    console.log('response:', projectData);

    if (projectData) {
      // CHECK: Heeft projectData 'attributes'?
      const data = projectData.attributes || projectData;

      project.value = {
        title: data.title,
        category: data.Category.map((cat: { Categorie: string }) => cat.Categorie) || [],
        year: Number(data.year),
        cover: data.cover?.formats?.large?.url
          ? `${baseUrl}${data.cover.formats.large.url}`
          : data.cover?.url
            ? `${baseUrl}${data.cover.url}`
            : 'empty',
        description: data.description || 'No description available',
        slug: data.slug,
        layout: data.layout || null,
        Content: data.Content || []
      };

      console.log('project.value:', project.value);

    } else {
      project.value = fallbackProject;
    }
  } catch (error) {
    console.error('Fout bij het ophalen van het project:', error);
    project.value = fallbackProject;
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

// Computed property voor de componenten van de pagina
const components = computed<Component[]>(() => {
  console.log('Computed components:', project.value?.Content || []); // Log de componenten
  return project.value?.Content || [];
});

// Mapping van backend component types naar Vue componenten
const componentMap: { [key: string]: any } = {
  "pagecomps.banner": BannerComp,
  "pagecomps.text-with-image": TekstAfbeeldingComp,
  "pagecomps.text-display": TextComp,
  "pagecomps.usps": UspsComp,
  "pagecomps.project-featured": ProjectFeaturedComp,
  "pagecomps.image": ImageComp,
  "pagecomps.project-overview": ProjectOverview,
  "pagecomps.image-galery": ImageGaleryComp
};

onMounted(async () => {
  await fetchProject();  // Haal het project op bij het laden
  await loadLayout();    // Laad de layout als deze bestaat
});
</script>

<style scoped>
/* Optionele styling voor je component */
</style>