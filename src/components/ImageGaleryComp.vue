<template>
<div :class="`image-galery display-${display}`">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="image-grid">
                    <div class="image-container"><img :src="image"  alt=""></div>
                    <div class="image-container"><img :src="image"  alt=""></div>
                    <div class="image-container"><img :src="image"  alt=""></div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
    defineProps<{
        display?: "standard" | "alternative";
        image:string;
    }>();

</script>