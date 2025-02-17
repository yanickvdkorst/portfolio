<script lang="ts" setup>
import Banner from "@/components/BannerComp.vue";
import TekstMetAfbeelding from "@/components/TekstAfbeeldingComp.vue"    
import Usps from "@/components/UspsComp.vue"
</script>


<template>
  <Banner 
    title="Demo"
  />
  <TekstMetAfbeelding 
      imagePosition="right" 
      title="Wie ben ik"
      tekst="Ik ben Yanick van der Korst, 21 jaar oud en wonende in Sint-Oedenrode. Ik studeer aan de Fontys Hogeschool ICT Media & Design en daarnaast ben ik part time front-end developer bij Digitale Bazen. Voor het afronden van mijn studie ben ik opzoek naar een stage. Benieuwd naar mijn wensen? Klik dan op onderstaande link."
      button="Meer over mij"
      image="/src/assets/images/profile.jpg"
  />
  <TekstMetAfbeelding 
      imagePosition="left" 
      title="Wie ben ik"
      tekst="Ik ben Yanick van der Korst, 21 jaar oud en wonende in Sint-Oedenrode. Ik studeer aan de Fontys Hogeschool ICT Media & Design en daarnaast ben ik part time front-end developer bij Digitale Bazen. Voor het afronden van mijn studie ben ik opzoek naar een stage. Benieuwd naar mijn wensen? Klik dan op onderstaande link."
      button="Meer over mij"
      image="/src/assets/images/profile.jpg"
  />
  <Usps display="standard"/>
  <Usps display="alternative" />
</template>
