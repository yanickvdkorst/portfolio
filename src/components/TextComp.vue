<template>
 <div  :class="`text-display display-${display}`">
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
                    <a class="button secondary" href="/work">{{ button }}</a>
                </div>
            </div>
        </div>
    </div>
 </div>
</template>

<script setup lang="ts">
    defineProps<{
        display?: "standard" | "alternative";
        title: string;
        text:string;
        button:string;
    }>();

</script>