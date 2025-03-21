<template>
  <div class="project-overview">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="project-list">
            <!-- Toon alle projecten zonder filter -->
            <ProjectCard v-for="project in projects" :key="project.slug" :project="project"
              :href="'/project/' + project.slug" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import ProjectCard from "@/modules/projects/ProjectCard.vue";
import { fetchProjects } from "@/store/data/projects";

interface Project {
  slug: string;
  title: string;
  Category: Array<{ Categorie: string }>;
  year: number;
  cover: string;  // De cover is nu een string (de volledige URL)
  layout: string;
}

const projects = ref<Project[]>([]);

console.log("projecten:", projects);
// Haal de projecten op
onMounted(async () => {
  projects.value = await fetchProjects();
  console.log('Opgehaalde projecten:', projects.value);
});
</script>

<style scoped>
/* Optionele styling voor je component */
</style>