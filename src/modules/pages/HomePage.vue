<script lang="ts" setup>
// import Hello from "../components/Hello.vue"
import Banner from "@/components/BannerComp.vue";
import TekstMetAfbeelding from "@/components/TekstAfbeeldingComp.vue"
import Usps from "@/components/UspsComp.vue"
import ProjectFeatured from "@/components/ProjectFeaturedComp.vue";



</script>

<template>
  <Banner display="alternative" title="Yanick" span="van der Korst" />
  <TekstMetAfbeelding imagePosition="right" title="Wie ben ik"
    tekst="Ik ben Yanick van der Korst, 21 jaar oud en wonende in Sint-Oedenrode. Ik studeer aan de Fontys Hogeschool ICT Media & Design en daarnaast ben ik part time front-end developer bij Digitale Bazen. Voor het afronden van mijn studie ben ik opzoek naar een stage. Benieuwd naar mijn wensen? Klik dan op onderstaande link."
    button="Meer over mij" image="/src/assets/images/profile.jpg" />
  <Usps display="standard" title="Welke vaardigheden beheers ik?" />

  <!-- <ProjectFeatured title="Projecten" text="Hier alvast een kleine selectie van projecten die ik heb gemaakt."
    button="Meer projecten" :selectedProjectSlugs="['project-a', 'project-b', 'project-c']" /> -->
</template>
