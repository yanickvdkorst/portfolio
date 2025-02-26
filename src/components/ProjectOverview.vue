<template>
  <div class="project-overview">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="project-list">
            <ProjectCard v-for="project in projects" :key="project.title" :project="project" :href="'/project/' + project.slug">
            </ProjectCard>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  </template>
  
  <script setup lang="ts">
    import projects from "@/store/data/projects.json";
    import ProjectCard from "@/modules/projects/ProjectCard.vue";
  </script>
  
  <style scoped>

  </style>
  
