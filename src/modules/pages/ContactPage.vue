<script lang="ts" setup>
import TekstMetAfbeelding from "@/components/TekstAfbeeldingComp.vue"
import Banner from "@/components/BannerComp.vue";
</script>

<template>
  <Banner 
    title="Contact"
  />
  <TekstMetAfbeelding 
      imagePosition="right" 
      title="Kom in contact"
      tekst="Bij enige vragen of interesse, twijfel niet om me een mailtje te sturen. Geen stage plek beschikbaar of interessant voor toekomstige projecten? Volg me gerust op LinkedIn!"
      button="Stuur me een mail"
      image="/src/assets/images/profile.jpg"
  />
</template>
