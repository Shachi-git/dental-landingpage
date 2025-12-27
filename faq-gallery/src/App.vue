<script setup>
import SectionOne from './components/SectionOne.vue';
import SectionTwo from './components/SectionTwo.vue';
import SectionThree from './components/SectionThree.vue';
import SectionFooter from './components/SectionFooter.vue';
import PageHeader from './components/PageHeader.vue';

</script>

<template>
  <div class="min-h-screen flex flex-col bg-white">
    <PageHeader />
    <div class="md:h-16 h-28"></div>
    <!-- Header and First Section -->
    <SectionOne />
    <!--Before/After Title-->
    <SectionTwo />
    <!-- FAQs -->
    <SectionThree />
    <!-- Footer -->
    <SectionFooter />
  </div>
</template>

<style scoped></style>
