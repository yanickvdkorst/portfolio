<template>
    <div :class="`image-galery display-${display}`">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="image-grid">
                        <div class="image-container" v-for="(img, index) in imageUrls" :key="index">
                            <img :src="img.url" :alt="img.alternativeText || 'image'" />
                        </div>
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
    Images: Array<{ Image: { url: string, alternativeText?: string } }>; // Verwacht een array van objecten met een 'Image' key
}>();

const baseURL = import.meta.env.VITE_API_URL;

const imageUrls = computed(() => {
    return props.Images.map(image => ({
        url: baseURL + image.Image.url,
        alternativeText: image.Image.alternativeText
    }));
});

console.log("gevonden afbeeldingen:", imageUrls.value);
</script>

<style scoped>
/* Optionele styling voor je component */
</style>