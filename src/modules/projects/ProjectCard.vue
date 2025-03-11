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
  </a>
</template>

<script setup lang="ts">
defineProps<{
  project: {
    title: string;
    year: number;
    cover: string;
    slug: string;
  };
}>();
</script>

<style scoped></style>
