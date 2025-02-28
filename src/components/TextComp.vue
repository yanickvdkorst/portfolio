<template>
    <div :class="`text-display display-${display}`">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="content">
                        <h2 class="title">{{ title }}</h2>
                    </div>
                </div>
                <div class="col-lg-5 offset-lg-1">
                    <div class="text-container">
                        <p class="text">{{ text }}</p>
                        <a v-if="button && button.url" class="button secondary" :href="buttonUrl">{{ button.title }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
    display?: "standard" | "alternative";
    title: string;
    text: string;
    button: { title: string; url: string | null }; 
}>();

const webUrl = "http://localhost:3000"; // Je Strapi base URL

const buttonUrl = computed(() => {
    return webUrl + props.button.url; // Voeg de base URL toe aan de relatieve URL
});

</script>