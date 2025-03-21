<template>
  <a :href="project.slug" class="project-card">
    <div class="image-container">
      <img :src="project.cover" :alt="project.title" />
    </div>
    <div class="project-info">
      <p class="project-title">{{ project.title }}</p>
      <p class="project-date">{{ project.year }}</p>
      <div class="project-cat">
        <p class="project-category" v-for="(cat, index) in categories" :key="index">{{ cat }}</p>
      </div>

      <slot></slot> <!-- Hier kunnen extra dingen worden toegevoegd per project -->
    </div>
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  project: {
    title: string;
    year: number;
    cover: string;
    slug: string;
    Category?: Array<{ Categorie: string }>; // Maak Category optioneel
  };
}>();

const categories = computed(() => {
  return props.project.Category ? props.project.Category.map(cat => cat.Categorie) : [];
});

console.log('Project props:', props);
console.log('Project categories:', categories.value);
</script>

<style scoped></style>