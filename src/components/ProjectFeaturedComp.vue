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
            <ProjectCard v-for="project in selectedProjects" :key="project.title" :project="project"
              :href="'/project/' + project.slug" />
          </div>
          <div class="button-container">
            <a v-if="button" class="button secondary ghost" href="#">{{ button }}</a>
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
  category: string;
  year: number;
  cover: string;
  layout: string;
}


const props = defineProps<{
  title: string;
  text: string;
  button: string;
  selectedProjectSlugs: Array<{ slug: string }>; // Array van objecten, elk met een slug
}>();


const projects = ref<Project[]>([]);

console.log("Meegegeven project slugs:", props.selectedProjectSlugs);

const selectedProjects = computed(() => {
  const selectedSlugs = props.selectedProjectSlugs.map(proj => proj.slug); // ✅ Extract alleen de slugs
  return projects.value.filter(project => selectedSlugs.includes(project.slug));
});

// Laad de projecten bij het laden van de pagina
onMounted(async () => {
  projects.value = await fetchProjects();
});



</script>

<style scoped>
/* Optional styling voor je component */
</style>
