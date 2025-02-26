<script lang="ts" setup>
import Banner from "@/components/BannerComp.vue";
import Image from "@/components/ImageComp.vue"
import TekstMetAfbeelding from "@/components/TekstAfbeeldingComp.vue"
import Text from "@/components/TextComp.vue"
</script>

<template>
  <Banner title="Over mij" span="" />
  <!-- <TekstMetAfbeelding imagePosition="left" title="Wat studeer ik?"
    tekst="Ik studeer ICT Media & Design, dit houdt in dat ik een opdracht vanuit een stakeholder krijg. Hiervoor onderzoek doe, een passend product bedenk, creeëer en test. Ik doe dit op bachelor niveau, voorgaand heb ik hiervoor een associate degree afgerond binnen dezelfde studie."
    button="Meer over mij" image="/src/assets/images/profile.jpg" /> -->
  <Text display="standard" title="Wat voor werk doe ik?"
    text="Ik ben op dit moment ruim een jaar werkzaam bij Digitale Bazen als Junior Front-end Developer. Voorafgaand heb ik hier stage gelopen, waar ik onderzoek heb gedaan naar de implementatie van animatie en 3D op de Digitale Bazen websites. Deze heb ik succesvol afgerond en mocht daarbij ook nog eens aansluiten bij het team."
    button="Over Digitale Bazen" />
  <!-- <Image display="standard" image="/src/assets/images/diploma_yanick.jpg" /> -->
  <!-- <TekstMetAfbeelding imagePosition="right" title="Mijn Hobbies"
    tekst="In mijn vrije tijd ben ik veel op de golfbaan te vinden. Ik doe dit al sinds klein af aan en ben hier nogsteeds dagelijks mee bezig. Daarnaast ben ik veel bezig met het experimenteren met nieuwe techniecken, uitwerken van ideeën, vooral veel bezig zijn dus. Ook trakteer ik mijzelf met enige regelmaat op een avondje Netflix. "
    button="" image="/src/assets/images/golf_yanick.jpg" /> -->
</template>
