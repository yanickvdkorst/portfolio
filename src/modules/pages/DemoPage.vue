<script lang="ts" setup>
import Banner from "@/components/BannerComp.vue";
import TekstMetAfbeelding from "@/components/TekstAfbeeldingComp.vue"
import Usps from "@/components/UspsComp.vue"
import Image from "@/components/ImageComp.vue"
import Text from "@/components/TextComp.vue"
import ImageGalery from "@/components/ImageGaleryComp.vue";
import ProjectFeatured from "@/components/ProjectFeaturedComp.vue";
import TextSpecification from "@/components/TextSpecification.vue";

</script>


<template>
  <Banner title="Demo" span="" />
  <TekstMetAfbeelding imagePosition="right" title="Wie ben ik"
    tekst="Ik ben Yanick van der Korst, 21 jaar oud en wonende in Sint-Oedenrode. Ik studeer aan de Fontys Hogeschool ICT Media & Design en daarnaast ben ik part time front-end developer bij Digitale Bazen. Voor het afronden van mijn studie ben ik opzoek naar een stage. Benieuwd naar mijn wensen? Klik dan op onderstaande link."
    button="Meer over mij" image="/src/assets/images/profile.jpg" />
  <TekstMetAfbeelding imagePosition="left" title="Wie ben ik"
    tekst="Ik ben Yanick van der Korst, 21 jaar oud en wonende in Sint-Oedenrode. Ik studeer aan de Fontys Hogeschool ICT Media & Design en daarnaast ben ik part time front-end developer bij Digitale Bazen. Voor het afronden van mijn studie ben ik opzoek naar een stage. Benieuwd naar mijn wensen? Klik dan op onderstaande link."
    button="Meer over mij" image="/src/assets/images/profile.jpg" />
  <Usps display="standard" title="Welke vaardigheden beheers ik?" />
  <Usps display="alternative" title="Welke vaardigheden beheers ik?" />
  <Image display="standard" image="/src/assets/images/diploma_yanick.jpg" />

  <Text display="standard" title="Wat voor werk doe ik?"
    text="Ik ben op dit moment ruim een jaar werkzaam bij Digitale Bazen als Junior Front-end Developer. Voorafgaand heb ik hier stage gelopen, waar ik onderzoek heb gedaan naar de implementatie van animatie en 3D op de Digitale Bazen websites. Deze heb ik succesvol afgerond en mocht daarbij ook nog eens aansluiten bij het team."
    button="Over Digitale Bazen" />

  <ImageGalery display="standard" image="/src/assets/images/projecten.jpg" />

  <ProjectFeatured title="Projecten" text="Hier alvast een kleine selectie van projecten die ik heb gemaakt."
    button="Meer projecten" :selectedProjectSlugs="['project-a', 'project-b', 'project-c']" />

  <TextSpecification title_column_1="Uitdaging" title_column_2="Resultaat" title_column_3="Technical Aspects"
    text_column_1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo fermentum lobortis. Suspendisse et felis nec mauris mattis pulvinar. Nunc eu mauris velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo fermentum lobortis. Suspendisse et felis nec mauris mattis pulvinar. Nunc eu mauris velit. "
    text_column_2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo fermentum lobortis. Suspendisse et felis nec mauris mattis pulvinar. Nunc eu mauris velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo fermentum lobortis. Suspendisse et felis nec mauris mattis pulvinar. Nunc eu mauris velit. "
    :list_items="['Blender', 'Unity', 'Photoshop']" />

</template>
