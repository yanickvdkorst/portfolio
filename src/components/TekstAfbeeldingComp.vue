<template>
    <div :class="`tekst-met-afbeelding image-${imagePosition}`">
        <div class="container">
            <div class="row">
                <div v-if="imagePosition === 'left'" class="col-lg-4">
                    <div class="image-container">
                        <!-- Dynamische afbeelding weergeven -->
                        <img :src="imageUrl" alt="profile" />
                    </div>
                </div>

                <div :class="colClass">
                    <div class="content">
                        <h2 class="title">{{ title }}</h2>
                        <p class="tekst">{{ tekst }}</p>
                        <a v-if="button && button.url" class="button secondary" :href="button.url">{{
                            button.title
                        }}</a>
                    </div>
                </div>

                <div v-if="imagePosition === 'right'" class="offset-lg-1 col-lg-4">
                    <div class="image-container">
                        <!-- Dynamische afbeelding weergeven -->
                        <img :src="imageUrl" alt="profile" />
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
    button: { title: string; url: string | null }; // Verwacht een object met 'title' en 'url' keys
    image: { url: string }; // Verwacht een object met een 'url' key
}>();

// Bereken de URL van de afbeelding
const baseUrl = "http://localhost:1337"; // Je Strapi base URL
const webUrl = "http://localhost:3000"; // Je Strapi base URL

const imageUrl = computed(() => {
    return baseUrl + props.image.url; // Voeg de base URL toe aan de relatieve URL
});

const buttonUrl = computed(() => {
    return webUrl + props.button.url; // Voeg de base URL toe aan de relatieve URL
});

// Bepaal de CSS-klasse afhankelijk van de imagePosition
const colClass = computed(() => {
    return props.imagePosition === "left" ? "offset-lg-1 col-lg-7" : "col-lg-7";
});
</script>