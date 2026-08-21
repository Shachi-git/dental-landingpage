<script setup>
import { computed } from 'vue';

const props = defineProps({
    center: {
        type: Boolean,
        default: false
    }
});

const alignmentClass = computed(() => (props.center ? 'text-center' : 'text-left'));
</script>

<template>
    <h2 :class="['text-gray-600 text-lg md:text-2xl leading-[1.3] md:leading-[1.4]', alignmentClass]">
        <slot></slot>
    </h2>
</template>