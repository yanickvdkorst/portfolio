<template>
    <div :class="`usps display-${display}`">
        <div class="container">
            <div class="row">
                <div :class="colClass">
                    <div class="content">
                        <h2 class="title">{{ title }}</h2>
                    </div>
                </div>
                <div :class="uspCol">
                    <div class="usps-container">
                        <div class="usp" v-for="usp in usps" :key="usp.id">
                            <p class="subtitle">{{ usp.title }}</p>
                            <p class="text">{{ usp.description }}</p>
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
    title: string;
    usps: Array<{ id: number; title: string; description: string }>;
}>();

// Bepaal de CSS-klasse afhankelijk van de imagePosition
const colClass = computed(() => {
    return props.display === "alternative" ? "col-lg-12" : "col-lg-5";
});

const uspCol = computed(() => {
    return props.display === "alternative" ? "col-lg-12" : "offset-lg-1 col-lg-6";
});
</script>