<template>
    <div class="video">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                    <div class="video-container">
                        <video :src="videoUrl" controls playsinline></video>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
    video: { url: string }; // Dit is een Object, geen Array
}>();


const baseURL = import.meta.env.VITE_API_URL; // Je Strapi base URL

const videoUrl = computed(() => {
    return props.video ? baseURL + props.video.url : '';
});

</script>