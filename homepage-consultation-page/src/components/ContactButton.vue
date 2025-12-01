<script setup>
defineProps({
    href: {
        type: String,
    },
    tel: {
        type: String,
    }
});
</script>

<template>
    <a :href="`tel:${href}`" class="btn-contact">
        {{ tel }}
    </a>
</template>