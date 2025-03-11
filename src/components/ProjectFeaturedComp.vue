<template>
  <div class="project-featured">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="content">
            <h2 class="title">{{ title }}</h2>
            <p class="text">{{ text }}</p>
          </div>
          <div class="project-list">
            <!-- Stuur de array van categorieën naar de ProjectCard -->
            <ProjectCard v-for="project in selectedProjects" :key="project.title" :project="project"
              :href="'/project/' + project.slug" />
          </div>
          <div class="button-container">
            <a v-if="button && button.url" class="button secondary ghost" :href="buttonUrl">{{ button.title }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import ProjectCard from "@/modules/projects/ProjectCard.vue";
import { fetchProjects } from "@/store/data/projects";

interface Project {
  slug: string;
  title: string;
  year: number;
  cover: string;
  layout: string;
}

const props = defineProps<{
  title: string;
  text: string;
  button: { title: string; url: string | null };
  selectedProjectSlugs: Array<{ slug: string }>; // Array van objecten, elk met een slug
}>();
const webUrl = "http://localhost:3000"; // Je Strapi base URL

const projects = ref<Project[]>([]);

const selectedProjects = computed(() => {
  const selectedSlugs = props.selectedProjectSlugs.map(proj => proj.slug); // ✅ Extract alleen de slugs
  return projects.value.filter(project => selectedSlugs.includes(project.slug));
});

const buttonUrl = computed(() => {
  return webUrl + props.button.url; // Voeg de base URL toe aan de relatieve URL
});

// Laad de projecten bij het laden van de pagina
onMounted(async () => {
  projects.value = await fetchProjects();
});
</script>

<style scoped>
/* Optional styling voor je component */
</style>
