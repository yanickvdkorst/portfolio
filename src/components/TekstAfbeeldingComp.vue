<template>
    <div class="tekst-met-afbeelding" :class="`image-${imagePosition}`">
        <div class="container">
            <div class="row">
                <div v-if="imagePosition === 'left'" class="col-lg-4">
                    <div class="image-container">
                        <img src="@/assets/images/profile.jpg" alt="profile">
                    </div>
                </div>


                <div :class="colClass">
                    <div class="content">
                        <h2 class="title">Wie ben ik</h2>
                        <p class="tekst">Ik ben Yanick van der Korst, 21 jaar oud en wonende in Sint-Oedenrode. Ik studeer aan de Fontys Hogeschool ICT Media & Design en daarnaast ben ik part time front-end developer bij Digitale Bazen. Voor het afronden van mijn studie ben ik opzoek naar een stage. Benieuwd naar mijn wensen? Klik dan op onderstaande link. </p>
                        <a class="button secondary" href="#">Meer over mij</a>
                    </div>
                </div>

                <div v-if="imagePosition === 'right'" class="offset-lg-1 col-lg-4">
                    <div class="image-container">
                        <img src="@/assets/images/profile.jpg" alt="profile">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

    const props = defineProps<{
    imagePosition?: "left" | "right";
    }>();

    // Bepaal de CSS-klasse afhankelijk van de imagePosition
    const colClass = computed(() => {
    return props.imagePosition === "left" ? "offset-lg-1 col-lg-7" : "col-lg-7";
    });
</script>
