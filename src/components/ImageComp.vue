<template>
    <div  :class="`image display-${display}`">
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
        image: { url: string }; // Verwacht een object met een 'url' key
    }>();

    const baseUrl = "http://localhost:1337"; // Je Strapi base URL

    const imageUrl = computed(() => {
        return baseUrl + props.image.url; // Voeg de base URL toe aan de relatieve URL
    });


</script>