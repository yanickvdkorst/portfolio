<template>
    <div class="usps" :class="`display-${display}`">
        <div class="container">
            <div class="row">
                <div :class="colClass">
                    <div class="content">
                        <h2 class="title">Welke vaardigheden beheers ik?</h2>
                    </div>
                </div>
                <div :class="uspCol">
                    <div class="usps-container">
                        <div class="usp">
                            <p class="subtitle">Teamspeler</p>
                            <p class="text">Ik pas mij snel aan binnen een team, en vind een persoonlijke band net zo belangrijk als een profesionele band.</p>
                        </div>
                        <div class="usp">
                            <p class="subtitle">Teamspeler</p>
                            <p class="text">Ik pas mij snel aan binnen een team, en vind een persoonlijke band net zo belangrijk als een profesionele band.</p>
                        </div>
                        <div class="usp">
                            <p class="subtitle">Teamspeler</p>
                            <p class="text">Ik pas mij snel aan binnen een team, en vind een persoonlijke band net zo belangrijk als een profesionele band.</p>
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
    }>();

    // Bepaal de CSS-klasse afhankelijk van de imagePosition
    const colClass = computed(() => {
    return props.display === "alternative" ? "col-lg-12" : "col-lg-5";
    });

    const uspCol = computed(() => {
        return props.display === "alternative" ? "col-lg-12" : "offset-lg-1 col-lg-6";
    });
</script>