<template>
    <div class="text-specifications">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="content">
                        <h2 class="title">{{ title_column_1 }}</h2>
                        <p class="text">{{ text_column_1 }}</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="content">
                        <h2 class="title">{{ title_column_2 }}</h2>
                        <p class="text">{{ text_column_2 }}</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="line"></div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="content">  
                        <h2 class="title">{{ title_column_3 }}</h2>
                        <ul class="list">
                            <li class="list-item" v-for="(item, index) in list_items" :key="index">{{ item }}</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        title_column_1: string;
        title_column_2: string;
        title_column_3: string;
        text_column_1:string;
        text_column_2:string;
        list_items: string[];
    }>();

</script>