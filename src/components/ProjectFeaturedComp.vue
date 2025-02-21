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
              <ProjectCard
                v-for="project in selectedProjects"
                :key="project.title"
                :project="project"
                :href="'/project/' + project.slug"
              />
            </div>
            <div class="button-container">
              <a class="button secondary ghost" href="#">{{ button }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import ProjectCard from "@/modules/projects/ProjectCard.vue";
  import projects from "@/store/data/projects.json";
  
  // Ontvang de props voor de slugs van de geselecteerde projecten
  const props = defineProps<{
    title: string;
    text: string;
    button: string;
    selectedProjectSlugs: Array<string>; // Dit is een array van strings (de slugs van de projecten)
  }>();
  
  // Zoek de geselecteerde projecten op basis van de slugs
  const selectedProjects = projects.filter(project => 
    props.selectedProjectSlugs.includes(project.slug)
  );
  </script>
  
  <style scoped>
  /* Optional styling voor je component */
  </style>
  