<template>
    <div class="banner project-detail">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="image-container">
                        <img :src="project.cover" :alt="project.title" />
                    </div>

                    <div class="content">
                        <h1 class="title">{{ project.title }}</h1>
                        <!-- Loop door de categorieën -->
                        <div class="project-cat">
                            <p class="project-category" v-for="(cat, index) in project.category" :key="index">{{ cat }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    project: {
        title: string;
        category: string[]; // Een array van categorieën
        year: number;
        cover: string;
        slug: string;
    };
}>();
</script>

<style scoped></style>