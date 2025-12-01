<script setup>
import { computed } from 'vue'

const props = defineProps({
    currentStep: {
        type: Number,
        required: true
    }
})

// fixed steps array
const steps = [1, 2, 3]

// helper functions for classes
const stepClass = (step) => {
    return [
        'w-5 h-5 flex items-center justify-center border text-xs',
        step <= props.currentStep
            ? 'bg-[#0085cc] text-white border-[#0085cc]'
            : 'bg-white text-foreground border-gray-400'
    ]
}

const lineClass = (step) => {
    return [
        'h-1 w-25 md:w-30 lg:w-40',
        step < props.currentStep ? 'bg-[#0085cc]' : 'bg-gray-400'
    ]
}
</script>

<template>
    <div class="flex items-center justify-center space-x-4 mb-8">
        <template v-for="(step, index) in steps" :key="step">
            <!-- Step circle -->
            <div :class="stepClass(step)">
                {{ step }}
            </div>

            <!-- Line between steps -->
            <div v-if="index < steps.length - 1" :class="lineClass(step)" />
        </template>
    </div>
</template>