<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router'; // Om de slug uit de URL te halen

// Component imports
import BannerComp from '@/components/BannerComp.vue';
import TekstAfbeeldingComp from '@/components/TekstAfbeeldingComp.vue';
import TextComp from '@/components/TextComp.vue';
import UspsComp from '@/components/UspsComp.vue';
import ProjectFeaturedComp from '@/components/ProjectFeaturedComp.vue';
import ImageComp from '@/components/ImageComp.vue';
import ProjectOverview from '@/components/ProjectOverview.vue';
import ImageGaleryComp from '@/components/ImageGaleryComp.vue';
import TextSpecification from '@/components/TextSpecification.vue';
import VideoComp from '@/components/VideoComp.vue';

// Route & slug setup
const route = useRoute();
const slug = ref(route.params.slug || '');

// Data
const page = ref(null);

// ✅ Functie om de pagina op te halen met de slug
const fetchPage = async () => {
  let slugValue = slug.value;

  // ✅ Fallback slug naar '/' als deze leeg is of '/'
  if (!slugValue || slugValue === '' || slugValue === '/') {
    slugValue = '/'; // 🔥 Zorg dat dit overeenkomt met je slug in Strapi!
  }

  console.log('Fetching page with slug:', slugValue); // ✅ Debugging log

  try {
    const res = await axios.get(
      `http://localhost:1337/api/pages?filters[slug][$eq]=${slugValue}&pLevel=10`
    );
    console.log('API response:', res.data);

    if (res.data.data.length > 0) {
      page.value = res.data.data[0]; // ✅ Pagina gevonden!
      console.log('Page content:', page.value.Content); // Log de content van de pagina
    } else {
      console.warn('No page found for slug:', slugValue);
      page.value = null; // ✅ Geen pagina gevonden
    }
  } catch (error) {
    console.error('Error fetching page:', error);
    page.value = null;
  }
};

// ✅ Eerste keer ophalen als de pagina mount
onMounted(() => {
  fetchPage();
});

// ✅ Watcher om de pagina opnieuw op te halen als de slug wijzigt
watch(() => route.params.slug, (newSlug) => {
  slug.value = newSlug || '';
  fetchPage();
});

// ✅ Computed property voor de componenten van de pagina
const components = computed(() => {
  console.log('Computed components:', page.value?.Content || []); // Log de componenten
  return page.value?.Content || []; // 🔥 LET OP: Strapi v4 heeft vaak 'attributes'
});

// ✅ Mapping van backend component types naar Vue componenten
const componentMap = {
  "pagecomps.banner": BannerComp,
  "pagecomps.text-with-image": TekstAfbeeldingComp,
  "pagecomps.text-display": TextComp,
  "pagecomps.usps": UspsComp,
  "pagecomps.project-featured": ProjectFeaturedComp,
  "pagecomps.image": ImageComp,
  "pagecomps.project-overview": ProjectOverview,
  "pagecomps.image-gallery": ImageGaleryComp,
  "pagecomps.text-with-details": TextSpecification,
  "pagecomps.video": VideoComp,
};
</script>

<template>
  <div class="wrapper" v-if="page">
    <component v-for="(component, index) in components" :key="index" :is="componentMap[component.__component]"
      v-bind="component" />
  </div>

  <div v-else>
    <p>Geen pagina gevonden voor de opgegeven slug.</p>
  </div>
</template>