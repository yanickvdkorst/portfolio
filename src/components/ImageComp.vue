<template>
    <div :class="`image display-${display}`">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                    <div class="image-container">
                        <img :src="imageUrl" alt="image">
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
    image: Array<{ url: string }>; // Verwacht een array van objecten met een 'url' key
}>();

const baseURL = import.meta.env.VITE_API_URL;

const imageUrl = computed(() => {
    if (props.image.length > 0) {
        return baseURL + props.image[0].url; // Gebruik de eerste afbeelding uit de array
    }
    return ''; // Retourneer een lege string als er geen afbeeldingen zijn
});
</script>