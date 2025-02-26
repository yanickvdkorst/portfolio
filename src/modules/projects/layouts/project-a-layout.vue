<script lang="ts" setup>
import TekstMetAfbeelding from "@/components/TekstAfbeeldingComp.vue"
import Text from "@/components/TextComp.vue"
import Usps from "@/components/UspsComp.vue"
import Image from "@/components/ImageComp.vue"
</script>

<template>
  <TekstMetAfbeelding 
      imagePosition="left" 
      title="Over digitale bazen"
      tekst="Ik studeer ICT Media & Design, dit houdt in dat ik een opdracht vanuit een stakeholder krijg. Hiervoor onderzoek doe, een passend product bedenk, creeëer en test. Ik doe dit op bachelor niveau, voorgaand heb ik hiervoor een associate degree afgerond binnen dezelfde studie."
      button="Stuur me een mail"
      image="/src/assets/images/logo-profiel-vierkant.jpg"
  />
  <Text 
    display="standard"
    title="Mijn werkzaamheden"
    text="Ik ben op dit moment ruim een jaar werkzaam bij Digitale Bazen als Junior Front-end Developer. Voorafgaand heb ik hier stage gelopen, waar ik onderzoek heb gedaan naar de implementatie van animatie en 3D op de Digitale Bazen websites. Deze heb ik succesvol afgerond en mocht daarbij ook nog eens aansluiten bij het team. Ik ben op dit moment een jaar werkzaam bij Digitale Bazen en heb het nog uitstekend naar mijn zin. "
    button="Over Digitale Bazen"
   />
   <Usps display="alternative" 
      title = "Specialisme"
   />
   <Image 
    display="standard"
    image = "/src/assets/images/bbq_Yanick.jpg"
   />
</template>
