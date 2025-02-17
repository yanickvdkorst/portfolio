<template>
    <div  :class="`image display-${display}`">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                    <div class="image-container">
                        <img :src="image" alt="image">
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