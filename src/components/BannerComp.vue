<template>
    <div :class="`banner display-${display}`">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="content">
                        <h1 class="title">{{ title }}<br> <span>{{ span }}</span></h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue';

    withDefaults(defineProps<{
        display?: "standard" | "alternative";
    title: string;
    span: string;
    }>(), {
    display: "standard"
    });
</script>
<style>
  
</style>