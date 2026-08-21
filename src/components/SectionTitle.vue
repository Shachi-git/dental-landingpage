<script setup>
import { computed } from 'vue';

const props = defineProps({
    center: {
        type: Boolean,
        default: false
    }
});

const alignmentClass = computed(() => (props.center ? 'text-center' : 'md:text-start text-center'));
</script>

<template>
    <h1 :class="['blue poppins font-medium text-[30px] md:text-[40px] leading-[1.2]', alignmentClass]">
        <slot></slot>
    </h1>
</template>