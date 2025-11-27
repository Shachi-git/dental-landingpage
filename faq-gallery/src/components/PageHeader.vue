// eslint-disable-next-line vue/multi-word-component-names
<script setup>
import Locations from './Locations.vue';
</script>

<template>
  <div class="border-b border-gray-200 default-bg-gray">
    <div class="max-w-[1160px] px-6 mx-auto container py-3 flex flex-col sm:flex-row items-center sm:justify-between">

      <!-- Logo (always visible) -->
      <div class="flex justify-center sm:justify-start w-full sm:w-[30%]">
        <img src="/src/assets/images/logo.webp" alt="Dental Implant USA Logo" class="w-[220px] h-auto" />
      </div>

      <!-- Locations (desktop only) -->
      <div class="hidden lg:flex justify-center lg:w-[40%]">
        <Locations />
      </div>

      <!-- Buttons (desktop only) -->
      <div class="hidden sm:flex justify-end w-full lg:w-[30%] gap-4">
        <a href="tel:8774406579" class="application-btn px-4 py-2 text-[16px] font-medium">
          (877) 440-6579
        </a>
        <a href="https://www.dentalimplantsusa.com/consultation/" target="_blank" rel="noopener noreferrer"
          class="application-btn px-4 py-2 text-[16px] font-medium">
          Make An Appointment
        </a>
      </div>

      <!-- Mobile: Call to Schedule bar -->
      <div class="w-full mt-4 sm:hidden">
        <div class="bg-[#0085cc] text-white text-center py-2 rounded-md text-[16px] font-medium">
          <a href="tel:8774406579"> <svg aria-hidden="true" class="inline mr-2 w-4 h-4 fill-white" viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
            </svg>
            Call to Schedule an Appointment</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Tailwind CSS is already imported globally in main.js */
</style>
