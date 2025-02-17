<template>
  <div class="project-detail">
    <!-- Fallback project als project undefined is -->
    <ProjectCard :project="project || fallbackProject">
      <p class="project-description">{{ project?.category || 'No description available' }}</p>
    </ProjectCard>

    <!-- Dynamische layout renderen als die bestaat -->
    <component :is="projectLayout" v-if="projectLayout" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, markRaw } from "vue";
import { useRoute } from "vue-router";
import projects from "@/store/data/projects.json";
import ProjectCard from "@/modules/projects/ProjectCard.vue";

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
const project = computed(() => projects.find((p) => p.slug === route.params.slug));

const projectLayout = ref(null);

// Dynamisch de layout importeren
if (project.value?.layout) {
  const layoutName = project.value.layout; // Bijvoorbeeld "project-a-layout"
  
  // Dynamische import van de layout
  import(`../projects/${layoutName}.vue`)
    .then((module) => {
      // Markeer de geïmporteerde component als raw, zodat Vue het niet als reactief behandelt
      projectLayout.value = markRaw(module.default);
    })
    .catch((err) => {
      console.error("Layout niet gevonden:", err);
      projectLayout.value = null;
    });
}
</script>

<style scoped>
.project-detail {
  max-width: 800px;
  margin: 0 auto;
}

.project-description {
  margin-top: 1rem;
}
</style>
