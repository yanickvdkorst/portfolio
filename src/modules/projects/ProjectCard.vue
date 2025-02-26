<template>
    <a :href="project.slug" class="project-card">
      <div class="image-container">
        <img :src="project.cover" :alt="project.title" />
      </div>
      <div class="project-info">
        <p class="project-title">{{ project.title }}</p>
        <p class="project-date">{{ project.year }}</p>
        <slot></slot> <!-- Hier kunnen extra dingen worden toegevoegd per project -->
      </div>
      <div class="project-cat">
        <p class="project-category">{{ project.category }}</p>
      </div>
    </a>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    project: {
      title: string;
      category: string;
      year: number;
      cover: string;
      slug: string;
    };
  }>();
  </script>s
  
  <style scoped>

  </style>
  