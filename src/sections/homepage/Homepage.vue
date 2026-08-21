<script setup>
import SectionOne from '../../components/SectionOne.vue';
import SectionThree from '../../components/SectionThree.vue';
import SectionFooter from '../../components/SectionFooter.vue';
import PageHeader from '../../components/PageHeader.vue';
import SectionTwo from '../../components/SectionTwo.vue';
import SectionFour from '../../components/SectionFour.vue';
import SectionFive from '../../components/SectionFive.vue';
import SectionSix from '../../components/SectionSix.vue';
import SectionSeven from '../../components/SectionSeven.vue';
import SectionNine from '../../components/SectionNine.vue';

</script>

<template>
    <div class="min-h-screen flex flex-col bg-white">
        <PageHeader />
        <!-- Spacer to prevent content from hiding under fixed header -->
        <div class="md:h-16 h-28"></div>
        <!-- Hero Section -->
        <SectionOne />
        <!--TOP DENTAL SECTION-->
        <SectionTwo />
        <!--LOCATIONS, DOCTORS, BEFORE/AFTER, OUR SERVICES-->
        <SectionThree />
        <!--Why Choose Us?-->
        <SectionFour />
        <!-- FAQs -->
        <SectionFive />
        <!--Our Happy Clients-->
        <SectionSix />
        <!--Our Blog-->
        <SectionSeven />
        <!--Schedule Your Appointment-->
        <SectionNine />
        <!-- Footer -->
        <SectionFooter />
    </div>
</template>

<style scoped></style>
