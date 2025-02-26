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

// Haal de route op
const route = useRoute();
const slug = ref(route.params.slug); // Maak een ref van de slug

const page = ref(null);

// Functie om de pagina op te halen met de slug
const fetchPage = async () => {
  if (slug.value) {
    const res = await axios.get(`http://localhost:1337/api/pages?filters[slug][$eq]=${slug.value}&populate[Content][populate]=*`);
    page.value = res.data.data[0]; // Haal de pagina op met de gekoppelde componenten
    console.log('Fetched Page:', page.value);
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
  "pagecomps.imagecomp": ImageComp


};
</script>

<template>

  <component v-for="(component, index) in components" :key="index" :is="componentMap[component.__component]"
    v-bind="component" />

</template>
