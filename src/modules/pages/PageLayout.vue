<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router'; // Importeren van useRoute om de slug uit de URL te halen
import BannerComp from '@/components/BannerComp.vue'; // Import de banner
import TekstAfbeeldingComp from '@/components/TekstAfbeeldingComp.vue';
import TextComp from '@/components/TextComp.vue';
import UspsComp from '@/components/UspsComp.vue';
import ProjectFeaturedComp from '@/components/ProjectFeaturedComp.vue';
import ImageComp from '@/components/ImageComp.vue';
import ProjectOverview from '@/components/ProjectOverview.vue';

// Haal de route op
const route = useRoute();
const slug = ref(route.params.slug); // Maak een ref van de slug

const page = ref(null);

// Functie om de pagina op te halen met de slug
const fetchPage = async () => {
  if (slug.value) {
    try {
      const res = await axios.get(`http://localhost:1337/api/pages?filters[slug][$eq]=/${slug.value}&populate[Content][populate]=*`);
      console.log('API response:', res.data); // Log de API respons
      if (res.data.data.length > 0) {
        page.value = res.data.data[0]; // Haal de pagina op met de gekoppelde componenten
      } else {
        console.warn('No page found for slug:', slug.value);
        page.value = null; // Stel page in op null als er geen pagina is gevonden
      }
    } catch (error) {
      console.error('Error fetching page:', error);
      page.value = null; // Stel page in op null bij een fout
    }
  }
};

// Haal de pagina op bij de eerste keer laden
onMounted(() => {
  fetchPage();
});

// Gebruik watch om slug te volgen en de pagina opnieuw op te halen bij veranderingen
watch(() => route.params.slug, (newSlug) => {
  slug.value = newSlug;
  fetchPage(); // Haal de nieuwe pagina op bij slug verandering
});

// Computed property voor het renderen van componenten
const components = computed(() => {
  return page.value?.Content || []; // Geef de Content componenten terug
});

// Mapping van componenten naar Vue componenten
const componentMap = {
  "pagecomps.banner": BannerComp,
  "pagecomps.text-with-image": TekstAfbeeldingComp,
  "pagecomps.text-display": TextComp,
  "pagecomps.usps": UspsComp,
  "pagecomps.project-featured": ProjectFeaturedComp,
  "pagecomps.image": ImageComp,
  "pagecomps.project-overview": ProjectOverview
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