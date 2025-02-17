<template>
    <div :class="`tekst-met-afbeelding image-${imagePosition}`">
        <div class="container">
            <div class="row">
                <div v-if="imagePosition === 'left'" class="col-lg-4">
                    <div class="image-container">
                        <img :src="image" alt="profile">
                    </div>
                </div>


                <div :class="colClass">
                    <div class="content">
                        <h2 class="title">{{ title }}</h2>
                        <p class="tekst">{{ tekst }}</p>
                        <a class="button secondary" href="#">{{ button }}</a>
                    </div>
                </div>

                <div v-if="imagePosition === 'right'" class="offset-lg-1 col-lg-4">
                    <div class="image-container">
                        <img :src="image" alt="profile">
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
    title: string;
    tekst: string;
    button: string;
    image: string;
    }>();

    // Bepaal de CSS-klasse afhankelijk van de imagePosition
    const colClass = computed(() => {
    return props.imagePosition === "left" ? "offset-lg-1 col-lg-7" : "col-lg-7";
    });
</script>
