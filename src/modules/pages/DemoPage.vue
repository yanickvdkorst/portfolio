<script lang="ts" setup>
import Banner from "@/components/BannerComp.vue";
import TekstMetAfbeelding from "@/components/TekstAfbeeldingComp.vue"    
import Usps from "@/components/UspsComp.vue"
import Image from "@/components/ImageComp.vue"
import Text from "@/components/TextComp.vue"
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
  <Usps display="standard" 
      title = "Welke vaardigheden beheers ik?"
  />
  <Usps display="alternative" 
      title = "Welke vaardigheden beheers ik?"
  />
  <Image 
    display="standard"
    image = "/src/assets/images/diploma_yanick.jpg"
  />

  <Text 
    display="standard"
    title="Wat voor werk doe ik?"
    text="Ik ben op dit moment ruim een jaar werkzaam bij Digitale Bazen als Junior Front-end Developer. Voorafgaand heb ik hier stage gelopen, waar ik onderzoek heb gedaan naar de implementatie van animatie en 3D op de Digitale Bazen websites. Deze heb ik succesvol afgerond en mocht daarbij ook nog eens aansluiten bij het team."
    button="Over Digitale Bazen"
    />
  
</template>
